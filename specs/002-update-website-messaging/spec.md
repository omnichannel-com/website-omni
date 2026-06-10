# Feature Specification: Update Website Messaging

**Feature Branch**: `002-update-website-messaging`

**Created**: 2026-06-09

**Status**: Draft — Clarifications complete

**Input**: User description: "Update the website to reflect the company's actual messaging - dont add the product piece yet"

## Overview

The website is an existing **Next.js 16** app configured for **static HTML export** (`output: "export"`), with Pagefind search, PostHog analytics, and a Tailwind CSS design system already in place. The current site positions as a SaaS product; this feature repositions it as a consultancy. The site comprises four core pages plus a content cluster of supporting articles — all static HTML deployed from this repo. The main page is a public-facing consultancy site; the second is a detailed services page; the third is an About page; the fourth is an AEO pillar targeting the query cluster around "human in control". Next.js App Router pages with `generateStaticParams` and `metadata` exports generate sitemap, `llms.txt`, and Schema.org JSON-LD at build time.

**Product rule**: No page mentions the future work operating system platform, product demo, free trial, or "omnichannel platform". The site is purely consultancy positioning.

## Canonical Definition

**Full form** (used in pillar page first paragraph, meta descriptions, About content, article intros):

> Human in control is an operating model for AI agents in which autonomous agents execute the work while a human retains final decision rights — the authority to approve, redirect, or stop any agent action at any time.

**Short form** (used in metas, bios, snippets):

> Human in control means AI agents do the work; a human keeps the final say.

**Rule**: These exact sentences must appear verbatim wherever the term is defined. No alternate phrasings.

## Pages

### Page 1 — Main Site (`index.html`)

**Title**: CX & service operations consultancy, human-in-control AI | omnichannel

**Navigation**: Sticky top bar with wordmark ("omnichannel."), links to "What we do", "How to start", "FAQ", and a primary CTA "Book a call".

**Sections (in order)**:
1. **Hero** (aurora gradient, dark text): Eyebrow "Customer experience & service operations consultancy", headline "Transform your customer experience and your service operations.", subhead "From where you are today to AI with your people in control.", lede paragraph, two CTAs ("Book a working session" linking to Calendly and "Take the two-minute check"), industry tags (Banking & finance, Insurance, Telecoms, Utilities).
2. **The Challenge**: Problem statement for executives under pressure to improve service, cut cost, and adopt AI safely.
3. **What we do** (6 cards): Maturity Review & AI readiness; CX strategy & design; Operational performance; Contact centre & platform advisory; AI & automation (human in control); Training & capability.
4. **How to start** (3 cards): Transform or optimise; Plan or review; Fix one thing.
5. **Two-minute check** (quiz): 5-question self-assessment with 4 maturity bands, scoring from 1–20. Every band suggests the same next step: "Book a working session" linking to Calendly.
6. **Our approach** + **Why work with us** (2-column): Business-first methodology on the left; checklist of credibility claims on the right (operators not theorists, independent, safe AI path).
7. **Built for your industry** (4 cards): Banking & finance; Insurance; Telecoms; Utilities — each with specific use cases and regulator references (FCA, Ofcom, Ofgem).
8. **Why human in control matters**: A concise section framing the consultancy's philosophy — AI does preparation, people retain decision authority. No product references.
9. **FAQ** (flexible number): Core questions include — What is a Maturity Review; Do you advise or deliver; Which platforms; What is human-in-control AI; How do you keep AI safe; How do engagements start and how are they priced. Additional entries may be added without updating this spec number.
10. **Get started** CTA: "Book a working session" button linking to Calendly.
11. **Footer**: Wordmark, tagline "AI does the work. You make the call.", domain links, note "Human-in-control AI for the whole organisation."

**Canonical definition placement**: The short-form canonical definition MUST appear in the hero lede or immediately following the headline. The homepage is the page AI models most often associate with the entity.

**Structured data**: Schema.org JSON-LD containing Organization, WebSite, and FAQPage with Question/Answer pairs matching the current FAQ section.

