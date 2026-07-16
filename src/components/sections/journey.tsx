"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { journeyStages } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function Journey() {
  const [openId, setOpenId] = useState<string>(journeyStages[journeyStages.length - 1].id);

  return (
    <Section
      id="journey"
      kicker="Career Journey"
      title="From business analysis to product ownership"
      subtitle="Every stage of this path added a layer to how I understand and build products. Click a stage to see the full story."
    >
      <div className="flex flex-col gap-3">
        {journeyStages.map((stage, i) => {
          const isOpen = openId === stage.id;
          return (
            <Reveal key={stage.id} delay={i * 0.05}>
              <div
                className={cn(
                  "overflow-hidden rounded-2xl border transition-colors",
                  isOpen ? "border-electric/40 bg-surface" : "border-border bg-surface/60",
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? "" : stage.id)}
                  className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-7"
                  aria-expanded={isOpen}
                >
                  <span
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-mono text-sm font-medium transition-colors",
                      isOpen
                        ? "bg-gradient-to-br from-electric to-purple text-white"
                        : "bg-surface-2 text-ink-muted",
                    )}
                  >
                    {stage.stage}
                  </span>
                  <span className="flex-1">
                    <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="text-lg font-semibold text-ink sm:text-xl">{stage.title}</span>
                      <span className="text-sm text-ink-muted">{stage.period}</span>
                    </span>
                    <span className="mt-0.5 block text-sm font-medium text-electric">{stage.company}</span>
                    <span className="mt-1 block text-sm text-ink-muted">{stage.summary}</span>
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-ink-muted transition-transform duration-300",
                      isOpen && "rotate-180 text-electric",
                    )}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-6 border-t border-border px-5 py-6 sm:grid-cols-2 sm:px-7">
                        <div>
                          <h4 className="text-sm font-medium tracking-wide text-ink-muted">
                            Responsibilities
                          </h4>
                          <ul className="mt-2 space-y-1.5 text-sm text-ink">
                            {stage.responsibilities.map((r) => (
                              <li key={r} className="flex gap-2">
                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-electric" />
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-sm font-medium tracking-wide text-ink-muted">
                            Business Problems Solved
                          </h4>
                          <ul className="mt-2 space-y-1.5 text-sm text-ink">
                            {stage.businessProblems.map((p) => (
                              <li key={p} className="flex gap-2">
                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-purple" />
                                {p}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-sm font-medium tracking-wide text-ink-muted">
                            Key Achievements
                          </h4>
                          <ul className="mt-2 space-y-1.5 text-sm text-ink">
                            {stage.achievements.map((a) => (
                              <li key={a} className="flex gap-2">
                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald" />
                                {a}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-sm font-medium tracking-wide text-ink-muted">
                            Lessons Learned
                          </h4>
                          <p className="mt-2 text-sm leading-relaxed text-ink">{stage.lessons}</p>
                        </div>

                        <div className="sm:col-span-2">
                          <h4 className="text-sm font-medium tracking-wide text-ink-muted">
                            Technologies &amp; Tools
                          </h4>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {stage.technologies.map((t) => (
                              <Badge key={t} accent="electric">
                                {t}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
