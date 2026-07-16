"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Check, Copy, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { contactPrompts, profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { LinkButton } from "@/components/ui/button";

const contactSchema = z.object({
  name: z.string().min(2, "Tell me your name"),
  email: z.string().email("That doesn't look like a valid email"),
  message: z.string().min(10, "A few more details would help"),
});

type ContactValues = z.infer<typeof contactSchema>;

function openMailClient(values: ContactValues) {
  const subject = encodeURIComponent(`Portfolio inquiry from ${values.name}`);
  const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`);
  window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
}

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(values: ContactValues) {
    openMailClient(values);
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 4000);
  }

  async function copyEmail() {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <Section id="contact" className="pb-32">
      <div className="grid gap-16 lg:grid-cols-2">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-electric">
              <span className="h-1.5 w-1.5 rounded-full bg-electric" />
              Get in touch
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {contactPrompts[0]}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-muted">
              Whether it&apos;s a product role, an automation idea, or just a conversation about
              turning business problems into digital products — I&apos;d love to hear from you.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <LinkButton href={profile.resumeUrl} variant="outline">
                Download Resume
              </LinkButton>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex h-12 items-center gap-2 rounded-full border border-border-strong px-6 text-sm font-medium text-ink transition-colors hover:border-electric hover:text-electric"
              >
                {copied ? <Check className="h-4 w-4 text-emerald" /> : <Copy className="h-4 w-4" />}
                {copied ? "Copied!" : "Copy Email"}
              </button>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex items-center gap-3">
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-ink-muted transition-all hover:-translate-y-0.5 hover:border-electric hover:text-electric"
              >
                <LinkedinIcon className="h-[18px] w-[18px]" />
              </a>
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-ink-muted transition-all hover:-translate-y-0.5 hover:border-electric hover:text-electric"
              >
                <GithubIcon className="h-[18px] w-[18px]" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit(onSubmit)} className="rounded-3xl border border-border bg-surface p-6 sm:p-8">
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-ink-muted">
                  Name
                </label>
                <input
                  id="name"
                  {...register("name")}
                  className="mt-1.5 w-full rounded-xl border border-border bg-surface-2/60 px-4 py-3 text-ink outline-none transition-colors focus:border-electric"
                  placeholder="Your name"
                />
                {errors.name && <p className="mt-1.5 text-xs text-orange">{errors.name.message}</p>}
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-ink-muted">
                  Email
                </label>
                <input
                  id="email"
                  {...register("email")}
                  className="mt-1.5 w-full rounded-xl border border-border bg-surface-2/60 px-4 py-3 text-ink outline-none transition-colors focus:border-electric"
                  placeholder="you@company.com"
                />
                {errors.email && <p className="mt-1.5 text-xs text-orange">{errors.email.message}</p>}
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium text-ink-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  rows={4}
                  className="mt-1.5 w-full resize-none rounded-xl border border-border bg-surface-2/60 px-4 py-3 text-ink outline-none transition-colors focus:border-electric"
                  placeholder="What are you working on?"
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-orange">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-ink text-sm font-medium text-background transition-all hover:shadow-[0_0_24px_-4px_var(--color-electric)] disabled:opacity-60"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>

              {sent && (
                <motion.p
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm text-emerald"
                >
                  Opening your email client — talk soon!
                </motion.p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