### Page 2 — Services (`omnichannel-services.html`)

**Title**: omnichannel · Services

**Navigation**: Sticky top bar with wordmark, "Services" tag, links to "What we do", "How we work", and "Book a call".

**Sections (in order)**:
1. **Hero** (aurora gradient): Eyebrow "For COOs, heads of department, and customer service leaders", headline "Lift customer experience. Cut cost to serve. Adopt AI without losing control.", subhead "The consultancy that has run the operation, not just advised on it.", two CTAs ("Book a working session" linking to Calendly and "What we do").
2. **The problem you are living with**: Pressure to improve service, cut cost, adopt AI, with regulator oversight.
3. **Why us, and why now**: Practitioner credibility, independence from platforms, safe AI introduction.
4. **What we do** (6 cards): Same 6 services as main page, slightly abbreviated copy.
5. **How we work** + **What to expect** (2-column): Business-first approach on left; outcome checklist on right (higher satisfaction, lower cost, safe AI, independent advice, more capable team).
6. **How we make AI safe** (3 numbered arguments): Accountability stays with a named person; gate by risk so you go faster; better deal for your team.
7. **Built for your industry** (4 cards): Same industries as main page.
8. **Get started** CTA (aurora gradient): "Book a working session" linking to Calendly.
9. **Footer**: Same as main page.

### Page 3 — About (`/about.html`)

**Title**: About | omnichannel

**Navigation**: Same sticky top bar as main page; no "Services" tag.

**Sections (in order)**:
1. **Hero**: Company positioning with the short-form canonical definition prominently displayed.
2. **Who we are**: Founder/practitioner background, operational credibility, independence.
3. **What we believe**: Human-in-control philosophy, business-first methodology, restraint principle.
4. **Author attribution**: Graeme Provan bio with LinkedIn link, photo placeholder, and canonical definition reference.
5. **Footer**: Same as main page.

### Page 4 — Human in Control Pillar (`/human-in-control.html`)

**Title**: What is Human in Control? | omnichannel

**Meta description**: Uses the short-form canonical definition.

**Author**: Graeme Provan (`https://www.linkedin.com/in/provan/`) — named human author on every piece in the cluster.

**Schema**: FAQPage JSON-LD + Article schema with `author`, `datePublished`, `dateModified`.

**Navigation**: Same sticky top bar as main page; no "Services" tag.

**Sections (in order)**:
1. **Hero**: H1 "What Is Human in Control?" — opens with the full canonical definition in sentence one.
2. **How Is Human in Control Different from Human in the Loop?** — comparison table of three terms (HITL, HOTL, Human in Control) covering agent autonomy and human role. No throat-clearing; answer first.
3. **Why Does Human in Control Matter?** — three numbered reasons: Accountability, Trust, Error containment.
4. **What Does Human in Control Look Like in Practice?** — four observable properties: Visibility, Decision rights, Intervention, Attribution.
5. **How Omni-Channel.com Runs Human in Control** — operational data section (placeholder until real numbers available). Must contain actual intervention rates, approval thresholds, failure cases, median response time.
6. **Frequently Asked Questions** (flexible number): Is human in control the same as human oversight; Does it slow agents down; Who is accountable when an agent makes a mistake; Is it required by regulation.
7. **Footer**: Same as main page.

**Cluster links**: Every section links back to the homepage and to the glossary page. Every supporting article in the cluster links to the pillar.

### Page 5 — Privacy (`/privacy.html`)

**Title**: Privacy Policy | omnichannel

**Navigation**: Same sticky top bar as main page; no "Services" tag.

**Sections (in order)**:
1. **Hero**: H1 "Privacy Policy" — plain, no marketing copy.
2. **What we collect**: Types of data collected (PostHog analytics, session recordings, quiz interactions). No PII beyond what the user voluntarily provides (e.g., booking form if present).
3. **How we use it**: Analytics for site improvement only; no sale or sharing with third parties.
4. **Cookies and tracking**: Explanation of PostHog cookies/localStorage; how to decline via the consent banner.
5. **Your rights**: UK ICO and Australian Privacy Act rights summary (access, correction, deletion).
6. **Contact**: Data controller contact (Graeme Provan / Omnichannel).
7. **Footer**: Same as main page.

