"use client";

import type { Dictionary } from "@/i18n/dictionaries";

export function PrintButton({ dict }: { dict: Dictionary }) {
  return (
    <button
      type="button"
      className="glass rounded-full px-3 py-2 text-xs font-semibold text-ink-muted hover:text-ink print:hidden"
      onClick={() => window.print()}
    >
      {dict.listing.print}
    </button>
  );
}
