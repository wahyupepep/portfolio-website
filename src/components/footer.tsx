"use client";

import { ArrowUp, Mail } from "lucide-react";
import { navLinks, profile, siteNote } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Magnetic } from "@/components/ui/magnetic";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-border) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at center, black, transparent 75%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6 py-14 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-10 sm:flex-row sm:items-center">
          <div>
            <p className="text-lg font-semibold text-ink">{profile.name}</p>
            <p className="mt-1 text-sm text-ink-muted">{profile.tagline}</p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-ink-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink-muted transition-colors hover:border-electric hover:text-electric"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink-muted transition-colors hover:border-electric hover:text-electric"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href={profile.social.email}
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink-muted transition-colors hover:border-electric hover:text-electric"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <p className="mt-10 max-w-xl text-xs leading-relaxed text-ink-muted/70">{siteNote}</p>

        <div className="mt-6 flex flex-col-reverse items-center justify-between gap-6 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-ink-muted">
            © {year} {profile.name}. Built with intention.
          </p>
          <Magnetic>
            <a
              href="#top"
              aria-label="Back to top"
              className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-medium text-ink-muted transition-colors hover:border-electric hover:text-electric"
            >
              Back to top
              <ArrowUp className="h-3.5 w-3.5" />
            </a>
          </Magnetic>
        </div>
      </div>
    </footer>
  );
}
