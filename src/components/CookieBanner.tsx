"use client";

import Link from "next/link";
import { useApp } from "@/components/providers/AppProviders";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export function CookieBanner({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const { cookiesOk, acceptCookies } = useApp();
  if (cookiesOk) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#0a101a]/95 p-4 backdrop-blur-xl print:hidden md:bottom-4 md:left-4 md:right-auto md:max-w-md md:rounded-2xl md:border">
      <p className="text-sm text-ink-muted">{dict.cookies.text}</p>
      <div className="mt-3 flex gap-2">
        <button
          type="button"
          onClick={acceptCookies}
          className="rounded-full bg-sea px-4 py-2 text-xs font-bold text-white"
        >
          {dict.cookies.accept}
        </button>
        <Link
          href={`/${locale}/privacy`}
          className="rounded-full px-4 py-2 text-xs font-semibold text-ink-muted hover:text-ink"
        >
          {dict.cookies.more}
        </Link>
      </div>
    </div>
  );
}
