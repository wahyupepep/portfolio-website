import { aboutStory, currentInterests, siteNote } from "@/lib/data";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";

export function About() {
  return (
    <Section
      id="about"
      kicker="About"
      title="From understanding business to building products"
      subtitle="A career built on one belief: software only matters if it solves the business problem underneath it."
    >
      <div className="relative grid gap-10 border-l border-border pl-8 sm:pl-10">
        {aboutStory.map((chapter, i) => (
          <Reveal key={chapter.id} delay={i * 0.1} className="relative">
            <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-electric to-purple shadow-[0_0_0_4px_var(--color-background)] sm:-left-[calc(2.5rem+5px)]" />
            <p className="text-sm font-medium tracking-wide text-electric">{chapter.kicker}</p>
            <h3 className="mt-2 text-xl font-semibold text-ink sm:text-2xl">{chapter.title}</h3>
            <p className="mt-3 max-w-2xl leading-relaxed text-ink-muted">{chapter.body}</p>
          </Reveal>
        ))}
      </div>

      <div className="mt-16">
        <Reveal>
          <p className="text-sm font-medium tracking-wide text-ink-muted">Currently exploring</p>
        </Reveal>
        <RevealStagger className="mt-4 flex flex-wrap gap-2.5">
          {currentInterests.map((interest) => (
            <RevealItem key={interest}>
              <Badge accent="neutral" className="hover:border-electric/50 hover:text-electric transition-colors">
                {interest}
              </Badge>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>

      <Reveal delay={0.1}>
        <p className="mt-10 max-w-xl border-t border-border pt-6 text-xs leading-relaxed text-ink-muted/70">
          {siteNote}
        </p>
      </Reveal>
    </Section>
  );
}
