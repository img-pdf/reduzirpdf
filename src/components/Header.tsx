import React from 'react';
import { FileDown, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onNavigate: (path: string) => void;
  currentPath: string;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, currentPath }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleActionClick = () => {
    if (currentPath !== '/') {
      onNavigate('/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const dropzone = document.getElementById('upload-area');
    if (dropzone) {
      dropzone.scrollIntoView({ behavior: 'smooth' });
      dropzone.focus();
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="/"
          onClick={(e) => handleNavClick(e, '/')}
          className="flex items-center gap-2.5 text-slate-900 group whitespace-nowrap shrink-0"
          title="ReduzirPDF Página Inicial"
        >
          <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-sm group-hover:bg-blue-700 transition-colors">
            <FileDown className="w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">
            Reduzir<span className="text-blue-600">PDF</span>
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <a
            href="#como-funciona"
            onClick={(e) => {
              if (currentPath !== '/') {
                handleNavClick(e, '/');
                setTimeout(() => {
                  document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              } else {
                e.preventDefault();
                document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="hover:text-blue-600 transition-colors whitespace-nowrap shrink-0"
          >
            Como funciona
          </a>
          <a
            href="#perguntas-frequentes"
            onClick={(e) => {
              if (currentPath !== '/') {
                handleNavClick(e, '/');
                setTimeout(() => {
                  document.getElementById('perguntas-frequentes')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              } else {
                e.preventDefault();
                document.getElementById('perguntas-frequentes')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="hover:text-blue-600 transition-colors whitespace-nowrap shrink-0"
          >
            Perguntas frequentes
          </a>
          <a
            href="/comprimir-pdf-para-100kb"
            onClick={(e) => handleNavClick(e, '/comprimir-pdf-para-100kb')}
            className={`hover:text-blue-600 transition-colors whitespace-nowrap shrink-0 ${currentPath === '/comprimir-pdf-para-100kb' ? 'text-blue-600 font-semibold' : ''}`}
          >
            100 KB
          </a>
          <a
            href="/privacidade"
            onClick={(e) => handleNavClick(e, '/privacidade')}
            className={`hover:text-blue-600 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${currentPath === '/privacidade' ? 'text-blue-600 font-semibold' : ''}`}
          >
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Privacidade
          </a>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleActionClick}
            className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-sm whitespace-nowrap shrink-0"
          >
            Comprimir PDF
          </button>
        </div>
      </div>
    </header>
  );
};
