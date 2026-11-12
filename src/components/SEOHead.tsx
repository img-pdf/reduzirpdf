import React, { useEffect } from 'react';
import { PageContent } from '../types';

export const PRODUCTION_CANONICAL_HOST = 'https://reduzirpdf.pages.dev';

export function getCanonicalUrlForPath(path: string): string {
  if (!path || path === '/') {
    return `${PRODUCTION_CANONICAL_HOST}/`;
  }
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${PRODUCTION_CANONICAL_HOST}${cleanPath}`;
}

interface SEOHeadProps {
  page: PageContent;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ page }) => {
  useEffect(() => {
    // 1. Atualizar Título da Página
    document.title = page.title;

    // 2. Atualizar Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', page.metaDescription);

    // 3. Atualizar Canonical Link e Prevenir Duplicatas
    const canonicalUrl = getCanonicalUrlForPath(page.path);
    const existingCanonicals = document.querySelectorAll('link[rel="canonical"]');
    let linkCanonical: HTMLLinkElement;
    if (existingCanonicals.length > 0) {
      linkCanonical = existingCanonicals[0] as HTMLLinkElement;
      // Remove quaisquer duplicatas extras
      for (let i = 1; i < existingCanonicals.length; i++) {
        existingCanonicals[i].remove();
      }
    } else {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // 4. OpenGraph e Twitter Tags
    const setMetaTag = (attrName: 'property' | 'name', attrValue: string, content: string) => {
      let meta = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attrName, attrValue);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // OpenGraph
    setMetaTag('property', 'og:title', page.title);
    setMetaTag('property', 'og:description', page.metaDescription);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:site_name', 'ReduzirPDF');
    setMetaTag('property', 'og:locale', 'pt_BR');
    setMetaTag('property', 'og:type', 'website');

    // Twitter
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', page.title);
    setMetaTag('name', 'twitter:description', page.metaDescription);
    setMetaTag('name', 'twitter:url', canonicalUrl);

    // 5. Schema.org JSON-LD Estruturado
    const jsonLdData: Record<string, unknown>[] = [
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'ReduzirPDF',
        url: `${PRODUCTION_CANONICAL_HOST}/`,
        inLanguage: 'pt-BR',
        description: 'Comprima arquivos PDF para o tamanho que você precisa diretamente no navegador com total privacidade.',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: page.title,
        url: canonicalUrl,
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'All',
        browserRequirements: 'Requires JavaScript. Requires HTML5.',
        description: page.metaDescription,
        inLanguage: 'pt-BR',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'BRL',
        },
      },
    ];

    if (page.faqs && page.faqs.length > 0) {
      jsonLdData.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: page.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      });
    }

    // Injeta ou atualiza o script JSON-LD
    let scriptTag = document.getElementById('schema-jsonld') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'schema-jsonld';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(jsonLdData);
  }, [page]);

  return null;
};
