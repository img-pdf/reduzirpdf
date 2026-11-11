import { PageContent } from '../types';

export const PAGES_DATA: Record<string, PageContent> = {
  '/': {
    path: '/',
    title: 'ReduzirPDF – Comprimir PDF para o tamanho que você precisa',
    metaDescription: 'Comprima arquivos PDF para 100 KB, 200 KB, 500 KB, 1 MB ou 2 MB. Grátis, rápido e direto no seu navegador, sem enviar arquivos para a internet.',
    h1: 'Reduza o tamanho do seu PDF grátis',
    heroDescription: 'Comprima arquivos PDF para 100 KB, 200 KB, 500 KB, 1 MB ou 2 MB. Escolha o tamanho desejado e baixe seu arquivo diretamente no seu dispositivo.',
    defaultTargetBytes: 1024 * 1024, // 1 MB
    introText: 'Precisa enviar um PDF, mas o arquivo está muito grande? Com o ReduzirPDF, você pode comprimir seu documento para o tamanho que precisa. Escolha entre 100 KB, 200 KB, 500 KB, 1 MB ou 2 MB, ou informe um tamanho personalizado. Tudo acontece diretamente no seu navegador, sem cadastro e sem enviar seus arquivos para um servidor.',
    useCases: [
      {
        title: 'Inscrições em Concursos e Vestibulares',
        description: 'Editais exigem comprovantes, documentos de identificação e diplomas com limites estritos (frequentemente 200 KB ou 500 KB). Comprima na medida exata.',
      },
      {
        title: 'Portais Governamentais e Serviços Públicos',
        description: 'Plataformas como Meu INSS e serviços integrados ao gov.br possuem travas rígidas de tamanho por anexo para evitar sobrecarga.',
      },
      {
        title: 'Envio de Currículos e Vagas de Emprego',
        description: 'Mantenha seu currículo profissional nítido e leve, garantindo que chegue sem bloqueios nas caixas postais dos recrutadores.',
      },
      {
        title: 'Sistemas Jurídicos e Processos Judiciais (PJe)',
        description: 'Tribunais de justiça estipulam limites rígidos por petição ou documento anexado. Reduza os volumes mantendo a clareza para leitura.',
      },
    ],
    howToSteps: [
      {
        step: 1,
        title: 'Selecione seu arquivo PDF',
        description: 'Escolha um documento do seu celular ou computador. Arraste para a área indicada ou clique para buscar.',
      },
      {
        step: 2,
        title: 'Escolha o tamanho desejado',
        description: 'Selecione um dos tamanhos disponíveis (100 KB, 200 KB, 500 KB, 1 MB, 2 MB) ou informe um limite personalizado.',
      },
      {
        step: 3,
        title: 'Comprima e baixe',
        description: 'Aguarde o processamento direto no seu navegador e faça o download imediato do seu PDF pronto.',
      },
    ],
    faqs: [
      {
        question: 'Como reduzir o tamanho de um PDF?',
        answer: 'Basta selecionar seu arquivo na ferramenta acima, escolher o tamanho máximo desejado (como 200 KB, 500 KB ou 1 MB) e clicar em "Comprimir PDF". O arquivo é processado na hora pelo seu próprio navegador, sem ser enviado para servidores.',
      },
      {
        question: 'Como comprimir um PDF para 1 MB?',
        answer: 'Selecione o botão "1 MB" no seletor de tamanho antes de iniciar. Nosso algoritmo otimiza imagens e fluxos internos do documento até que o arquivo final pese no máximo 1024 KB.',
      },
      {
        question: 'É possível comprimir um PDF para 100 KB?',
        answer: 'Sim, desde que o número de páginas e a densidade de imagens permitam manter a legibilidade. Para documentos de poucas páginas (como CNH, RG ou comprovante de residência), 100 KB costuma ser perfeitamente viável.',
      },
      {
        question: 'O ReduzirPDF é gratuito?',
        answer: 'Sim, o serviço é 100% gratuito. Não há limites de uso diário, não há necessidade de assinar planos e você não precisa criar conta de usuário.',
      },
      {
        question: 'Meus arquivos são enviados para algum servidor?',
        answer: 'Não. Todo o processamento matemático e gráfico ocorre localmente na memória do seu navegador (utilizando WebAssembly e Canvas). Seus arquivos confidenciais nunca saem do seu computador ou telefone.',
      },
      {
        question: 'A compressão reduz a qualidade do documento?',
        answer: 'Tentamos primeiro a otimização estrutural sem perdas de qualidade. Se for necessário reduzir imagens para atingir o tamanho escolhido, a qualidade gráfica é ajustada de forma balanceada. Se o tamanho for inatingível sem comprometer a leitura, avisamos com total transparência.',
      },
    ],
    relatedPresets: [
      { label: 'Comprimir para 100 KB', path: '/comprimir-pdf-para-100kb', sizeText: '100 KB' },
      { label: 'Comprimir para 200 KB', path: '/comprimir-pdf-para-200kb', sizeText: '200 KB' },
      { label: 'Comprimir para 500 KB', path: '/comprimir-pdf-para-500kb', sizeText: '500 KB' },
      { label: 'Comprimir para 1 MB', path: '/comprimir-pdf-para-1mb-gratis', sizeText: '1 MB' },
    ],
  },

  '/comprimir-pdf-para-100kb': {
    path: '/comprimir-pdf-para-100kb',
    title: 'Comprimir PDF para 100 KB – Reduzir Tamanho Online Grátis',
    metaDescription: 'Comprima seu arquivo PDF para menos de 100 KB online e grátis. Ideal para formulários com limites rigorosos, fotos de RG e CNH. Processamento local no navegador.',
    h1: 'Comprimir PDF para 100 KB',
    heroDescription: 'Ajuste seu documento para pesar no máximo 100 KB (102.400 bytes). Perfeito para sistemas que exigem anexos extremamente leves.',
    defaultTargetBytes: 100 * 1024,
    introText: 'Muitos formulários de órgãos governamentais, processos seletivos e vestibulares exigem que documentos escaneados tenham no máximo 100 KB. Essa restrição rigorosa costuma causar erros de upload. O ReduzirPDF ajusta a resolução e o peso do seu arquivo para atender a essa exigência sem complicação.',
    useCases: [
      {
        title: 'Fotos de RG, CNH e CPF',
        description: 'Documentos de identidade digitalizados de uma única página podem ser facilmente compactados para menos de 100 KB mantendo os dados legíveis.',
      },
      {
        title: 'Comprovantes de Residência',
        description: 'Contas de luz, água ou telefone escaneadas que precisam ser anexadas em cadastros restritivos.',
      },
      {
        title: 'Upload em Concursos Públicos',
        description: 'Sistemas legados de bancas organizadoras que rejeitam qualquer arquivo acima de 100 KB.',
      },
    ],
    howToSteps: [
      {
        step: 1,
        title: 'Selecione o PDF leve',
        description: 'Envie o arquivo escaneado. Para 100 KB, recomendamos arquivos com até 3 páginas para melhor nitidez.',
      },
      {
        step: 2,
        title: 'Confirme o alvo de 100 KB',
        description: 'O valor de 100 KB já vem pré-selecionado para você.',
      },
      {
        step: 3,
        title: 'Baixe o resultado',
        description: 'Se o documento couber com nitidez aceitável, o download é liberado instantaneamente.',
      },
    ],
    faqs: [
      {
        question: 'É possível comprimir qualquer PDF para 100 KB?',
        answer: 'Documentos pequenos de 1 a 3 páginas atingem 100 KB facilmente. Livros ou relatórios de 50 páginas com fotos em alta resolução não conseguem chegar a 100 KB sem que as páginas se tornem ilegíveis; nesses casos, o sistema avisará e sugerirá um tamanho adequado.',
      },
      {
        question: 'O texto ainda continuará legível com 100 KB?',
        answer: 'Sim, calibramos o algoritmo para preservar contraste suficiente em letras, números de documentos e assinaturas.',
      },
      {
        question: 'Quanto é 100 KB em bytes?',
        answer: 'Seguindo a convenção técnica binária, 100 KB equivalem a exatamente 102.400 bytes (100 × 1024). Garantimos que a saída nunca ultrapasse essa marca.',
      },
    ],
    relatedPresets: [
      { label: 'Precisa de mais qualidade? Tente 200 KB', path: '/comprimir-pdf-para-200kb', sizeText: '200 KB' },
      { label: 'Página padrão de 500 KB', path: '/comprimir-pdf-para-500kb', sizeText: '500 KB' },
      { label: 'Voltar ao início', path: '/', sizeText: 'Geral' },
    ],
  },

  '/comprimir-pdf-para-200kb': {
    path: '/comprimir-pdf-para-200kb',
    title: 'Comprimir PDF para 200 KB – Reduza seu Documento Grátis',
    metaDescription: 'Comprima arquivos PDF para até 200 KB grátis no seu navegador. Tamanho padrão exigido por portais de concursos, prefeituras e sistemas federais.',
    h1: 'Comprimir PDF para 200 KB',
    heroDescription: 'Atinja o limite de 200 KB (204.800 bytes) exigido pelas principais bancas e plataformas públicas do Brasil.',
    defaultTargetBytes: 200 * 1024,
    introText: 'O limite de 200 KB é um dos padrões mais comuns em formulários de prefeituras, tribunais, conselhos regionais (CRM, OAB, CRC) e no portal gov.br. Nosso compressor calibra o documento para não ultrapassar 204.800 bytes, assegurando envio rápido sem mensagens de erro.',
    useCases: [
      {
        title: 'Diplomas e Certificados',
        description: 'Documentos acadêmicos frente e verso necessários para posse em cargos ou comprovação de títulos.',
      },
      {
        title: 'Contratos e Declarações Simples',
        description: 'Contratos de prestação de serviços ou declarações de imposto de renda simplificadas.',
      },
      {
        title: 'Anexos de Matrícula Escolar e Universitária',
        description: 'Envio de histórico escolar e documentos civis exigidos em portais de instituições de ensino.',
      },
    ],
    howToSteps: [
      {
        step: 1,
        title: 'Carregue o arquivo',
        description: 'Selecione o PDF salvo no seu celular ou computador.',
      },
      {
        step: 2,
        title: 'Alvo de 200 KB ativo',
        description: 'A meta de 200 KB está configurada como tamanho teto estrito.',
      },
      {
        step: 3,
        title: 'Baixe e envie',
        description: 'Com o processamento finalizado em segundos, baixe o PDF e anexe no seu portal de interesse.',
      },
    ],
    faqs: [
      {
        question: 'Por que tantos sites exigem PDFs com no máximo 200 KB?',
        answer: 'Servidores públicos e corporativos recebem milhares de arquivos simultâneos. A trava de 200 KB economiza largura de banda e espaço em banco de dados, prevenindo quedas do sistema.',
      },
      {
        question: 'E se o PDF original tiver 10 MB?',
        answer: 'Se o PDF original de 10 MB contiver fotos gigantes escaneadas em 600 DPI, nosso sistema recalculará a resolução para a densidade necessária para atingir 200 KB.',
      },
    ],
    relatedPresets: [
      { label: 'Tentar 100 KB', path: '/comprimir-pdf-para-100kb', sizeText: '100 KB' },
      { label: 'Tentar 500 KB', path: '/comprimir-pdf-para-500kb', sizeText: '500 KB' },
      { label: 'Comprimir para 1 MB', path: '/comprimir-pdf-para-1mb-gratis', sizeText: '1 MB' },
    ],
  },

  '/comprimir-pdf-para-500kb': {
    path: '/comprimir-pdf-para-500kb',
    title: 'Comprimir PDF para 500 KB – Equilíbrio Perfeito de Qualidade',
    metaDescription: 'Reduza o tamanho do PDF para até 500 KB sem perder nitidez. Ideal para currículos profissionais, petições e relatórios com várias páginas.',
    h1: 'Comprimir PDF para 500 KB',
    heroDescription: 'Comprima seu documento para menos de 500 KB (512.000 bytes) com alto padrão de legibilidade e segurança.',
    defaultTargetBytes: 500 * 1024,
    introText: '500 KB é o tamanho de equilíbrio perfeito no ecossistema digital. Proporciona espaço suficiente para documentos de 5 a 15 páginas manterem texto nítido, tabelas claras e fotos com ótima resolução, enquanto permanece leve o bastante para carregar instantaneamente em qualquer conexão móvel.',
    useCases: [
      {
        title: 'Currículos Profissionais com Portfólio',
        description: 'Envie seu currículo sem receio de ultrapassar limites de sistemas ATS (Gupy, Kenoby, LinkedIn).',
      },
      {
        title: 'Petições e Procurações (PJe)',
        description: 'Atende com folga as regras de fragmentação de peças de processos nos sistemas dos tribunais estaduais e federais.',
      },
      {
        title: 'Contratos Comerciais com Múltiplas Assinaturas',
        description: 'Contratos escaneados com várias laudas que precisam circular entre sócios e departamentos.',
      },
    ],
    howToSteps: [
      {
        step: 1,
        title: 'Escolha o documento',
        description: 'Arraste o PDF de qualquer tamanho inicial para a ferramenta.',
      },
      {
        step: 2,
        title: 'Verifique o limite de 500 KB',
        description: 'O preset de 500 KB é selecionado automaticamente nesta página.',
      },
      {
        step: 3,
        title: 'Conclua a compressão',
        description: 'Faça o download do PDF reduzido e pronto para anexar onde quiser.',
      },
    ],
    faqs: [
      {
        question: '500 KB é suficiente para manter a qualidade das fotos no PDF?',
        answer: 'Sim! Na grande maioria dos documentos, 500 KB acomoda imagens bem otimizadas com ótima resolução para telas e impressões simples.',
      },
      {
        question: 'Quantas páginas cabem confortavelmente em 500 KB?',
        answer: 'Documentos compostos primariamente por texto e tabelas podem ter mais de 30 páginas em 500 KB. Documentos com ilustrações ou fotos suportam em média de 5 a 12 páginas.',
      },
    ],
    relatedPresets: [
      { label: 'Comprimir para 200 KB', path: '/comprimir-pdf-para-200kb', sizeText: '200 KB' },
      { label: 'Comprimir para 1 MB', path: '/comprimir-pdf-para-1mb-gratis', sizeText: '1 MB' },
      { label: 'Envio por E-mail', path: '/compactar-pdf-para-enviar', sizeText: 'E-mail' },
    ],
  },

  '/comprimir-pdf-para-1mb-gratis': {
    path: '/comprimir-pdf-para-1mb-gratis',
    title: 'Comprimir PDF para 1 MB Grátis – Redutor Online Rápido',
    metaDescription: 'Comprima PDF para 1 MB grátis e sem limites. Perfeito para relatórios, projetos e apresentações que excedem o limite de 1 MB.',
    h1: 'Comprimir PDF para 1 MB grátis',
    heroDescription: 'Reduza apresentações, trabalhos acadêmicos e relatórios para no máximo 1 MB (1.048.576 bytes) com máxima fidelidade visual.',
    defaultTargetBytes: 1024 * 1024,
    introText: 'Muitos portais acadêmicos (Moodle, plataformas de TCC), e-mails corporativos e sistemas de submissão de propostas fixam o limite máximo em exatamente 1 MB. Se você exportou um documento do Word, Canva ou Photoshop que ficou com 5 MB ou 15 MB, comprima para 1 MB em poucos segundos sem cadastros.',
    useCases: [
      {
        title: 'Trabalhos Acadêmicos e Artigos Científicos',
        description: 'Monografias, artigos e pesquisas com gráficos que precisam respeitar as normas de submissão.',
      },
      {
        title: 'Apresentações e Propostas Comerciais',
        description: 'PDFs comerciais ricos em identidade visual que precisam ser enviados sem pesar na caixa de entrada do cliente.',
      },
      {
        title: 'Relatórios Mensais e Demonstrativos Contábeis',
        description: 'Documentos volumosos que exigem boa nitidez de números e gráficos comparativos.',
      },
    ],
    howToSteps: [
      {
        step: 1,
        title: 'Selecione o arquivo pesado',
        description: 'Abra seu PDF no navegador arrastando para o painel.',
      },
      {
        step: 2,
        title: 'Tamanho alvo de 1 MB',
        description: 'Configurado para garantir saída inferior a 1.048.576 bytes.',
      },
      {
        step: 3,
        title: 'Baixar arquivo leve',
        description: 'Clique em Comprimir e faça o download direto no seu dispositivo.',
      },
    ],
    faqs: [
      {
        question: 'Quantos KB equivalem a 1 MB?',
        answer: 'Na computação e nos sistemas de arquivos, 1 MB equivale a exatamente 1024 KB (1.048.576 bytes).',
      },
      {
        question: 'Preciso pagar para comprimir arquivos grandes para 1 MB?',
        answer: 'Não, o ReduzirPDF é 100% gratuito e não exige cartão de crédito nem cadastro.',
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
    metaDescription: 'Diminua o tamanho do seu PDF para enviar por e-mail, WhatsApp ou sistemas online sem ser bloqueado por tamanho de anexo.',
    h1: 'Compactar PDF para enviar',
    heroDescription: 'Reduza o peso do seu arquivo para garantir envio instantâneo por e-mail, WhatsApp, formulários e sistemas corporativos.',
    defaultTargetBytes: 2 * 1024 * 1024, // 2 MB
    introText: 'Quem nunca recebeu a mensagem de erro "O anexo excede o limite máximo permitido pelo servidor"? Serviços de e-mail e mensageiros impõem limites de envio para anexos. Com o ReduzirPDF, você comprime seu documento rapidamente para que ele seja entregue de primeira.',
    useCases: [
      {
        title: 'E-mails Corporativos e Pessoais (Outlook, Gmail)',
        description: 'Embora o Gmail aceite até 25 MB, muitas redes corporativas barram e-mails acima de 5 MB ou 2 MB por segurança.',
      },
      {
        title: 'Envio por WhatsApp e Mensageiros',
        description: 'PDFs mais leves baixam rapidamente na rede 4G/5G do destinatário sem consumir franquia excessiva.',
      },
      {
        title: 'Sistemas de Atendimento e Helpdesk',
        description: 'Abertura de chamados que exigem anexar documentos e relatórios técnicos com restrição de peso.',
      },
    ],
    howToSteps: [
      {
        step: 1,
        title: 'Escolha o PDF a ser enviado',
        description: 'Selecione o documento que você precisa encaminhar.',
      },
      {
        step: 2,
        title: 'Selecione o tamanho ideal',
        description: 'Escolha 1 MB, 2 MB ou defina um tamanho personalizado adequado ao seu canal de envio.',
      },
      {
        step: 3,
        title: 'Envie com tranquilidade',
        description: 'Baixe o documento reduzido e envie sem medo de retorno ou mensagem de caixa de entrada cheia.',
      },
    ],
    faqs: [
      {
        question: 'Qual é o tamanho recomendado para enviar um PDF por e-mail?',
        answer: 'O tamanho ideal para e-mails em geral é de até 2 MB. Arquivos abaixo de 2 MB chegam imediatamente e são aceitos por quase todas as políticas de segurança corporativas.',
      },
      {
        question: 'O destinatário precisará de algum programa especial para abrir?',
        answer: 'Não. O arquivo continua sendo um documento padrão PDF e abre normalmente no Adobe Reader, navegadores, celulares Android e iPhone.',
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
    title: 'Diminuir Tamanho de PDF Online – 100% no Navegador',
    metaDescription: 'Aprenda e execute a redução de tamanho de PDF online grátis. Entenda como funciona a compressão direta no navegador com total privacidade.',
    h1: 'Diminuir tamanho de PDF',
    heroDescription: 'Tecnologia avançada para reduzir megabytes do seu documento em segundos, mantendo a formatação e sem risco para a sua privacidade.',
    defaultTargetBytes: 1024 * 1024,
    introText: 'Diminuir o tamanho de um PDF é uma necessidade constante no dia a dia de estudantes, advogados, contadores e profissionais em todo o Brasil. Diferente de outros sites que exigem enviar seus documentos confidenciais para servidores no exterior, aqui o cálculo é feito diretamente pelo poder de processamento do seu navegador.',
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
        title: 'Obtenha seu PDF otimizado',
        description: 'Verifique a economia gerada e baixe o novo arquivo.',
      },
    ],
    faqs: [
      {
        question: 'O que faz um arquivo PDF ficar tão pesado?',
        answer: 'Geralmente imagens em altíssima resolução inseridas no documento, escaneamentos com configurações excessivas de DPI, fontes não otimizadas e metadados redundantes.',
      },
      {
        question: 'Como o ReduzirPDF consegue diminuir o tamanho sem enviar o arquivo?',
        answer: 'Usamos bibliotecas modernas de renderização e montagem de PDF compiladas para a web (PDF.js e pdf-lib). Toda a leitura, desenho em canvas e reconstrução acontecem na CPU do seu dispositivo.',
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
    defaultTargetBytes: 1024 * 1024,
    introText: 'A privacidade dos usuários é o pilar fundamental do ReduzirPDF. Esta página detalha como operamos tecnicamente para garantir que seus documentos permaneçam estritamente confidenciais e sob seu controle exclusivo.',
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
    defaultTargetBytes: 1024 * 1024,
    introText: 'Ao utilizar o ReduzirPDF, você concorda com os termos e condições descritos nesta página.',
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
    defaultTargetBytes: 1024 * 1024,
    introText: 'Valorizamos o feedback da comunidade de usuários para aprimorar continuamente a qualidade e velocidade do motor de compressão.',
    useCases: [],
    howToSteps: [],
    faqs: [],
    relatedPresets: [],
  },
};
