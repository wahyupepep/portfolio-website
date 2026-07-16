import { Zap } from "lucide-react";
import { aiLabProjects } from "@/lib/data";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/reveal";

export function AILab() {
  return (
    <section id="ai-lab" className="relative overflow-hidden bg-midnight py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 animate-pulse-glow rounded-full bg-cyan/25" />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mb-14 max-w-2xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-cyan">
              <Zap className="h-3.5 w-3.5" />
              AI Automation Lab
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Where business processes get rebuilt with AI
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-lg leading-relaxed text-white/60">
              Experiments in agentic workflows, LLM integration, and automation — treating AI as a
              redesign tool for how work gets done, not a feature bolted onto the old process.
            </p>
          </Reveal>
        </div>

        <RevealStagger className="grid gap-6 lg:grid-cols-3">
          {aiLabProjects.map((lab) => (
            <RevealItem key={lab.id}>
              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white">{lab.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{lab.description}</p>

                <div className="mt-6">
                  <p className="text-xs font-medium tracking-wide text-white/40">WORKFLOW</p>
                  <ol className="mt-3 space-y-3">
                    {lab.workflow.map((step, i) => (
                      <li key={step} className="relative flex gap-3 pl-0">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan to-purple text-[11px] font-medium text-white">
                          {i + 1}
                        </span>
                        <span className="text-sm leading-relaxed text-white/75">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="text-xs font-medium tracking-wide text-white/40">
                    BUSINESS BENEFITS
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {lab.benefits.map((b) => (
                      <li key={b} className="flex gap-2 text-sm text-white/75">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
