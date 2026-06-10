# Contract: PostHog Events

## Overview

PostHog analytics capture visitor behavior across all pages. Initialization is gated by cookie consent.

## Initialization Contract

```typescript
// Pseudocode for initialization
if (cookieConsent.status === 'accepted') {
  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    capture_pageview: true,     // Automatic $pageview
    session_recording: {
      maskAllInputs: true,      // Privacy: mask form inputs
    },
    loaded: (posthog) => {
      // Ready for custom events
    }
  });
} else {
  // PostHog not initialized; site functions normally
}
```

## Event Schema

### `$pageview` (automatic)

Fired by PostHog automatically when initialized with `capture_pageview: true`.

```json
{
  "event": "$pageview",
  "properties": {
    "$current_url": string,
    "$pathname": string,
    "$host": "omni-channel.com"
  }
}
```

### `cta_click` (manual)

Fired when any primary CTA is clicked.

```typescript
posthog.capture('cta_click', {
  button_text: string,    // e.g., "Book a working session"
  page: string,           // e.g., "/" or "/services"
  destination: 'calendly' | 'internal',
  url: string             // Full URL
});
```

### `quiz_answer` (manual)

Fired when a quiz option is selected.

```typescript
posthog.capture('quiz_answer', {
  question_id: number,    // 1–5
  option_index: number,   // 0–3
  page: string
});
```

### `quiz_complete` (manual)

Fired when the 5th question is answered and the result is displayed.

```typescript
posthog.capture('quiz_complete', {
  band: string,           // e.g., "Building momentum"
  score: number,          // 5–20
  max_score: 20,
  page: string
});
```

### `quiz_reset` (manual)

Fired when the user clicks "Reset".

```typescript
posthog.capture('quiz_reset', {
  page: string
});
```

### `nav_click` (manual)

Fired when a cross-page navigation link is clicked.

```typescript
posthog.capture('nav_click', {
  from_page: string,      // Current page before navigation
  to_page: string,        // Target page
  link_text: string       // Text of the clicked link
});
```

### `cookie_consent` (manual)

Fired when the user makes a consent choice.

```typescript
posthog.capture('cookie_consent', {
  choice: 'accepted' | 'declined',
  page: string
});
```

**Note**: Only fired if consent is "accepted". If declined, PostHog is not initialized and no events are captured.

## Graceful Degradation Contract

If PostHog fails to load (network error, ad blocker, script blocked):
- Site renders and functions normally
- No JavaScript errors thrown
- Custom event calls are no-ops (wrapped in `if (posthog) { ... }`)
- User experience is unaffected

## Privacy Contract

- Session recordings mask all input fields by default
- No PII is captured in custom events
- Consent must be obtained before initialization
- Declining consent permanently disables tracking for that browser
