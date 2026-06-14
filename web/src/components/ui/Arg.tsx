interface ArgProps {
  label: string;
  value?: string;
  className?: string;
}

/**
 * Inline key-value argument display.
 * Used for parameter labels, stat pairs, or definition terms.
 */
export default function Arg({ label, value, className = "" }: ArgProps) {
  return (
    <div className={`flex items-center gap-2 text-sm font-body ${className}`}>
      <span className="font-semibold text-ocx-fg-primary">{label}</span>
      {value && <span className="text-ocx-fg">{value}</span>}
    </div>
  );
}
