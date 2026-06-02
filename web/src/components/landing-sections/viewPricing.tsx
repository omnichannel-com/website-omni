import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ViewPricing() {
  return (
    <section className="relative scroll-section min-h-[60svh] flex items-center justify-center bg-ocx-indigo text-white overflow-hidden">
      {/* Halo glows for depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60%] h-[80%] rounded-full bg-ocx-mauve/15 blur-[100px]" />
        <div className="absolute bottom-0 left-[20%] w-[40%] h-[60%] rounded-full bg-ocx-bright-blue/10 blur-[80px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-display text-xs md:text-sm uppercase tracking-ocx-caps font-bold opacity-80 mb-6 block">
            Pricing
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-ocx-3xl font-black tracking-ocx-tight leading-ocx-tight mb-4 text-white">
            Focus on core business functions
          </h2>
          <p className="font-serif italic font-medium text-xl md:text-2xl lg:text-ocx-2xl text-white/90 mb-6 max-w-2xl mx-auto leading-ocx-snug">
            Let our platform handle routine inquiries so you can focus on what matters most.
          </p>
          <p className="font-body text-base md:text-lg text-white/70 mb-10 max-w-xl mx-auto leading-ocx-base">
            Flexible plans that scale with your team. No hidden fees, no surprises.
          </p>

          <Link
            href="/pricing"
            className="group inline-flex items-center gap-3 bg-ocx-gradient text-white font-display font-bold text-sm md:text-base px-8 py-4 rounded-ocx-lg hover:shadow-ocx-glow transition-all duration-ocx-fast"
          >
            <ArrowRight className="w-5 h-5 stroke-[1.25]" />
            View pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
