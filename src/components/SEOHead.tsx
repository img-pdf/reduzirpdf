import React, { useEffect } from 'react';
import { PageContent } from '../types';

interface SEOHeadProps {
  page: PageContent;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ page }) => {
  useEffect(() => {
    // 1. Atualizar Título
    document.title = page.title;

    // 2. Atualizar Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', page.metaDescription);

    // 3. Atualizar Canonical Link
    const canonicalUrl = `https://reduzirpdf.com.br${page.path === '/' ? '' : page.path}`;
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // 4. OpenGraph Tags
    const setMetaTag = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    setMetaTag('og:title', page.title);
    setMetaTag('og:description', page.metaDescription);
    setMetaTag('og:url', canonicalUrl);

    // 5. Schema.org JSON-LD
    const jsonLdData: Record<string, unknown>[] = [
      {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'ReduzirPDF',
        url: canonicalUrl,
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'All',
        browserRequirements: 'Requires JavaScript. Requires HTML5.',
        description: page.metaDescription,
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

    // Injeta script JSON-LD
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
