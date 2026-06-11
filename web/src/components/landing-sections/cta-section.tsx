"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { usePosthogConsent } from "@/hooks/use-posthog";
import { CALENDLY_URL } from "@/lib/calendly";

export default function CtaSection() {
  const { capture } = usePosthogConsent();

  return (
    <section className="bg-ocx-aurora py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[60%] h-[60%] rounded-full bg-ocx-mauve/20 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[50%] h-[50%] rounded-full bg-ocx-bright-blue/15 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-ocx-3xl font-bold text-white tracking-ocx-tight mb-6">
            Get started
          </h2>
          <p className="font-body text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Book a working session. We will diagnose your current state, identify the highest-impact
            next step, and give you a clear plan to move forward.
          </p>
          <Link
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              capture({
                event: "cta_click",
                properties: { cta_label: "get_started_footer", page: "/" },
              })
            }
            className="group inline-flex items-center gap-3 bg-[var(--btn-primary-bg)] text-[var(--btn-primary-fg)] font-display font-bold text-sm md:text-base px-8 py-4 rounded-ocx-lg hover:bg-[var(--btn-primary-bg-hover)] transition-all duration-ocx-fast shadow-ocx-md"
          >
            <ArrowRight className="w-5 h-5 stroke-[1.25]" />
            Book a working session
          </Link>
        </div>
      </div>
    </section>
  );
}
