import React from 'react';
import { FileDown, ShieldCheck, Lock, Cpu } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 text-sm border-t border-slate-800">
      {/* Trust Banner */}
      <div className="border-b border-slate-800 bg-slate-950/60 py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-slate-200">
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-white">Privacidade Absoluta Garantida</p>
              <p className="text-xs text-slate-400">Seus arquivos não saem do seu dispositivo. Todo o processamento é feito no seu próprio navegador.</p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-blue-400" /> Sem envio a servidores
            </span>
            <span className="flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-purple-400" /> Execução local
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Columns */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-white">
            <div className="w-7 h-7 rounded-md bg-blue-600 text-white flex items-center justify-center">
              <FileDown className="w-4 h-4" />
            </div>
            <span className="text-lg font-bold">Reduzir<span className="text-blue-500">PDF</span></span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Ferramenta gratuita e segura para comprimir arquivos PDF para o tamanho exato que você precisa no seu celular ou computador.
          </p>
          <p className="text-xs text-slate-400">
            Desenvolvido para usuários no Brasil.
          </p>
        </div>

        {/* Column 1: Tamanhos Populares */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3">Tamanhos Populares</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <a href="/comprimir-pdf-para-100kb" onClick={(e) => handleNavClick(e, '/comprimir-pdf-para-100kb')} className="hover:text-blue-400 transition-colors">
                Comprimir para 100 KB
              </a>
            </li>
            <li>
              <a href="/comprimir-pdf-para-200kb" onClick={(e) => handleNavClick(e, '/comprimir-pdf-para-200kb')} className="hover:text-blue-400 transition-colors">
                Comprimir para 200 KB
              </a>
            </li>
            <li>
              <a href="/comprimir-pdf-para-500kb" onClick={(e) => handleNavClick(e, '/comprimir-pdf-para-500kb')} className="hover:text-blue-400 transition-colors">
                Comprimir para 500 KB
              </a>
            </li>
            <li>
              <a href="/comprimir-pdf-para-1mb-gratis" onClick={(e) => handleNavClick(e, '/comprimir-pdf-para-1mb-gratis')} className="hover:text-blue-400 transition-colors">
                Comprimir para 1 MB
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2: Casos de Uso */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3">Casos de Uso</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <a href="/compactar-pdf-para-enviar" onClick={(e) => handleNavClick(e, '/compactar-pdf-para-enviar')} className="hover:text-blue-400 transition-colors">
                Compactar para enviar por E-mail
              </a>
            </li>
            <li>
              <a href="/diminuir-tamanho-de-pdf" onClick={(e) => handleNavClick(e, '/diminuir-tamanho-de-pdf')} className="hover:text-blue-400 transition-colors">
                Diminuir tamanho de PDF online
              </a>
            </li>
            <li>
              <a href="/" onClick={(e) => handleNavClick(e, '/')} className="hover:text-blue-400 transition-colors">
                Página inicial e ferramenta geral
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Institucional */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3">Institucional</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <a href="/privacidade" onClick={(e) => handleNavClick(e, '/privacidade')} className="hover:text-blue-400 transition-colors">
                Política de Privacidade
              </a>
            </li>
            <li>
              <a href="/termos" onClick={(e) => handleNavClick(e, '/termos')} className="hover:text-blue-400 transition-colors">
                Termos de Uso
              </a>
            </li>
            <li>
              <a href="/contato" onClick={(e) => handleNavClick(e, '/contato')} className="hover:text-blue-400 transition-colors">
                Contato e Suporte
              </a>
            </li>
            <li className="pt-2 border-t border-slate-800 text-[11px] text-slate-500">
              <span className="block text-slate-400 font-semibold mb-1">Para Agentes de IA:</span>
              <div className="flex items-center gap-2">
                <a href="/llms.txt" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 font-mono transition-colors">llms.txt</a>
                <span>·</span>
                <a href="/tools.json" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 font-mono transition-colors">tools.json</a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800/80 py-6 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} ReduzirPDF. Todos os direitos reservados.</p>
          <p className="text-center sm:text-right text-slate-400">
            Cálculo binário exato (1 KB = 1024 bytes). Processamento 100% no navegador.
          </p>
        </div>
      </div>
    </footer>
  );
};
