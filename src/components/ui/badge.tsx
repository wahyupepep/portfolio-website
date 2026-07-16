import { cn } from "@/lib/utils";

type Accent = "electric" | "cyan" | "emerald" | "purple" | "orange" | "neutral";

const accentClasses: Record<Accent, string> = {
  electric: "bg-electric/10 text-electric border-electric/25",
  cyan: "bg-cyan/10 text-cyan border-cyan/25",
  emerald: "bg-emerald/10 text-emerald border-emerald/25",
  purple: "bg-purple/10 text-purple border-purple/25",
  orange: "bg-orange/10 text-orange border-orange/25",
  neutral: "bg-surface-2 text-ink-muted border-border-strong",
};

export function Badge({
  children,
  accent = "neutral",
  className,
}: {
  children: React.ReactNode;
  accent?: Accent;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide",
        accentClasses[accent],
        className,
      )}
    >
      {children}
    </span>
  );
}
