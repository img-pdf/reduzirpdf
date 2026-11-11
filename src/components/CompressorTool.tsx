import React, { useState, useRef, useEffect } from 'react';
import {
  UploadCloud,
  FileText,
  X,
  CheckCircle2,
  AlertTriangle,
  Download,
  RotateCcw,
  SlidersHorizontal,
  Layers,
  HardDrive,
  Info,
  Loader2,
  FileWarning
} from 'lucide-react';
import {
  inspectPdf,
  compressPdf,
  formatBytes,
  PDFInspectionResult,
  CompressionProgress,
  CompressionResult
} from '../services/pdfCompressor';

interface CompressorToolProps {
  initialTargetBytes: number;
  onTargetChange?: (targetBytes: number) => void;
}

const PRESET_OPTIONS = [
  { label: '100 KB', bytes: 100 * 1024, description: 'Muito leve' },
  { label: '200 KB', bytes: 200 * 1024, description: 'Concursos / Portais' },
  { label: '500 KB', bytes: 500 * 1024, description: 'Equilíbrio ideal' },
  { label: '1 MB', bytes: 1024 * 1024, description: 'Padrão web' },
  { label: '2 MB', bytes: 2 * 1024 * 1024, description: 'E-mails / Anexos' },
];

export const CompressorTool: React.FC<CompressorToolProps> = ({
  initialTargetBytes,
  onTargetChange,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [pdfInfo, setPdfInfo] = useState<PDFInspectionResult | null>(null);
  const [inspecting, setInspecting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Target size state
  const [selectedPreset, setSelectedPreset] = useState<number | 'custom'>(initialTargetBytes);
  const [customValue, setCustomValue] = useState<string>('300');
  const [customUnit, setCustomUnit] = useState<'KB' | 'MB'>('KB');

  // Compression state
  const [isCompressing, setIsCompressing] = useState(false);
  const [progress, setProgress] = useState<CompressionProgress | null>(null);
  const [result, setResult] = useState<CompressionResult | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  // Sync preset if prop changes
  useEffect(() => {
    const isPreset = PRESET_OPTIONS.some((p) => p.bytes === initialTargetBytes);
    if (isPreset) {
      setSelectedPreset(initialTargetBytes);
    } else {
      setSelectedPreset('custom');
      if (initialTargetBytes >= 1024 * 1024) {
        setCustomValue((initialTargetBytes / (1024 * 1024)).toString());
        setCustomUnit('MB');
      } else {
        setCustomValue(Math.round(initialTargetBytes / 1024).toString());
        setCustomUnit('KB');
      }
    }
  }, [initialTargetBytes]);

  // Calcula o target em bytes com base na seleção
  const getComputedTargetBytes = (): number => {
    if (selectedPreset !== 'custom') {
      return selectedPreset;
    }
    const val = parseFloat(customValue.replace(',', '.'));
    if (isNaN(val) || val <= 0) return 500 * 1024;
    return Math.round(customUnit === 'MB' ? val * 1024 * 1024 : val * 1024);
  };

  const computedTargetBytes = getComputedTargetBytes();

  // Tratamento de arquivo
  const handleFileSelection = async (file: File) => {
    setErrorMessage(null);
    setResult(null);
    setProgress(null);

    if (!file.name.toLowerCase().endsWith('.pdf') && file.type !== 'application/pdf') {
      setErrorMessage('Por favor, selecione apenas arquivos com formato .PDF.');
      return;
    }

    if (file.size > 200 * 1024 * 1024) {
      setErrorMessage('O arquivo selecionado é excessivamente grande (acima de 200 MB). Selecione um arquivo menor para processamento no navegador.');
      return;
    }

    setSelectedFile(file);
    setInspecting(true);

    try {
      const info = await inspectPdf(file);
      setPdfInfo(info);
    } catch (err: unknown) {
      const msg = (err as Error)?.message || 'Erro ao inspecionar o arquivo PDF.';
      setErrorMessage(msg);
      setSelectedFile(null);
      setPdfInfo(null);
    } finally {
      setInspecting(false);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileSelection(e.dataTransfer.files[0]);
    }
  };

  const handleReset = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    setSelectedFile(null);
    setPdfInfo(null);
    setErrorMessage(null);
    setProgress(null);
    if (result?.downloadUrl) {
      URL.revokeObjectURL(result.downloadUrl);
    }
    setResult(null);
    setIsCompressing(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleCancel = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    setIsCompressing(false);
    setProgress(null);
    setErrorMessage('Compressão cancelada pelo usuário.');
  };

  const handleStartCompression = async () => {
    if (!selectedFile) return;

    setErrorMessage(null);
    setIsCompressing(true);
    setProgress(null);

    const controller = new AbortController();
    abortControllerRef.current = controller;

    try {
      const res = await compressPdf(
        selectedFile,
        computedTargetBytes,
        (p) => setProgress(p),
        controller.signal
      );
      setResult(res);
    } catch (err: unknown) {
      const msg = (err as Error)?.message || 'Erro ao comprimir o documento.';
      setErrorMessage(msg);
    } finally {
      setIsCompressing(false);
    }
  };

  return (
    <div id="upload-area" className="w-full max-w-4xl mx-auto">
      {/* Card Principal da Ferramenta */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 sm:p-8">
        {!selectedFile ? (
          /* Estado 1: Upload Drag & Drop */
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`cursor-pointer border-2 border-dashed rounded-xl p-8 sm:p-12 text-center transition-all ${
              isDragOver
                ? 'border-blue-600 bg-blue-50/70 scale-[0.99]'
                : 'border-slate-300 hover:border-blue-500 hover:bg-slate-50/80'
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,application/pdf"
              className="hidden"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  handleFileSelection(e.target.files[0]);
                }
              }}
            />

            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-inner">
              <UploadCloud className="w-8 h-8" />
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
              Arraste seu PDF aqui ou clique para selecionar
            </h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto mb-4">
              Selecione um arquivo PDF do seu dispositivo. O processamento é realizado no seu navegador.
            </p>

            <button
              type="button"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-sm"
            >
              <FileText className="w-4 h-4" />
              Procurar arquivo PDF
            </button>

            <div className="mt-6 flex items-center justify-center gap-4 text-xs text-slate-400">
              <span>Formato aceito: .pdf</span>
              <span aria-hidden="true">·</span>
              <span>100% privado e local</span>
              <span aria-hidden="true">·</span>
              <span>Sem limite diário</span>
            </div>
          </div>
        ) : (
          /* Estado 2: Arquivo Selecionado e Configuração */
          <div className="space-y-6">
            {/* Informações do Arquivo Carregado */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-blue-100/80 text-blue-700 flex items-center justify-center shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-slate-900 truncate" title={selectedFile.name}>
                    {selectedFile.name}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                    <span className="font-mono tabular-nums font-medium text-slate-700">
                      {formatBytes(selectedFile.size)}
                    </span>
                    <span aria-hidden="true">·</span>
                    {inspecting ? (
                      <span className="inline-flex items-center gap-1 text-blue-600">
                        <Loader2 className="w-3 h-3 animate-spin" /> Inspecionando páginas...
                      </span>
                    ) : pdfInfo ? (
                      <span className="font-medium text-slate-600">
                        {pdfInfo.pageCount} {pdfInfo.pageCount === 1 ? 'página' : 'páginas'}
                      </span>
                    ) : null}
                  </div>
                </div>
              </div>

              {!isCompressing && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="self-end sm:self-center inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  title="Trocar arquivo PDF"
                >
                  <X className="w-4 h-4" />
                  Remover
                </button>
              )}
            </div>

            {/* Seletor de Tamanho Alvo */}
            {!result && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <SlidersHorizontal className="w-4 h-4 text-blue-600" />
                    Qual tamanho você precisa?
                  </label>
                  <span className="text-xs text-slate-500 font-mono tabular-nums">
                    Limite máximo: <strong className="text-blue-700 font-bold">{formatBytes(computedTargetBytes)}</strong>
                  </span>
                </div>

                {/* Grid de Presets */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
                  {PRESET_OPTIONS.map((preset) => {
                    const isSelected = selectedPreset === preset.bytes;
                    return (
                      <button
                        key={preset.label}
                        type="button"
                        disabled={isCompressing}
                        onClick={() => {
                          setSelectedPreset(preset.bytes);
                          onTargetChange?.(preset.bytes);
                        }}
                        className={`p-3 rounded-xl border text-center transition-all ${
                          isSelected
                            ? 'border-blue-600 bg-blue-50/70 text-blue-900 ring-2 ring-blue-600/20 shadow-sm'
                            : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700'
                        } ${isCompressing ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        <div className="font-bold text-sm tracking-tight">{preset.label}</div>
                        <div className="text-[11px] text-slate-500 mt-0.5 truncate">{preset.description}</div>
                      </button>
                    );
                  })}

                  {/* Botão Personalizado */}
                  <button
                    type="button"
                    disabled={isCompressing}
                    onClick={() => setSelectedPreset('custom')}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      selectedPreset === 'custom'
                        ? 'border-blue-600 bg-blue-50/70 text-blue-900 ring-2 ring-blue-600/20 shadow-sm'
                        : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700'
                    } ${isCompressing ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <div className="font-bold text-sm tracking-tight">Personalizado</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Definir valor</div>
                  </button>
                </div>

                {/* Campo Personalizado Expandido */}
                {selectedPreset === 'custom' && (
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center gap-3">
                    <span className="text-xs font-semibold text-slate-700 whitespace-nowrap">
                      Informe o tamanho máximo:
                    </span>
                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <input
                        type="number"
                        min="10"
                        max="10000"
                        value={customValue}
                        onChange={(e) => setCustomValue(e.target.value)}
                        disabled={isCompressing}
                        className="w-28 px-3 py-1.5 text-sm font-mono border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Ex: 300"
                      />
                      <div className="flex rounded-lg border border-slate-300 bg-white p-0.5 text-xs font-semibold">
                        <button
                          type="button"
                          onClick={() => setCustomUnit('KB')}
                          className={`px-3 py-1 rounded-md transition-colors ${
                            customUnit === 'KB' ? 'bg-blue-600 text-white' : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          KB
                        </button>
                        <button
                          type="button"
                          onClick={() => setCustomUnit('MB')}
                          className={`px-3 py-1 rounded-md transition-colors ${
                            customUnit === 'MB' ? 'bg-blue-600 text-white' : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          MB
                        </button>
                      </div>
                    </div>
                    <span className="text-xs text-slate-500">
                      (= {formatBytes(computedTargetBytes)})
                    </span>
                  </div>
                )}
              </div>
            )}

            {/* Aviso de tamanho original já menor que o alvo */}
            {selectedFile && !result && !isCompressing && selectedFile.size <= computedTargetBytes && (
              <div className="p-3.5 rounded-xl bg-blue-50/80 border border-blue-200 text-blue-900 text-xs flex items-center gap-2.5">
                <Info className="w-4 h-4 text-blue-600 shrink-0" />
                <span>
                  O arquivo já tem <strong>{formatBytes(selectedFile.size)}</strong>, o que já é menor que o limite de <strong>{formatBytes(computedTargetBytes)}</strong>. Você ainda pode comprimir se desejar torná-lo ainda mais leve escolhendo um alvo menor.
                </span>
              </div>
            )}

            {/* Barra de Progresso durante a compressão */}
            {isCompressing && progress && (
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
                    {progress.statusText}
                  </span>
                  <span className="font-mono tabular-nums text-blue-700">{progress.percent}%</span>
                </div>

                <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 transition-all duration-200 ease-out rounded-full"
                    style={{ width: `${progress.percent}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                  <span>Passo {progress.currentPass} de {progress.totalPasses}</span>
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="text-red-600 hover:text-red-700 font-semibold hover:underline"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            )}

            {/* Tela de Resultado da Compressão */}
            {result && (
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-6 animate-fade-in">
                {/* Cabeçalho do Resultado */}
                <div className="flex items-center gap-3">
                  {result.success ? (
                    <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                      <AlertTriangle className="w-6 h-6" />
                    </div>
                  )}
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">
                      {result.success ? 'Seu PDF foi comprimido com sucesso!' : 'Resultado da Compressão'}
                    </h4>
                    <p className="text-xs text-slate-600">{result.message}</p>
                  </div>
                </div>

                {/* Métricas Reais: Antes / Depois / Redução */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 text-center">
                    <span className="text-xs text-slate-500 uppercase tracking-wider font-medium">Antes</span>
                    <div className="text-lg font-bold font-mono tabular-nums text-slate-800 mt-1">
                      {formatBytes(result.originalSizeBytes)}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-blue-200 text-center ring-1 ring-blue-500/10">
                    <span className="text-xs text-blue-600 uppercase tracking-wider font-semibold">Depois</span>
                    <div className="text-xl font-bold font-mono tabular-nums text-blue-600 mt-1">
                      {formatBytes(result.compressedSizeBytes)}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 text-center">
                    <span className="text-xs text-slate-500 uppercase tracking-wider font-medium">Redução</span>
                    <div className="text-lg font-bold font-mono tabular-nums text-emerald-600 mt-1">
                      {result.reductionPercentage > 0 ? `-${result.reductionPercentage}%` : '0%'}
                    </div>
                  </div>
                </div>

                {/* Informação sobre Método e Texto */}
                <div className="text-xs text-slate-600 bg-white p-3.5 rounded-lg border border-slate-200 flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    {result.method === 'lossless' ? (
                      <p>
                        <strong>Método sem perdas:</strong> Otimização estrutural de objetos e metadados. O texto original permanece 100% selecionável e pesquisável.
                      </p>
                    ) : (
                      <p>
                        <strong>Método de renderização adaptativa:</strong> As páginas foram processadas em alta fidelidade para atingir o limite estrito. Formulários interativos e camada de texto pesquisável foram incorporados como páginas visuais otimizadas.
                      </p>
                    )}
                  </div>
                </div>

                {/* Sugestão de tamanho caso não tenha atingido */}
                {!result.success && result.suggestedPresetBytes && (
                  <div className="p-3.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <FileWarning className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>
                        Sugerimos tentar o tamanho de <strong>{formatBytes(result.suggestedPresetBytes)}</strong> para manter legibilidade ideal.
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedPreset(result.suggestedPresetBytes!);
                        setResult(null);
                      }}
                      className="px-3 py-1 bg-amber-600 text-white font-semibold rounded-md hover:bg-amber-700 whitespace-nowrap"
                    >
                      Usar {formatBytes(result.suggestedPresetBytes)}
                    </button>
                  </div>
                )}

                {/* Botões de Ação */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  {result.downloadUrl && (
                    <a
                      href={result.downloadUrl}
                      download={result.filename}
                      className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-sm text-sm"
                    >
                      <Download className="w-4 h-4" />
                      Baixar PDF comprimido ({formatBytes(result.compressedSizeBytes)})
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={() => setResult(null)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 bg-white border border-slate-300 text-slate-700 font-semibold rounded-xl hover:bg-slate-100 transition-colors text-sm"
                  >
                    Tentar outro tamanho
                  </button>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 text-slate-500 hover:text-slate-800 transition-colors text-sm font-medium"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Comprimir outro PDF
                  </button>
                </div>
              </div>
            )}

            {/* Mensagem de Erro */}
            {errorMessage && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="font-semibold mb-0.5">Aviso</p>
                  <p>{errorMessage}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setErrorMessage(null)}
                  className="text-red-500 hover:text-red-700"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Botão Primário: Comprimir PDF */}
            {!result && !isCompressing && (
              <div className="pt-2">
                <button
                  type="button"
                  disabled={!selectedFile || inspecting}
                  onClick={handleStartCompression}
                  className="w-full py-3.5 px-6 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-base rounded-xl transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <HardDrive className="w-5 h-5" />
                  Comprimir PDF para {formatBytes(computedTargetBytes)}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
