import Image from "next/image";

export default function ImageSection() {
  return (
    <section className="scroll-section py-16 md:py-24 lg:py-32 bg-ocx-whisper relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-5xl mx-auto">
          <span className="font-display text-ocx-mauve text-xs md:text-sm uppercase tracking-ocx-caps font-bold">
            Unified experience
          </span>
          <h2 className="font-display text-ocx-fg-primary text-3xl md:text-4xl lg:text-ocx-3xl font-black tracking-ocx-tight leading-ocx-tight mt-6 mb-6 max-w-[20ch]">
            Every channel, one view
          </h2>
          <p className="font-serif italic font-medium text-xl md:text-2xl lg:text-ocx-2xl text-ocx-fg leading-ocx-snug mb-10 max-w-3xl">
            Unify every channel into one seamless experience.
          </p>
        </div>

        {/* Large image with brand-aligned border radius */}
        <div className="relative w-full aspect-[16/9] rounded-ocx-xl overflow-hidden border border-ocx-border shadow-ocx-md">
          <Image
            src="/second-section.png"
            alt="Unified omnichannel experience"
            fill
            className="object-cover"
            quality={100}
          />
          {/* Subtle overlay for text contrast if needed */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
