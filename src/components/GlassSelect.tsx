"use client";

import { useEffect, useId, useRef, useState } from "react";

export type GlassOption = { value: string; label: string };

export function GlassSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: GlassOption[];
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();
  const current = options.find((o) => o.value === value)?.label ?? value;

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <div ref={ref} className="relative">
      <label htmlFor={id} className="block text-xs font-semibold uppercase tracking-wide text-ink-muted">
        {label}
      </label>
      <button
        id={id}
        type="button"
        className="glass mt-1.5 flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm text-ink outline-none focus:ring-2 focus:ring-sea/50"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{current}</span>
        <span className="text-ink-muted">▾</span>
      </button>
      {open && (
        <ul
          role="listbox"
          className="glass-strong absolute z-30 mt-1 max-h-56 w-full overflow-auto rounded-xl py-1 shadow-lg"
        >
          {options.map((o) => (
            <li key={o.value}>
              <button
                type="button"
                role="option"
                aria-selected={o.value === value}
                className={`block w-full px-3 py-2 text-left text-sm transition hover:bg-white/10 ${
                  o.value === value ? "text-sea" : "text-ink"
                }`}
                onClick={() => {
                  onChange(o.value);
                  setOpen(false);
                }}
              >
                {o.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
