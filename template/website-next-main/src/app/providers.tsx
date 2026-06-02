'use client';

import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import { NextUIProvider } from '@nextui-org/react';

if (typeof window !== 'undefined') { // Ensure this runs only on the client side
  const apiKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const apiHost = process.env.NEXT_PUBLIC_POSTHOG_HOST;

  if (!apiKey || !apiHost) {
    console.error('PostHog environment variables are missing.');
  } else {
    posthog.init(apiKey, {
      api_host: apiHost,
      person_profiles: 'identified_only', // or 'always' for anonymous users
      loaded: (posthog) => {
        // Conditionally enable debug mode only in development
        if (process.env.NODE_ENV === 'development') {
          posthog.debug();
        }
      },
    });
  }
}

// Optional: Suppress all console logs in production
if (process.env.NODE_ENV === 'production') {
  console.log = () => {};
  console.error = () => {};
  console.warn = () => {};
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PostHogProvider client={posthog}>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </PostHogProvider>
  );
}
