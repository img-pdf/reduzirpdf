/**
 * ReduzirPDF — Definições de Tipos
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

export interface PageContent {
  path: string;
  title: string;
  metaDescription: string;
  h1: string;
  heroDescription: string;
  defaultTargetBytes: number; // Em bytes (1 KB = 1024 B)
  introText: string;
  useCases: UseCaseItem[];
  howToSteps: { step: number; title: string; description: string }[];
  faqs: FAQItem[];
  relatedPresets: { label: string; path: string; sizeText: string }[];
}
