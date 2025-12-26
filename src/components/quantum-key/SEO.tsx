import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  ogImage?: string;
  canonical?: string;
  lang?: string;
}

const SEO = ({ title, description, keywords, ogImage, canonical, lang = 'pt-BR' }: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Update meta tags
    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
    ];

    if (ogImage) {
      metaTags.push(
        { property: 'og:image', content: ogImage },
        { name: 'twitter:image', content: ogImage }
      );
    }

    metaTags.forEach(({ name, property, content }) => {
      const attribute = name ? 'name' : 'property';
      const value = name || property;
      let element = document.querySelector(`meta[${attribute}="${value}"]`);

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, value!);
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    });

    // Update canonical URL
    if (canonical) {
      let linkElement = document.querySelector('link[rel="canonical"]');

      if (!linkElement) {
        linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'canonical');
        document.head.appendChild(linkElement);
      }

      linkElement.setAttribute('href', canonical);
    }
  }, [title, description, keywords, ogImage, canonical, lang]);

  return null;
};

export default SEO;
