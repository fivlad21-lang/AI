import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";

export function Logo({
  locale,
  size = "md",
}: {
  locale: Locale;
  size?: "sm" | "md" | "lg";
}) {
  const h = size === "lg" ? 36 : size === "sm" ? 22 : 28;

  return (
    <Link href={`/${locale}`} className="group inline-flex items-center gap-2.5">
      <Image
        src="/brand/mark.svg"
        alt=""
        width={h}
        height={h}
        className="rounded-lg"
        unoptimized
      />
      <span className="flex items-baseline gap-2">
        <span
          className={`font-display font-semibold tracking-tight ${
            size === "lg" ? "text-2xl" : size === "sm" ? "text-base" : "text-lg md:text-xl"
          }`}
        >
          Nomore
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted group-hover:text-ink md:text-[11px]">
          estate
        </span>
      </span>
    </Link>
  );
}
