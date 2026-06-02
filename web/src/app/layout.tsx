import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "omnichannel CX",
  description: "Resolve every conversation in one pane. A customer experience platform built for teams who respond fast and care deeply.",
  openGraph: {
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
      <body className="font-body antialiased">
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <main data-pagefind-body>
              {children}
            </main>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