## Content Cluster

The pillar page is supported by a cluster of articles that build topical authority. Each piece targets a real query, opens with a direct answer, links to the pillar, and uses the canonical definition verbatim when the term appears.

**Publishing cadence**: Pillar + comparison article in month one, then one piece every 2–3 weeks.

**Cluster pieces (in priority order)** — all are static pages in this repo, built as Next.js App Router pages (`page.tsx`) with content sourced from Markdown/JSON where appropriate:

1. **Human in Control vs. Human in the Loop vs. Human on the Loop** (`/human-in-control-vs-hitl-hotl.html`) — comparison query, highest intent. Publish within 2 weeks of pillar.
2. **The Four Properties of Human in Control** (`/four-properties-human-in-control.html`) — expands the "in practice" framework (Visibility, Decision rights, Intervention, Attribution).
3. **How Humans Actually Intervene in a [20,000]-Entity Agent Network** (`/how-humans-intervene.html`) — original data piece expanding the operational section of the pillar. Pitch to AI-industry newsletters and researchers.
4. **Human in Control and the Accountability Gap** (`/human-in-control-accountability-gap.html`) — connects the term to regulatory conversation (EU AI Act, NIST AI RMF) without claiming legal advice.
5. **Designing Decision Rights for AI Agents** (`/designing-decision-rights.html`) — practical guide: which actions to gate, which to free-run. Practitioner content that earns links.
6. **Glossary page** (`/glossary.html`) — short, extractable definitions of: human in control, HITL, HOTL, decision rights, intervention rights, agent autonomy, accountability gap. Must link to pillar and include canonical definition.

**Refresh rule**: The pillar page's `dateModified` must be updated with genuine changes quarterly.

## Design System

### Typography
- **Display**: Overpass (weights 400–900), used for headlines, wordmark, buttons, labels
- **Serif**: Cormorant (weights 400–700), used for subheads, card titles, pull quotes
- **Body**: Oxygen (weights 300–700), used for body copy, lede, FAQ answers

### Color Primitives
- Primary dark blue: `#1b1464`
- Accent mauve: `#aa42dc`
- Bright blue: `#0071bc`
- Grey scale: 50, 100, 200, 300, 400, 700, 900
- Gradient: `135deg, #b45fe0 → #2a2585 → #0086c8`

### Background Treatments
- Whisper: radial gradient (light purple tint)
- Tint: linear gradient (cool grey-blue)
- Indigo: radial + linear (dark blue)
- Aurora: dual radial + linear (dark with purple and blue blooms)

### Spacing Scale
4px base, 10 steps up to 128px. Border radii: 4, 8, 14, 22, pill. Shadow scale: xs through glow.

### Components
- `.btn-primary`: dark blue background, white text, shadow
- `.btn-light`: white background, dark blue text, glow on hover
- `.btn-ghost`: transparent, bordered
- `.card`: white surface, subtle border, shadow, hover lift
- `.tag`: uppercase pill label
- `.arg`: numbered argument layout (num + heading + paragraph)

### Responsive Breakpoints
- Mobile nav collapse: `680px`
- Grid stack: `860px`

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Understand the Offering (Priority: P1)

A decision-maker at a mid-to-large organisation visits the Omnichannel website and within 30 seconds understands that Omnichannel is an independent consultancy for CX and service operations, not an AI tool vendor.

**Why this priority**: The hero headline, subhead, and lede paragraph must immediately differentiate from SaaS vendors. If visitors expect a product demo, the "consultancy" framing must be unmistakable.

**Independent Test**: A first-time visitor can articulate back that Omnichannel is a consultancy (not a product) after viewing only the hero section.

**Acceptance Scenarios**:

1. **Given** a visitor lands on the homepage, **When** they read the hero, **Then** they see "customer experience and service operations consultancy" in the first sentence
2. **Given** a visitor reads the hero CTAs, **When** they see the options, **Then** the primary CTA is "Request a Maturity Review" (not "Start free trial" or "See demo")

