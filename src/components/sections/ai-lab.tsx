"use client";

import Image from "next/image";
import { ArrowUpRight, Zap } from "lucide-react";
import { useState } from "react";
import { aiLabProjects, type AILabProject } from "@/lib/data";
import { GithubIcon } from "@/components/icons";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/reveal";
import { Modal } from "@/components/ui/modal";

export function AILab() {
  const [active, setActive] = useState<AILabProject | null>(null);

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

        <RevealStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {aiLabProjects.map((lab) => (
            <RevealItem key={lab.id}>
              <button
                type="button"
                onClick={() => setActive(lab)}
                className="flex h-full w-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left backdrop-blur-sm transition-colors hover:border-white/20"
              >
                {lab.logo ? (
                  <div className="flex flex-col items-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white p-3">
                      <Image
                        src={lab.logo}
                        alt=""
                        width={120}
                        height={120}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-white">{lab.title}</h3>
                  </div>
                ) : (
                  <h3 className="text-lg font-semibold text-white">{lab.title}</h3>
                )}
                <p className="mt-4 flex-1 text-center text-sm leading-relaxed text-white/60">
                  {lab.tagline}
                </p>
                <span className="mt-6 inline-flex items-center justify-center gap-1.5 text-sm font-medium text-cyan">
                  View how it works
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </button>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>

      <Modal open={!!active} onClose={() => setActive(null)}>
        {active && (
          <div>
            {active.logo ? (
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white p-2.5">
                  <Image
                    src={active.logo}
                    alt=""
                    width={100}
                    height={100}
                    className="h-full w-full object-contain"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-ink">{active.title}</h3>
              </div>
            ) : (
              <h3 className="text-2xl font-semibold text-ink">{active.title}</h3>
            )}
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">{active.description}</p>

            {active.workflowImage ? (
              <div className="mt-6 overflow-hidden rounded-2xl border border-border">
                <img
                  src={active.workflowImage}
                  alt={`${active.title} workflow diagram`}
                  className="w-full"
                />
              </div>
            ) : (
              <div className="mt-6">
                <h4 className="text-sm font-medium tracking-wide text-ink-muted">Workflow</h4>
                <ol className="mt-3 space-y-3">
                  {active.workflow.map((step, i) => (
                    <li key={step} className="flex gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-electric/10 text-[11px] font-medium text-electric">
                        {i + 1}
                      </span>
                      <span className="text-sm leading-relaxed text-ink">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            <div className="mt-6 border-t border-border pt-5">
              <h4 className="text-sm font-medium tracking-wide text-ink-muted">
                Business benefits
              </h4>
              <ul className="mt-3 space-y-1.5">
                {active.benefits.map((b) => (
                  <li key={b} className="flex gap-2 text-sm text-ink">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {active.github && (
              <div className="mt-7 flex gap-3 border-t border-border pt-6">
                <a
                  href={active.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted hover:text-ink"
                >
                  <GithubIcon className="h-4 w-4" /> View workflow on GitHub
                </a>
              </div>
            )}
          </div>
        )}
      </Modal>
    </section>
  );
}
