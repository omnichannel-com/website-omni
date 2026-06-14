# Data Model: Update Website Messaging

This document defines the content structures, metadata schemas, and type contracts for the website. The site has no database — all data is static content in the repository.

## Page Metadata

Every page exports a `Metadata` object via Next.js `metadata` API:

```typescript
interface PageMetadata {
  title: string;                    // Page title + " | omnichannel"
  description: string;              // Meta description (short-form canonical definition for pillar)
  alternates: {
    canonical: string;              // Self-referencing omni-channel.com URL
  };
  openGraph: {
    title: string;
    description: string;
    url: string;
    type: 'website' | 'article';    // article for pillar + cluster
    images: string[];
  };
  twitter: {
    card: 'summary_large_image';
    title: string;
    description: string;
    images: string[];
  };
  authors?: { name: string; url: string }[];  // Graeme Provan on cluster pieces
}
```

## Quiz Data Structure

```typescript
interface QuizQuestion {
  id: number;
  text: string;
  options: {
    label: string;
    score: number;  // 1–4 per question
  }[];
}

interface QuizBand {
  name: string;     // "Getting started" | "Building momentum" | "Advancing" | "Almost channelless"
  minScore: number;
  maxScore: number;
  message: string;  // Personalized description
  ctaText: string;  // Always "Book a working session"
  ctaUrl: string;   // Always Calendly URL
}

interface QuizState {
  answers: Record<number, number>;  // questionId -> optionIndex
  currentQuestion: number;
  isComplete: boolean;
  result?: {
    band: string;
    score: number;
    maxPossible: number;
  };
}
```

**Persistence**: `sessionStorage` key `omni-quiz-state`

## Content Cluster Article Schema

Front-matter for Markdown-based cluster articles:

```yaml
---
title: string                    # H1 / og:title
datePublished: ISO-8601          # Article schema
dateModified: ISO-8601           # Article schema
author: "Graeme Provan"          # Article schema + visible attribution
authorUrl: "https://www.linkedin.com/in/provan/"
description: string              # Meta description + og:description
canonicalUrl: string             # omni-channel.com full path
tags: string[]                   # For internal organization
draft: boolean                   # false for published
---
```

## Schema.org JSON-LD Structures

### Organization (updated for consultancy)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "omnichannel",
  "url": "https://omni-channel.com",
  "logo": "https://omni-channel.com/assets/logo-full-color.png",
  "sameAs": ["https://www.linkedin.com/company/omnichannelcx"],
  "description": "Customer experience and service operations consultancy"
}
```

### Article (pillar + cluster pieces)

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": string,
  "author": {
    "@type": "Person",
    "name": "Graeme Provan",
    "url": "https://www.linkedin.com/in/provan/"
  },
  "datePublished": ISO-8601,
  "dateModified": ISO-8601,
  "publisher": {
    "@type": "Organization",
    "name": "omnichannel",
    "logo": { "@type": "ImageObject", "url": "..." }
  }
}
```

### FAQPage (pillar only)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": string,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": string
      }
    }
  ]
}
```

## Cookie Consent State

```typescript
interface CookieConsent {
  status: 'accepted' | 'declined' | 'undecided';
  timestamp: ISO-8601;
  version: string;  // For invalidation on policy updates
}
```

**Persistence**: `localStorage` key `omni-consent`

## Calendly Integration

```typescript
const CALENDLY_URL = 'https://calendly.com/graeme-omnichannel/30min';

interface CalendlyCTA {
  text: string;       // "Book a working session" | "Book a call" | "Request a Maturity Review"
  url: typeof CALENDLY_URL;
  trackingEvent: string;  // PostHog event name
}
```

All CTAs share the same URL. The `text` varies by context but the destination is identical.

## `llms.txt` Structure

```text
# OmniChannel

> [Short-form canonical definition]

## Core concepts
- [What Is Human in Control?](https://omni-channel.com/human-in-control): ...
- [Human in Control vs...](https://omni-channel.com/human-in-control-vs-hitl-hotl): ...
- [Agentic AI Glossary](https://omni-channel.com/glossary): ...

## Company
- [OmniChannel Home](https://omni-channel.com/): ...
- [Services](https://omni-channel.com/services): ...
- [About](https://omni-channel.com/about): ...

## Optional
- [Checklists](https://omni-channel.com/human-in-control-checklist): ...
```

## PostHog Event Schema

```typescript
interface PostHogEvents {
  '$pageview': { page: string; url: string };
  'cta_click': { button_text: string; page: string; destination: string };
  'quiz_answer': { question_id: number; option_index: number };
  'quiz_complete': { band: string; score: number; max_score: number };
  'quiz_reset': {};
  'nav_click': { from_page: string; to_page: string };
  'cookie_consent': { choice: 'accepted' | 'declined' };
}
```