---

### User Story 2 - Self-Assess Maturity (Priority: P1)

A prospect answers 5 quick questions and receives a personalised maturity band with a relevant next step.

**Why this priority**: The quiz is a key conversion mechanism. It must work entirely client-side, produce a coherent result, and direct the user to a relevant CTA.

**Independent Test**: A visitor can complete the quiz, receive a band name and message, and click through to the suggested next step without page reload or external dependency.

**Acceptance Scenarios**:

1. **Given** a visitor reaches the quiz section, **When** they answer all 5 questions, **Then** a result card appears showing their band, score bar, description, and CTA
2. **Given** a visitor completes the quiz and sees a result in any band, **When** they see the CTA, **Then** the button reads "Book a working session" and links to `https://calendly.com/graeme-omnichannel/30min`
3. **Given** a visitor partially completes the quiz, **When** they have not answered all questions, **Then** no result appears
4. **Given** a visitor has completed the quiz and sees a result, **When** they click "Reset", **Then** all answers are cleared and the quiz returns to its initial state

---

### User Story 3 - Navigate Between Pages (Priority: P2)

A visitor can move naturally between the main site, services page, and About page, understanding the relationship between public positioning, detailed service information, and company background.

**Why this priority**: The services page and About page are linked from the main navigation. Navigation between them must not confuse the visitor about which page they are on.

**Independent Test**: A visitor landing on any page can identify which page they are on within 3 seconds.

**Acceptance Scenarios**:

1. **Given** a visitor is on the main page, **When** they see the nav, **Then** there is no "Services" tag; the nav links are "What we do", "How to start", "FAQ"
2. **Given** a visitor is on the services page, **When** they see the nav, **Then** a "Services" tag is visible and the links are "What we do", "How we work"
3. **Given** a visitor clicks "Book a working session" from the quiz result, **When** the page loads, **Then** they arrive at the services page

---

### User Story 4 - Trust the Safety Claims (Priority: P2)

A risk-conscious executive in a regulated industry sees specific regulator names, use cases, and safety principles that match their world.

**Why this priority**: Banking, insurance, telecoms, and utilities leaders need to see their regulator (FCA, APRA, ASIC, ACMA, AER, Ofcom, Ofgem, EWOV) and their specific problems (disputes, claims, billing, vulnerable customers, energy hardship, privacy breaches, financial compliance) mentioned explicitly. Australian and UK regulators must both be represented where relevant.

**Independent Test**: A banking compliance officer can find APRA, ASIC, and Consumer Duty references within 60 seconds of scrolling.

**Acceptance Scenarios**:

1. **Given** a visitor reads the industry cards, **When** they find their sector, **Then** the description names at least one relevant regulator (e.g., APRA/ASIC for banking, ACMA for telecoms, AER/EWOV for utilities, FCA for UK) and at least one specific operational pain point
2. **Given** a visitor reads the FAQ, **When** they find "How do you keep AI safe in a regulated industry?", **Then** the answer names multiple regulators (APRA, ASIC, ACMA, AER, FCA, Ofcom, Ofgem, EWOV) and explains the audit trail, Privacy Principles, and SOC controls

---

### User Story 5 - Measure and Learn (Priority: P2)

The Omnichannel team understands how visitors interact with the site so they can improve messaging and conversion.

**Why this priority**: PostHog has been installed via the wizard. The integration must capture meaningful events across all pages, including the quiz, CTAs, and cross-page navigation.

**Independent Test**: The team can open PostHog and see page views, CTA clicks, and quiz completions within 24 hours of deployment.

**Acceptance Scenarios**:

1. **Given** a visitor loads any page, **When** the page renders, **Then** a PostHog pageview event fires with the correct page name and URL
2. **Given** a visitor clicks any CTA button, **When** the click occurs, **Then** a custom event is captured with the button text and page source
3. **Given** a visitor completes the quiz, **When** they reach the result, **Then** a custom event captures the final band name and total score
4. **Given** the team views PostHog, **When** they filter by page, **Then** they can distinguish main page traffic from services page traffic

