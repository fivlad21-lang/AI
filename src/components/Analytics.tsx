"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { useApp } from "@/components/providers/AppProviders";
import { getGaId, trackPageview } from "@/lib/analytics";

/**
 * GA4 after cookie consent. Set NEXT_PUBLIC_GA_ID (e.g. G-XXXX).
 * See docs/TZ_MONITORING.md.
 */
export function Analytics() {
  const { cookiesOk, hydrated } = useApp();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const id = getGaId();

  const enabled = Boolean(hydrated && cookiesOk && id);

  useEffect(() => {
    if (!enabled || !id) return;
    const qs = searchParams?.toString();
    const path = qs ? `${pathname}?${qs}` : pathname;
    trackPageview(path);
  }, [enabled, id, pathname, searchParams]);

  if (!enabled || !id) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="nomore-ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${id}', { send_page_view: false });
          window.__NOMORE_GA_READY__ = true;
        `}
      </Script>
    </>
  );
}
