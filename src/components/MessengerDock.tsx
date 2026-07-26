"use client";

import { useEffect, useState } from "react";
import {
  TELEGRAM_USERNAME,
  WHATSAPP_DISPLAY,
  telegramUrl,
  whatsappUrl,
} from "@/lib/contacts";
import type { Dictionary } from "@/i18n/dictionaries";

export function MessengerDock({ dict }: { dict: Dictionary }) {
  const [visible, setVisible] = useState(false);
  const tg = telegramUrl("Hi from Nomore");

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 220);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-4 z-40 flex flex-col items-end gap-2 transition duration-500 print:hidden md:bottom-8 md:right-8 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      {tg ? (
        <a
          href={tg}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-strong flex items-center gap-3 rounded-full py-2.5 pl-2.5 pr-5 text-sm font-semibold"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2AABEE] text-xs font-bold text-white">
            TG
          </span>
          <span className="hidden sm:inline">{dict.cta.telegram}</span>
        </a>
      ) : (
        <span
          className="glass rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-ink-muted"
          title={TELEGRAM_USERNAME ? "" : "Set TELEGRAM_USERNAME in contacts.ts"}
        >
          {dict.cta.telegramSoon}
        </span>
      )}
      <a
        href={whatsappUrl("Hi! I'm writing from nomore.estate")}
        target="_blank"
        rel="noopener noreferrer"
        className="glass-strong flex items-center gap-3 rounded-full py-2.5 pl-2.5 pr-5 text-sm font-semibold text-ink shadow-[0_12px_40px_-16px_rgba(0,0,0,0.8)]"
        aria-label={`${dict.cta.whatsapp} ${WHATSAPP_DISPLAY}`}
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-base font-bold text-white">
          WA
        </span>
        <span className="hidden sm:inline">{dict.cta.whatsapp}</span>
      </a>
    </div>
  );
}
