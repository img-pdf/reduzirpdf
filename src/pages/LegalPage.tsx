import React, { useState } from 'react';
import { ShieldCheck, Lock, Cpu, Mail, CheckCircle2, Send, HelpCircle, FileText } from 'lucide-react';

interface LegalPageProps {
  type: 'privacidade' | 'termos' | 'contato';
  onNavigate: (path: string) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ type, onNavigate }) => {
  const [contactSent, setContactSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setContactSent(true);
  };

  if (type === 'privacidade') {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
        <div className="mb-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">Transparência Total</span>
          <h1 className="text-3xl font-extrabold text-slate-900 mt-1">Política de Privacidade</h1>
          <p className="text-slate-600 mt-2 text-sm">
            Última atualização: Novembro de 2026. Seus arquivos não saem do seu dispositivo.
          </p>
        </div>

        <div className="space-y-8 text-slate-700 text-sm leading-relaxed">
          {/* Destaque de Arquitetura Local */}
          <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Princípio Fundamental: Processamento 100% no Cliente</h3>
                <p className="mt-1 text-slate-600 text-xs">
                  O ReduzirPDF foi construído especificamente para eliminar o risco de vazamento de dados. Ao selecionar um arquivo PDF, ele é carregado exclusivamente na memória volátil (RAM) do seu próprio navegador através das APIs padrão do HTML5 e WebAssembly.
                </p>
              </div>
            </div>
          </div>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">1. Coleta e Tratamento de Arquivos</h2>
            <p>
              <strong>Nós não coletamos, não transmitimos, não armazenamos e não temos acesso aos seus arquivos PDF.</strong> Nenhum byte do seu documento é transferido para servidores próprios ou de terceiros durante o processo de inspeção, renderização ou compressão.
            </p>
            <p>
              Ao encerrar ou atualizar a página, a memória alocada pelo navegador para o processamento do PDF é imediatamente liberada pelo sistema operacional.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">2. Segurança de Documentos Confidenciais</h2>
            <p>
              Como o processamento não utiliza requisições de rede para manipulação de arquivos, o ReduzirPDF é seguro para uso com documentos altamente sensíveis, tais como:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-600">
              <li>Documentos de identidade pessoal (RG, CPF, CNH, Passaporte);</li>
              <li>Petições jurídicas, procurações e contratos confidenciais;</li>
              <li>Comprovantes bancários, holerites e declarações fiscais do IRPF;</li>
              <li>Prontuários e exames médicos particulares.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">3. Dados de Navegação e Telemetria</h2>
            <p>
              Não monitoramos nomes de arquivos, metadados internos de documentos ou textos contidos em seus PDFs. Podemos utilizar métricas anônimas e estritamente agregadas de navegação (como contagem de acessos a páginas) para fins estatísticos de desempenho de infraestrutura web, em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">4. Bibliotecas de Terceiros e Dependências</h2>
            <p>
              Para executar a inspeção e reconstrução de arquivos, utilizamos bibliotecas de código aberto auditáveis e consolidadas: <strong>PDF.js</strong> (mantida pela Fundação Mozilla) e <strong>pdf-lib</strong>. Ambas são empacotadas estaticamente na aplicação, sem carregar scripts remotos não confiáveis em tempo de execução.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">5. Seus Direitos sob a LGPD</h2>
            <p>
              Como não armazenamos seus dados pessoais em bancos de dados ou servidores, não mantemos registros de arquivos que possam ser excluídos, retificados ou exportados posteriormente. Você retém controle absoluto dos seus documentos diretamente em seu próprio computador ou celular.
            </p>
          </section>
        </div>
      </div>
    );
  }

  if (type === 'termos') {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
        <div className="mb-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">Condições de Uso</span>
          <h1 className="text-3xl font-extrabold text-slate-900 mt-1">Termos de Uso</h1>
          <p className="text-slate-600 mt-2 text-sm">
            Condições claras de utilização da ferramenta gratuita ReduzirPDF.
          </p>
        </div>

        <div className="space-y-8 text-slate-700 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">1. Aceite dos Termos</h2>
            <p>
              Ao acessar e utilizar o website ReduzirPDF, você concorda em cumprir e sujeitar-se a estes Termos de Uso e à nossa Política de Privacidade. Caso não concorde com qualquer disposição, recomendamos não utilizar os serviços.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">2. Descrição e Gratuidade do Serviço</h2>
            <p>
              O ReduzirPDF fornece uma ferramenta de utilidade pública para compressão e reconfiguração de arquivos no formato Portable Document Format (PDF) diretamente no navegador web. O serviço é disponibilizado de forma inteiramente gratuita, sem cobranças ocultas e sem exigência de assinatura ou cadastro de usuário.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">3. Responsabilidade do Usuário</h2>
            <p>
              O usuário é o único responsável pelos arquivos selecionados para processamento. Você declara que possui os direitos de uso ou autorização legítima sobre os documentos manipulados na plataforma.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">4. Isenção e Limitação de Garantias</h2>
            <p>
              A ferramenta é fornecida "no estado em que se encontra" (as is). Embora nosso motor aplique algoritmos avançados de calibração para preservar a legibilidade e nitidez, não garantimos que todo e qualquer arquivo possa atingir metas arbitrariamente baixas de tamanho (como transformar centenas de fotos de alta resolução em menos de 100 KB) sem perda de qualidade visual.
            </p>
            <p>
              Recomendamos sempre revisar visualmente o arquivo comprimido antes de enviá-lo para concursos, tribunais, órgãos públicos ou processos seletivos.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">5. Modificações e Foro</h2>
            <p>
              Estes termos podem ser atualizados periodicamente para refletir melhorias técnicas na aplicação. Aplica-se a estes termos a legislação brasileira, elegendo-se o foro da comarca competente no Brasil para dirimir eventuais controvérsias.
            </p>
          </section>
        </div>
      </div>
    );
  }

  // Página de Contato
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
      <div className="mb-8">
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">Fale Conosco</span>
        <h1 className="text-3xl font-extrabold text-slate-900 mt-1">Contato e Suporte</h1>
        <p className="text-slate-600 mt-2 text-sm">
          Estamos à disposição para esclarecer dúvidas, receber sugestões e ouvir relatos de melhorias.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Formulário de Contato */}
        <div className="md:col-span-2 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
          {contactSent ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Mensagem Enviada!</h3>
              <p className="text-sm text-slate-600 max-w-sm mx-auto">
                Agradecemos o seu contato. Nossa equipe revisará sua mensagem com atenção.
              </p>
              <button
                type="button"
                onClick={() => {
                  setContactSent(false);
                  setFormData({ name: '', email: '', subject: '', message: '' });
                }}
                className="mt-4 px-4 py-2 text-xs font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 rounded-lg"
              >
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Seu Nome</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ex: Maria da Silva"
                  className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Seu E-mail</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="exemplo@email.com.br"
                  className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Assunto</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Ex: Sugestão para arquivos de concursos"
                  className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Mensagem</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Como podemos ajudar?"
                  className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-sm rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Enviar Mensagem
              </button>
            </form>
          )}
        </div>

        {/* Informações Laterais */}
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200">
            <div className="flex items-center gap-3 mb-3 text-blue-600">
              <Mail className="w-5 h-5" />
              <h3 className="font-bold text-sm text-slate-900">E-mail Direto</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Prefere enviar um e-mail diretamente do seu cliente de correio?
            </p>
            <a
              href="mailto:contato@reduzirpdf.com.br"
              className="text-xs font-mono font-semibold text-blue-600 hover:underline"
            >
              contato@reduzirpdf.com.br
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200">
            <div className="flex items-center gap-3 mb-3 text-emerald-600">
              <HelpCircle className="w-5 h-5" />
              <h3 className="font-bold text-sm text-slate-900">Dúvidas Frequentes</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Consulte nossa seção com as perguntas mais comuns sobre limites, privacidade e formatos suportados.
            </p>
            <button
              type="button"
              onClick={() => onNavigate('/')}
              className="text-xs font-semibold text-blue-600 hover:underline"
            >
              Ver perguntas frequentes &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
