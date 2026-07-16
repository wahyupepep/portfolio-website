import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

type SectionProps = {
  id?: string;
  kicker?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  className?: string;
  align?: "left" | "center";
};

export function Section({
  id,
  kicker,
  title,
  subtitle,
  children,
  className,
  align = "left",
}: SectionProps) {
  return (
    <section id={id} className={cn("relative py-24 sm:py-32", className)}>
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {(kicker || title || subtitle) && (
          <div className={cn("mb-14 max-w-2xl", align === "center" && "mx-auto text-center")}>
            {kicker && (
              <Reveal>
                <span className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-electric">
                  <span className="h-1.5 w-1.5 rounded-full bg-electric shadow-[0_0_12px_var(--color-electric)]" />
                  {kicker}
                </span>
              </Reveal>
            )}
            {title && (
              <Reveal delay={0.05}>
                <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                  {title}
                </h2>
              </Reveal>
            )}
            {subtitle && (
              <Reveal delay={0.1}>
                <p className="mt-4 text-lg leading-relaxed text-ink-muted">{subtitle}</p>
              </Reveal>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
