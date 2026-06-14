# Tasks: Update Website Messaging

**Input**: Design documents from `/specs/002-update-website-messaging/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Not explicitly requested in spec; test tasks included for critical paths (quiz, cookie consent, AEO artifacts).

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- Next.js App Router pages: `web/src/app/`
- Shared components: `web/src/components/`
- Utility libraries: `web/src/lib/`
- Hooks: `web/src/hooks/`
- Static assets: `web/public/`
- Playwright E2E: `web/e2e/`

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 [P] Audit existing `web/src/app/` pages and components to identify what stays, what changes, what is deleted
- [x] T002 [P] Verify `web/tailwind.config.ts` brand token mapping against spec color primitives
- [x] T003 Update `web/src/app/layout.tsx` metadata base from `omnichannelcx.com` to `omnichannel.cx`, update Organization schema to consultancy positioning
- [x] T004 Create shared utility files: `web/src/lib/calendly.ts` (URL constant), `web/src/lib/schema-org.ts` (JSON-LD generators)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T005 [P] Create cookie consent banner component: `web/src/components/cookie-banner/cookie-banner.tsx`
- [x] T006 Create `web/src/hooks/use-posthog.ts` — safe PostHog initialization gated by cookie consent
- [x] T007 Create `web/src/lib/posthog.ts` — PostHog client configuration with event type definitions
- [x] T008 Update `web/public/robots.txt` with AI crawler allowlist (GPTBot, ClaudeBot, PerplexityBot, etc.)
- [x] T009 Create `web/public/llms.txt` with canonical definition, pillar URL, glossary URL, and company pages
- [x] T010 Create shared UI primitives in `web/src/components/ui/`: `Card`, `Button`, `Tag`, `Arg` (if not already present)
- [x] T011 Update `web/src/app/layout.tsx` to include cookie banner, PostHog provider (conditional), and global metadata template

**Checkpoint**: Foundation ready — cookie consent works, PostHog is gated, robots.txt and llms.txt are valid, shared components exist

---

## Phase 3: User Story 1 - Understand the Offering (Priority: P1) 🎯 MVP

**Goal**: A visitor landing on the homepage immediately understands Omnichannel is a consultancy, not a SaaS product.

**Independent Test**: A first-time visitor can articulate that Omnichannel is a consultancy after viewing only the hero section.

### Tests for User Story 1

- [x] T012 [P] [US1] Playwright test: homepage hero contains "customer experience and service operations consultancy" in first sentence
- [x] T013 [P] [US1] Playwright test: no "free trial", "demo", "platform" language appears on homepage

### Implementation for User Story 1

- [x] T014 [P] [US1] Update `web/src/app/page.tsx` — replace SaaS hero with consultancy hero, eyebrow, headline, subhead, lede, CTAs
- [x] T015 [P] [US1] Create `web/src/components/landing-sections/hero.tsx` — consultancy hero section with aurora gradient, canonical definition placement
- [x] T016 [P] [US1] Create `web/src/components/landing-sections/challenge.tsx` — "The Challenge" section
- [x] T017 [P] [US1] Create `web/src/components/landing-sections/services.tsx` — "What we do" 6-card grid
- [x] T018 [P] [US1] Create `web/src/components/landing-sections/how-to-start.tsx` — "How to start" 3-card section
- [x] T019 [P] [US1] Create `web/src/components/landing-sections/approach.tsx` — "Our approach" + "Why work with us" 2-column
- [x] T020 [P] [US1] Create `web/src/components/landing-sections/industry-cards.tsx` — "Built for your industry" 4 cards with regulator references
- [x] T021 [P] [US1] Create `web/src/components/landing-sections/why-hic.tsx` — "Why human in control matters" section
- [x] T022 [P] [US1] Create `web/src/components/landing-sections/faq.tsx` — FAQ section with flexible entries, Schema.org FAQPage JSON-LD
- [x] T023 [P] [US1] Create `web/src/components/landing-sections/cta-section.tsx` — "Get started" CTA section
- [x] T024 [P] [US1] Create `web/src/components/footer/footer.tsx` — footer with tagline, domain link, privacy link
- [x] T025 [P] [US1] Update `web/src/app/page.tsx` — assemble all landing sections in correct order
- [x] T026 [US1] Update `web/src/components/navbars/primary-navbar.tsx` — consultancy nav links ("What we do", "How to start", "FAQ", "Book a call")
- [x] T027 [US1] Add homepage Open Graph tags (`og:title`, `og:description`, `og:type=website`, `og:url`) to `web/src/app/page.tsx` metadata
- [x] T028 [US1] Add homepage canonical tag to `web/src/app/page.tsx`

**Checkpoint**: Homepage renders as consultancy site. No SaaS language. Hero passes 30-second comprehension test.

---

## Phase 4: User Story 2 - Self-Assess Maturity (Priority: P1)

**Goal**: A prospect completes a 5-question quiz, receives a maturity band, and books a working session.

**Independent Test**: A visitor can complete the quiz, receive a band and score, click the CTA, and reset the quiz — all without page reload.

### Tests for User Story 2

- [x] T029 [P] [US2] Playwright test: quiz flow — answer 5 questions, see result, verify CTA links to Calendly
- [x] T030 [P] [US2] Playwright test: quiz reset clears answers and hides result
- [x] T031 [P] [US2] Playwright test: quiz persistence — refresh preserves answers in same session

### Implementation for User Story 2

- [x] T032 [P] [US2] Create quiz data file: `web/src/lib/quiz-data.ts` — 5 questions, 4 options each (scoring 1–4)
- [x] T033 [P] [US2] Create quiz band definitions: `web/src/lib/quiz-bands.ts` — 4 bands with name, score range, message, CTA
- [x] T034 [P] [US2] Create `web/src/hooks/use-quiz.ts` — quiz state management with `sessionStorage` persistence, reset, scoring logic
- [x] T035 [P] [US2] Create `web/src/components/quiz/quiz-question.tsx` — single question UI component
- [x] T036 [P] [US2] Create `web/src/components/quiz/quiz-result.tsx` — result card with band, score bar, description, CTA, Reset button
- [x] T037 [P] [US2] Create `web/src/components/quiz/quiz-container.tsx` — main quiz container orchestrating questions and result
- [x] T038 [US2] Wire quiz PostHog events: `quiz_answer`, `quiz_complete` (band + score), `quiz_reset`
- [x] T039 [US2] Add quiz section to `web/src/app/page.tsx` ("Two-minute check" section)
- [x] T040 [US2] Add no-JS fallback message in quiz container for users with JavaScript disabled

**Checkpoint**: Quiz works client-side, persists in session, resets, and fires PostHog events.

---

## Phase 5: User Story 3 - Navigate Between Pages (Priority: P2)

**Goal**: A visitor can move between main site, services, and About, always knowing which page they are on.

**Independent Test**: A visitor landing on any page can identify which page they are on within 3 seconds.

### Tests for User Story 3

- [x] T041 [P] [US3] Playwright test: services page nav shows "Services" tag; main page does not
- [x] T042 [P] [US3] Playwright test: cross-page navigation works and page identity is clear

### Implementation for User Story 3

- [x] T043 [P] [US3] Create `web/src/app/services/page.tsx` — full services page with all sections (hero, problem, why us, what we do, how we work, how we make AI safe, industry cards, CTA, footer)
- [x] T044 [P] [US3] Create `web/src/components/navbars/secondary-navbar.tsx` — services variant with "Services" tag
- [x] T045 [P] [US3] Create `web/src/app/about/page.tsx` — About page (hero, who we are, what we believe, author attribution, footer)
- [x] T046 [US3] Update primary navbar CTAs to link to `/services` and `/about`
- [x] T047 [P] [US3] Add services page Open Graph and canonical tags
- [x] T048 [P] [US3] Add about page Open Graph and canonical tags

**Checkpoint**: Services and About pages exist, nav distinguishes them, cross-page links work.

---

## Phase 6: User Story 4 - Trust the Safety Claims (Priority: P2)

**Goal**: A risk-conscious executive sees regulator names, use cases, and safety principles specific to their industry.

**Independent Test**: A banking compliance officer can find APRA, ASIC, and Consumer Duty references within 60 seconds of scrolling.

### Tests for User Story 4

- [x] T049 [P] [US4] Playwright test: industry cards mention correct regulators (APRA/ASIC for banking, ACMA for telecoms, etc.)
- [x] T050 [P] [US4] Playwright test: FAQ mentions regulators and SOC controls

### Implementation for User Story 4

- [x] T051 [US4] Populate industry cards in `web/src/components/landing-sections/industry-cards.tsx` with regulator names (FCA, APRA, ASIC, ACMA, AER, Ofcom, Ofgem, EWOV) and operational pain points
- [x] T052 [US4] Populate FAQ entries in `web/src/components/landing-sections/faq.tsx` with regulator references, audit trail, Privacy Principles, SOC controls
- [x] T053 [US4] Add regulator references to services page industry cards
- [x] T054 [US4] Verify all pages have correct footer with tagline and privacy link

**Checkpoint**: Regulators named on every relevant surface. FAQ covers safety in regulated industries.

---

## Phase 7: User Story 5 - Measure and Learn (Priority: P2)

**Goal**: The Omnichannel team can view visitor interactions in PostHog within 24 hours of deployment.

**Independent Test**: PostHog dashboard shows pageviews, CTA clicks, and quiz completions filtered by page.

### Tests for User Story 5

- [x] T055 [P] [US5] Playwright test: PostHog pageview fires on page load
- [x] T056 [P] [US5] Playwright test: CTA click fires custom event with correct properties

### Implementation for User Story 5

- [x] T057 [P] [US5] Wire all CTA buttons to fire `cta_click` PostHog event via shared handler
- [x] T058 [P] [US5] Wire cross-page nav links to fire `nav_click` PostHog event
- [x] T059 [US5] Verify cookie consent banner fires `cookie_consent` event (only on accept)
- [x] T060 [US5] Add `data-pagefind-body` attribute to main content container (preserves Pagefind search)
- [x] T061 [US5] Verify PostHog session recording is enabled in config

**Checkpoint**: All PostHog events fire correctly. Team can filter by page in dashboard.

---

## Phase 8: AEO Pillar Page (Priority: P1 — Parallel with US1)

**Goal**: The `/human-in-control.html` page becomes the authoritative source for "what is human in control" queries.

**Independent Test**: Manual check: the canonical definition appears in sentence one, the page has 2000+ words, a table of contents, external authority links, and Article + FAQPage schema.

### Tests for AEO Pillar

- [x] T062 [P] [US-AEO] Playwright test: pillar page contains canonical definition verbatim in first sentence
- [x] T063 [P] [US-AEO] Playwright test: pillar page has `id="canonical-definition"` on definition container
- [x] T064 [P] [US-AEO] Playwright test: pillar page has at least 3 external links to authority sources

### Implementation for AEO Pillar

- [x] T065 [P] [US-AEO] Create `web/src/app/human-in-control/page.tsx` — pillar page with all sections
- [x] T066 [P] [US-AEO] Create pillar hero section with full canonical definition in sentence one, wrapped in `id="canonical-definition"`
- [x] T067 [P] [US-AEO] Create comparison table section: HITL vs HOTL vs Human in Control
- [x] T068 [P] [US-AEO] Create "Why Does Human in Control Matter?" section (3 numbered reasons)
- [x] T069 [P] [US-AEO] Create "What Does Human in Control Look Like in Practice?" section (4 observable properties)
- [x] T070 [P] [US-AEO] Create "How omnichannel.cx Runs Human in Control" section with placeholder operational data (marked for replacement)
- [x] T071 [P] [US-AEO] Create pillar FAQ section with Schema.org FAQPage JSON-LD
- [x] T072 [P] [US-AEO] Add table of contents component with anchor links to all H2/H3 sections
- [x] T073 [P] [US-AEO] Add external authority links (NIST AI RMF, EU AI Act, academic sources) to body content
- [x] T074 [P] [US-AEO] Add Article schema with author (Graeme Provan), datePublished, dateModified
- [x] T075 [P] [US-AEO] Add Open Graph tags (`og:type=article`) and Twitter Card
- [x] T076 [P] [US-AEO] Add canonical tag and self-referencing canonical URL

**Checkpoint**: Pillar page is comprehensive, extractable, and authoritative.

---

## Phase 9: AEO Content Cluster (Priority: P2 — Post-Pillar)

**Goal**: Six supporting articles build topical authority around the pillar.

**Independent Test**: Each cluster article links to the pillar, uses the canonical definition verbatim, and has Article schema with author and dates.

### Implementation for Content Cluster

- [x] T077 [P] [US-CLUSTER] Create `web/src/app/human-in-control-vs-hitl-hotl/page.tsx` — comparison article
- [x] T078 [P] [US-CLUSTER] Create `web/src/app/four-properties-human-in-control/page.tsx` — properties article
- [x] T079 [P] [US-CLUSTER] Create `web/src/app/how-humans-intervene/page.tsx` — operational data article
- [x] T080 [P] [US-CLUSTER] Create `web/src/app/human-in-control-accountability-gap/page.tsx` — accountability article
- [x] T081 [P] [US-CLUSTER] Create `web/src/app/designing-decision-rights/page.tsx` — decision rights article
- [x] T082 [P] [US-CLUSTER] Create `web/src/app/glossary/page.tsx` — glossary with definitions
- [x] T083 [US-CLUSTER] Add Article schema to all cluster articles (author, datePublished, dateModified)
- [x] T084 [US-CLUSTER] Add Open Graph tags (`og:type=article`) to all cluster articles
- [x] T085 [US-CLUSTER] Verify all cluster articles link to pillar page and use canonical definition verbatim
- [x] T086 [US-CLUSTER] Update `web/public/llms.txt` with cluster article URLs as they are published

**Checkpoint**: All 6 cluster articles exist, link correctly, and have required schema.

---

## Phase 10: Privacy Page & Compliance (Priority: P2)

**Goal**: The site meets UK ICO and Australian Privacy Act requirements.

**Independent Test**: A visitor can decline cookies, view the privacy policy, and understand their rights.

### Tests for Privacy

- [x] T087 [P] [US-PRIVACY] Playwright test: declining cookies prevents PostHog initialization
- [x] T088 [P] [US-PRIVACY] Playwright test: privacy page is reachable from footer

### Implementation for Privacy

- [x] T089 [P] [US-PRIVACY] Create `web/src/app/privacy-policy/page.tsx` — privacy policy with all required sections
- [x] T090 [P] [US-PRIVACY] Add privacy page content: what we collect, how we use it, cookies/tracking, user rights (UK ICO + Australian Privacy Act), contact
- [x] T091 [P] [US-PRIVACY] Verify footer on all pages links to `/privacy-policy`
- [x] T092 [P] [US-PRIVACY] Verify cookie banner stores choice in `localStorage` and does not reappear

**Checkpoint**: Cookie consent works. Privacy policy is complete and reachable.

---

## Phase 11: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T093 [P] Update `web/next.config.mjs` if needed for new static routes
- [x] T094 [P] Verify `npm run build` succeeds and `out/` contains all pages
- [x] T095 [P] Verify Pagefind index is built in postbuild (`pagefind --site out`)
- [x] T096 [P] Run Playwright E2E tests: `npm run test`
- [x] T097 [P] Run quickstart.md validation scenarios manually
- [x] T098 [P] Verify all pages have self-referencing canonical tags pointing to `omnichannel.cx`
- [x] T099 [P] Verify Organization schema in `layout.tsx` shows consultancy positioning
- [x] T100 [P] Verify no "omnichannel platform", "demo", "free trial" language exists anywhere (`grep -ri`)
- [x] T101 Update `web/public/sitemap.xml` (auto-generated or manual) with all page URLs
- [x] T102 Final AEO audit: verify `llms.txt`, `robots.txt`, canonical tags, schema, external links

---

## Phase 12: SEO & Geo-Targeting Remediation (Post-Launch)

**Purpose**: Address critical SEO/AEO gaps in domain consistency, geo-targeting, and keyword coverage.

- [x] T103 [P] Fix all hardcoded domain references across codebase from `omnichannelcx.com` and `omnichannel.cx` to `omnichannel.cx`
- [x] T104 [P] Update LinkedIn URL across all files from `omnichannelcx` to `omnichannel-cx`
- [x] T105 [P] Update `web/public/sitemap.xml`: regenerate with correct domain (`omnichannel.cx`), add all core pages, cluster pages, and geo landing page URLs
- [x] T106 [P] Update `web/src/lib/schema-org.ts`: add `areaServed` geo signals to Organization schema (Australia, New Zealand, Japan, South Korea, Indonesia, Philippines, Fiji, Asia-Pacific)
- [x] T107 [P] Strengthen `web/src/app/services/page.tsx` title and description with geo-targeting keywords (APAC, Australia, New Zealand)
- [x] T108 [P] Strengthen `web/src/app/about/page.tsx` title and description with geo-targeting keywords (APAC, Australia, New Zealand, Japan, South Korea)
- [x] T109 [P] Inject "agentic AI" keyword into `web/src/app/page.tsx` title, description, and headings
- [x] T110 [P] Create `web/src/components/geo/geo-page.tsx` — reusable geo landing page component with PostHog tracking
- [x] T111 [P] Create `web/src/app/apac/page.tsx` — APAC landing page with unique metadata, regulators, and industries
- [x] T112 [P] Create `web/src/app/australia/page.tsx` — Australia landing page with unique metadata, regulators, and industries
- [x] T113 [P] Create `web/src/app/new-zealand/page.tsx` — New Zealand landing page with unique metadata, regulators, and industries
- [x] T114 [P] Create `web/src/app/asia/page.tsx` — Asia landing page with unique metadata, regulators, and industries
- [x] T115 [P] Create `web/src/app/japan/page.tsx` — Japan landing page with unique metadata, regulators, and industries
- [x] T116 [P] Create `web/src/app/south-korea/page.tsx` — South Korea landing page with unique metadata, regulators, and industries
- [x] T117 [P] Create `web/src/app/indonesia/page.tsx` — Indonesia landing page with unique metadata, regulators, and industries
- [x] T118 [P] Create `web/src/app/philippines/page.tsx` — Philippines landing page with unique metadata, regulators, and industries
- [x] T119 [P] Create `web/src/app/fiji/page.tsx` — Fiji landing page with unique metadata, regulators, and industries
- [x] T120 [P] Add `region?: string` property to PostHog event types in `web/src/lib/posthog.ts` for geo page segmentation
- [x] T121 [P] Add "Where we work" geo navigation links section to `web/src/app/services/page.tsx` and `web/src/app/about/page.tsx`
- [x] T122 Run `npm run build` and verify zero errors; confirm all 9 geo pages are present in output

**Checkpoint**: All geo pages build cleanly. PostHog events include region. Main pages link to geo pages.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion — BLOCKS all user stories
- **User Stories (Phase 3–7)**: All depend on Foundational phase completion
  - US1 (homepage) and US-AEO (pillar) can proceed in parallel after Foundational
  - US2 (quiz) depends on US1 homepage layout
  - US3 (services/about), US4 (regulators), US5 (PostHog) can proceed in parallel after US1
- **Cluster (Phase 9)**: Depends on pillar page (US-AEO) being complete
- **Privacy (Phase 10)**: Can proceed in parallel with user stories after Foundational
- **Polish (Phase 11)**: Depends on all desired user stories being complete

### Within Each User Story

- Models/data before components
- Components before page assembly
- Page assembly before wiring events
- Core implementation before integration

### Parallel Opportunities

- All Setup tasks (T001–T004) can run in parallel
- All Foundational tasks (T005–T011) can run in parallel (within Phase 2)
- US1 homepage sections (T014–T025) can be developed in parallel by different developers
- US3 services + about pages (T043–T048) can run in parallel
- US-AEO pillar sections (T065–T076) can be developed in parallel
- Cluster articles (T077–T086) can be written in parallel once pillar is done

---

## Implementation Strategy

### MVP First (User Story 1 + Pillar Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL — blocks all stories)
3. Complete Phase 3: User Story 1 (homepage consultancy repositioning)
4. Complete Phase 8: AEO Pillar Page
5. **STOP and VALIDATE**: Test homepage + pillar independently
6. Deploy if ready — AEO window is time-sensitive

### Incremental Delivery

1. Setup + Foundational → Foundation ready
2. Add US1 (homepage) → Test independently → Deploy (MVP!)
3. Add US-AEO (pillar) → Test independently → Deploy
4. Add US2 (quiz) → Test independently → Deploy
5. Add US3 (services/about) → Test independently → Deploy
6. Add US4 (regulators) → Test independently → Deploy
7. Add US5 (PostHog wiring) → Test independently → Deploy
8. Add cluster articles → Deploy as each piece is written

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: US1 (homepage)
   - Developer B: US-AEO (pillar page)
   - Developer C: US-PRIVACY (cookie banner + privacy page)
3. Then:
   - Developer A: US2 (quiz)
   - Developer B: US3 (services + about)
   - Developer C: Cluster articles (as content is ready)

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- AEO content (pillar + cluster) should be published as soon as ready — speed matters more than perfection
