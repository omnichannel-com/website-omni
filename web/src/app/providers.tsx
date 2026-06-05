'use client';

import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import { useEffect, useRef } from 'react';

function initPostHog() {
  if (typeof window === 'undefined') return;
  const apiKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const apiHost = process.env.NEXT_PUBLIC_POSTHOG_HOST;

  if (apiKey && apiHost) {
    posthog.init(apiKey, {
      api_host: apiHost,
      person_profiles: 'identified_only',
      loaded: (posthog) => {
        if (process.env.NODE_ENV === 'development') {
          posthog.debug();
        }
      },
    });
  }
}

export function Providers({ children }: { children: React.ReactNode }) {
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      initPostHog();
    }
  }, []);

  return (
    <PostHogProvider client={posthog}>
      {children}
    </PostHogProvider>
  );
}
