"use client";

import Link from "next/link";
import { useApp } from "@/components/providers/AppProviders";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export function CompareBar({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const { compare } = useApp();
  if (compare.length === 0) return null;

  return (
    <div className="fixed bottom-20 left-1/2 z-40 -translate-x-1/2 print:hidden md:bottom-8">
      <Link
        href={`/${locale}/compare`}
        className="glass-strong flex items-center gap-3 rounded-full px-5 py-2.5 text-sm font-semibold shadow-lg"
      >
        {dict.nav.compare}
        <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-sea px-1.5 text-xs text-white">
          {compare.length}
        </span>
      </Link>
    </div>
  );
}
