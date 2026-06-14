# Contract: Calendly Integration

## Overview

All booking CTAs on the site route to a single Calendly event type. This is a client-side-only integration — no backend handler required.

## URL Contract

```
https://calendly.com/graeme-omnichannel/30min
```

**Invariant**: This URL is the sole booking destination. All CTA components must import and use the constant defined in `lib/calendly.ts`.

## CTA Variants

| Context | Button Text | Destination |
|---------|-------------|-------------|
| Homepage hero | "Book a working session" | Calendly URL |
| Homepage get-started | "Book a working session" | Calendly URL |
| Services hero | "Book a working session" | Calendly URL |
| Services get-started | "Book a working session" | Calendly URL |
| Quiz result (all bands) | "Book a working session" | Calendly URL |
| Nav primary | "Book a call" | Calendly URL |

**Rule**: Text may vary by context but `href` is identical.

## PostHog Tracking Contract

Every Calendly CTA click fires a `cta_click` event:

```typescript
posthog.capture('cta_click', {
  button_text: string,    // The visible text on the button
  page: string,           // Current page path
  destination: 'calendly', // Fixed value
  calendly_url: string    // The full Calendly URL
});
```

## UX Contract

- Calendly opens in a new tab (`target="_blank" rel="noopener noreferrer"`)
- Current page remains open for analytics continuity
- No iframe embed (avoids cookie/third-party complexity)
- Link is styled as a primary button (`.btn-primary`)

## Error Handling

- Calendly being down does not affect the site
- The link is a standard `<a>` tag — no JavaScript dependency
- If PostHog fails to load, the link still works
