"use client";

import { usePosthogConsent } from "@/hooks/use-posthog";

export default function CookieBanner() {
  const { consent, accept, decline } = usePosthogConsent();

  if (consent !== "undecided") return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[300] bg-ocx-bg border-t border-ocx-border shadow-ocx-lg px-4 py-4 md:px-12"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-ocx-fg font-body">
          We use cookies to understand how visitors use our site.{" "}
          <a
            href="/privacy-policy"
            className="underline text-ocx-bright-blue hover:text-ocx-fg-accent transition-colors duration-ocx-fast"
          >
            Privacy policy
          </a>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-sm font-body text-ocx-fg-muted border border-ocx-border rounded-ocx-md hover:bg-ocx-bg-muted transition-colors duration-ocx-fast"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm font-display font-semibold text-white bg-ocx-bright-blue rounded-ocx-md hover:bg-ocx-dark-blue transition-colors duration-ocx-fast"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
