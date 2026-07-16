"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function TiltCard({
  children,
  className,
  glowColor = "var(--color-electric)",
}: {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);

  const springRotateX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const background = useMotionTemplate`radial-gradient(360px circle at ${mouseX}% ${mouseY}%, ${glowColor}22, transparent 70%)`;

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    mouseX.set(px * 100);
    mouseY.set(py * 100);
    rotateY.set((px - 0.5) * 10);
    rotateX.set((0.5 - py) * 10);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX: springRotateX, rotateY: springRotateY, transformPerspective: 800 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-surface",
        className,
      )}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background }}
      />
      <div className="relative h-full">{children}</div>
    </motion.div>
  );
}
