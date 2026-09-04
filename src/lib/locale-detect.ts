import { defaultLocale, isLocale, type Locale } from "@/i18n/config";

export const LOCALE_COOKIE = "nomore-locale";

/** Map browser / Accept-Language tags → app locale. */
export function localeFromLanguageTag(tag: string): Locale | null {
  const base = tag.trim().toLowerCase().split("-")[0];
  if (!base) return null;
  if (base === "uk" || base === "ua") return "ua";
  if (base === "bg" || base === "ru" || base === "en") return base;
  return null;
}

/** Parse Accept-Language header; first supported locale wins. */
export function localeFromAcceptLanguage(header: string | null): Locale {
  if (!header) return defaultLocale;
  const parts = header.split(",").map((p) => {
    const [tag, qPart] = p.trim().split(";");
    const q = qPart?.startsWith("q=") ? Number(qPart.slice(2)) : 1;
    return { tag: tag?.trim() ?? "", q: Number.isFinite(q) ? q : 1 };
  });
  parts.sort((a, b) => b.q - a.q);
  for (const { tag } of parts) {
    const hit = localeFromLanguageTag(tag);
    if (hit) return hit;
  }
  return defaultLocale;
}

export function localeFromCookie(value: string | undefined | null): Locale | null {
  if (!value) return null;
  return isLocale(value) ? value : null;
}

export function resolveLocale(opts: {
  cookie?: string | null;
  acceptLanguage?: string | null;
}): Locale {
  return (
    localeFromCookie(opts.cookie) ??
    localeFromAcceptLanguage(opts.acceptLanguage ?? null)
  );
}

/** Client-side: remember manual language choice. */
export function persistLocalePreference(locale: Locale) {
  if (typeof document === "undefined") return;
  document.cookie = `${LOCALE_COOKIE}=${locale};path=/;max-age=31536000;samesite=lax`;
}
