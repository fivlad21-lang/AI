"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { Logo } from "@/components/Logo";
import { HeartIcon } from "@/components/HeartIcon";
import { MessengerButton } from "@/components/MessengerButton";
import { whatsappUrl } from "@/lib/contacts";
import { waGeneric } from "@/lib/wa-messages";
import { persistLocalePreference } from "@/lib/locale-detect";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [entered, setEntered] = useState(false);
  const [present, setPresent] = useState(false);

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

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (open) {
      setPresent(true);
      const id = requestAnimationFrame(() =>
        requestAnimationFrame(() => setEntered(true)),
      );
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        cancelAnimationFrame(id);
        document.body.style.overflow = prev;
      };
    }
    setEntered(false);
    const t = window.setTimeout(() => setPresent(false), 420);
    return () => window.clearTimeout(t);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  const drawer =
    mounted &&
    present &&
    createPortal(
      <div
        className="fixed inset-0 z-[100] h-[100dvh] min-h-[100dvh] w-full lg:hidden"
        aria-hidden={!open}
      >
        <button
          type="button"
          aria-label={dict.nav.closeMenu}
          onClick={close}
          className={`absolute inset-0 h-full w-full bg-black/70 transition-opacity ease-out ${
            entered ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDuration: "320ms" }}
        />
        <aside
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className={`absolute inset-y-0 right-0 flex h-full min-h-[100dvh] w-[min(86vw,20.5rem)] flex-col border-l border-white/10 bg-[#0a0f18] shadow-[-24px_0_60px_-20px_rgba(0,0,0,0.85)] transition-transform ease-[cubic-bezier(0.32,0.72,0,1)] ${
            entered ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ transitionDuration: "420ms" }}
        >
          <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3.5">
            <span className="text-sm font-semibold text-ink">{dict.brand}</span>
            <button
              type="button"
              onClick={close}
              className="glass flex h-9 w-9 items-center justify-center rounded-full text-lg text-ink-muted hover:text-ink"
              aria-label={dict.nav.closeMenu}
            >
              ✕
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto overscroll-contain px-3 py-4">
            <div className="flex flex-col gap-0.5">
              {primary.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  className={`rounded-2xl px-3 py-3.5 text-[15px] font-medium transition active:scale-[0.98] ${
                    l.accent ? "glass text-ink" : "text-ink-muted hover:bg-white/[0.04] hover:text-ink"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="mt-3 flex flex-col gap-0.5 border-t border-white/10 pt-3">
              {more.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  className="rounded-2xl px-3 py-3 text-sm text-ink-muted transition hover:bg-white/[0.04] hover:text-ink active:scale-[0.98]"
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-2 px-1">
              {locales.map((l) => (
                <Link
                  key={l}
                  href={switchLocale(l)}
                  onClick={() => {
                    persistLocalePreference(l);
                    close();
                  }}
                  className={`rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide ${
                    l === locale ? "bg-sea text-white" : "glass text-ink-muted"
                  }`}
                >
                  {l}
                </Link>
              ))}
            </div>
          </nav>

          <div className="border-t border-white/[0.06] p-4">
            <MessengerButton
              kind="whatsapp"
              place="drawer"
              href={whatsappUrl(waGeneric(locale))}
              label={dict.cta.whatsapp}
              className="w-full !justify-center"
            />
          </div>
        </aside>
      </div>,
      document.body,
    );

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#06080f]/75 backdrop-blur-2xl print:hidden">
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
            className="glass flex h-9 w-9 items-center justify-center rounded-full text-sm text-ink-muted hover:text-ink"
            aria-label={dict.nav.favorites}
            title={dict.nav.favorites}
          >
            <HeartIcon className="h-4 w-4" filled />
          </Link>
          <div className="glass hidden items-center rounded-full p-1 sm:flex">
            {locales.map((l) => (
              <Link
                key={l}
                href={switchLocale(l)}
                onClick={() => persistLocalePreference(l)}
                className={`rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${
                  l === locale ? "bg-sea text-white" : "text-ink-muted hover:text-ink"
                }`}
              >
                {l}
              </Link>
            ))}
          </div>
          {/* Desktop only — mobile uses hero / drawer / dock after scroll */}
          <MessengerButton
            kind="whatsapp"
            place="header"
            href={whatsappUrl(waGeneric(locale))}
            label={dict.cta.whatsapp}
            className="hidden !px-4 !py-2 md:inline-flex"
          />
          <button
            type="button"
            className="glass flex h-10 w-10 items-center justify-center rounded-full text-sm lg:hidden"
            onClick={() => setOpen(true)}
            aria-label={dict.nav.menu}
            aria-expanded={open}
          >
            ☰
          </button>
        </div>
      </div>
      {drawer}
    </header>
  );
}
