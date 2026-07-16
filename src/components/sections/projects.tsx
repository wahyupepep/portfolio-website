"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";
import { projectFilters, projects, type Project } from "@/lib/data";
import { GithubIcon } from "@/components/icons";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Modal } from "@/components/ui/modal";
import { TiltCard } from "@/components/ui/tilt-card";
import { cn } from "@/lib/utils";

export function Projects() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<Project | null>(null);

  const filtered = useMemo(
    () =>
      filter === "All" ? projects : projects.filter((p) => p.categories.includes(filter)),
    [filter],
  );

  return (
    <Section
      id="projects"
      kicker="Featured Projects"
      title="Product case studies, not just code"
      subtitle="Every project here started as a business problem. Click a card to see the full case study — context, solution, and impact."
    >
      <div className="mb-8 flex flex-wrap gap-2">
        {projectFilters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              filter === f
                ? "border-electric bg-electric/10 text-electric"
                : "border-border text-ink-muted hover:border-border-strong hover:text-ink",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <TiltCard className="flex h-full flex-col p-6">
                <div className="flex flex-wrap gap-1.5">
                  {project.categories.map((c) => (
                    <Badge key={c} accent="electric">
                      {c}
                    </Badge>
                  ))}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                  {project.tagline}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-surface-2 px-2.5 py-1 text-xs text-ink-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setActive(project)}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-electric"
                >
                  View case study
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </TiltCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <Modal open={!!active} onClose={() => setActive(null)}>
        {active && (
          <div>
            <div className="flex flex-wrap gap-1.5 pr-10">
              {active.categories.map((c) => (
                <Badge key={c} accent="electric">
                  {c}
                </Badge>
              ))}
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-ink">{active.title}</h3>
            <p className="mt-1 text-ink-muted">{active.tagline}</p>

            <div className="mt-6 space-y-5">
              <div>
                <h4 className="text-sm font-medium tracking-wide text-ink-muted">
                  Business Problem
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-ink">{active.businessProblem}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium tracking-wide text-ink-muted">Context</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-ink">{active.context}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium tracking-wide text-ink-muted">Solution</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-ink">{active.solution}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium tracking-wide text-ink-muted">
                  Business Impact
                </h4>
                <ul className="mt-1.5 space-y-1 text-sm text-ink">
                  {active.impact.map((imp) => (
                    <li key={imp} className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald" />
                      {imp}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium tracking-wide text-ink-muted">
                  Technologies
                </h4>
                <div className="mt-1.5 flex flex-wrap gap-2">
                  {active.technologies.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </div>
            </div>

            {(active.github || active.demo) && (
              <div className="mt-7 flex gap-3 border-t border-border pt-6">
                {active.github && (
                  <a
                    href={active.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted hover:text-ink"
                  >
                    <GithubIcon className="h-4 w-4" /> GitHub
                  </a>
                )}
                {active.demo && (
                  <a
                    href={active.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-electric"
                  >
                    Live Demo <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            )}
          </div>
        )}
      </Modal>
    </Section>
  );
}
