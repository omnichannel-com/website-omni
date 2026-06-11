"use client";

import { useCallback, useEffect, useState } from "react";
import { initPosthog, captureEvent, type PostHogEvent } from "@/lib/posthog";

const CONSENT_KEY = "ocx_cookie_consent";

export type ConsentState = "undecided" | "accepted" | "declined";

/**
 * Hook that gates PostHog initialization behind cookie consent.
 * Returns the current consent state and a safe capture wrapper.
 */
export function usePosthogConsent() {
  const [consent, setConsent] = useState<ConsentState>("undecided");

  useEffect(() => {
    const stored = window.localStorage.getItem(CONSENT_KEY);
    if (stored === "accepted") {
      setConsent("accepted");
      initPosthog();
    } else if (stored === "declined") {
      setConsent("declined");
    }
  }, []);

  const accept = useCallback(() => {
    window.localStorage.setItem(CONSENT_KEY, "accepted");
    setConsent("accepted");
    initPosthog();
    captureEvent({
      event: "cookie_consent",
      properties: { choice: "accept" },
    });
  }, []);

  const decline = useCallback(() => {
    window.localStorage.setItem(CONSENT_KEY, "declined");
    setConsent("declined");
    captureEvent({
      event: "cookie_consent",
      properties: { choice: "decline" },
    });
  }, []);

  const capture = useCallback((evt: PostHogEvent) => {
    if (window.localStorage.getItem(CONSENT_KEY) === "accepted") {
      captureEvent(evt);
    }
  }, []);

  return { consent, accept, decline, capture };
}
