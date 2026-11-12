# ReduzirPDF — Compressão de PDF no Navegador com Alvo de Tamanho

> **"Reduza seu PDF para o tamanho que você precisa."**  
> Grátis, rápido e sem enviar seus arquivos para um servidor.

O **ReduzirPDF** é uma aplicação web completa e pronta para produção desenvolvida para o mercado brasileiro. Permite que os usuários comprimam arquivos PDF para um tamanho máximo exato (100 KB, 200 KB, 500 KB, 1 MB, 2 MB ou Personalizado) diretamente na memória do navegador web, de forma 100% gratuita, sem necessidade de cadastro e com total garantia de privacidade (nenhum arquivo é enviado a servidores).

---

## 📁 Estrutura de Pastas do Projeto

```
/
├── public/
│   ├── 404.html               # Fallback SPA para GitHub Pages mantendo a rota
│   ├── robots.txt             # Diretivas de indexação para buscadores
│   └── sitemap.xml            # Sitemap canônico contendo todas as 10 páginas
├── src/
│   ├── components/
│   │   ├── AdSensePlaceholder.tsx  # Espaços reservados e não obstrutivos para AdSense
│   │   ├── CompressorTool.tsx      # Interface interativa de upload, presets e progresso
│   │   ├── Footer.tsx              # Rodapé institucional e links canônicos
│   │   ├── Header.tsx              # Top Bar Contract minimalista
│   │   └── SEOHead.tsx             # Sincronização de Title, Meta, OpenGraph e Schema.org
│   ├── data/
│   │   └── pagesData.ts            # Conteúdo em pt-BR de todas as 10 páginas
│   ├── pages/
│   │   └── LegalPage.tsx           # Páginas de Privacidade (LGPD), Termos e Contato
│   ├── services/
│   │   └── pdfCompressor.ts        # Motor real de compressão (PDF.js + pdf-lib)
│   ├── App.tsx                     # Orquestrador de rotas SPA e layout principal
│   ├── index.css                   # Tailwind CSS v4 e regras tipográficas
│   ├── main.tsx                    # Ponto de montagem React
│   └── types.ts                    # Definições de tipos TypeScript
├── index.html                      # HTML de entrada com fontes Plus Jakarta Sans e JetBrains Mono
├── metadata.json                   # Metadados do AI Studio
├── package.json                    # Dependências e scripts
├── tsconfig.json                   # Configuração TypeScript
└── vite.config.ts                  # Configuração Vite
```

---

## 🚀 Como Rodar Localmente

### Pré-requisitos
- Node.js 18+ ou 20+
- Gerenciador de pacotes `npm`

### Instalação e Execução
```bash
# 1. Instalar as dependências
npm install

# 2. Iniciar o servidor de desenvolvimento Vite
npm run dev

# O app estará disponível em: http://localhost:3000 (ou porta indicada no terminal)
```

### Compilação de Produção
```bash
npm run build
```
O build estático será gerado na pasta `dist/`.

---

## 🌐 Deploy em Produção (GitHub Pages & Cloudflare Pages)

