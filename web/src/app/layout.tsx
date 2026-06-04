import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Providers } from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://omnichannelcx.com"),
  title: {
    default: "omnichannel CX",
    template: "%s | omnichannel CX",
  },
  description: "Resolve every conversation in one pane. A customer experience platform built for teams who respond fast and care deeply.",
  openGraph: {
    title: "omnichannel CX",
    description: "Resolve every conversation in one pane.",
    images: ["/assets/logo-full-color.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "omnichannel CX",
    description: "Resolve every conversation in one pane.",
    images: ["/assets/logo-full-color.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/assets/omnichannel-cx-icon-large.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  name: "omnichannel CX",
                  url: "https://omnichannelcx.com",
                  logo: "https://omnichannelcx.com/assets/logo-full-color.png",
                  sameAs: [
                    "https://www.linkedin.com/company/omnichannelcx",
                  ],
                },
                {
                  "@type": "WebSite",
                  name: "omnichannel CX",
                  url: "https://omnichannelcx.com",
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
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
