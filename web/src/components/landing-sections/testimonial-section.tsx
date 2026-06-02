import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function TestimonialSection() {
  return (
    <section className="scroll-section py-16 md:py-24 lg:py-32 bg-ocx-whisper relative z-[60]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Brand pack type pairing */}
          <span className="font-display text-ocx-mauve text-xs md:text-sm uppercase tracking-ocx-caps font-bold">
            The platform
          </span>
          <h2 className="font-display text-ocx-fg-primary text-3xl md:text-4xl lg:text-ocx-3xl font-black tracking-ocx-tight leading-ocx-tight mt-6 mb-4 max-w-[24ch]">
            Empower your team with AI
          </h2>
          <p className="font-serif italic font-medium text-xl md:text-2xl lg:text-ocx-2xl text-ocx-fg leading-ocx-snug mb-8 max-w-3xl">
            Harness full potential alongside AI workers, taking on more responsibilities while working smarter, not harder.
          </p>
          <p className="font-body text-ocx-fg-muted text-base md:text-lg leading-ocx-base mb-10 max-w-2xl">
            Brainstorm new ideas while eliminating repetitive work and flows. Our robust AI engine handles routine business tasks, allowing your AI assistants to ensure everything runs smoothly.
          </p>

          <Link
            href="/about"
            className="group inline-flex items-center gap-3 bg-transparent text-ocx-bright-blue font-display font-bold text-sm px-0 py-2 hover:text-ocx-fg-primary transition-colors duration-ocx-fast"
          >
            <ArrowRight className="w-5 h-5 stroke-[1.25]" />
            Read more about our platform
          </Link>
        </div>
      </div>
    </section>
  );
}