---

### Edge Cases

- **Quiz without JavaScript**: The quiz is entirely client-side JavaScript. If JS is disabled, the quiz section shows a static fallback message directing the user to "Request a Maturity Review".
- **Deep-link to quiz result**: There is no URL state for quiz results; a visitor cannot share a direct link to their band. This is accepted as a v1 limitation.
- **Services page discovery without main page context**: A visitor arriving directly at the services page from an external link may not have the "consultancy" framing. The services page hero includes the consultancy descriptor to compensate.
- **Quiz persistence**: Quiz answers are stored in `sessionStorage` so a page refresh within the same browsing session preserves progress. A new browser session starts the quiz from question 1.
- **Quiz reset**: The quiz must expose a "Reset" button on the result card. Clicking it clears `sessionStorage` answers and hides the result, returning the quiz to its initial unanswered state.
- **PostHog blocked by ad blocker**: If PostHog fails to load, the site must not break; analytics simply fail silently.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The main page hero MUST state "customer experience and service operations consultancy" within the first sentence of the lede
- **FR-002**: The services page MUST display a "Services" tag in the navigation to distinguish it from the main page
- **FR-003**: The quiz MUST calculate a score from 5–20 and assign one of four bands, each with a unique message and CTA
- **FR-004**: The quiz MUST work entirely client-side without external API calls or page reloads, and MUST persist answers in `sessionStorage` so a refresh within the same session does not reset progress
- **FR-005**: All pages MUST share the same CSS custom properties and component classes so visual consistency is maintained
- **FR-006**: The FAQ section MUST contain entries that match the Schema.org structured data exactly; the count is flexible and may expand without spec amendment
- **FR-007**: The industry cards MUST name the relevant regulator for each sector (FCA, APRA, ASIC, ACMA, AER, Ofcom, Ofgem, EWOV) and reference SOC controls and Privacy Principles where applicable
- **FR-008**: The footer on all pages MUST contain the tagline "AI does the work. You make the call.", link to `omni-channel.com`, and link to the Privacy Policy (`/privacy.html`); `omnichannel.cx` MUST redirect to `omni-channel.com` and MUST NOT be linked directly
- **FR-009**: No page MUST mention a product demo, free trial, "omnichannel platform", or future SaaS offering. The site is consultancy-only.
- **FR-009a**: Every booking CTA ("Book a working session", "Book a call", "Request a Maturity Review") MUST link to the same Calendly URL: `https://calendly.com/graeme-omnichannel/30min`
- **FR-010**: The main page navigation MUST contain "What we do", "How to start", "FAQ"; the services page navigation MUST contain "What we do", "How we work"
- **FR-011**: PostHog MUST be initialised on all pages and capture `$pageview` events automatically
- **FR-012**: Custom PostHog events MUST fire for: (a) primary CTA clicks, (b) quiz question selections, (c) quiz completion with band name and score, (d) cross-page navigation clicks, (e) quiz reset clicks
- **FR-013**: PostHog session recording MUST be enabled so the team can replay visitor sessions
- **FR-014**: If PostHog fails to load (network error, ad blocker), the site MUST render and function normally without JavaScript errors
- **FR-015**: The pillar page (`/human-in-control.html`) MUST open with the full canonical definition in the first sentence of the first paragraph
- **FR-016**: The short-form canonical definition MUST appear in the homepage meta description, hero lede, and About content
- **FR-017**: Every page in the Human in Control cluster MUST include a named human author (Graeme Provan) and link to their LinkedIn profile
- **FR-018**: The pillar page MUST include FAQPage Schema.org JSON-LD with Question/Answer pairs matching the current FAQ section, plus Article schema with `author`, `datePublished`, and `dateModified`
- **FR-019**: The robots.txt on the canonical domain MUST explicitly allow AI crawlers: GPTBot, OAI-SearchBot, ClaudeBot, Claude-SearchBot, PerplexityBot, Google-Extended, CCBot, Amazonbot, Applebot-Extended
- **FR-020**: An `llms.txt` file MUST exist at the domain root, pointing to the pillar page, glossary page, and canonical definition
- **FR-021**: The canonical domain MUST consolidate on `omni-channel.com`; `omnichannel.cx` MUST 301-redirect page-for-page
- **FR-022**: The pillar page MUST link back to the homepage and to a glossary page; every cluster article MUST link to the pillar page
- **FR-023**: The homepage title and description MUST include "human in control" alongside the consultancy positioning
- **FR-024**: The pillar page's `dateModified` MUST be refreshed with genuine updates at least quarterly
- **FR-025**: A cookie consent banner MUST appear on first visit to any page, offering "Accept" and "Decline" buttons; declining MUST prevent PostHog initialisation (FR-014 already covers graceful degradation)
- **FR-026**: The Privacy Policy page (`/privacy.html`) MUST be reachable from the footer of every page and explain PostHog tracking, user rights under UK ICO and Australian Privacy Act, and how to withdraw consent
- **FR-027**: The pillar page and every cluster article MUST include Open Graph (`og:title`, `og:description`, `og:type=article`, `og:url`) and Twitter Card (`twitter:card=summary_large_image`) tags
- **FR-028**: Every page MUST include a self-referencing canonical `<link rel="canonical">` tag pointing to its `omni-channel.com` URL
- **FR-029**: The Organization Schema.org JSON-LD MUST be updated from SaaS product positioning to consultancy positioning, with name "omnichannel" and URL `omni-channel.com`
- **FR-030**: Every cluster article MUST include Article schema with `author` (Graeme Provan), `datePublished`, and `dateModified` — not just the pillar page
- **FR-031**: The pillar page MUST include at least 3 external authority links (e.g., NIST AI RMF, EU AI Act, relevant academic or regulatory sources) in the body content to boost topical authority
- **FR-032**: The pillar page MUST display a table of contents (anchor links to H2/H3 sections) above the first H2 to improve heading extraction by crawlers
- **FR-033**: The pillar page body content (excluding FAQ) MUST contain minimum 2000 words to signal comprehensive coverage
- **FR-034**: The canonical definition on the pillar page MUST be wrapped in a container with `id="canonical-definition"` or `<blockquote cite="https://omni-channel.com/human-in-control">` for programmatic extraction by crawlers

