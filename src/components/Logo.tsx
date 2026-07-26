import Link from "next/link";
import type { Locale } from "@/i18n/config";

export function Logo({
  locale,
  size = "md",
}: {
  locale: Locale;
  size?: "sm" | "md" | "lg";
}) {
  const text =
    size === "lg" ? "text-2xl md:text-3xl" : size === "sm" ? "text-base" : "text-lg md:text-xl";

  return (
    <Link
      href={`/${locale}`}
      className={`group inline-flex items-baseline gap-2 font-display font-semibold tracking-tight ${text}`}
    >
      <span>Nomore</span>
      <span className="text-ink-muted transition group-hover:text-ink">Estate</span>
    </Link>
  );
}
