"use client";

import { useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries";

export function ShareButton({
  dict,
  title,
  url,
}: {
  dict: Dictionary;
  title: string;
  url: string;
}) {
  const [done, setDone] = useState(false);

  const share = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title, url });
        return;
      }
    } catch {
      /* fall through */
    }
    await navigator.clipboard.writeText(url);
    setDone(true);
    window.setTimeout(() => setDone(false), 1800);
  };

  return (
    <button
      type="button"
      onClick={share}
      className="glass rounded-full px-3 py-2 text-xs font-semibold text-ink-muted hover:text-ink"
    >
      {done ? dict.cta.copied : dict.cta.share}
    </button>
  );
}
