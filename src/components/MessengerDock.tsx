"use client";

import { useEffect, useState } from "react";
import { WHATSAPP_DISPLAY, whatsappUrl } from "@/lib/contacts";

export function MessengerDock({ label }: { label: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 220);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-4 z-40 transition duration-500 md:bottom-8 md:right-8 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <a
        href={whatsappUrl("Hi! I'm writing from nomore.estate")}
        target="_blank"
        rel="noopener noreferrer"
        className="glass-strong flex items-center gap-3 rounded-full py-2.5 pl-2.5 pr-5 text-sm font-semibold text-ink shadow-[0_12px_40px_-16px_rgba(0,0,0,0.8)]"
        aria-label={`${label} ${WHATSAPP_DISPLAY}`}
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-base font-bold text-white">
          WA
        </span>
        <span className="hidden sm:inline">{label}</span>
      </a>
    </div>
  );
}
