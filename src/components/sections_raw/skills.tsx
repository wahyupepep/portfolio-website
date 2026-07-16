import { skillCategories } from "@/lib/data";
import { RevealItem, RevealStagger } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { TiltCard } from "@/components/ui/tilt-card";
import { cn } from "@/lib/utils";

const accentGlow: Record<string, string> = {
  electric: "var(--color-electric)",
  cyan: "var(--color-cyan)",
  emerald: "var(--color-emerald)",
  purple: "var(--color-purple)",
  orange: "var(--color-orange)",
};

const accentText: Record<string, string> = {
  electric: "text-electric",
  cyan: "text-cyan",
  emerald: "text-emerald",
  purple: "text-purple",
  orange: "text-orange",
};

const accentDot: Record<string, string> = {
  electric: "bg-electric",
  cyan: "bg-cyan",
  emerald: "bg-emerald",
  purple: "bg-purple",
  orange: "bg-orange",
};

export function Skills() {
  return (
    <Section
      id="skills"
      kicker="Capabilities"
      title="A toolkit spanning business, product, and AI"
      subtitle="Not a list of tools I've touched — a set of capabilities I use to move a problem from ambiguous to shipped."
    >
      <RevealStagger className="grid gap-5 md:grid-cols-2">
        {skillCategories.map((category) => (
          <RevealItem key={category.id}>
            <TiltCard glowColor={accentGlow[category.accent]} className="h-full p-6 sm:p-7">
              <div className="flex items-center gap-2.5">
                <span className={cn("h-2 w-2 rounded-full", accentDot[category.accent])} />
                <h3 className={cn("text-lg font-semibold", accentText[category.accent])}>
                  {category.title}
                </h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-surface-2/70 px-3 py-1.5 text-sm text-ink transition-colors hover:border-border-strong"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </TiltCard>
          </RevealItem>
        ))}
      </RevealStagger>
    </Section>
  );
}
