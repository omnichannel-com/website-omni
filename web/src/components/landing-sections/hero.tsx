import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative scroll-section min-h-[100dvh] flex flex-col justify-center bg-ocx-aurora text-white overflow-hidden">
      {/* Subtle radial glows for depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[60%] h-[60%] rounded-full bg-ocx-mauve/20 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[50%] h-[50%] rounded-full bg-ocx-bright-blue/15 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="flex flex-col items-start justify-center max-w-5xl mx-auto py-20 md:py-28 lg:py-32">
          {/* Logo mark with glow */}
          <div className="w-24 h-24 md:w-32 md:h-32 mb-8 md:mb-12 drop-shadow-[0_20px_60px_rgba(170,66,220,0.45)]">
            <Image
              src="/assets/logo-icon-color.png"
              alt="omnichannel CX"
              width={128}
              height={128}
              className="w-full h-full object-contain"
              priority
            />
          </div>

          {/* Eyebrow */}
          <span className="font-display text-xs md:text-sm uppercase tracking-ocx-caps font-bold opacity-85 mb-6 md:mb-7">
            Customer Experience Platform
          </span>

          {/* Title — brand pack style: Overpass 900, tight tracking */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-ocx-5xl font-black tracking-ocx-tight leading-ocx-tight mb-6 md:mb-8 text-white">
            One inbox,<br />every channel.
          </h1>

          {/* Subtitle — brand pack style: Cormorant italic */}
          <p className="font-serif italic font-medium text-xl sm:text-2xl md:text-3xl lg:text-ocx-2xl leading-ocx-snug text-white/90 mb-8 md:mb-10 max-w-3xl">
            Composed under pressure. Built for teams who care deeply.
          </p>

          {/* Body — brand pack style: Oxygen, readable */}
          <p className="font-body text-base md:text-lg lg:text-xl leading-ocx-base text-white/80 mb-10 md:mb-12 max-w-2xl">
            Email, chat, voice, and social, threaded together so your team can answer in the channel the customer chose. Every conversation, one pane.
          </p>

          {/* Buttons — brand pack style: icons lead, sentence case */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-ocx-dark-blue text-white font-display font-bold text-sm md:text-base px-8 py-4 rounded-ocx-lg hover:bg-ocx-dark-blue-90 transition-all duration-ocx-fast shadow-ocx-md"
            >
              <ArrowRight className="w-5 h-5 stroke-[1.25]" />
              Get started
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-transparent text-white font-display font-bold text-sm md:text-base px-8 py-4 rounded-ocx-lg border-2 border-white/40 hover:border-white/70 hover:bg-white/10 transition-all duration-ocx-fast"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Request a demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
