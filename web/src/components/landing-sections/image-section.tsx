import { Mail, MessageCircle, Phone, Hash, Inbox } from "lucide-react";

const channels = [
  { icon: Mail, label: "Email" },
  { icon: MessageCircle, label: "Chat" },
  { icon: Phone, label: "Voice" },
  { icon: Hash, label: "Social" },
];

export default function ImageSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-ocx-whisper relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-5xl mx-auto">
          <span className="font-display text-ocx-fg-accent text-xs md:text-sm uppercase tracking-ocx-caps font-bold">
            Unified experience
          </span>
          <h2 className="font-display text-ocx-fg-primary text-3xl md:text-4xl lg:text-ocx-3xl font-black tracking-ocx-tight leading-ocx-tight mt-6 mb-6 max-w-[20ch]">
            Every channel, one view
          </h2>
          <p className="font-serif italic font-medium text-xl md:text-2xl lg:text-ocx-2xl text-ocx-fg leading-ocx-snug mb-10 max-w-3xl">
            Unify every channel into one seamless experience.
          </p>
        </div>

        {/* Branded visual: every channel converges into one inbox */}
        <div className="relative w-full aspect-[16/9] rounded-ocx-xl overflow-hidden border border-ocx-border shadow-ocx-md bg-ocx-aurora">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 md:gap-10 p-6 md:p-10">
            {/* Channel chips */}
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5">
              {channels.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-2 rounded-ocx-pill bg-white/10 border border-white/15 px-4 py-2 backdrop-blur-sm"
                >
                  <Icon className="w-5 h-5 stroke-[1.25] text-white" />
                  <span className="font-display text-sm font-bold text-white">{label}</span>
                </div>
              ))}
            </div>

            {/* Connector */}
            <div className="h-8 md:h-12 w-px bg-white/25" />

            {/* Unified inbox */}
            <div className="inline-flex items-center gap-3 rounded-ocx-lg bg-white/95 px-6 py-4 shadow-ocx-lg">
              <Inbox className="w-6 h-6 stroke-[1.25] text-ocx-dark-blue" />
              <span className="font-display text-base md:text-lg font-black tracking-ocx-tight text-ocx-dark-blue">
                One inbox
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