- **Website Oficial**: [https://reduzirpdf.github.io/](https://reduzirpdf.github.io/)
- **Repositório**: [https://github.com/img-pdf/reduzirpdf](https://github.com/img-pdf/reduzirpdf)
- **Diretório para Agentes de IA (AAO)**: [https://reduzirpdf.github.io/tools.json](https://reduzirpdf.github.io/tools.json)
- **Documentação para LLMs**: [https://reduzirpdf.github.io/llms.txt](https://reduzirpdf.github.io/llms.txt)

### Deploy no GitHub Pages
1. Configure o repositório em **Settings > Pages** com fonte **GitHub Actions**.
2. O arquivo `public/404.html` garante roteamento SPA para rotas como `/comprimir-pdf-para-100kb`.

### Deploy alternativo no Cloudflare Pages
O arquivo `public/_redirects` (`/* /index.html 200`) é incluído para roteamento SPA em ambientes Cloudflare Pages.

---

## 📦 Dependências e Licenças

| Pacote | Versão | Função | Licença |
| :--- | :--- | :--- | :--- |
| `react` & `react-dom` | `^19.0.1` | Interface declarativa de componentes | MIT |
| `pdf-lib` | `^1.17.9` | Manipulação e montagem estrutural de arquivos PDF | MIT |
| `pdfjs-dist` | `^6.5.438` | Renderização gráfica e inspeção de páginas PDF | Apache-2.0 |
| `lucide-react` | `^0.546.0` | Ícones SVG limpos e consistentes | ISC |
| `tailwindcss` | `^4.3.3` | Sistema de design e utilitários de estilo | MIT |
| `vite` | `^8.3.0` | Empacotador e servidor ultrarrápido | MIT |

---

## 🔬 Como Funciona o Motor de Compressão Real

Diferente de serviços que apenas simulam reduções ou retornam o mesmo arquivo renomeado, o ReduzirPDF implementa uma pipeline real em 4 fases:

1. **Inspeção de Assinatura e Segurança**:
   - Valida os bytes mágicos `%PDF-` nos primeiros 1024 bytes.
   - Detecta documentos criptografados ou com senha (com aviso claro ao usuário).
   - Extrai número de páginas e dimensões físicas (pontos).
2. **Passo Sem Perdas (Lossless)**:
   - Tenta recompressão de tabelas de objetos (`useObjectStreams`) e remoção de metadados redundantes com `pdf-lib`.
   - Se o resultado já satisfaz o tamanho alvo estrito, finaliza com preservação de texto 100% pesquisável.
3. **Passo Adaptativo por Renderização (Rasterização Controlada)**:
   - Caso o PDF original exceda a meta, as páginas são renderizadas com precisão através do `pdfjs-dist` em elementos de canvas off-screen.
   - O algoritmo testa perfis progressivos de resolução e qualidade JPEG (de 80% até 28%).
   - As páginas geradas são embutidas em um novo documento limpo preservando exatamente a ordem e proporções originais da página.
4. **Salvaguarda de Qualidade**:
   - O algoritmo interrompe a compressão se for impossível atingir a meta sem destruir a legibilidade (ex.: 50 páginas de fotos para 100 KB).
   - Sugere com transparência o próximo tamanho pré-configurado viável.

---

## 📋 Critérios de Aceite e Testes Realizados

- [x] **Upload de PDF Válido**: Aceita e inspeciona documentos PDF de múltiplas páginas.
- [x] **Rejeição de Arquivos Inválidos**: Bloqueia extensões não PDF e arquivos com assinatura corrompida.
- [x] **Seleção de Presets**: 100 KB, 200 KB, 500 KB, 1 MB, 2 MB funcionais.
- [x] **Tamanho Personalizado**: Suporte a valores numéricos em KB ou MB com validação.
- [x] **Cálculo Rigoroso**: $1\text{ KB} = 1024\text{ bytes}$ e $1\text{ MB} = 1024\text{ KB}$. O alvo é um teto máximo estrito.
- [x] **Download Funcional**: Gera Blob local com nome formatado (`*_comprimido.pdf`).
- [x] **Privacidade Garantida**: Nenhuma requisição de rede envia bytes do PDF.
- [x] **10 Páginas de SEO**: Rotas com conteúdo único, H1, casos de uso reais no Brasil, FAQs e JSON-LD.
- [x] **Prontidão para AdSense**: Espaços reservados não obstrutivos sem cliques acidentais.

---

## ⚠️ Limitações Conhecidas

1. **Documentos com Senha**: PDFs protegidos por senha não podem ser lidos sem a chave de descriptografia.
2. **Camada de Texto em Rasterização**: Quando a compressão por renderização de imagem é necessária para atingir metas muito agressivas (ex.: 100 KB ou 200 KB), a camada de texto selecionável é convertida em imagem otimizada de alta fidelidade visual, com aviso claro e explícito exibido na interface.
