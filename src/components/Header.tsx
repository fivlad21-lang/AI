"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { Logo } from "@/components/Logo";
import { MessengerButton } from "@/components/MessengerButton";
import { whatsappUrl } from "@/lib/contacts";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const switchLocale = (next: Locale) => {
    const parts = pathname.split("/");
    parts[1] = next;
    return parts.join("/") || `/${next}`;
  };

  const primary = [
    { href: `/${locale}/buy`, label: dict.nav.buy },
    { href: `/${locale}/rent`, label: dict.nav.rent },
    { href: `/${locale}/sell`, label: dict.nav.sell, accent: true },
    { href: `/${locale}/contacts`, label: dict.nav.contacts },
  ];

  const more = [
    { href: `/${locale}/favorites`, label: dict.nav.favorites },
    { href: `/${locale}/guide`, label: dict.nav.guide },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/blog`, label: dict.nav.blog },
    { href: `/${locale}/compare`, label: dict.nav.compare },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#06080f]/75 backdrop-blur-2xl print:hidden">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3.5 md:px-6">
        <Logo locale={locale} />

        <nav className="hidden items-center gap-0.5 lg:flex">
          {primary.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`whitespace-nowrap rounded-full px-3 py-2 text-[13px] font-medium transition ${
                l.accent
                  ? "glass text-ink hover:bg-white/10"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={`/${locale}/favorites`}
            className="glass hidden h-9 w-9 items-center justify-center rounded-full text-sm text-ink-muted hover:text-ink sm:flex"
            aria-label={dict.nav.favorites}
            title={dict.nav.favorites}
          >
            ♥
          </Link>
          <div className="glass hidden items-center rounded-full p-1 sm:flex">
            {locales.map((l) => (
              <Link
                key={l}
                href={switchLocale(l)}
                className={`rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${
                  l === locale ? "bg-sea text-white" : "text-ink-muted hover:text-ink"
                }`}
              >
                {l}
              </Link>
            ))}
          </div>
          <MessengerButton
            kind="whatsapp"
            href={whatsappUrl("Hi! Nomore Real Estate")}
            label={dict.cta.whatsapp}
            className="hidden !px-4 !py-2 md:inline-flex"
          />
          <button
            type="button"
            className="glass rounded-full px-3 py-2 text-sm lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            ☰
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/[0.06] bg-bg-elevated/95 px-4 py-4 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1">
            {primary.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`whitespace-nowrap rounded-2xl px-3 py-3 text-sm font-medium ${
                  l.accent ? "glass text-ink" : "text-ink-muted"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="mt-3 flex flex-col gap-1 border-t border-white/10 pt-3">
            {more.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-3 py-2.5 text-sm text-ink-muted"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {locales.map((l) => (
              <Link
                key={l}
                href={switchLocale(l)}
                onClick={() => setOpen(false)}
                className={`rounded-full px-3 py-1.5 text-[11px] font-bold uppercase glass ${
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
