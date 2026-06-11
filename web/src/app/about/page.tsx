import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import StickyScrollLayout from "@/components/layouts/StickyScrollLayout";
import { CALENDLY_URL } from "@/lib/calendly";

export const metadata: Metadata = {
  title: "About | Independent CX & Service Operations Consultancy | omnichannel",
  description:
    "Independent customer experience and service operations consultancy for APAC, Australia, New Zealand, Japan, South Korea, and beyond. Human in control means AI agents do the work; a human keeps the final say.",
  alternates: {
    canonical: "https://omnichannel.cx/about",
  },
  openGraph: {
    title: "About | Independent CX & Service Operations Consultancy | omnichannel",
    description:
      "Independent customer experience and service operations consultancy for APAC, Australia, New Zealand, Japan, South Korea, and beyond. Human in control means AI agents do the work; a human keeps the final say.",
    url: "https://omnichannel.cx/about",
    type: "website",
    images: ["/assets/logo-full-color.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Independent CX & Service Operations Consultancy | omnichannel",
    description:
      "Independent customer experience and service operations consultancy for APAC, Australia, New Zealand, Japan, South Korea, and beyond. Human in control means AI agents do the work; a human keeps the final say.",
    images: ["/assets/logo-full-color.png"],
  },
};

export default function AboutPage() {
  return (
    <StickyScrollLayout>
      {/* Hero */}
      <section className="relative bg-ocx-aurora text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] left-[8%] w-[55%] h-[55%] rounded-full bg-ocx-mauve/20 blur-[120px]" />
          <div className="absolute bottom-[10%] right-[8%] w-[45%] h-[45%] rounded-full bg-ocx-bright-blue/15 blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="max-w-4xl mx-auto pt-36 md:pt-44 pb-16 md:pb-24">
            <span className="font-display text-xs md:text-sm uppercase tracking-ocx-caps font-bold opacity-85">
              About us
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-ocx-5xl font-black tracking-ocx-tight leading-ocx-tight mt-6 mb-6">
              Independent consultancy for CX and service operations.
            </h1>
            <p className="font-serif italic font-medium text-xl md:text-2xl lg:text-ocx-2xl leading-ocx-snug text-white/90 max-w-3xl">
              Human in control means AI agents do the work; a human keeps the final say.
            </p>
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="py-16 md:py-24 lg:py-32 bg-ocx-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-3xl mx-auto">
            <span className="font-display text-ocx-fg-accent text-xs md:text-sm uppercase tracking-ocx-caps font-bold">
              Who we are
            </span>
            <h2 className="font-display text-ocx-fg-primary text-3xl md:text-4xl lg:text-ocx-3xl font-black tracking-ocx-tight leading-ocx-tight mt-6 mb-6">
              Operators, not theorists
            </h2>
            <p className="text-ocx-fg text-lg md:text-xl leading-ocx-base mb-5">
              omnichannel is an independent customer experience and service operations consultancy
              for banking, insurance, telecoms, and utilities. We help organisations transform
              CX, adopt AI safely, and keep humans in control.
            </p>
            <p className="text-ocx-fg text-lg md:text-xl leading-ocx-base mb-5">
              We have sized queues, watched SLAs slip, and run operations under pressure. We
              advise on what we have done. We stay independent of any platform vendor, and we
              tell you when you do not need something.
            </p>
            <p className="text-ocx-fg-muted text-lg md:text-xl leading-ocx-base">
              Every engagement starts with your business outcomes and ends with your team more
              capable than when we arrived.
            </p>
          </div>
        </div>
      </section>

      {/* What we believe */}
      <section className="py-16 md:py-24 lg:py-32 bg-ocx-bg-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-3xl mx-auto">
            <span className="font-display text-ocx-fg-accent text-xs md:text-sm uppercase tracking-ocx-caps font-bold">
              What we believe
            </span>
            <h2 className="font-display text-ocx-fg-primary text-3xl md:text-4xl lg:text-ocx-3xl font-black tracking-ocx-tight leading-ocx-tight mt-6 mb-6">
              Business first. Technology second. People always.
            </h2>
            <p className="text-ocx-fg text-lg md:text-xl leading-ocx-base mb-5">
              We believe AI should make your team more capable, not less necessary. We believe
              every automated decision should have a human gate. We believe the best technology
              is the technology your people can run after we leave.
            </p>
            <p className="text-ocx-fg-muted text-lg md:text-xl leading-ocx-base">
              Human in control is not a feature. It is an operating model. AI prepares the work;
              a person with authority approves it. That is the only safe path to scale in
              regulated, high-stakes operations.
            </p>
          </div>
        </div>
      </section>

      {/* Author attribution */}
      <section className="py-16 md:py-24 lg:py-32 bg-ocx-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-3xl mx-auto">
            <span className="font-display text-ocx-fg-accent text-xs md:text-sm uppercase tracking-ocx-caps font-bold">
              Author
            </span>
            <h2 className="font-display text-ocx-fg-primary text-3xl md:text-4xl lg:text-ocx-3xl font-black tracking-ocx-tight leading-ocx-tight mt-6 mb-6">
              Graeme Provan
            </h2>
            <p className="text-ocx-fg text-lg md:text-xl leading-ocx-base mb-5">
              Graeme has run customer service and operations teams in regulated industries across
              banking, insurance, and utilities. He founded omnichannel to help organisations
              adopt AI without losing the human judgment that makes service safe and effective.
            </p>
            <p className="text-ocx-fg text-lg md:text-xl leading-ocx-base mb-5">
              <span className="font-semibold text-ocx-fg-primary">LinkedIn:</span>{" "}
              <a
                href="https://www.linkedin.com/in/graemeprovan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ocx-bright-blue hover:underline"
              >
                linkedin.com/in/graemeprovan
              </a>
            </p>
            <p className="text-ocx-fg-muted text-base leading-ocx-base">
              Human in control means AI agents do the work; a human keeps the final say.
            </p>
          </div>
        </div>
      </section>

      {/* Where we work */}
      <section className="py-16 md:py-24 lg:py-32 bg-ocx-bg-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-ocx-fg-primary text-2xl md:text-3xl font-black tracking-ocx-tight leading-ocx-tight mb-6">
              Where we work
            </h2>
            <p className="text-ocx-fg text-lg md:text-xl leading-ocx-base mb-8">
              We serve organisations across APAC, Australia, New Zealand, Japan, South Korea,
              Indonesia, the Philippines, Fiji, and Asia.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "APAC", href: "/apac" },
                { label: "Australia", href: "/australia" },
                { label: "New Zealand", href: "/new-zealand" },
                { label: "Japan", href: "/japan" },
                { label: "South Korea", href: "/south-korea" },
                { label: "Indonesia", href: "/indonesia" },
                { label: "Philippines", href: "/philippines" },
                { label: "Fiji", href: "/fiji" },
                { label: "Asia", href: "/asia" },
              ].map((geo) => (
                <Link
                  key={geo.href}
                  href={geo.href}
                  className="text-sm font-display uppercase tracking-ocx-caps font-bold bg-ocx-bg border border-ocx-border text-ocx-fg px-4 py-2 rounded-ocx-pill hover:bg-ocx-bright-blue hover:text-white hover:border-ocx-bright-blue transition-colors duration-ocx-fast"
                >
                  {geo.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 lg:py-32 bg-ocx-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="relative overflow-hidden rounded-ocx-xl bg-ocx-aurora text-white px-8 py-14 md:px-16 md:py-20 text-center shadow-ocx-md">
            <h2 className="font-display text-3xl md:text-4xl lg:text-ocx-3xl font-black tracking-ocx-tight leading-ocx-tight max-w-3xl mx-auto">
              Start with an honest read of where you are
            </h2>
            <p className="font-serif italic font-medium text-xl md:text-2xl text-white/90 mt-5 mb-9 max-w-2xl mx-auto">
              Book a working session and get a clear path forward.
            </p>
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-ocx-dark-blue font-display font-bold text-sm md:text-base px-7 py-3.5 rounded-ocx-md shadow-ocx-md hover:-translate-y-px transition-transform duration-ocx-base"
            >
              <ArrowRight className="w-4 h-4 stroke-[1.5]" />
              Book a working session
            </Link>
          </div>
        </div>
      </section>
    </StickyScrollLayout>
  );
}
