interface TagProps {
  text: string;
  className?: string;
}

export default function Tag({ text, className = "" }: TagProps) {
  return (
    <span
      className={`inline-block text-xs font-display uppercase tracking-ocx-caps font-bold bg-ocx-bg-subtle text-ocx-fg-accent px-3 py-1 rounded-ocx-pill border border-ocx-border ${className}`}
    >
      {text}
    </span>
  );
}
