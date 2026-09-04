"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MessengerButton } from "@/components/MessengerButton";
import { useApp } from "@/components/providers/AppProviders";
import { telegramUrl, viberUrl, whatsappUrl } from "@/lib/contacts";
import { waDock } from "@/lib/wa-messages";
import { isLocale, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export function MessengerDock({ dict }: { dict: Dictionary }) {
  const [visible, setVisible] = useState(false);
  const { compare, cookiesOk } = useApp();
  const pathname = usePathname();
  const localePart = pathname.split("/")[1] ?? "bg";
  const locale = (isLocale(localePart) ? localePart : "bg") as Locale;
  const tg = telegramUrl(waDock(locale));
  const lift = compare.length > 0 || !cookiesOk;
  const onListing = /\/listings\//.test(pathname);
  /** Home locale root — keep dock off until below hero so first screen has ≤1 WA. */
  const onHome = /^\/(bg|ru|ua|en)\/?$/.test(pathname);

  useEffect(() => {
    const threshold = onHome
      ? Math.min(window.innerHeight * 0.75, 640)
      : 220;
    const onScroll = () => setVisible(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onHome, pathname]);

  return (
    <div
      className={`fixed right-4 z-30 flex flex-col items-end gap-2 transition duration-500 print:hidden md:right-8 ${
        onListing ? "max-md:hidden" : ""
      } ${lift || onListing ? "bottom-28 md:bottom-24" : "bottom-5 md:bottom-8"} ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <MessengerButton
        kind="viber"
        variant="dock"
        place="dock"
        href={viberUrl()}
        label={dict.cta.viber}
      />
      {tg && (
        <MessengerButton
          kind="telegram"
          variant="dock"
          place="dock"
          href={tg}
          label={dict.cta.telegram}
        />
      )}
      <MessengerButton
        kind="whatsapp"
        variant="dock"
        place="dock"
        href={whatsappUrl(waDock(locale))}
        label={dict.cta.whatsapp}
      />
    </div>
  );
}
