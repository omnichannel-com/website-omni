<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the omnichannel CX marketing website. The project uses Next.js 16 App Router with static export (`output: "export"`), so the integration uses `instrumentation-client.ts` — the recommended approach for Next.js 15.3+ — for client-side PostHog initialization, with the EU region host configured directly.

**Key changes made:**

- **`web/instrumentation-client.ts`** (created): Initialises PostHog using the recommended Next.js 15.3+ pattern. Configured for the EU region (`https://eu.i.posthog.com`), with `capture_exceptions: true` for automatic error tracking and `defaults: '2026-01-30'` for the latest feature defaults.
- **`web/src/app/providers.tsx`** (updated): Removed the legacy PostHog `useEffect` init and `PostHogProvider` wrapper, which would have conflicted with `instrumentation-client.ts`. The component now passes children through cleanly.
- **`web/.env.local`** (created): Added `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` environment variables.
- **11 event capture calls** added across 9 components covering the full visitor journey — from first hero impression to contact form submission.

## Events instrumented

| Event | Description | File |
|-------|-------------|------|
| `contact_form_opened` | User opens the contact/support form modal | `web/src/components/contact-sections/contact-hero.tsx` |
| `contact_form_submitted` | User successfully submits the contact form | `web/src/components/contact-sections/contact-hero.tsx` |
| `contact_form_failed` | Contact form submission returns an error | `web/src/components/contact-sections/contact-hero.tsx` |
| `hero_cta_clicked` | User clicks a CTA in the homepage hero (`cta_label`: `get_started` or `request_demo`) | `web/src/components/landing-sections/hero.tsx` |
| `pricing_billing_period_changed` | User toggles pricing between monthly and yearly (`billing_period`) | `web/src/components/pricing-sections/hero-section.tsx` |
| `pricing_plan_cta_clicked` | User clicks "Get started" on a pricing plan (`plan`, `billing_period`) | `web/src/components/pricing-sections/price-plans.tsx` |
| `nav_get_started_clicked` | User clicks "Get started" in the main navigation bar | `web/src/components/navbars/secondary-navbar.tsx` |
| `nav_login_clicked` | User clicks "Log in" in the top navigation bar | `web/src/components/navbars/primary-navbar.tsx` |
| `blog_card_clicked` | User clicks to read a blog post (`blog_slug`, `blog_title`) | `web/src/components/blog-sections/Blog-cards.tsx` |
| `view_pricing_clicked` | User clicks "View pricing" CTA from the homepage | `web/src/components/landing-sections/viewPricing.tsx` |
| `explore_platform_clicked` | User clicks "Explore the platform" from the features section | `web/src/components/landing-sections/alteregos.tsx` |

## Next steps

We've built a dashboard and five insights to keep an eye on visitor behaviour based on the events just instrumented:

**Dashboard**
- [Analytics basics (wizard)](https://eu.posthog.com/project/198175/dashboard/736426)

**Insights**
- [Lead generation funnel (wizard)](https://eu.posthog.com/project/198175/insights/SgCLuzbT) — Conversion funnel: hero CTA → contact form opened → contact form submitted
- [Contact form submissions (wizard)](https://eu.posthog.com/project/198175/insights/xfosrFjV) — Successful submissions vs. failures over time
- [CTA engagement over time (wizard)](https://eu.posthog.com/project/198175/insights/vhBry6Rz) — All key CTA clicks (hero, nav, pricing section, platform) side by side
- [Pricing plan interest by plan (wizard)](https://eu.posthog.com/project/198175/insights/Ge0nAMHC) — Which plan ("Get started") CTAs users click, broken down by `starter` / `professional` / `premium`
- [Blog engagement (wizard)](https://eu.posthog.com/project/198175/insights/2xgQ7mNf) — Blog post card clicks over time

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/integration-nextjs-app-router/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
