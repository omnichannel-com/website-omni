/**
 * Schema.org JSON-LD generators for AEO and structured data.
 * All outputs are plain objects ready for JSON.stringify().
 */

export interface OrganizationSchema {
  "@context": "https://schema.org";
  "@type": "Organization";
  name: string;
  url: string;
  logo: string;
  description: string;
  sameAs: string[];
  areaServed?: Array<{ "@type": string; name: string }>;
}

export interface WebSiteSchema {
  "@context": "https://schema.org";
  "@type": "WebSite";
  name: string;
  url: string;
  description: string;
}

export interface QuestionAnswer {
  "@type": "Question";
  name: string;
  acceptedAnswer: {
    "@type": "Answer";
    text: string;
  };
}

export interface FAQPageSchema {
  "@context": "https://schema.org";
  "@type": "FAQPage";
  mainEntity: QuestionAnswer[];
}

export interface ArticleSchema {
  "@context": "https://schema.org";
  "@type": "Article";
  headline: string;
  description: string;
  url: string;
  author: {
    "@type": "Person";
    name: string;
    url?: string;
  };
  datePublished: string;
  dateModified?: string;
  publisher?: OrganizationSchema;
}

const CANONICAL_DOMAIN = "https://omnichannel.cx";

export function organizationSchema(): OrganizationSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "omnichannel",
    url: CANONICAL_DOMAIN,
    logo: `${CANONICAL_DOMAIN}/assets/logo-full-color.png`,
    description:
      "A customer experience and service operations consultancy. We help organisations transform CX, adopt AI safely, and keep humans in control.",
    sameAs: [
      "https://www.linkedin.com/company/omnichannel-cx",
      "https://www.linkedin.com/in/graemeprovan",
    ],
    areaServed: [
      { "@type": "Country", name: "Australia" },
      { "@type": "Country", name: "New Zealand" },
      { "@type": "Country", name: "Japan" },
      { "@type": "Country", name: "South Korea" },
      { "@type": "Country", name: "Indonesia" },
      { "@type": "Country", name: "Philippines" },
      { "@type": "Country", name: "Fiji" },
      { "@type": "Place", name: "Asia-Pacific" },
    ],
  };
}

export function websiteSchema(): WebSiteSchema {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "omnichannel",
    url: CANONICAL_DOMAIN,
    description:
      "Customer experience and service operations consultancy, human-in-control AI.",
  };
}

export function faqPageSchema(questions: QuestionAnswer[]): FAQPageSchema {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions,
  };
}

export function articleSchema(opts: {
  headline: string;
  description: string;
  url: string;
  authorName: string;
  authorUrl: string;
  datePublished: string;
  dateModified?: string;
}): ArticleSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    url: opts.url,
    author: {
      "@type": "Person",
      name: opts.authorName,
      url: opts.authorUrl,
    },
    datePublished: opts.datePublished,
    ...(opts.dateModified ? { dateModified: opts.dateModified } : {}),
    publisher: organizationSchema(),
  };
}

/**
 * Serialize a Schema.org object to a safe JSON-LD script string.
 * Escapes `</` to prevent XSS in HTML script contexts.
 */
export function safeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
