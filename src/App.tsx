import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CompressorTool } from './components/CompressorTool';
import { SEOHead } from './components/SEOHead';
import { AdSensePlaceholder } from './components/AdSensePlaceholder';
import { LegalPage } from './pages/LegalPage';
import { PAGES_DATA } from './data/pagesData';
import {
  ShieldCheck,
  Zap,
  Lock,
  ChevronDown,
  ArrowRight,
  FileCheck2,
  Sliders,
  DownloadCloud
} from 'lucide-react';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      return PAGES_DATA[path] ? path : '/';
    }
    return '/';
  });

  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      setCurrentPath(PAGES_DATA[path] ? path : '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState(null, '', path);
      setCurrentPath(PAGES_DATA[path] ? path : '/');
      setExpandedFaqIndex(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const currentPage = PAGES_DATA[currentPath] || PAGES_DATA['/'];

  const isLegalRoute = currentPath === '/privacidade' || currentPath === '/termos' || currentPath === '/contato';

  const toggleFaq = (index: number) => {
    setExpandedFaqIndex(expandedFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <SEOHead page={currentPage} />
      
      {/* Header com Top Bar Contract */}
      <Header onNavigate={navigateTo} currentPath={currentPath} />

      {/* Conteúdo Principal */}
      <main className="flex-1">
        {isLegalRoute ? (
          <LegalPage
            type={currentPath.replace('/', '') as 'privacidade' | 'termos' | 'contato'}
            onNavigate={navigateTo}
          />
        ) : (
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
            {/* Hero Section */}
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
              {/* Trust statement unboxed */}
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 bg-blue-50/80 px-3 py-1 rounded-full border border-blue-200/60 mb-4">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>Seus arquivos não saem do seu dispositivo · 100% no navegador</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight sm:leading-tight">
                {currentPage.h1}
              </h1>

              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                {currentPage.heroDescription}
              </p>
            </div>

            {/* Ferramenta Principal de Compressão (Visível Imediatamente) */}
            <div className="mb-10">
              <CompressorTool
                initialTargetBytes={currentPage.defaultTargetBytes}
              />
            </div>

            {/* Espaço reservado AdSense Horizontal (não obstrutivo) */}
            <AdSensePlaceholder slotType="horizontal-banner" />

            {/* Texto de Apresentação e Contexto da Página */}
            <section className="my-12 p-6 sm:p-8 bg-white rounded-2xl border border-slate-200/80">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                Por que usar o ReduzirPDF?
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {currentPage.introText}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-100 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Zap className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-semibold text-slate-800">100% Gratuito</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Lock className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-semibold text-slate-800">Sem Cadastro</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-semibold text-slate-800">Privacidade Total</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <Sliders className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-semibold text-slate-800">Tamanho Preciso</span>
                </div>
              </div>
            </section>

            {/* Seção Como Funciona */}
            <section id="como-funciona" className="my-16 scroll-mt-20">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">Passo a Passo</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">Como comprimir um PDF?</h2>
                <p className="text-slate-600 text-sm mt-2">Três etapas rápidas para atingir o tamanho ideal sem complicações.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {currentPage.howToSteps.map((step) => (
                  <div
                    key={step.step}
                    className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm relative overflow-hidden"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center text-sm mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Casos de Uso Reais no Brasil */}
            {currentPage.useCases && currentPage.useCases.length > 0 && (
              <section className="my-16">
                <div className="text-center max-w-2xl mx-auto mb-10">
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">Aplicações Práticas</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">Ideal para o dia a dia no Brasil</h2>
                  <p className="text-slate-600 text-sm mt-2">
                    Evite erros de upload e recusas em sistemas que possuem limites restritos de arquivo.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentPage.useCases.map((uc, i) => (
                    <div
                      key={i}
                      className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                        <FileCheck2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 mb-1">{uc.title}</h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{uc.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Links Rápidos para Outros Tamanhos */}
            {currentPage.relatedPresets && currentPage.relatedPresets.length > 0 && (
              <section className="my-12 p-6 rounded-2xl bg-slate-100/80 border border-slate-200">
                <h3 className="text-sm font-bold text-slate-900 mb-3">Precisa de outro limite de arquivo?</h3>
                <div className="flex flex-wrap gap-2.5">
                  {currentPage.relatedPresets.map((preset) => (
                    <a
                      key={preset.path}
                      href={preset.path}
                      onClick={(e) => {
                        e.preventDefault();
                        navigateTo(preset.path);
                      }}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-white border border-slate-200 hover:border-blue-500 hover:text-blue-600 transition-colors shadow-xs"
                    >
                      <span>{preset.label}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              </section>
            )}

            {/* Espaço reservado AdSense In-Content */}
            <AdSensePlaceholder slotType="in-content" />

            {/* Perguntas Frequentes (FAQ) */}
            {currentPage.faqs && currentPage.faqs.length > 0 && (
              <section id="perguntas-frequentes" className="my-16 scroll-mt-20">
                <div className="text-center max-w-2xl mx-auto mb-10">
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">Tire Suas Dúvidas</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">Perguntas Frequentes</h2>
                  <p className="text-slate-600 text-sm mt-2">
                    Respostas claras e transparentes sobre a compressão de PDF no navegador.
                  </p>
                </div>

                <div className="space-y-3 max-w-3xl mx-auto">
                  {currentPage.faqs.map((faq, idx) => {
                    const isOpen = expandedFaqIndex === idx;
                    return (
                      <div
                        key={idx}
                        className="rounded-xl bg-white border border-slate-200 overflow-hidden transition-all shadow-xs"
                      >
                        <button
                          type="button"
                          onClick={() => toggleFaq(idx)}
                          className="w-full p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-slate-900 flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors"
                        >
                          <span>{faq.question}</span>
                          <ChevronDown
                            className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ${
                              isOpen ? 'rotate-180 text-blue-600' : ''
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            )}
          </div>
        )}
      </main>

      {/* Footer Profissional e Confiável */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
