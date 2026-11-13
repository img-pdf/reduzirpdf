/**
 * ReduzirPDF — Motor de Compressão de PDF no Navegador
 * 
 * Processamento 100% no cliente usando pdf-lib e pdfjs-dist.
 * Nenhum dado é enviado para servidores.
 */

import { PDFDocument } from 'pdf-lib';
import * as pdfjsLib from 'pdfjs-dist';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url';

// Configura o worker do PDF.js de forma estática e local
if (typeof window !== 'undefined' && pdfjsLib.GlobalWorkerOptions) {
  pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;
}

export interface PDFInspectionResult {
  pageCount: number;
  originalSizeBytes: number;
  isEncrypted: boolean;
  firstPageDimensions: {
    width: number;
    height: number;
  };
}

export interface CompressionProgress {
  phase: 'inspecting' | 'lossless' | 'rasterizing' | 'evaluating' | 'completed' | 'failed';
  currentPass: number;
  totalPasses: number;
  currentPage: number;
  totalPages: number;
  percent: number;
  statusText: string;
}

export type ProgressCallback = (progress: CompressionProgress) => void;

export interface CompressionResult {
  success: boolean;
  originalSizeBytes: number;
  compressedSizeBytes: number;
  targetSizeBytes: number;
  reductionPercentage: number;
  method: 'lossless' | 'rasterized';
  pdfBlob: Blob | null;
  downloadUrl: string | null;
  filename: string;
  suggestedPresetBytes?: number;
  message: string;
  textPreserved: boolean;
}

/**
 * Valida a assinatura de bytes do arquivo PDF (%PDF-).
 */
export async function validatePdfSignature(file: File): Promise<boolean> {
  if (!file.name.toLowerCase().endsWith('.pdf') && file.type !== 'application/pdf') {
    return false;
  }
  const slice = file.slice(0, 1024);
  const buffer = await slice.arrayBuffer();
  const bytes = new Uint8Array(buffer);
  const header = String.fromCharCode(...bytes.subarray(0, 8));
  return header.includes('%PDF-');
}

/**
 * Inspeciona o arquivo PDF e obtém dados básicos.
 */
export async function inspectPdf(file: File): Promise<PDFInspectionResult> {
  const isValid = await validatePdfSignature(file);
  if (!isValid) {
    throw new Error('O arquivo selecionado não é um documento PDF válido ou está corrompido.');
  }

  const arrayBuffer = await file.arrayBuffer();

  let isEncrypted = false;
  let pageCount = 0;
  let firstPageDimensions = { width: 595.28, height: 841.89 }; // A4 padrão

  // Teste com pdf-lib
  try {
    const pdfDoc = await PDFDocument.load(arrayBuffer, { ignoreEncryption: false });
    pageCount = pdfDoc.getPageCount();
    if (pageCount > 0) {
      const firstPage = pdfDoc.getPage(0);
      const { width, height } = firstPage.getSize();
      firstPageDimensions = { width, height };
    }
  } catch (err: unknown) {
    const errMessage = (err as Error)?.message || '';
    if (errMessage.toLowerCase().includes('encrypted') || errMessage.toLowerCase().includes('password')) {
      isEncrypted = true;
      throw new Error('Este arquivo PDF está protegido por senha ou criptografia. Remova a proteção antes de comprimir.');
    }
  }

  // Complemento com PDF.js para contagem garantida
  if (pageCount === 0) {
    try {
      const loadingTask = pdfjsLib.getDocument({ data: new Uint8Array(arrayBuffer) });
      const pdf = await loadingTask.promise;
      pageCount = pdf.numPages;
      const page1 = await pdf.getPage(1);
      const viewport = page1.getViewport({ scale: 1.0 });
      firstPageDimensions = { width: viewport.width, height: viewport.height };
    } catch (err: unknown) {
      const msg = (err as Error)?.message || '';
      if (msg.toLowerCase().includes('password')) {
        throw new Error('Este arquivo PDF está protegido por senha. Remova a senha para prosseguir.');
      }
      throw new Error('Não foi possível ler as páginas do PDF. O arquivo pode estar danificado.');
    }
  }

  return {
    pageCount,
    originalSizeBytes: file.size,
    isEncrypted,
    firstPageDimensions,
  };
}

/**
 * Tenta otimização estrutural sem perdas usando pdf-lib.
 * Remove metadados desnecessários e recompacta fluxos de objetos.
 */
async function tryLosslessCompression(
  arrayBuffer: ArrayBuffer
): Promise<Uint8Array | null> {
  try {
    const pdfDoc = await PDFDocument.load(arrayBuffer, { ignoreEncryption: true });
    
    // Limpa metadados redundantes
    pdfDoc.setTitle('');
    pdfDoc.setAuthor('');
    pdfDoc.setSubject('');
    pdfDoc.setKeywords([]);
    pdfDoc.setProducer('ReduzirPDF (navegador)');
    pdfDoc.setCreator('ReduzirPDF');
    
    const optimizedBytes = await pdfDoc.save({
      useObjectStreams: true,
      addDefaultPage: false,
    });
    
    return optimizedBytes;
  } catch {
    return null;
  }
}

