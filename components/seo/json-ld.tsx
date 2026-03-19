import { SITE_CONFIG } from "@/config/site";
import { absoluteUrl } from "@/lib/url";

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.repoUrl,
    },
  };

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD requires injecting script content
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export interface ArticleJsonLdProps {
  headline: string;
  description: string;
  url: string;
}

export function ArticleJsonLd({ headline, description, url }: ArticleJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article" as const,
    headline,
    description,
    url: absoluteUrl(url),
  };

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD requires injecting script content
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