### Key Entities

- **Maturity Review**: The entry-point engagement; assessed via 5-question quiz producing a 4-band result
- **Quiz Band**: One of "Getting started" (5–8), "Building momentum" (9–13), "Advancing" (14–17), "Almost channelless" (18–20)
- **CTA**: Primary conversion buttons — all booking CTAs link to `https://calendly.com/graeme-omnichannel/30min`; "Take the two-minute check" triggers the quiz
- **Page Set**: The five pages (main, services, About, pillar, privacy) as a coherent site experience
- **About Page**: The `/about.html` page containing company background, author attribution, and canonical definition
- **Privacy Page**: The `/privacy.html` page containing cookie and tracking disclosures, compliant with UK ICO and Australian Privacy Act
- **PostHog Event**: Captured interaction — pageview, click, quiz answer, quiz completion
- **Canonical Definition**: The single, repeatable sentence that teaches AI engines to associate "human in control" with Omnichannel
- **Pillar Page**: The authoritative `/human-in-control.html` page targeting "what is human in control" and related queries
- **Content Cluster**: The set of supporting articles that build topical authority around the pillar
- **AEO Crawler**: An AI search engine or LLM crawler (GPTBot, ClaudeBot, PerplexityBot, etc.) that ingests site content for citation

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A first-time visitor can state that Omnichannel is a consultancy (not a SaaS product) after spending under 30 seconds on the homepage
- **SC-002**: The quiz completion rate is at least 40% of visitors who start it (measured in PostHog)
- **SC-003**: The Omnichannel leadership team confirms all pages accurately reflect the company stance and do not oversell
- **SC-004**: Every claim on any page can be traced back to the approved company brief, with no invented capabilities
- **SC-005**: PostHog captures at least 90% of page loads and CTA clicks without duplication or data loss
- **SC-006**: The team can view session recordings and a funnel from quiz start to CTA click within 48 hours of deployment
- **SC-007**: The site passes accessibility basics: all images have alt text, all buttons have labels, colour contrast meets WCAG AA, focus states are visible
- **SC-008**: All pages render correctly on mobile (680px breakpoint), tablet (860px breakpoint), and desktop
- **SC-009**: A manual check of Google SGE, Perplexity, Anthropic (Claude), and Brave Search for the query "what is human in control" shows the Omnichannel pillar page or canonical definition appearing in at least one engine's response within 90 days of cluster publication
- **SC-010**: The canonical definition appears verbatim on at least 5 distinct site pages (pillar, homepage, services, About, glossary) with zero variant phrasings
- **SC-011**: The `llms.txt` file is reachable at the domain root and correctly lists the pillar, glossary, and canonical definition URLs
- **SC-012**: A robots.txt test confirms all listed AI crawlers are explicitly allowed on the canonical domain
- **SC-013**: The named author (Graeme Provan) appears on every cluster piece and the pillar page, with a valid LinkedIn link
- **SC-014**: The pillar page's `dateModified` is no older than 90 days at any review checkpoint
- **SC-015**: The cookie consent banner renders on first visit, records the choice in `localStorage`, and declining prevents PostHog from loading without JavaScript errors; the banner does not re-appear on subsequent visits unless consent is withdrawn
- **SC-016**: Every page has a valid Open Graph `og:title`, `og:description`, and `og:url` tag; the pillar page and cluster articles have `og:type=article`
- **SC-017**: Every page has a self-referencing canonical URL pointing to `omni-channel.com` (not `omnichannel.cx`)
- **SC-018**: The Organization schema shows name "omnichannel" with URL `omni-channel.com` — no SaaS product references
- **SC-019**: Every cluster article contains Article schema with `author`, `datePublished`, and `dateModified` fields
- **SC-020**: The pillar page contains at least 3 outbound links to authoritative sources (NIST, EU AI Act, academic) and they are functional
- **SC-021**: The pillar page displays a clickable table of contents above the first H2 section
- **SC-022**: The pillar page word count (excluding FAQ) is 2000+ words as measured by a standard text analyzer
- **SC-023**: The canonical definition on the pillar page is programmatically extractable via `document.getElementById('canonical-definition')` or `document.querySelector('blockquote[cite*="omni-channel.com"]')`