interface CompressionProfile {
  name: string;
  maxDimension: number;
  quality: number;
}

const PROFILES: CompressionProfile[] = [
  { name: 'Alta Qualidade', maxDimension: 1600, quality: 0.80 },
  { name: 'Equilibrada', maxDimension: 1300, quality: 0.65 },
  { name: 'Média Compressão', maxDimension: 1050, quality: 0.50 },
  { name: 'Forte Compressão', maxDimension: 850, quality: 0.38 },
  { name: 'Máxima Compactação', maxDimension: 700, quality: 0.28 },
];

/**
 * Renderiza uma página do PDF para canvas e extrai JPEG comprimido.
 */
async function renderPageToJpeg(
  pdfPage: pdfjsLib.PDFPageProxy,
  profile: CompressionProfile
): Promise<Uint8Array> {
  const unscaledViewport = pdfPage.getViewport({ scale: 1.0 });
  const maxDim = Math.max(unscaledViewport.width, unscaledViewport.height);
  
  // Limita escala para não exceder a dimensão máxima do perfil nem aumentar a resolução original
  const scale = Math.min(1.0, profile.maxDimension / maxDim);
  const viewport = pdfPage.getViewport({ scale: Math.max(0.4, scale) });

  const canvas = document.createElement('canvas');
  canvas.width = Math.floor(viewport.width);
  canvas.height = Math.floor(viewport.height);

  const ctx = canvas.getContext('2d', { alpha: false, willReadFrequently: false });
  if (!ctx) {
    throw new Error('Falha ao inicializar o contexto gráfico 2D.');
  }

  // Preenche fundo branco garantido
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const renderContext = {
    canvasContext: ctx,
    viewport: viewport,
    canvas: canvas,
  };

  await pdfPage.render(renderContext).promise;

  return new Promise<Uint8Array>((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(new Error('Erro ao codificar imagem JPEG da página.'));
          return;
        }
        blob.arrayBuffer().then((buf) => {
          resolve(new Uint8Array(buf));
        }).catch(reject);
      },
      'image/jpeg',
      profile.quality
    );
  });
}

/**
 * Executa a compressão completa com base no tamanho alvo em bytes.
 */
