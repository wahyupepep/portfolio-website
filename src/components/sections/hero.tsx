"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { heroHeadline, profile, rotatingExpertise } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { HeroNetwork } from "@/components/hero-network";
import { RotatingText } from "@/components/rotating-text";
import { LinkButton } from "@/components/ui/button";

const socials = [
  { href: profile.social.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
  { href: profile.social.github, icon: GithubIcon, label: "GitHub" },
  { href: profile.social.email, icon: Mail, label: "Email" },
];

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden pt-28">
      <HeroNetwork />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-6 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-border-strong bg-gradient-to-br from-electric/20 via-cyan/20 to-purple/20 text-2xl font-semibold text-ink shadow-[0_0_40px_-8px_var(--color-electric)] backdrop-blur-sm sm:h-28 sm:w-28"
        >
          {profile.initials}
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface/60 px-4 py-1.5 text-sm text-ink-muted backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
          </span>
          {profile.availability}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-6xl lg:text-7xl"
        >
          {heroHeadline.line1}
          <br />
          <span className="gradient-text">{heroHeadline.line2}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-2xl text-balance text-lg text-ink-muted sm:text-xl"
        >
          {heroHeadline.sub}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-3 text-balance text-base text-ink-muted sm:text-lg"
        >
          Currently focused on{" "}
          <RotatingText words={rotatingExpertise} />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <LinkButton href="#projects" size="lg">
            View My Work
          </LinkButton>
          <LinkButton href={profile.resumeUrl} variant="outline" size="lg">
            Download Resume
          </LinkButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 flex items-center gap-4"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink-muted transition-all hover:-translate-y-0.5 hover:border-electric hover:text-electric"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1, duration: 0.6 }, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          aria-label="Scroll to About section"
          className="flex flex-col items-center gap-2 text-ink-muted"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </a>
      </motion.div>
    </section>
  );
}
