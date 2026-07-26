"use client";

import { useState } from "react";
import { useApp } from "@/components/providers/AppProviders";
import type { Dictionary } from "@/i18n/dictionaries";

export function CompareButton({ id, dict }: { id: string; dict: Dictionary }) {
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
        className={`glass rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${
          on ? "text-sea" : "text-ink-muted hover:text-ink"
        }`}
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
