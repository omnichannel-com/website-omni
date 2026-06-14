"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { usePosthogConsent } from "@/hooks/use-posthog";
import { CALENDLY_URL } from "@/lib/calendly";

const INDUSTRIES = ["Banking & finance", "Insurance", "Telecoms", "Utilities"];

export default function HeroSection() {
  const { capture } = usePosthogConsent();

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center bg-ocx-aurora text-white overflow-hidden">
      {/* Subtle radial glows for depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[60%] h-[60%] rounded-full bg-ocx-mauve/20 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[50%] h-[50%] rounded-full bg-ocx-bright-blue/15 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="flex flex-col items-start justify-center max-w-5xl mx-auto py-20 md:py-28 lg:py-32">
          {/* Eyebrow */}
          <span className="font-display text-xs md:text-sm uppercase tracking-ocx-caps font-bold opacity-85 mb-6 md:mb-7">
            Customer experience &amp; service operations consultancy
          </span>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-ocx-5xl font-black tracking-ocx-tight leading-ocx-tight mb-6 md:mb-8 text-white">
            Transform your <br />
            customer experience
            <br />
            and your service operations.
          </h1>

          {/* Subhead */}
          <p className="font-serif italic font-medium text-xl sm:text-2xl md:text-3xl lg:text-ocx-2xl leading-ocx-snug text-white/90 mb-6 md:mb-8 max-w-3xl">
            From where you are today to AI with your people in control.
          </p>

          {/* Lede - canonical definition */}
          <p className="font-body text-base md:text-lg lg:text-xl leading-ocx-base text-white/80 mb-10 md:mb-12 max-w-2xl">
            Human in control means AI agents do the work; a human keeps the final say. We help
            organisations transform CX, adopt AI safely, and keep humans in control.{" "}
            <Link href="/australia" className="underline underline-offset-4 hover:text-white transition-colors">
              Australia's best omnichannel CX consultant
            </Link>{" "}
            for banking, insurance, telecoms, and utilities.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                capture({
                  event: "cta_click",
                  properties: { cta_label: "book_working_session", page: "/" },
                })
              }
              className="group inline-flex items-center gap-3 bg-[var(--btn-primary-bg)] text-[var(--btn-primary-fg)] font-display font-bold text-sm md:text-base px-8 py-4 rounded-ocx-lg hover:bg-[var(--btn-primary-bg-hover)] transition-all duration-ocx-fast shadow-ocx-md"
            >
              <ArrowRight className="w-5 h-5 stroke-[1.25]" />
              Book a working session
            </Link>
            <Link
              href="#quiz"
              onClick={() =>
                capture({
                  event: "cta_click",
                  properties: { cta_label: "take_two_minute_check", page: "/" },
                })
              }
              className="group inline-flex items-center gap-3 bg-transparent text-white font-display font-bold text-sm md:text-base px-8 py-4 rounded-ocx-lg border-2 border-white/40 hover:border-white/70 hover:bg-white/10 transition-all duration-ocx-fast"
            >
              <ArrowRight className="w-5 h-5 stroke-[1.25]" />
              Take the two-minute check
            </Link>
          </div>

          {/* Industry tags */}
          <div className="flex flex-wrap gap-2">
            {INDUSTRIES.map((ind) => (
              <span
                key={ind}
                className="text-xs font-display uppercase tracking-ocx-caps font-bold bg-white/10 text-white/80 px-3 py-1 rounded-ocx-pill border border-white/20"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