## Assumptions

- The site is built with Next.js 16 using `output: "export"` for static HTML generation; no server-side rendering at runtime. Pagefind provides client-side search. PostHog is already integrated.
- PostHog project and API keys are available; the wizard has generated the initialisation snippet which must be pasted into all pages
- The quiz is self-contained JavaScript inline in the main page; no external quiz service is used
- All pages are hosted on the same domain so cross-page navigation is simple relative linking
- No page mentions the future product or platform; the site is consultancy-only
- Google Fonts (Overpass, Cormorant, Oxygen) are loaded from CDN and assumed available
- Schema.org structured data is for SEO only; no dynamic rendering or validation pipeline is required
- The AEO window for "human in control" is open now and closing fast; speed of publication matters more than perfection for the first cluster pieces
- Real operational data for the "How we run it" section may not be available immediately; placeholder claims must be marked and replaced before the pillar is promoted
- The content cluster assumes a publishing cadence of one piece every 2–3 weeks after the pillar + comparison article launch
- Author attribution requires a real bio page for Graeme Provan; if not yet built, the LinkedIn URL serves as the author reference
- Domain consolidation (`omni-channel.com` vs `omnichannel.cx`) may require DNS and hosting coordination outside the scope of this spec
- AI crawler bot names (GPTBot, ClaudeBot, etc.) are not stable contracts; the robots.txt allowlist may need updating as vendors rename or add new bots
- PostHog analytics are conditional on visitor consent; the site must function fully without tracking if declined
