import { useEffect } from 'react';

const SEO = ({
  title,
  description,
  canonicalUrl,
  ogType = 'website',
  ogImage = 'https://goldenwingsedu.in/cropped-logo-og-png.png',
  jsonLD = null,
}) => {
  useEffect(() => {
    // 1. Title
    if (title) {
      document.title = title;
    }

    // Helper function to update or create meta tags
    const updateMetaTag = (attributeName, attributeValue, contentValue) => {
      if (!contentValue) return;
      let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', contentValue);
    };

    // 2. Meta description
    updateMetaTag('name', 'description', description);

    // 3. Robots meta tag (standard configuration)
    updateMetaTag('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // 4. Open Graph Tags
    updateMetaTag('property', 'og:title', title);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:type', ogType);
    updateMetaTag('property', 'og:url', canonicalUrl || window.location.href);
    updateMetaTag('property', 'og:image', ogImage);
    updateMetaTag('property', 'og:site_name', 'Golden Wings');
    updateMetaTag('property', 'og:locale', 'en_US');

    // 5. Twitter Card Tags
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', title);
    updateMetaTag('name', 'twitter:description', description);
    updateMetaTag('name', 'twitter:image', ogImage);

    // 6. Canonical link
    if (canonicalUrl) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonicalUrl);
    }

    // 7. Structured Data (JSON-LD)
    let jsonLdScript = document.getElementById('seo-json-ld');
    if (jsonLD) {
      if (!jsonLdScript) {
        jsonLdScript = document.createElement('script');
        jsonLdScript.id = 'seo-json-ld';
        jsonLdScript.type = 'application/ld+json';
        document.head.appendChild(jsonLdScript);
      }
      jsonLdScript.textContent = JSON.stringify(jsonLD);
    } else if (jsonLdScript) {
      jsonLdScript.remove();
    }

    return () => {
      // Metatags will persist and be updated by the next active page
    };
  }, [title, description, canonicalUrl, ogType, ogImage, jsonLD]);

  return null;
};

export default SEO;
