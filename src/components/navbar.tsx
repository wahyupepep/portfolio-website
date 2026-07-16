"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navLinks, profile } from "@/lib/data";
import { ThemeToggle } from "@/components/theme-toggle";
import { LinkButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  return (
    <header className="fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-4">
      <motion.div
        animate={{
          width: scrolled ? "min(880px, 100%)" : "min(1120px, 100%)",
          backgroundColor: scrolled ? "var(--nav-bg)" : "rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "flex w-full items-center justify-between rounded-full border px-5 py-2.5 backdrop-blur-xl transition-[border-color,box-shadow]",
          scrolled
            ? "border-border shadow-[0_8px_30px_-12px_rgba(0,0,0,0.25)] [--nav-bg:color-mix(in_srgb,var(--color-surface)_78%,transparent)]"
            : "border-transparent",
        )}
      >
        <Link href="#top" className="flex items-center gap-2 text-sm font-semibold tracking-tight text-ink">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-electric to-purple text-xs text-white">
            {profile.initials}
          </span>
          <span className="hidden sm:inline">{profile.name.split(" ")[0]}</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm text-ink-muted transition-colors hover:bg-surface-2 hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>
          <LinkButton href="#contact" size="sm" className="hidden sm:inline-flex">
            Let&apos;s Talk
          </LinkButton>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-4 right-4 top-[68px] rounded-2xl border border-border bg-surface/95 p-4 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-ink transition-colors hover:bg-surface-2"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
              <ThemeToggle />
              <LinkButton href="#contact" size="sm" onClick={() => setOpen(false)}>
                Let&apos;s Talk
              </LinkButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
