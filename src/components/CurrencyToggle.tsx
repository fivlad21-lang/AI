"use client";

import { useApp } from "@/components/providers/AppProviders";
import type { Dictionary } from "@/i18n/dictionaries";

export function CurrencyToggle({ dict }: { dict: Dictionary }) {
  const { currency, setCurrency } = useApp();

  return (
    <div
      className="glass flex items-center rounded-full p-1"
      role="group"
      aria-label={dict.currency.label}
    >
      {(["EUR", "BGN"] as const).map((c) => (
        <button
          key={c}
          type="button"
          onClick={() => setCurrency(c)}
          className={`rounded-full px-2.5 py-1 text-[11px] font-bold tracking-wide ${
            currency === c ? "bg-sea text-white" : "text-ink-muted hover:text-ink"
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
