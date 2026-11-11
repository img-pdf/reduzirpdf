import React from 'react';

interface AdSensePlaceholderProps {
  slotType: 'horizontal-banner' | 'in-content';
  className?: string;
}

export const AdSensePlaceholder: React.FC<AdSensePlaceholderProps> = ({
  slotType,
  className = '',
}) => {
  // Área reservada e formatada para futura monetização com AdSense
  // Sem scripts de terceiros, sem botões enganosos, sem obstrução de ferramentas.
  if (slotType === 'horizontal-banner') {
    return (
      <aside
        aria-label="Espaço publicitário reservado"
        className={`w-full max-w-4xl mx-auto my-8 p-3 rounded-xl border border-dashed border-slate-200 bg-slate-50/50 flex flex-col items-center justify-center min-h-[90px] text-center ${className}`}
      >
        <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">
          Publicidade
        </span>
        <div className="w-full h-12 flex items-center justify-center text-slate-300 text-xs">
          Espaço reservado para anúncio responsivo
        </div>
      </aside>
    );
  }

  return (
    <aside
      aria-label="Espaço publicitário reservado"
      className={`my-8 p-4 rounded-xl border border-dashed border-slate-200 bg-slate-50/50 flex flex-col items-center justify-center min-h-[120px] text-center ${className}`}
    >
      <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">
        Publicidade
      </span>
      <div className="w-full h-16 flex items-center justify-center text-slate-300 text-xs">
        Espaço reservado para anúncio nativo
      </div>
    </aside>
  );
};
