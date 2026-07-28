export type AnalyticsParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __NOMORE_GA_READY__?: boolean;
  }
}

export function getGaId(): string | undefined {
  const id = process.env.NEXT_PUBLIC_GA_ID?.trim();
  return id || undefined;
}

/** Fire a GA4 event when gtag is ready; safe no-op otherwise. */
export function track(event: string, params?: AnalyticsParams) {
  if (typeof window === "undefined") return;
  const gtag = window.gtag;
  if (!gtag) return;
  const clean: Record<string, string | number | boolean> = {};
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      if (v !== undefined) clean[k] = v;
    }
  }
  gtag("event", event, clean);
}

export function trackPageview(path: string) {
  const id = getGaId();
  if (typeof window === "undefined" || !id || !window.gtag) return;
  window.gtag("config", id, { page_path: path });
}

export function trackMessenger(
  kind: "whatsapp" | "telegram" | "viber",
  place: string,
) {
  if (kind === "whatsapp") track("wa_click", { place });
  else if (kind === "telegram") track("tg_click", { place });
  else track("viber_click", { place });
}
