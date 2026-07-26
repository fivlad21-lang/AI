"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { GlassButton } from "@/components/GlassButton";
import { whatsappUrl } from "@/lib/contacts";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const switchLocale = (next: Locale) => {
    const parts = pathname.split("/");
    parts[1] = next;
    return parts.join("/") || `/${next}`;
  };

  const links = [
    { href: `/${locale}/buy`, label: dict.nav.buy },
    { href: `/${locale}/rent`, label: dict.nav.rent },
    { href: `/${locale}/sell`, label: dict.nav.sell, accent: true },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/contacts`, label: dict.nav.contacts },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-bg/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link href={`/${locale}`} className="font-display text-lg font-semibold tracking-tight md:text-xl">
          Nomore
          <span className="ml-1.5 text-sm font-medium text-ink-muted">estate</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-xl px-3 py-2 text-sm font-medium transition ${
                l.accent
                  ? "glass text-lagoon hover:bg-white/10"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="glass hidden items-center rounded-xl p-1 sm:flex">
            {locales.map((l) => (
              <Link
                key={l}
                href={switchLocale(l)}
                className={`rounded-lg px-2 py-1 text-xs font-semibold uppercase ${
                  l === locale ? "bg-sea text-white" : "text-ink-muted hover:text-ink"
                }`}
              >
                {l}
              </Link>
            ))}
          </div>
          <GlassButton
            href={whatsappUrl("Hi! Nomore Real Estate")}
            external
            variant="primary"
            className="hidden !py-2.5 md:inline-flex"
          >
            {dict.cta.whatsapp}
          </GlassButton>
          <button
            type="button"
            className="glass rounded-xl px-3 py-2 text-sm lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            ☰
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-bg-elevated px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-3 py-3 text-sm font-medium ${
                  l.accent ? "glass text-lagoon" : "text-ink"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {locales.map((l) => (
              <Link
                key={l}
                href={switchLocale(l)}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold uppercase glass ${
                  l === locale ? "!bg-sea text-white" : ""
                }`}
              >
                {l}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
