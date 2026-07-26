"use client";

import { useState } from "react";
import { useApp } from "@/components/providers/AppProviders";
import type { Dictionary } from "@/i18n/dictionaries";

export function CompareButton({
  id,
  dict,
  onMedia = false,
}: {
  id: string;
  dict: Dictionary;
  onMedia?: boolean;
}) {
  const { isCompared, toggleCompare } = useApp();
  const on = isCompared(id);
  const [msg, setMsg] = useState<string | null>(null);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          const ok = toggleCompare(id);
          if (!ok) {
            setMsg(dict.compare.max);
            window.setTimeout(() => setMsg(null), 2200);
          }
        }}
        className={`rounded-full px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-wide ${
          onMedia
            ? "bg-black/55 text-white shadow-[0_2px_8px_rgba(0,0,0,0.35)] backdrop-blur-sm hover:bg-black/70"
            : "glass text-ink-muted hover:text-ink"
        } ${on ? (onMedia ? "!text-lagoon" : "text-sea") : ""}`}
      >
        {on ? dict.cta.compareRemove : dict.cta.compareAdd}
      </button>
      {msg && (
        <p className="absolute right-0 top-full z-20 mt-1 w-44 rounded-xl bg-bg-elevated px-2 py-1 text-[10px] text-ink-muted ring-1 ring-white/10">
          {msg}
        </p>
      )}
    </div>
  );
}
