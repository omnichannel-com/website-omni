import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AlterEgoSection() {
  const features = [
    "Unify every channel into one intelligent inbox",
    "Give agents full customer context instantly",
    "Measure response times and team health in real time",
    "Automate routine without losing the human touch",
    "Scale your support without scaling complexity",
  ];

  return (
    <section className="relative z-10 py-16 md:py-24 lg:py-32 bg-ocx-bg-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Type pairing — brand pack style */}
        <div className="max-w-5xl mx-auto mb-16 md:mb-20">
          <span className="font-display text-ocx-mauve text-xs md:text-sm uppercase tracking-ocx-caps font-bold">
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

        {/* Feature cards — TIER 2 tint surface, brand-pack card style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-ocx-tint border border-ocx-border rounded-ocx-lg p-6 md:p-8 shadow-ocx-sm hover:shadow-ocx-md hover:-translate-y-0.5 transition-all duration-ocx-base ease-ocx-standard"
            >
              <div className="font-display text-ocx-fg-primary font-extrabold text-xs uppercase tracking-ocx-caps mb-3">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <h3 className="font-serif text-ocx-fg-primary text-xl md:text-2xl font-semibold leading-ocx-snug">
                {feature}
              </h3>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link
            href="/about"
            className="group inline-flex items-center gap-3 bg-ocx-dark-blue text-white font-display font-bold text-sm px-8 py-4 rounded-ocx-lg hover:bg-ocx-dark-blue-90 transition-all duration-ocx-fast shadow-ocx-md"
          >
            <ArrowRight className="w-5 h-5 stroke-[1.25]" />
            Explore the platform
          </Link>
        </div>
      </div>
    </section>
  );
}
