"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { GlassButton } from "@/components/GlassButton";
import { Logo } from "@/components/Logo";
import { CurrencyToggle } from "@/components/CurrencyToggle";
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
    { href: `/${locale}/favorites`, label: dict.nav.favorites },
    { href: `/${locale}/guide`, label: dict.nav.guide },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/contacts`, label: dict.nav.contacts },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#06080f]/75 backdrop-blur-2xl print:hidden">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 md:px-6">
        <Logo locale={locale} />

        <nav className="hidden items-center gap-0.5 xl:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-full px-3 py-2 text-[13px] font-medium transition ${
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
          <div className="hidden md:block">
            <CurrencyToggle dict={dict} />
          </div>
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
          <GlassButton
            href={whatsappUrl("Hi! Nomore Real Estate")}
            external
            variant="primary"
            className="hidden !px-4 !py-2 lg:inline-flex"
          >
            {dict.cta.whatsapp}
          </GlassButton>
          <button
            type="button"
            className="glass rounded-full px-3 py-2 text-sm xl:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            ☰
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/[0.06] bg-bg-elevated/95 px-4 py-4 backdrop-blur-xl xl:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`rounded-2xl px-3 py-3 text-sm font-medium ${
                  l.accent ? "glass text-ink" : "text-ink-muted"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <CurrencyToggle dict={dict} />
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
