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
                    "https://www.linkedin.com/in/graemeprovan",
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
