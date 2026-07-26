"use client";

import { useEffect, useState } from "react";
import { MessengerButton } from "@/components/MessengerButton";
import { useApp } from "@/components/providers/AppProviders";
import { telegramUrl, viberUrl, whatsappUrl } from "@/lib/contacts";
import type { Dictionary } from "@/i18n/dictionaries";

export function MessengerDock({ dict }: { dict: Dictionary }) {
  const [visible, setVisible] = useState(false);
  const { compare, cookiesOk } = useApp();
  const tg = telegramUrl("Hi from Nomore");
  const lift = compare.length > 0 || !cookiesOk;

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 220);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed right-4 z-30 flex flex-col items-end gap-2 transition duration-500 print:hidden md:right-8 ${
        lift ? "bottom-28 md:bottom-24" : "bottom-5 md:bottom-8"
      } ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <MessengerButton
        kind="viber"
        variant="dock"
        href={viberUrl()}
        label={dict.cta.viber}
      />
      {tg && (
        <MessengerButton
          kind="telegram"
          variant="dock"
          href={tg}
          label={dict.cta.telegram}
        />
      )}
      <MessengerButton
        kind="whatsapp"
        variant="dock"
        href={whatsappUrl("Hi! I'm writing from nomore.estate")}
        label={dict.cta.whatsapp}
      />
    </div>
  );
}
