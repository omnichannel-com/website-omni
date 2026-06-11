"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { usePosthogConsent } from "@/hooks/use-posthog";
import { CALENDLY_URL } from "@/lib/calendly";
import StickyScrollLayout from "@/components/layouts/StickyScrollLayout";

export interface GeoPageData {
  region: string;
  headline: string;
  subhead: string;
  lede: string;
  regulators: string[];
  industries: { name: string; pain: string; useCase: string }[];
  whyNow: string;
  geoContext: string;
}

export default function GeoPage({ data }: { data: GeoPageData }) {
  const { capture } = usePosthogConsent();

  const trackCta = (label: string) => {
    capture({
      event: "cta_click",
      properties: { cta_label: label, page: `/${data.region.toLowerCase().replace(/\s+/g, "-")}`, region: data.region },
    });
  };

  return (
    <StickyScrollLayout>
      {/* Hero */}
      <section className="relative min-h-[80dvh] flex flex-col justify-center bg-ocx-aurora text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] left-[10%] w-[60%] h-[60%] rounded-full bg-ocx-mauve/20 blur-[120px]" />
          <div className="absolute bottom-[10%] right-[10%] w-[50%] h-[50%] rounded-full bg-ocx-bright-blue/15 blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="max-w-5xl mx-auto py-20 md:py-28">
            <span className="font-display text-xs md:text-sm uppercase tracking-ocx-caps font-bold opacity-85 mb-6 block">
              {data.region}
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-ocx-4xl font-black tracking-ocx-tight leading-ocx-tight mb-6 text-white">
              {data.headline}
            </h1>
            <p className="font-serif italic font-medium text-xl sm:text-2xl md:text-3xl text-white/90 mb-8 max-w-3xl">
              {data.subhead}
            </p>
            <p className="font-body text-base md:text-lg lg:text-xl leading-ocx-base text-white/80 mb-10 max-w-2xl">
              {data.lede}
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCta("book_working_session")}
                className="group inline-flex items-center gap-3 bg-[var(--btn-primary-bg)] text-[var(--btn-primary-fg)] font-display font-bold text-sm md:text-base px-8 py-4 rounded-ocx-lg hover:bg-[var(--btn-primary-bg-hover)] transition-all duration-ocx-fast shadow-ocx-md"
              >
                <ArrowRight className="w-5 h-5 stroke-[1.25]" />
                Book a working session
              </Link>
              <Link
                href="#what-we-do"
                onClick={() => trackCta("explore_services")}
                className="group inline-flex items-center gap-3 bg-transparent text-white font-display font-bold text-sm md:text-base px-8 py-4 rounded-ocx-lg border-2 border-white/40 hover:border-white/70 hover:bg-white/10 transition-all duration-ocx-fast"
              >
                What we do
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Regulators */}
      <section className="bg-ocx-bg py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ocx-fg-primary tracking-ocx-tight mb-8">
              Built for your regulators
            </h2>
            <p className="font-body text-lg md:text-xl text-ocx-fg leading-ocx-base mb-8">
              We design every engagement with the regulatory context of {data.region} in mind.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {data.regulators.map((r) => (
                <span
                  key={r}
                  className="text-sm font-display uppercase tracking-ocx-caps font-bold bg-ocx-bg-subtle border border-ocx-border text-ocx-fg px-4 py-2 rounded-ocx-pill"
                >
                  {r}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="what-we-do" className="bg-ocx-bg-subtle py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ocx-fg-primary tracking-ocx-tight mb-4 text-center">
              Sectors we serve in {data.region}
            </h2>
            <p className="font-body text-lg text-ocx-fg text-center mb-12 max-w-2xl mx-auto">
              {data.geoContext}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.industries.map((ind) => (
                <div
                  key={ind.name}
                  className="bg-gradient-to-t from-ocx-bg/0 to-ocx-bg/[0.15] backdrop-blur-md shadow-ocx-sm border border-ocx-border rounded-ocx-lg p-6 md:p-8 flex flex-col gap-4 hover:shadow-ocx-md transition-shadow duration-ocx-fast"
                >
                  <h3 className="font-display text-lg font-bold text-ocx-fg-primary">{ind.name}</h3>
                  <p className="font-body text-sm text-ocx-fg leading-ocx-base">
                    <span className="font-semibold">The pain:</span> {ind.pain}
                  </p>
                  <p className="font-body text-sm text-ocx-fg leading-ocx-base">
                    <span className="font-semibold">How we help:</span> {ind.useCase}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why now */}
      <section className="bg-ocx-bg py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ocx-fg-primary tracking-ocx-tight mb-8">
              Why now
            </h2>
            <p className="font-body text-lg md:text-xl text-ocx-fg leading-ocx-base">
              {data.whyNow}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ocx-aurora py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] left-[10%] w-[60%] h-[60%] rounded-full bg-ocx-mauve/20 blur-[120px]" />
          <div className="absolute bottom-[10%] right-[10%] w-[50%] h-[50%] rounded-full bg-ocx-bright-blue/15 blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-ocx-tight mb-6">
              Get started in {data.region}
            </h2>
            <p className="font-body text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Book a working session. We will diagnose your current state and give you a clear plan tailored to {data.region}.
            </p>
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCta("book_working_session_bottom")}
              className="group inline-flex items-center gap-3 bg-[var(--btn-primary-bg)] text-[var(--btn-primary-fg)] font-display font-bold text-sm md:text-base px-8 py-4 rounded-ocx-lg hover:bg-[var(--btn-primary-bg-hover)] transition-all duration-ocx-fast shadow-ocx-md"
            >
              <ArrowRight className="w-5 h-5 stroke-[1.25]" />
              Book a working session
            </Link>
          </div>
        </div>
      </section>
    </StickyScrollLayout>
  );
}
