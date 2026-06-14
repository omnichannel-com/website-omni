/**
 * PostHog client configuration and safe event tracking.
 * All tracking is gated by cookie consent (see use-posthog.ts).
 * @see specs/002-update-website-messaging/contracts/posthog-events.md
 */

import posthog from "posthog-js";

export const POSTHOG_API_KEY = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN || "";
export const POSTHOG_HOST =
  process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com";

export type PostHogEvent =
  | { event: "cta_click"; properties: { cta_label: string; page: string; region?: string } }
  | { event: "nav_click"; properties: { nav_label: string; page: string; region?: string } }
  | { event: "quiz_answer"; properties: { question_index: number; answer_index: number; score: number } }
  | { event: "quiz_complete"; properties: { band: string; score: number; max_score: number } }
  | { event: "quiz_reset"; properties: { page: string } }
  | { event: "cookie_consent"; properties: { choice: "accept" | "decline" } }
  | { event: "pageview"; properties: { page: string; region?: string } };

let initialized = false;

/**
 * Initialize PostHog ONLY if API key is present and user has consented.
 * Idempotent - safe to call multiple times.
 */
export function initPosthog(): void {
  if (initialized) return;
  if (typeof window === "undefined") return;
  if (!POSTHOG_API_KEY) return;

  posthog.init(POSTHOG_API_KEY, {
    api_host: POSTHOG_HOST,
    capture_pageview: true,
    loaded: (ph) => {
      if (process.env.NODE_ENV === "development") {
        ph.opt_out_capturing(); // Disable in dev unless explicitly testing
      }
    },
  });
  initialized = true;
}

/**
 * Capture a PostHog event only if the client is initialized.
 * Gracefully degrades if PostHog is not available.
 */
export function captureEvent(evt: PostHogEvent): void {
  if (typeof window === "undefined") return;
  if (!initialized || !posthog.__loaded) return;
  posthog.capture(evt.event, evt.properties);
}

/**
 * Check whether PostHog is currently initialized.
 */
export function isPosthogInitialized(): boolean {
  return initialized;
}
