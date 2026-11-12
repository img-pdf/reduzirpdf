/**
 * ReduzirPDF — Definições de Tipos para SEO, AEO, GEO e AAO
 */

export interface FAQItem {
  question: string;
  answer: string;
}

export interface UseCaseItem {
  title: string;
  description: string;
  iconName?: string;
}

export interface StepItem {
  step: number;
  title: string;
  description: string;
}

export interface TipItem {
  title: string;
  description: string;
}

export interface LimitationItem {
  title: string;
  description: string;
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface PageContent {
  path: string;
  title: string;
  metaDescription: string;
  h1: string;
  heroDescription: string;
  directAnswer: string; // Resposta direta imediata para Answer Engines (AEO)
  defaultTargetBytes: number; // Em bytes (1 KB = 1024 B)
  introText: string;
  howCompressionWorks: {
    title: string;
    description: string;
    losslessText: string;
    rasterizedText: string;
  };
  tipsForReducingSize: TipItem[];
  limitations: LimitationItem[];
  useCases: UseCaseItem[];
  howToSteps: StepItem[];
  faqs: FAQItem[];
  relatedPresets: { label: string; path: string; sizeText: string }[];
  breadcrumbs: BreadcrumbItem[];
}
