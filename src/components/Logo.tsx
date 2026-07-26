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
  const text =
    size === "lg" ? "text-2xl" : size === "sm" ? "text-base" : "text-lg md:text-xl";

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
      <span className={`flex items-baseline gap-2 font-display font-semibold tracking-tight ${text}`}>
        <span>Nomore</span>
        <span className="text-ink-muted transition group-hover:text-ink">Estate</span>
      </span>
    </Link>
  );
}
