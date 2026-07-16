import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/ui/magnetic";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-ink text-background shadow-[0_1px_0_0_rgba(255,255,255,0.1)_inset] hover:shadow-[0_0_24px_-4px_var(--color-electric)] hover:-translate-y-0.5",
        outline:
          "border border-border-strong text-ink hover:border-electric hover:text-electric hover:-translate-y-0.5",
        ghost: "text-ink-muted hover:text-ink",
      },
      size: {
        default: "h-12 px-6",
        sm: "h-10 px-4 text-sm",
        lg: "h-14 px-8 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <Magnetic className="inline-block">
      <button className={cn(buttonVariants({ variant, size }), className)} {...props} />
    </Magnetic>
  );
}

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof buttonVariants> & { href: string };

export function LinkButton({ className, variant, size, href, ...props }: LinkButtonProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  return (
    <Magnetic className="inline-block">
      <Link
        href={href}
        className={cn(buttonVariants({ variant, size }), className)}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        {...props}
      />
    </Magnetic>
  );
}
