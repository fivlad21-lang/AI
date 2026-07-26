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
    size === "lg"
      ? "text-[1.65rem] md:text-[2.1rem]"
      : size === "sm"
        ? "text-[0.95rem]"
        : "text-[1.05rem] md:text-[1.2rem]";

  return (
    <Link
      href={`/${locale}`}
      className={`group inline-flex items-baseline gap-[0.35em] font-display ${text}`}
      aria-label="Nomore Estate"
    >
      <span className="font-semibold tracking-[0.04em] text-ink">Nomore</span>
      <span className="font-medium tracking-[0.18em] text-ink-muted/85 uppercase transition duration-300 group-hover:text-lagoon/90">
        Estate
      </span>
    </Link>
  );
}
