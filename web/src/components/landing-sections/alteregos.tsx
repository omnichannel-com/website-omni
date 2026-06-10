"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import posthog from "posthog-js";

export default function AlterEgoSection() {
  const features = [
    "Unify every channel into one intelligent inbox",
    "Give agents full customer context instantly",
    "Measure response times and team health in real time",
    "Automate routine without losing the human touch",
    "Scale your support without scaling complexity",
  ];

  return (
    <section className="relative z-10 py-16 md:py-24 lg:py-32 bg-ocx-tint">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Type pairing — brand pack style */}
        <div className="max-w-5xl mx-auto mb-16 md:mb-20">
          <span className="font-display text-ocx-fg-accent text-xs md:text-sm uppercase tracking-ocx-caps font-bold">
            Why omnichannel CX
          </span>
          <h2 className="font-display text-ocx-fg-primary text-3xl md:text-4xl lg:text-ocx-3xl font-black tracking-ocx-tight leading-ocx-tight mt-6 mb-4 max-w-[20ch]">
            Built for teams who care
          </h2>
          <p className="font-serif italic font-medium text-xl md:text-2xl lg:text-ocx-2xl text-ocx-fg leading-ocx-snug mb-6 max-w-3xl">
            Every feature is designed to help your team respond faster, stay informed, and deliver a consistently great customer experience.
          </p>
          <p className="font-body text-ocx-fg-muted text-base md:text-lg leading-ocx-base max-w-2xl">
            From the first message to resolution, your team has everything they need in one place.
          </p>
        </div>

        {/* Feature cards — brand pack style with top border accent */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-ocx-bg border border-ocx-border rounded-ocx-lg p-6 md:p-8 shadow-ocx-sm hover:shadow-ocx-md hover:-translate-y-0.5 transition-all duration-ocx-fast"
            >
              <div className="border-t-2 border-ocx-fg-primary pt-4 mb-4">
                <span className="font-display text-ocx-fg-primary font-bold text-sm">{String(idx + 1).padStart(2, "0")}</span>
              </div>
              <p className="font-body text-ocx-fg text-base leading-ocx-base">{feature}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link
            href="/about"
            onClick={() => posthog.capture("explore_platform_clicked")}
            className="group inline-flex items-center gap-3 bg-[var(--btn-primary-bg)] text-[var(--btn-primary-fg)] font-display font-bold text-sm px-8 py-4 rounded-ocx-lg hover:bg-[var(--btn-primary-bg-hover)] transition-all duration-ocx-fast shadow-ocx-md"
          >
            <ArrowRight className="w-5 h-5 stroke-[1.25]" />
            Explore the platform
          </Link>
        </div>
      </div>
    </section>
  );
}
