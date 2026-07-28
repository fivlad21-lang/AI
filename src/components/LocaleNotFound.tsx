"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { GlassButton } from "@/components/GlassButton";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export function LocaleNotFound() {
  const params = useParams();
  const raw = String(params?.locale || "bg");
  const locale = (isLocale(raw) ? raw : "bg") as Locale;
  const dict = getDictionary(locale);

  return (
    <div className="hero-grid flex min-h-[70dvh] flex-col items-center justify-center px-4 text-center">
      <p className="font-display text-2xl font-semibold tracking-tight">{dict.brand}</p>
      <h1 className="mt-4 font-display text-4xl font-semibold">{dict.notFound.title}</h1>
      <p className="mt-3 max-w-md text-ink-muted">{dict.notFound.text}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <GlassButton href={`/${locale}`} variant="primary">
          {dict.notFound.home}
        </GlassButton>
        <Link
          href={`/${locale}/contacts`}
          className="self-center text-sm text-ink-muted"
        >
          {dict.nav.contacts} →
        </Link>
      </div>
    </div>
  );
}
