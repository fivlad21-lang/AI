"use client";

import { useEffect } from "react";

/**
 * Analytics stub (F4). Set NEXT_PUBLIC_GA_ID when ready.
 * UTM notes (F5): append ?utm_source=&utm_medium=&utm_campaign= to ads;
 * WhatsApp deep-links already carry [BUY]/[RENT]/[SELL]/[VIEW]/[SHORTLIST] context.
 */
export function Analytics() {
  useEffect(() => {
    const id = process.env.NEXT_PUBLIC_GA_ID;
    if (!id || typeof window === "undefined") return;
    // Placeholder — wire gtag when ID provided.
    (window as unknown as { __NOMORE_ANALYTICS__?: string }).__NOMORE_ANALYTICS__ = id;
  }, []);
  return null;
}
