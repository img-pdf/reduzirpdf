import { PageContent } from '../types';

export const PAGES_DATA: Record<string, PageContent> = {
  '/': {
    path: '/',
    title: 'Compressor de PDF Online Grátis – Reduzir Tamanho de PDF',
    metaDescription: 'Comprima arquivos PDF para 100 KB, 200 KB, 500 KB, 1 MB ou 2 MB online e grátis. Processamento 100% no navegador, rápido e sem enviar seus documentos para servidores.',
    h1: 'Compressor de PDF online grátis',
    heroDescription: 'Reduza o tamanho do seu PDF para a medida exata que você precisa. Escolha entre 100 KB, 200 KB, 500 KB, 1 MB, 2 MB ou informe um valor personalizado.',
    directAnswer: 'Para reduzir o tamanho de um PDF online e grátis com o ReduzirPDF, selecione o arquivo do seu computador ou celular, escolha o tamanho máximo desejado (como 100 KB, 200 KB ou 1 MB) e clique em "Comprimir PDF". O processamento ocorre diretamente no seu navegador em segundos, sem fazer upload do documento para servidores externos e mantendo sua privacidade total.',
    defaultTargetBytes: 1024 * 1024, // 1 MB
    introText: 'Precisa enviar um PDF por e-mail, portal de concurso público ou formulário web, mas o arquivo ultrapassa o limite permitido? O ReduzirPDF foi desenvolvido especificamente para resolver esse problema. Você define o peso máximo em bytes e nosso algoritmo calibra a compressão para que o arquivo caiba na exigência do destinatário sem você precisar instalar programas ou criar contas.',
    breadcrumbs: [
      { name: 'Início', path: '/' },
      { name: 'Compressor de PDF', path: '/' },
    ],
    howCompressionWorks: {
      title: 'Como funciona a compressão de PDF no ReduzirPDF?',
      description: 'Diferente de ferramentas convencionais que enviam seus arquivos para servidores desconhecidos na nuvem, o ReduzirPDF executa todo o processamento localmente através do poder de computação do seu próprio navegador (HTML5 Canvas e WebAssembly com PDF.js e pdf-lib). O motor adota uma abordagem em duas fases:',
      losslessText: '1. Otimização Estrutural Sem Perdas: O sistema analisa a árvore de objetos do PDF, remove metadados redundantes de autoria e recompacta os fluxos de texto com codificação Flate. Se essa etapa já atingir o tamanho solicitado, o arquivo final mantém 100% dos textos selecionáveis e vetores intocados.',
      rasterizedText: '2. Renderização Adaptativa de Imagens: Caso o documento contenha fotografias pesadas ou páginas digitalizadas que excedam o alvo, as páginas são renderizadas em alta fidelidade e reamostradas com compressão JPEG balanceada, preservando a proporção geométrica e a legibilidade dos caracteres.',
    },
    howToSteps: [
      {
        step: 1,
        title: 'Selecione ou arraste o seu PDF',
        description: 'Clique na área indicada para abrir o seletor de arquivos do seu celular ou computador, ou simplesmente arraste o documento PDF.',
      },
      {
        step: 2,
        title: 'Escolha o limite de tamanho',
        description: 'Defina a meta exata entre os botões pré-configurados (100 KB, 200 KB, 500 KB, 1 MB, 2 MB) ou informe um valor em KB/MB na opção Personalizado.',
      },
      {
        step: 3,
        title: 'Inicie a compressão no navegador',
        description: 'Clique no botão azul "Comprimir PDF". O processamento inicia imediatamente sem fila de espera e sem tráfego de rede.',
      },
      {
        step: 4,
        title: 'Baixe o PDF comprimido',
        description: 'Assim que a barra de progresso atingir 100%, clique em "Baixar PDF comprimido" para salvar o arquivo otimizado no seu dispositivo.',
      },
      {
        step: 5,
        title: 'Confira o tamanho final gerado',
        description: 'O card de resultados exibirá o comparativo Antes vs. Depois e a porcentagem exata de economia em bytes.',
      },
    ],
    tipsForReducingSize: [
      {
        title: 'Ajuste a resolução do scanner',
        description: 'Ao digitalizar documentos de texto (RG, CNH, diplomas), configure a resolução para 150 ou 200 DPI em escala de cinza. Resoluções de 300 ou 600 DPI criam arquivos gigantes sem benefício perceptível de leitura.',
      },
      {
        title: 'Remova páginas em branco e anexos redundantes',
        description: 'Páginas em branco digitalizadas continuam ocupando bytes no fluxo do PDF. Exclua páginas desnecessárias antes de compactar.',
      },
      {
        title: 'Evite salvar imagem como PDF repetidas vezes',
        description: 'Exportar um PDF como foto e depois reenviar para outro programa de PDF gera metadados duplicados e reduz a nitidez original.',
      },
      {
        title: 'Selecione metas compatíveis com a contagem de páginas',
        description: 'Para documentos de 1 a 3 páginas, a meta de 100 KB ou 200 KB é facilmente atingível. Para relatórios com mais de 20 páginas com ilustrações, metas de 500 KB ou 1 MB garantem excelente legibilidade.',
      },
    ],
    limitations: [
      {
        title: 'PDFs protegidos por senha',
        description: 'Por razões de segurança criptográfica, o navegador não pode ler nem recomprimir PDFs bloqueados com senha. É necessário remover a senha no visualizador de origem antes de efetuar a compressão.',
      },
      {
        title: 'Preservação de texto em metas muito agressivas',
        description: 'Quando a rasterização gráfica é indispensável para forçar um PDF muito pesado a caber em 100 KB ou 200 KB, a camada de texto selecionável é convertida em imagem otimizada de alta fidelidade visual.',
      },
      {
        title: 'Limite físico de compressão de imagens já comprimidas',
        description: 'Se o PDF original for composto exclusivamente por fotos já salvas em JPEG com forte compressão, reduções adicionais podem exigir diminuição da resolução visual.',
      },
    ],
    useCases: [
      {
        title: 'Inscrições em Concursos Públicos e Vestibulares',
        description: 'Bancas organizadoras (Cespe/Cebraspe, FGV, Vunesp, FCC) impõem limites rígidos de 200 KB ou 500 KB por comprovante de escolaridade e identidade.',
      },
      {
        title: 'Portais Governamentais e Serviços Públicos',
        description: 'Sistemas integrados ao portal gov.br, Meu INSS e prefeituras bloqueiam envios acima de limites estipulados para evitar sobrecarga.',
      },
      {
        title: 'Processos Judiciais Eletrônicos (PJe e Tribunais)',
        description: 'Advogados e partes processuais precisam fracionar ou comprimir petições e anexos para respeitar os limites por documento nos tribunais de justiça.',
      },
      {
        title: 'Envio de Currículos e Propostas Comerciais',
        description: 'Garanta que seu currículo ou proposta comercial seja entregue na caixa de entrada do destinatário sem cair em filtros de anexo pesado.',
      },
    ],
    faqs: [
      {
        question: 'Como reduzir o tamanho de um PDF?',
        answer: 'Para reduzir o tamanho de um PDF, selecione o arquivo no ReduzirPDF, escolha a meta de tamanho desejada (como 100 KB, 200 KB, 500 KB ou 1 MB) e clique em "Comprimir PDF". A ferramenta analisa a estrutura do documento e otimiza imagens e metadados diretamente no seu navegador, gerando um novo arquivo leve para download imediato.',
      },
      {
        question: 'Como comprimir PDF online grátis sem limite?',
        answer: 'No ReduzirPDF, o serviço é 100% gratuito e não possui limite diário de documentos. Como o processamento é executado pelo hardware do seu próprio computador ou celular através do navegador, não há custos de servidores na nuvem repassados aos usuários nem exigência de assinaturas pagas.',
      },
      {
        question: 'Como diminuir PDF para 100 KB?',
        answer: 'Clique no botão "100 KB" na área de opções de tamanho antes de iniciar a compressão. Nosso algoritmo recalculará as imagens e a estrutura interna do arquivo para garantir que o resultado final pese no máximo 102.400 bytes (100 × 1024 bytes). Caso o documento seja muito extenso e não consiga atingir 100 KB com boa legibilidade, o sistema informará o menor tamanho seguro possível.',
      },
      {
        question: 'Como diminuir o tamanho de um PDF no celular Android ou iPhone?',
        answer: 'Abra o site ReduzirPDF no navegador do seu smartphone (Google Chrome ou Safari), toque em "Procurar arquivo PDF" para selecionar o documento salvo nos seus arquivos ou no Google Drive, escolha o tamanho desejado e toque em "Comprimir PDF". O download é iniciado diretamente na memória do seu aparelho.',
      },
      {
        question: 'Como compactar PDF sem perder a qualidade do texto?',
        answer: 'O ReduzirPDF tenta inicialmente a otimização estrutural sem perdas (lossless), eliminando dados invisíveis repetidos e recompactando fluxos com o algoritmo Flate. Se o documento couber no limite pretendido apenas com essa etapa, o texto e os traços vetoriais permanecem 100% nítidos e selecionáveis.',
      },
      {
        question: 'Como reduzir PDF para enviar por e-mail ou WhatsApp?',
        answer: 'Geralmente provedores de e-mail limitam anexos entre 10 MB e 25 MB, enquanto o WhatsApp recomenda arquivos de até 16 MB para download rápido em redes móveis. Selecionando as opções de 1 MB ou 2 MB no ReduzirPDF, você garante que qualquer apresentação ou contrato seja transmitido e aberto instantaneamente.',
      },
      {
        question: 'O ReduzirPDF armazena ou visualiza meus documentos?',
        answer: 'Não. Nenhum arquivo PDF enviado ao ReduzirPDF é transmitido para a internet ou para servidores externos. Todo o processo de leitura, renderização em canvas e gravação dos bytes comprimidos acontece na memória temporária do navegador do seu próprio dispositivo, garantindo confidencialidade absoluta para contratos, extratos e documentos pessoais.',
      },
    ],
    relatedPresets: [
      { label: 'Comprimir para 100 KB', path: '/comprimir-pdf-para-100kb', sizeText: '100 KB' },
      { label: 'Comprimir para 200 KB', path: '/comprimir-pdf-para-200kb', sizeText: '200 KB' },
      { label: 'Comprimir para 500 KB', path: '/comprimir-pdf-para-500kb', sizeText: '500 KB' },
      { label: 'Comprimir para 1 MB', path: '/comprimir-pdf-para-1mb-gratis', sizeText: '1 MB' },
      { label: 'Compactar para Enviar', path: '/compactar-pdf-para-enviar', sizeText: 'Envio' },
    ],
  },

  '/comprimir-pdf-para-100kb': {
    path: '/comprimir-pdf-para-100kb',
    title: 'Comprimir PDF para 100 KB Online Grátis – Redutor Leve',
    metaDescription: 'Comprima PDF para 100 KB (102.400 bytes) online e grátis. Ideal para formulários com limites rigorosos, fotos de RG, CPF e CNH. Processamento seguro no navegador.',
    h1: 'Comprimir PDF para 100 KB',
    heroDescription: 'Ajuste seu documento para pesar no máximo 100 KB com total segurança. Perfeito para editais de concursos e portais públicos com limites estritos.',
    directAnswer: 'Para comprimir um PDF para menos de 100 KB, selecione o documento escaneado (recomendado de 1 a 3 páginas), mantenha o botão "100 KB" ativo no ReduzirPDF e clique em "Comprimir PDF". Nosso motor ajusta os fluxos internos e a densidade gráfica para respeitar o teto de 102.400 bytes sem enviar seus dados para servidores.',
    defaultTargetBytes: 100 * 1024,
    introText: 'Muitos portais públicos e sistemas de vestibular impõem a restrição máxima de 100 KB por arquivo anexo. Como câmeras de smartphones geram fotos que ultrapassam facilmente 3 MB a 5 MB, convertê-las em PDF sem compactação resulta em falha de envio. O ReduzirPDF recalibra a resolução para que o documento cumpra rigorosamente a exigência.',
    breadcrumbs: [
      { name: 'Início', path: '/' },
      { name: 'Comprimir para 100 KB', path: '/comprimir-pdf-para-100kb' },
    ],
    howCompressionWorks: {
      title: 'Como o algoritmo atinge o limite estrito de 100 KB?',
      description: '100 KB binários correspondem a exatamente 102.400 bytes. Para atingir essa marca sem corromper o arquivo:',
      losslessText: 'Se o PDF original for composto puramente por texto vetorial digitado (ex.: exportado do Word com 1 página), a recompactação Flate remove metadados e atinge menos de 100 KB preservando os caracteres intactos.',
      rasterizedText: 'Para documentos digitalizados com fotos (como RG e CNH), o sistema converte a página em resolução calibrada para leitura de dados civis (cerca de 150 DPI) e comprime a matriz visual até atingir a margem segura inferior a 100 KB.',
    },
    howToSteps: [
      {
        step: 1,
        title: 'Selecione o PDF leve (1 a 3 páginas)',
        description: 'Arquivos com até 3 páginas são ideais para a marca de 100 KB com nitidez perfeita.',
      },
      {
        step: 2,
        title: 'Confirme o preset de 100 KB',
        description: 'O valor de 100 KB já vem selecionado automaticamente como teto máximo.',
      },
      {
        step: 3,
        title: 'Clique em Comprimir PDF',
        description: 'O algoritmo testa os perfis de qualidade diretamente na memória do seu dispositivo.',
      },
      {
        step: 4,
        title: 'Baixe o documento gerado',
        description: 'Faça o download do PDF pronto para anexar na plataforma de sua preferência.',
      },
      {
        step: 5,
        title: 'Confirme o peso final',
        description: 'O resultado exibirá o peso exato garantido abaixo de 102.400 bytes.',
      },
    ],
    tipsForReducingSize: [
      {
        title: 'Digitalize frente e verso na mesma lauda',
        description: 'Ao enviar RG ou CNH, juntar frente e verso em uma única página facilita atingir 100 KB com nitidez máxima.',
      },
      {
        title: 'Prefira iluminação uniforme sem sombras fortes',
        description: 'Fotos com sombras escuras ou texturas de fundo exigem mais bytes para codificação JPEG. Fundos brancos e claros comprimem melhor.',
      },
      {
        title: 'Recorte bordas inúteis da mesa',
        description: 'Eliminar as bordas ao redor do documento antes de gerar o PDF economiza dados valiosos.',
      },
    ],
    limitations: [
      {
        title: 'Documentos longos com dezenas de fotos',
        description: 'Tentar comprimir um PDF de 20 páginas com fotos para 100 KB distribuiria apenas 5 KB por página, tornando o texto ilegível. Nesses casos, o sistema sugerirá 500 KB ou 1 MB.',
      },
      {
        title: 'Camada de texto pesquisável',
        description: 'Se for necessário rasterizar páginas de fotos para caber em 100 KB, o texto passa a ser representado como imagem nítida otimizada.',
      },
    ],
    useCases: [
      {
        title: 'Fotos de RG, CNH e Certidão de Nascimento',
        description: 'Documentos essenciais de identificação civil que exigem cumprimento de travas de upload em formulários governamentais.',
      },
      {
        title: 'Comprovantes de Residência Recentes',
        description: 'Contas de consumo (energia, água, internet) de página única para anexar em cadastros bancários e matrículas.',
      },
      {
        title: 'Sistemas Antigos de Bancas Organizadoras',
        description: 'Portais de concurso público legados que rejeitam categoricamente qualquer arquivo que ultrapasse 100 KB.',
      },
    ],
    faqs: [
      {
        question: 'É possível comprimir qualquer PDF para 100 KB?',
        answer: 'Documentos de 1 a 3 páginas chegam a 100 KB com facilidade e ótima legibilidade. Documentos com dezenas de páginas ou centenas de imagens não conseguem atingir 100 KB sem perder a nitidez necessária para leitura; nesses casos, o ReduzirPDF interrompe o processo e recomenda o próximo tamanho seguro (como 200 KB ou 500 KB).',
      },
      {
        question: 'Quanto é 100 KB em bytes?',
        answer: 'Pela convenção técnica binária utilizada pelos sistemas operacionais e servidores web, 100 KB equivalem a exatamente 102.400 bytes (100 × 1024). Nosso validador garante que a saída nunca exceda esse teto.',
      },
      {
        question: 'O número do meu RG ou CNH continuará legível com 100 KB?',
        answer: 'Sim! Nosso perfil de compressão prioriza o contraste de caracteres e números tipográficos para que dados civis e assinaturas permaneçam perfeitamente legíveis na verificação humana.',
      },
    ],
    relatedPresets: [
      { label: 'Precisa de mais margem? Tente 200 KB', path: '/comprimir-pdf-para-200kb', sizeText: '200 KB' },
      { label: 'Padrão equilibrado de 500 KB', path: '/comprimir-pdf-para-500kb', sizeText: '500 KB' },
      { label: 'Voltar ao compressor geral', path: '/', sizeText: 'Geral' },
    ],
  },

  '/comprimir-pdf-para-200kb': {
    path: '/comprimir-pdf-para-200kb',
    title: 'Comprimir PDF para 200 KB – Tamanho Exigido em Concursos',
    metaDescription: 'Reduza o tamanho do seu PDF para até 200 KB (204.800 bytes) grátis no navegador. O tamanho ideal para editais do Cebraspe, FGV, Vunesp e Meu INSS.',
    h1: 'Comprimir PDF para 200 KB',
    heroDescription: 'Atinja com precisão o limite de 200 KB exigido pelas principais bancas examinadoras e portais públicos do Brasil.',
    directAnswer: 'Para comprimir um PDF para 200 KB, selecione o arquivo no ReduzirPDF, confirme o botão de 200 KB (204.800 bytes) e clique em "Comprimir PDF". O processamento calibra a compressão na hora no seu navegador para atender a editais de concursos e portais públicos sem comprometer a clareza do documento.',
    defaultTargetBytes: 200 * 1024,
    introText: 'O limite de 200 KB é a especificação mais frequente em editais de concursos públicos federais, estaduais e municipais, além de conselhos de classe (CRM, OAB, CREA, CRC) e plataformas como o Meu INSS. Se o seu arquivo original está em 2 MB ou 5 MB, o ReduzirPDF comprime para o limite exato sem estresse.',
    breadcrumbs: [
      { name: 'Início', path: '/' },
      { name: 'Comprimir para 200 KB', path: '/comprimir-pdf-para-200kb' },
    ],
    howCompressionWorks: {
      title: 'Equilíbrio ideal entre peso e legibilidade em 200 KB',
      description: 'Com 200 KB (204.800 bytes), é possível acomodar com excelente nitidez documentos de 1 a 6 páginas:',
      losslessText: 'Otimização dos cabeçalhos internos e fontes embutidas para documentos de texto gerados no computador.',
      rasterizedText: 'Calibração da densidade de pontos das imagens escaneadas com algoritmo JPEG progressivo, assegurando traços claros de carimbos, selos e assinaturas.',
    },
    howToSteps: [
      {
        step: 1,
        title: 'Faça o upload do documento',
        description: 'Selecione o PDF digitalizado do seu computador ou celular.',
      },
      {
        step: 2,
        title: 'Meta de 200 KB ativa',
        description: 'O valor de 200 KB está pré-selecionado como limite máximo estrito.',
      },
      {
        step: 3,
        title: 'Processe o documento',
        description: 'Acompanhe a barra de progresso em tempo real durante a otimização.',
      },
      {
        step: 4,
        title: 'Baixe o PDF compacto',
        description: 'O arquivo compactado é gravado diretamente na sua pasta de downloads.',
      },
      {
        step: 5,
        title: 'Anexe no formulário de destino',
        description: 'Envie com a certeza de que o sistema de inscrição aceitará o anexo de primeira.',
      },
    ],
    tipsForReducingSize: [
      {
        title: 'Prefira PDF em escala de cinza',
        description: 'Documentos sem elementos coloridos essenciais reduzem até 40% do tamanho sem perda de nitidez quando salvos em escala de cinza.',
      },
      {
        title: 'Evite resoluções maiores que 200 DPI',
        description: 'Para formulários com limite de 200 KB, 150 a 200 DPI é a faixa padrão recomendada por órgãos técnicos.',
      },
    ],
    limitations: [
      {
        title: 'Documentos muito volumosos',
        description: 'Contratos ou relatórios com mais de 10 páginas com ilustrações podem necessitar da opção de 500 KB para manter texto confortável para leitura.',
      },
    ],
    useCases: [
      {
        title: 'Inscrições em Concursos Públicos',
        description: 'Envio de laudos médicos, declarações de hipossuficiência e certificados de pós-graduação.',
      },
      {
        title: 'Solicitações no Meu INSS e Gov.br',
        description: 'Comprovação de tempo de contribuição, carteira de trabalho e requerimentos de benefícios.',
      },
      {
        title: 'Matrículas em Universidades Federais (SiSU e Prouni)',
        description: 'Envio de documentação socioeconômica e comprovantes de renda familiar com limite por anexo.',
      },
    ],
    faqs: [
      {
        question: 'Por que bancas de concurso exigem PDFs com no máximo 200 KB?',
        answer: 'Servidores públicos recebem centenas de milhares de inscrições simultâneas em períodos de edital. Fixar o limite em 200 KB por arquivo evita quedas de sistema por sobrecarga de rede e otimiza o armazenamento dos bancos de dados governamentais.',
      },
      {
        question: 'Como comprimir um PDF de 10 MB para 200 KB?',
        answer: 'Basta carregar o arquivo no ReduzirPDF. Nosso motor analisa se o peso excessivo provém de fotos em altíssima resolução e recalcula as dimensões em pixels para a proporção exata necessária para atingir os 200 KB.',
      },
    ],
    relatedPresets: [
      { label: 'Precisa de 100 KB?', path: '/comprimir-pdf-para-100kb', sizeText: '100 KB' },
      { label: 'Tentar 500 KB', path: '/comprimir-pdf-para-500kb', sizeText: '500 KB' },
      { label: 'Comprimir para 1 MB', path: '/comprimir-pdf-para-1mb-gratis', sizeText: '1 MB' },
    ],
  },

  '/comprimir-pdf-para-500kb': {
    path: '/comprimir-pdf-para-500kb',
    title: 'Comprimir PDF para 500 KB – Equilíbrio Perfeito de Qualidade',
    metaDescription: 'Reduza o tamanho do seu PDF para até 500 KB (512.000 bytes) sem perder nitidez. Ideal para currículos, petições jurídicas e contratos com várias páginas.',
    h1: 'Comprimir PDF para 500 KB',
    heroDescription: 'Comprima seu documento para menos de 500 KB mantendo alto padrão de legibilidade para telas e impressões.',
    directAnswer: 'Para diminuir um PDF para 500 KB, selecione o documento no ReduzirPDF, escolha a opção "500 KB" (512.000 bytes) e clique em "Comprimir PDF". Essa faixa oferece o equilíbrio perfeito entre tamanho reduzido e nitidez de fotografias, tabelas e gráficos em documentos de várias páginas.',
    defaultTargetBytes: 500 * 1024,
    introText: 'A faixa de 500 KB é considerada o ponto de equilíbrio ideal no ecossistema digital. Garante espaço suficiente para documentos de 5 a 15 páginas manterem fontes nítidas, tabelas claras e fotos com excelente definição visual, ao mesmo tempo em que trafega instantaneamente em redes móveis 4G e 5G.',
    breadcrumbs: [
      { name: 'Início', path: '/' },
      { name: 'Comprimir para 500 KB', path: '/comprimir-pdf-para-500kb' },
    ],
    howCompressionWorks: {
      title: 'Como 500 KB preserva a alta fidelidade visual',
      description: 'Com 512.000 bytes disponíveis:',
      losslessText: 'Documentos textuais com gráficos vetoriais mantêm curvas e tipografia vetoriais intactas.',
      rasterizedText: 'Imagens contidas em relatórios e contratos escaneados são preservadas com resolução superior a 200 DPI e fator de qualidade balanceado.',
    },
    howToSteps: [
      {
        step: 1,
        title: 'Selecione o documento completo',
        description: 'Carregue relatórios, currículos ou peças jurídicas de qualquer tamanho inicial.',
      },
      {
        step: 2,
        title: 'Confirme o preset de 500 KB',
        description: 'O valor de 500 KB está ativo como teto máximo.',
      },
      {
        step: 3,
        title: 'Execute a compressão',
        description: 'O navegador processa as páginas sequencialmente com proteção de memória.',
      },
      {
        step: 4,
        title: 'Baixe o PDF final',
        description: 'Arquivo otimizado disponível instantaneamente no seu computador ou celular.',
      },
      {
        step: 5,
        title: 'Verifique o comparativo de redução',
        description: 'Confira na tela a porcentagem exata de economia de dados alcançada.',
      },
    ],
    tipsForReducingSize: [
      {
        title: 'Exporte do editor com compressão de imagens ativada',
        description: 'Se estiver gerando o documento no Word, Canva ou Google Docs, evite exportar na configuração de "impressão gráfica de alta qualidade" se o destino for puramente digital.',
      },
      {
        title: 'Utilize fontes do sistema',
        description: 'Fontes padrão (Arial, Times New Roman, Roboto) não exigem empacotamento completo de tipografias pesadas.',
      },
    ],
    limitations: [
      {
        title: 'Revistas de alta tiragem com centenas de páginas',
        description: 'Catálogos pesados com mais de 50 páginas de fotos requerem a opção de 1 MB ou 2 MB para evitar compressão agressiva.',
      },
    ],
    useCases: [
      {
        title: 'Currículos Profissionais com Portfólio',
        description: 'Envie seu currículo sem receio de ultrapassar limites de sistemas ATS de recrutamento (Gupy, Kenoby, LinkedIn).',
      },
      {
        title: 'Petições Judiciais e Procurações (PJe)',
        description: 'Atende às diretrizes de tamanho por peça exigidas pelos sistemas dos Tribunais de Justiça Estaduais e Regionais Federais.',
      },
      {
        title: 'Contratos de Locação e Prestação de Serviços',
        description: 'Documentos com múltiplas laudas e assinaturas escaneadas prontos para circular com leveza por e-mail.',
      },
    ],
    faqs: [
      {
        question: '500 KB é suficiente para manter a qualidade de fotos no PDF?',
        answer: 'Sim! Na grande maioria dos documentos comerciais e acadêmicos, 500 KB acomoda imagens perfeitamente nítidas para visualização em qualquer monitor ou tela de smartphone.',
      },
      {
        question: 'Quantas páginas cabem confortavelmente em 500 KB?',
        answer: 'Documentos baseados predominantemente em texto e tabelas podem ter mais de 30 páginas em 500 KB. Documentos escaneados com fotografias suportam com ótima clareza entre 5 e 12 páginas.',
      },
    ],
    relatedPresets: [
      { label: 'Comprimir para 200 KB', path: '/comprimir-pdf-para-200kb', sizeText: '200 KB' },
      { label: 'Comprimir para 1 MB', path: '/comprimir-pdf-para-1mb-gratis', sizeText: '1 MB' },
      { label: 'Compactar para Enviar', path: '/compactar-pdf-para-enviar', sizeText: 'Envio' },
    ],
  },

  '/comprimir-pdf-para-1mb-gratis': {
    path: '/comprimir-pdf-para-1mb-gratis',
    title: 'Comprimir PDF para 1 MB Grátis – Redutor Online de PDF',
    metaDescription: 'Comprima PDF para 1 MB (1.048.576 bytes) grátis e rápido. Perfeito para monografias, TCC, apresentações e relatórios corporativos volumosos.',
    h1: 'Comprimir PDF para 1 MB grátis',
    heroDescription: 'Reduza apresentações, trabalhos acadêmicos e relatórios para no máximo 1 MB com altíssima fidelidade gráfica.',
    directAnswer: 'Para comprimir um PDF para 1 MB grátis, faça o upload do arquivo pesado no ReduzirPDF, selecione o preset de "1 MB" (1.048.576 bytes) e clique em "Comprimir PDF". O processamento direto no seu navegador reduz apresentações e relatórios volumosos para menos de 1 MB mantendo imagens e tabelas nítidas.',
    defaultTargetBytes: 1024 * 1024,
    introText: 'Portais acadêmicos (Moodle, plataformas de entrega de TCC), e-mails corporativos e sistemas de envio de propostas comerciais frequentemente estipulam o teto em 1 MB. Se você exportou um documento do Word, PowerPoint, Canva ou Photoshop com 10 MB ou 20 MB, reduza para 1 MB em poucos segundos sem cadastros.',
    breadcrumbs: [
      { name: 'Início', path: '/' },
      { name: 'Comprimir para 1 MB', path: '/comprimir-pdf-para-1mb-gratis' },
    ],
    howCompressionWorks: {
      title: 'Alta densidade de dados e resolução gráfica em 1 MB',
      description: '1 MB (1.048.576 bytes) oferece espaço generoso para preservar detalhes visuais minuciosos:',
      losslessText: 'Reorganização estrutural de fluxos de dados e eliminação de metadados invisíveis acumulados em editores gráficos.',
      rasterizedText: 'Redução inteligente de fotos de alta resolução (como fotos de câmeras de 48 MP) para o tamanho ideal de tela sem granulação visível.',
    },
    howToSteps: [
      {
        step: 1,
        title: 'Selecione o arquivo volumoso',
        description: 'Carregue apresentações de slides, monografias ou relatórios financeiros.',
      },
      {
        step: 2,
        title: 'Alvo de 1 MB selecionado',
        description: 'Garante que a saída fique rigorosamente abaixo de 1.048.576 bytes.',
      },
      {
        step: 3,
        title: 'Processe com um clique',
        description: 'Inicie a otimização com total privacidade no seu navegador.',
      },
      {
        step: 4,
        title: 'Baixe o PDF leve',
        description: 'Arquivo pronto para ser submetido ou encaminhado imediatamente.',
      },
      {
        step: 5,
        title: 'Envie sem rejeições',
        description: 'Entregue o documento com conformidade técnica garantida.',
      },
    ],
    tipsForReducingSize: [
      {
        title: 'Redimensione imagens antes de colar nos slides',
        description: 'Inserir fotos de 5000px em slides para depois redimensionar para um canto da tela mantém a foto original embutida no arquivo. Redimensionar antes reduz megabytes.',
      },
      {
        title: 'Evite salvar com perfis de pré-impressão CMYK',
        description: 'Para circulação digital, o padrão RGB é mais leve e compatível com telas.',
      },
    ],
    limitations: [
      {
        title: 'Livros inteiros digitalizados',
        description: 'Obras de 200 páginas digitalizadas com fotografias coloridas podem requerer divisão em volumes ou meta de 2 MB.',
      },
    ],
    useCases: [
      {
        title: 'Monografias, Dissertações e Trabalhos de Conclusão (TCC)',
        description: 'Sistemas universitários que limitam o anexo da versão final da pesquisa a 1 MB.',
      },
      {
        title: 'Propostas Comerciais e Portfólios de Apresentação',
        description: 'PDFs comerciais ricos em identidade visual que precisam circular com fluidez na caixa postal do cliente.',
      },
      {
        title: 'Relatórios Mensais e Demonstrativos Contábeis',
        description: 'Documentos com gráficos e demonstrativos que exigem leitura nítida de pequenos números.',
      },
    ],
    faqs: [
      {
        question: 'Quantos KB equivalem a 1 MB?',
        answer: 'Na computação e nos sistemas de arquivos de servidores, 1 MB equivale a exatamente 1024 KB, o que corresponde a 1.048.576 bytes. Nosso algoritmo assegura que o arquivo final respeite estritamente esse teto.',
      },
      {
        question: 'Preciso pagar para comprimir arquivos grandes para 1 MB?',
        answer: 'Não. O ReduzirPDF é 100% gratuito e não exige cadastro, cartão de crédito nem pagamento para desbloquear downloads.',
      },
    ],
    relatedPresets: [
      { label: 'Comprimir para 500 KB', path: '/comprimir-pdf-para-500kb', sizeText: '500 KB' },
      { label: 'Comprimir para 200 KB', path: '/comprimir-pdf-para-200kb', sizeText: '200 KB' },
      { label: 'Compactar para Enviar', path: '/compactar-pdf-para-enviar', sizeText: 'Envio' },
    ],
  },

  '/compactar-pdf-para-enviar': {
    path: '/compactar-pdf-para-enviar',
    title: 'Compactar PDF para Enviar por E-mail e WhatsApp',
    metaDescription: 'Diminua o tamanho do PDF para enviar por e-mail (Gmail, Outlook) e WhatsApp sem erros de anexo. Processamento local, rápido e gratuito.',
    h1: 'Compactar PDF para enviar',
    heroDescription: 'Reduza o peso do seu arquivo para garantir entrega instantânea por e-mail, WhatsApp, formulários web e sistemas corporativos.',
    directAnswer: 'Para compactar um PDF para envio por e-mail ou WhatsApp, selecione o documento no ReduzirPDF, escolha um tamanho como 1 MB ou 2 MB e clique em "Comprimir PDF". O arquivo é reduzido diretamente no seu dispositivo, evitando que a mensagem seja rejeitada por exceder o limite de anexo do provedor.',
    defaultTargetBytes: 2 * 1024 * 1024, // 2 MB
    introText: 'A mensagem de erro "O anexo excede o tamanho máximo permitido" é um dos maiores obstáculos no envio de documentos digitais. Embora serviços como o Gmail aceitem anexos de até 25 MB, muitas redes corporativas barram mensagens acima de 5 MB ou 2 MB por segurança. Com o ReduzirPDF, você comprime seu documento rapidamente para envio imediato.',
    breadcrumbs: [
      { name: 'Início', path: '/' },
      { name: 'Compactar para Enviar', path: '/compactar-pdf-para-enviar' },
    ],
    howCompressionWorks: {
      title: 'Otimização inteligente para canais de mensageria e e-mail',
      description: 'Documentos enviados por e-mail ou aplicativos de mensagem devem carregar rápido mesmo em conexões móveis:',
      losslessText: 'Compactação de fontes e tabelas estruturais para manter a leitura confortável em qualquer leitor de PDF.',
      rasterizedText: 'Ajuste proporcional de imagens de alta resolução para densidade compatível com telas móveis sem consumo desnecessário da franquia de dados do destinatário.',
    },
    howToSteps: [
      {
        step: 1,
        title: 'Selecione o PDF a ser encaminhado',
        description: 'Carregue o documento que você precisa anexar no e-mail ou mensageiro.',
      },
      {
        step: 2,
        title: 'Defina 1 MB ou 2 MB',
        description: 'Limites universais aceitos por quase todas as políticas de segurança de servidores.',
      },
      {
        step: 3,
        title: 'Comprima no navegador',
        description: 'Processamento instantâneo sem filas e sem envio para servidores.',
      },
      {
        step: 4,
        title: 'Baixe o arquivo leve',
        description: 'Documento pronto para envio em segundos.',
      },
      {
        step: 5,
        title: 'Envie com tranquilidade',
        description: 'Seu anexo chega sem erro de caixa cheia ou retorno de mensagem.',
      },
    ],
    tipsForReducingSize: [
      {
        title: 'Use até 2 MB para e-mails corporativos',
        description: 'Arquivos de até 2 MB passam com facilidade pela maioria dos firewalls de empresas sem retenção para análise de segurança.',
      },
      {
        title: 'Facilite a abertura no celular',
        description: 'PDFs abaixo de 1 MB abrem quase instantaneamente no WhatsApp, mesmo com sinal 4G instável.',
      },
    ],
    limitations: [
      {
        title: 'Arquivos protegidos por senha',
        description: 'Lembre-se de remover a senha antes de compactar e enviar para terceiros.',
      },
    ],
    useCases: [
      {
        title: 'E-mails Corporativos e Pessoais (Outlook, Gmail, Yahoo)',
        description: 'Evite devoluções de e-mail por excesso de cota de anexo ou lentidão no envio.',
      },
      {
        title: 'Envio por WhatsApp e Mensageiros Instantâneos',
        description: 'Facilite a vida do seu cliente ou colega de trabalho com um documento que abre em um segundo.',
      },
      {
        title: 'Abertura de Chamados e Helpdesks',
        description: 'Anexe relatórios e evidências em formulários de atendimento ao cliente com limites rígidos.',
      },
    ],
    faqs: [
      {
        question: 'Qual é o tamanho recomendado para enviar um PDF por e-mail?',
        answer: 'Para e-mails em geral, o tamanho mais seguro é de até 2 MB. Arquivos nessa faixa são aceitos por 99% dos servidores corporativos sem risco de bloqueio por filtros de segurança ou cotas de armazenamento.',
      },
      {
        question: 'O destinatário precisará instalar algum programa especial para abrir o PDF?',
        answer: 'Não. O arquivo continua sendo um PDF padrão e compatível com qualquer aplicativo, incluindo Adobe Acrobat, navegadores de internet e visualizadores nativos do iPhone e Android.',
      },
    ],
    relatedPresets: [
      { label: 'Comprimir para 1 MB', path: '/comprimir-pdf-para-1mb-gratis', sizeText: '1 MB' },
      { label: 'Comprimir para 500 KB', path: '/comprimir-pdf-para-500kb', sizeText: '500 KB' },
      { label: 'Diminuir tamanho geral', path: '/diminuir-tamanho-de-pdf', sizeText: 'Geral' },
    ],
  },

  '/diminuir-tamanho-de-pdf': {
    path: '/diminuir-tamanho-de-pdf',
    title: 'Como Diminuir o Tamanho de um PDF Online – Guia e Ferramenta',
    metaDescription: 'Aprenda e execute a redução de tamanho de PDF online grátis. Entenda como funciona a compressão direta no navegador com total privacidade e sem cadastro.',
    h1: 'Diminuir tamanho de PDF online',
    heroDescription: 'Tecnologia avançada para reduzir megabytes do seu documento em segundos, mantendo a formatação e sem risco para a sua privacidade.',
    directAnswer: 'Para diminuir o tamanho de um PDF online, use a ferramenta do ReduzirPDF para carregar seu arquivo, selecione o tamanho limite pretendido e clique em "Comprimir PDF". A tecnologia do navegador otimiza as imagens embutidas e descarta dados redundantes na hora, reduzindo o arquivo sem necessidade de envio a servidores externos.',
    defaultTargetBytes: 1024 * 1024,
    introText: 'Diminuir o tamanho de um PDF é uma necessidade constante no dia a dia de estudantes, advogados, contadores e profissionais em todo o Brasil. Diferente de outros sites que exigem enviar seus documentos confidenciais para servidores no exterior, aqui o cálculo é feito diretamente pelo poder de processamento do seu navegador.',
    breadcrumbs: [
      { name: 'Início', path: '/' },
      { name: 'Diminuir Tamanho de PDF', path: '/diminuir-tamanho-de-pdf' },
    ],
    howCompressionWorks: {
      title: 'O que faz um PDF ficar pesado e como diminuí-lo?',
      description: 'O peso excessivo de um PDF costuma derivar de três fatores principais:',
      losslessText: '1. Metadados e Objetos Órfãos: Editores de texto acumulam histórico de revisões e informações desnecessárias. O ReduzirPDF limpa essas tabelas sem tocar no conteúdo.',
      rasterizedText: '2. Imagens com DPI Excessivo: Câmeras modernas inserem fotos com densidades de até 600 DPI, enquanto telas digitais precisam de apenas 96 a 150 DPI para visualização perfeita. O compressor reamostra as imagens com precisão matemática.',
    },
    howToSteps: [
      {
        step: 1,
        title: 'Envie o arquivo localmente',
        description: 'O PDF é lido apenas na memória temporária do seu navegador.',
      },
      {
        step: 2,
        title: 'Escolha a taxa de redução',
        description: 'Defina a meta exata de tamanho desejada.',
      },
      {
        step: 3,
        title: 'Inicie o cálculo',
        description: 'A CPU do seu computador ou celular realiza a compactação.',
      },
      {
        step: 4,
        title: 'Obtenha seu PDF otimizado',
        description: 'Verifique a economia gerada e baixe o novo arquivo.',
      },
      {
        step: 5,
        title: 'Salve no seu dispositivo',
        description: 'Seu arquivo nunca saiu da sua máquina durante todo o processo.',
      },
    ],
    tipsForReducingSize: [
      {
        title: 'Prefira exportar direto para PDF',
        description: 'Sempre que possível, use "Salvar como PDF" diretamente no editor em vez de imprimir em papel e digitalizar novamente.',
      },
      {
        title: 'Separe documentos muito longos',
        description: 'Se um documento tiver centenas de páginas, dividi-lo em capítulos ou seções facilita atingir limites menores por arquivo.',
      },
    ],
    limitations: [
      {
        title: 'Criptografia e assinaturas digitais com certificado A1/A3',
        description: 'Documentos com assinatura digital prévia ICP-Brasil têm a integridade atrelada aos bytes originais; qualquer alteração visual ou recompactação invalida o selo criptográfico original.',
      },
    ],
    useCases: [
      {
        title: 'Economia de Espaço no Celular e Computador',
        description: 'Reduza gigabytes acumulados em pastas de documentos e backups digitais.',
      },
      {
        title: 'Facilidade para Compartilhar na Web',
        description: 'Arquivos menores abrem muito mais rápido em conexões móveis e economizam dados.',
      },
      {
        title: 'Documentos Pessoais com Sigilo Absoluto',
        description: 'Extratos bancários, comprovantes de renda e declarações fiscais nunca saem do seu computador.',
      },
    ],
    faqs: [
      {
        question: 'O que faz um arquivo PDF ficar tão pesado?',
        answer: 'Geralmente imagens em altíssima resolução inseridas no documento, escaneamentos com configurações excessivas de DPI, fontes não otimizadas e metadados redundantes acumulados por softwares de edição.',
      },
      {
        question: 'Como o ReduzirPDF consegue diminuir o tamanho sem enviar o arquivo?',
        answer: 'Usamos bibliotecas modernas de renderização e montagem de PDF compiladas para a web (PDF.js e pdf-lib). Toda a leitura, desenho em canvas e reconstrução acontecem na CPU do seu dispositivo, sem nenhuma chamada de API remota.',
      },
    ],
    relatedPresets: [
      { label: 'Comprimir para 100 KB', path: '/comprimir-pdf-para-100kb', sizeText: '100 KB' },
      { label: 'Comprimir para 200 KB', path: '/comprimir-pdf-para-200kb', sizeText: '200 KB' },
      { label: 'Comprimir para 500 KB', path: '/comprimir-pdf-para-500kb', sizeText: '500 KB' },
    ],
  },

  '/privacidade': {
    path: '/privacidade',
    title: 'Política de Privacidade – ReduzirPDF',
    metaDescription: 'Conheça nossa política de privacidade. O ReduzirPDF processa seus arquivos localmente no navegador, sem upload para nenhum servidor externo.',
    h1: 'Política de Privacidade',
    heroDescription: 'Compromisso irrestrito com a segurança dos seus dados: seus documentos nunca saem do seu dispositivo.',
    directAnswer: 'A política de privacidade do ReduzirPDF baseia-se em um princípio técnico: nenhum arquivo PDF é enviado a servidores externos. Todo o processamento de compressão ocorre localmente no navegador do usuário via JavaScript e WebAssembly, garantindo sigilo absoluto segundo a LGPD.',
    defaultTargetBytes: 1024 * 1024,
    introText: 'A privacidade dos usuários é o pilar fundamental do ReduzirPDF. Esta página detalha como operamos tecnicamente para garantir que seus documentos permaneçam estritamente confidenciais e sob seu controle exclusivo.',
    breadcrumbs: [
      { name: 'Início', path: '/' },
      { name: 'Privacidade', path: '/privacidade' },
    ],
    howCompressionWorks: {
      title: 'Segurança por Arquitetura Local',
      description: 'O ReduzirPDF não possui banco de dados para arquivos nem endpoint de upload.',
      losslessText: 'Execução em sandbox no navegador.',
      rasterizedText: 'Memória liberada imediatamente após a conclusão.',
    },
    tipsForReducingSize: [],
    limitations: [],
    useCases: [],
    howToSteps: [],
    faqs: [],
    relatedPresets: [],
  },

  '/termos': {
    path: '/termos',
    title: 'Termos de Uso – ReduzirPDF',
    metaDescription: 'Termos e condições de uso do ReduzirPDF. Ferramenta gratuita para compressão de arquivos PDF no navegador.',
    h1: 'Termos de Uso',
    heroDescription: 'Diretrizes de utilização da ferramenta gratuita de compressão de documentos ReduzirPDF.',
    directAnswer: 'O ReduzirPDF é um serviço público gratuito de utilidade web para compressão local de PDFs no navegador. Seu uso não exige cadastro e é regido pelas leis brasileiras vigentes.',
    defaultTargetBytes: 1024 * 1024,
    introText: 'Ao utilizar o ReduzirPDF, você concorda com os termos e condições descritos nesta página.',
    breadcrumbs: [
      { name: 'Início', path: '/' },
      { name: 'Termos de Uso', path: '/termos' },
    ],
    howCompressionWorks: {
      title: 'Termos Gerais',
      description: 'Uso livre, gratuito e sem responsabilidade sobre documentos manipulados.',
      losslessText: 'Serviço fornecido no estado em que se encontra.',
      rasterizedText: 'Isenção de garantias sobre limites inatingíveis de tamanho.',
    },
    tipsForReducingSize: [],
    limitations: [],
    useCases: [],
    howToSteps: [],
    faqs: [],
    relatedPresets: [],
  },

  '/contato': {
    path: '/contato',
    title: 'Contato e Suporte – ReduzirPDF',
    metaDescription: 'Entre em contato com a equipe do ReduzirPDF para dúvidas, sugestões e suporte sobre compressão de documentos.',
    h1: 'Contato e Suporte',
    heroDescription: 'Dúvidas, sugestões ou relatos de problemas? Envie uma mensagem para nossa equipe.',
    directAnswer: 'Para suporte, dúvidas técnicas ou sugestões de novas funcionalidades no ReduzirPDF, envie uma mensagem através do formulário de contato ou escreva para contato@reduzirpdf.pages.dev.',
    defaultTargetBytes: 1024 * 1024,
    introText: 'Valorizamos o feedback da comunidade de usuários para aprimorar continuamente a qualidade e velocidade do motor de compressão.',
    breadcrumbs: [
      { name: 'Início', path: '/' },
      { name: 'Contato', path: '/contato' },
    ],
    howCompressionWorks: {
      title: 'Canais de Contato',
      description: 'Atendimento e suporte à comunidade.',
      losslessText: 'Formulário integrado.',
      rasterizedText: 'E-mail oficial direto.',
    },
    tipsForReducingSize: [],
    limitations: [],
    useCases: [],
    howToSteps: [],
    faqs: [],
    relatedPresets: [],
  },
};
