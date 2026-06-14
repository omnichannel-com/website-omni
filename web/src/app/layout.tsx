import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Providers } from "./providers";
import CookieBanner from "@/components/cookie-banner/cookie-banner";

function safeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export const metadata: Metadata = {
  metadataBase: new URL("https://omnichannel.cx"),
  title: {
    default: "omnichannel - CX & service operations consultancy",
    template: "%s | omnichannel",
  },
  description:
    "A customer experience and service operations consultancy. We help organisations transform CX, adopt AI safely, and keep humans in control.",
  openGraph: {
    title: "omnichannel - CX & service operations consultancy",
    description:
      "A customer experience and service operations consultancy. We help organisations transform CX, adopt AI safely, and keep humans in control.",
    images: ["/assets/logo-full-color.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "omnichannel - CX & service operations consultancy",
    description:
      "A customer experience and service operations consultancy. We help organisations transform CX, adopt AI safely, and keep humans in control.",
    images: ["/assets/logo-full-color.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href="/assets/omnichannel-cx-icon-large.svg" type="image/svg+xml" />
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(t,e){var o,n,p,r;e.__SV||(window.posthog && window.posthog.__loaded)||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="rn sn init kn Qr wn Cn yn capture calculateEventProperties Rn register register_once register_for_session unregister unregister_for_session An getFeatureFlag getFeatureFlagPayload getFeatureFlagResult isFeatureEnabled reloadFeatureFlags updateFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey displaySurvey cancelPendingSurvey canRenderSurvey canRenderSurveyAsync Fn identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset setIdentity clearIdentity get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException addExceptionStep captureLog startExceptionAutocapture stopExceptionAutocapture loadToolbar get_property getSessionProperty On En createPersonProfile setInternalOrTestUser Ln gn $n opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing get_explicit_consent_status is_capturing clear_opt_in_out_capturing In debug Kr Pn getPageViewId captureTraceFeedback captureTraceMetric vn".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
    posthog.init('phc_A6uGh3tR6iyZGf78qae43Bx7AJgic6vvas583t5brQVf', {
        api_host: 'https://t.omnichannel.cx',
        ui_host: 'https://eu.posthog.com',
        defaults: '2026-05-30',
        person_profiles: 'identified_only',
    })`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: safeJsonLd({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  name: "omnichannel",
                  url: "https://omnichannel.cx",
                  logo: "https://omnichannel.cx/assets/logo-full-color.png",
                  description:
                    "A customer experience and service operations consultancy. We help organisations transform CX, adopt AI safely, and keep humans in control.",
                  sameAs: [
                    "https://www.linkedin.com/company/omnichannel-cx",
                    "https://www.linkedin.com/in/provan",
                  ],
                },
                {
                  "@type": "WebSite",
                  name: "omnichannel",
                  url: "https://omnichannel.cx",
                  description:
                    "Customer experience and service operations consultancy, human-in-control AI.",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        <Providers>
          <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem>
            <main data-pagefind-body>
              {children}
            </main>
            <CookieBanner />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
