import { productThinkingSteps } from "@/lib/data";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { TiltCard } from "@/components/ui/tilt-card";

export function ProductThinking() {
  return (
    <Section
      id="product-thinking"
      kicker="Product Thinking"
      title="How I think, not just what I know"
      subtitle="A repeatable framework for turning a business problem into a validated, shippable product decision."
    >
      <div className="relative">
        <div className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-border-strong to-transparent lg:block" />

        <RevealStagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {productThinkingSteps.map((step, i) => (
            <RevealItem key={step.id}>
              <TiltCard className="h-full p-6">
                <span className="font-mono text-xs text-ink-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-base font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.description}</p>
              </TiltCard>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>

      <Reveal delay={0.15} className="mt-10">
        <div className="rounded-2xl border border-border bg-surface-2/50 p-6 sm:p-8">
          <p className="text-sm leading-relaxed text-ink-muted">
            <span className="font-medium text-ink">My approach: </span>
            I don&apos;t start with a solution. I validate whether the problem is real, connect it
            to a measurable outcome, then narrow down to the smallest version that tests the
            riskiest assumption first.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