export async function compressPdf(
  file: File,
  targetSizeBytes: number,
  onProgress?: ProgressCallback,
  abortSignal?: AbortSignal
): Promise<CompressionResult> {
  const originalSizeBytes = file.size;

  if (targetSizeBytes >= originalSizeBytes) {
    return {
      success: true,
      originalSizeBytes,
      compressedSizeBytes: originalSizeBytes,
      targetSizeBytes,
      reductionPercentage: 0,
      method: 'lossless',
      pdfBlob: file,
      downloadUrl: URL.createObjectURL(file),
      filename: file.name,
      message: 'O PDF original já é menor ou igual ao tamanho solicitado.',
      textPreserved: true,
    };
  }

  const arrayBuffer = await file.arrayBuffer();

  onProgress?.({
    phase: 'inspecting',
    currentPass: 1,
    totalPasses: PROFILES.length + 1,
    currentPage: 0,
    totalPages: 0,
    percent: 5,
    statusText: 'Inspecionando documento...',
  });

  if (abortSignal?.aborted) {
    throw new Error('Operação cancelada pelo usuário.');
  }

  // Etapa 1: Tentar otimização estrutural sem perdas
  onProgress?.({
    phase: 'lossless',
    currentPass: 1,
    totalPasses: PROFILES.length + 1,
    currentPage: 0,
    totalPages: 0,
    percent: 15,
    statusText: 'Verificando otimização sem perdas...',
  });

  const losslessBytes = await tryLosslessCompression(arrayBuffer);
  if (losslessBytes && losslessBytes.byteLength <= targetSizeBytes) {
    const blob = new Blob([losslessBytes.buffer as ArrayBuffer], { type: 'application/pdf' });
    const reduction = ((originalSizeBytes - losslessBytes.byteLength) / originalSizeBytes) * 100;
    return {
      success: true,
      originalSizeBytes,
      compressedSizeBytes: losslessBytes.byteLength,
      targetSizeBytes,
      reductionPercentage: Math.max(0, parseFloat(reduction.toFixed(1))),
      method: 'lossless',
      pdfBlob: blob,
      downloadUrl: URL.createObjectURL(blob),
      filename: file.name.replace(/\.pdf$/i, '_comprimido.pdf'),
      message: 'Otimização estrutural concluída com texto 100% pesquisável preservado.',
      textPreserved: true,
    };
  }

  // Etapa 2: Compressão baseada em renderização de páginas (Rasterização Adaptativa)
  const loadingTask = pdfjsLib.getDocument({ data: new Uint8Array(arrayBuffer) });
  const pdfjsDoc = await loadingTask.promise;
  const totalPages = pdfjsDoc.numPages;

  let bestResultBytes: Uint8Array | null = null;
  let bestSizeBytes = Infinity;
  let completedPassIndex = -1;

  for (let pIdx = 0; pIdx < PROFILES.length; pIdx++) {
    if (abortSignal?.aborted) {
      throw new Error('Operação cancelada pelo usuário.');
    }

    const profile = PROFILES[pIdx];
    const currentPassNum = pIdx + 2;
    const totalPassesNum = PROFILES.length + 1;

    // Criar novo documento PDF para receber as páginas processadas
    const newPdfDoc = await PDFDocument.create();
    newPdfDoc.setProducer('ReduzirPDF (https://reduzirpdf.pages.dev)');
    newPdfDoc.setCreator('ReduzirPDF');

    for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
      if (abortSignal?.aborted) {
        throw new Error('Operação cancelada pelo usuário.');
      }

      const overallProgress = Math.round(
        15 + ((pIdx * totalPages + pageNum) / (PROFILES.length * totalPages)) * 75
      );

      onProgress?.({
        phase: 'rasterizing',
        currentPass: currentPassNum,
        totalPasses: totalPassesNum,
        currentPage: pageNum,
        totalPages,
        percent: Math.min(92, overallProgress),
        statusText: `Processando página ${pageNum} de ${totalPages} (Modo: ${profile.name})...`,
      });

      const pdfPage = await pdfjsDoc.getPage(pageNum);
      const originalViewport = pdfPage.getViewport({ scale: 1.0 });

      // Renderiza JPEG
      const jpegBytes = await renderPageToJpeg(pdfPage, profile);
      const embeddedJpg = await newPdfDoc.embedJpg(jpegBytes);

      // Mantém exatamente as dimensões originais da página do PDF em pontos
      const addedPage = newPdfDoc.addPage([originalViewport.width, originalViewport.height]);
      addedPage.drawImage(embeddedJpg, {
        x: 0,
        y: 0,
        width: originalViewport.width,
        height: originalViewport.height,
      });
    }

    onProgress?.({
      phase: 'evaluating',
      currentPass: currentPassNum,
      totalPasses: totalPassesNum,
      currentPage: totalPages,
      totalPages,
      percent: 94,
      statusText: `Calculando tamanho final (${profile.name})...`,
    });

    const generatedBytes = await newPdfDoc.save({ useObjectStreams: true });
    const currentGeneratedSize = generatedBytes.byteLength;

    if (currentGeneratedSize < bestSizeBytes) {
      bestSizeBytes = currentGeneratedSize;
      bestResultBytes = generatedBytes;
      completedPassIndex = pIdx;
    }

    // Se o tamanho atual já alcançou a meta estrita, paramos imediatamente para preservar a máxima qualidade
    if (currentGeneratedSize <= targetSizeBytes) {
      break;
    }
  }

  onProgress?.({
    phase: 'completed',
    currentPass: PROFILES.length + 1,
    totalPasses: PROFILES.length + 1,
    currentPage: totalPages,
    totalPages,
    percent: 100,
    statusText: 'Processamento concluído!',
  });

  if (!bestResultBytes) {
    throw new Error('Não foi possível gerar o arquivo comprimido.');
  }

  const reduction = ((originalSizeBytes - bestSizeBytes) / originalSizeBytes) * 100;
  const isTargetAchieved = bestSizeBytes <= targetSizeBytes;

  const blob = new Blob([bestResultBytes.buffer as ArrayBuffer], { type: 'application/pdf' });
  const downloadUrl = URL.createObjectURL(blob);

  // Calcula sugestão de preset caso não tenha atingido o alvo estrito
  let suggestedPresetBytes: number | undefined;
  if (!isTargetAchieved) {
    const presets = [100 * 1024, 200 * 1024, 500 * 1024, 1024 * 1024, 2 * 1024 * 1024];
    suggestedPresetBytes = presets.find((p) => p >= bestSizeBytes) || Math.ceil(bestSizeBytes / 1024) * 1024;
  }

  return {
    success: isTargetAchieved,
    originalSizeBytes,
    compressedSizeBytes: bestSizeBytes,
    targetSizeBytes,
    reductionPercentage: Math.max(0, parseFloat(reduction.toFixed(1))),
    method: 'rasterized',
    pdfBlob: blob,
    downloadUrl,
    filename: file.name.replace(/\.pdf$/i, '_comprimido.pdf'),
    suggestedPresetBytes,
    message: isTargetAchieved
      ? 'PDF comprimido com sucesso dentro do tamanho desejado!'
      : 'Não foi possível atingir o tamanho desejado sem comprometer excessivamente a qualidade.',
    textPreserved: false,
  };
}

/**
 * Formata bytes em representações amigáveis no padrão brasileiro (1 KB = 1024 bytes).
 */
export function formatBytes(bytes: number, decimals: number = 1): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['B', 'KB', 'MB', 'GB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const value = (bytes / Math.pow(k, i)).toFixed(dm).replace('.', ',');
  return `${value} ${sizes[i]}`;
}
