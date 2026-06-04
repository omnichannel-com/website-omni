import Image from "next/image";

interface BlogCoverProps {
  className?: string;
  label?: string;
  alt?: string;
}

/**
 * Brand-aligned cover used in place of stock photography on the blog.
 * Cool-toned signature gradient with the icon mark, per the design system
 * imagery rules (no warm/sepia photography, no textures).
 */
export default function BlogCover({ className = "", label = "Insights", alt }: BlogCoverProps) {
  return (
    <div
      className={`relative bg-ocx-aurora flex items-center justify-center overflow-hidden ${className}`}
    >
      <Image
        src="/assets/omnichannel-cx-icon-large.svg"
        alt={alt || ""}
        aria-hidden={!alt}
        width={120}
        height={120}
        className="w-16 h-16 md:w-24 md:h-24 opacity-95 drop-shadow-[0_8px_24px_rgba(27,20,100,0.35)]"
      />
      <span className="absolute bottom-4 left-4 rounded-ocx-pill bg-white/10 border border-white/15 px-3 py-1 font-display text-xs font-bold uppercase tracking-ocx-caps text-white backdrop-blur-sm">
        {label}
      </span>
    </div>
  );
}
