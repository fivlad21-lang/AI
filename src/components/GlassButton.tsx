import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "glass" | "ghost";
  className?: string;
  type?: "button" | "submit";
  external?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition active:scale-[0.98]";

const variants = {
  primary: "bg-sea text-white shadow-[0_0_0_1px_rgba(59,130,246,0.4)] hover:bg-sea-deep",
  glass:
    "glass text-ink hover:bg-white/10 hover:border-white/25",
  ghost: "text-ink-muted hover:text-ink border border-transparent",
};

export function GlassButton({
  href,
  onClick,
  children,
  variant = "glass",
  className = "",
  type = "button",
  external,
}: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (href) {
    if (external) {
      return (
        <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
