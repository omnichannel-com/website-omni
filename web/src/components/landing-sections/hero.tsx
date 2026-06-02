import React from "react";
import { MessageSquare, Users, TrendingUp, Headphones } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative scroll-section animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center pt-16 md:pt-24">
          {/* Hero headline */}
          <div className="min-h-[50vh] flex flex-col justify-center items-center gap-6 md:gap-8 text-center">
            <span className="font-display text-ocx-mauve text-xs md:text-sm uppercase tracking-ocx-caps font-bold">
              Customer Experience Platform
            </span>
            <h1 className="font-display text-ocx-dark-blue text-3xl md:text-5xl lg:text-ocx-4xl font-extrabold tracking-ocx-tight leading-ocx-tight max-w-[18ch]">
              One inbox, every channel.
            </h1>
            <p className="font-body text-ocx-fg-muted text-lg md:text-xl lg:text-ocx-lg max-w-[50ch] leading-ocx-base">
              Resolve every conversation in one pane. Built for teams who respond fast and care deeply.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="bg-ocx-dark-blue text-white font-display font-semibold text-sm px-8 py-3 rounded-ocx-pill hover:bg-ocx-mauve transition-all duration-ocx-fast shadow-ocx-md hover:shadow-ocx-lg"
              >
                Get started
              </Link>
              <Link
                href="/contact"
                className="border-2 border-ocx-dark-blue text-ocx-dark-blue font-display font-semibold text-sm px-8 py-3 rounded-ocx-pill hover:bg-ocx-dark-blue hover:text-white transition-all duration-ocx-fast"
              >
                Request a demo
              </Link>
            </div>
          </div>

          {/* Features grid */}
          <div className="flex flex-col mb-16 gap-10 md:gap-16 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              <div className="bg-ocx-bg-subtle border border-ocx-border rounded-ocx-lg p-6 md:p-8 flex flex-col items-center gap-5 shadow-ocx-sm hover:shadow-ocx-md hover:-translate-y-0.5 transition-all duration-ocx-fast">
                <div className="w-14 h-14 rounded-ocx-md bg-ocx-gradient-soft flex items-center justify-center">
                  <MessageSquare className="w-7 h-7 text-ocx-dark-blue" strokeWidth={1.5} />
                </div>
                <p className="font-body text-center text-ocx-fg text-sm md:text-base leading-ocx-base">
                  Unify every conversation across email, chat, voice, and social in a single, intelligent inbox.
                </p>
              </div>

              <div className="bg-ocx-bg-subtle border border-ocx-border rounded-ocx-lg p-6 md:p-8 flex flex-col items-center gap-5 shadow-ocx-sm hover:shadow-ocx-md hover:-translate-y-0.5 transition-all duration-ocx-fast">
                <div className="w-14 h-14 rounded-ocx-md bg-ocx-gradient-soft flex items-center justify-center">
                  <Users className="w-7 h-7 text-ocx-dark-blue" strokeWidth={1.5} />
                </div>
                <p className="font-body text-center text-ocx-fg text-sm md:text-base leading-ocx-base">
                  Empower your team with context. Every agent sees the full customer history, instantly.
                </p>
              </div>

              <div className="bg-ocx-bg-subtle border border-ocx-border rounded-ocx-lg p-6 md:p-8 flex flex-col items-center gap-5 shadow-ocx-sm hover:shadow-ocx-md hover:-translate-y-0.5 transition-all duration-ocx-fast">
                <div className="w-14 h-14 rounded-ocx-md bg-ocx-gradient-soft flex items-center justify-center">
                  <TrendingUp className="w-7 h-7 text-ocx-dark-blue" strokeWidth={1.5} />
                </div>
                <p className="font-body text-center text-ocx-fg text-sm md:text-base leading-ocx-base">
                  Measure what matters. Real-time dashboards show response times, satisfaction, and team health.
                </p>
              </div>

              <div className="bg-ocx-bg-subtle border border-ocx-border rounded-ocx-lg p-6 md:p-8 flex flex-col items-center gap-5 shadow-ocx-sm hover:shadow-ocx-md hover:-translate-y-0.5 transition-all duration-ocx-fast">
                <div className="w-14 h-14 rounded-ocx-md bg-ocx-gradient-soft flex items-center justify-center">
                  <Headphones className="w-7 h-7 text-ocx-dark-blue" strokeWidth={1.5} />
                </div>
                <p className="font-body text-center text-ocx-fg text-sm md:text-base leading-ocx-base">
                  Scale without losing the human touch. Automate routine, personalise what counts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
