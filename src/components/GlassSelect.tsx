"use client";

import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

export type GlassOption = { value: string; label: string };

type MenuPos = {
  top?: number;
  bottom?: number;
  left: number;
  width: number;
};

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
  const [pos, setPos] = useState<MenuPos | null>(null);
  const [mounted, setMounted] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const id = useId();
  const current = options.find((o) => o.value === value)?.label ?? value;

  useEffect(() => setMounted(true), []);

  const updatePos = useCallback(() => {
    const el = btnRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const maxH = 224;
    const estimatedH = Math.min(maxH, options.length * 40 + 8);
    const spaceBelow = window.innerHeight - r.bottom - 8;
    const openUp = spaceBelow < estimatedH && r.top > spaceBelow + 8;
    setPos(
      openUp
        ? {
            bottom: window.innerHeight - r.top + 4,
            left: r.left,
            width: r.width,
          }
        : {
            top: r.bottom + 4,
            left: r.left,
            width: r.width,
          },
    );
  }, [options.length]);

  useLayoutEffect(() => {
    if (!open) return;
    updatePos();
    const onScroll = () => updatePos();
    window.addEventListener("resize", onScroll);
    window.addEventListener("scroll", onScroll, true);
    return () => {
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("scroll", onScroll, true);
    };
  }, [open, updatePos]);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      const t = e.target as Node;
      if (rootRef.current?.contains(t) || listRef.current?.contains(t)) return;
      setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const menu =
    mounted &&
    open &&
    pos &&
    createPortal(
      <ul
        ref={listRef}
        role="listbox"
        id={`${id}-list`}
        className="glass-strong fixed z-[60] max-h-56 overflow-auto rounded-xl py-1 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.85)]"
        style={{
          top: pos.top,
          bottom: pos.bottom,
          left: pos.left,
          width: pos.width,
        }}
      >
        {options.map((o) => (
          <li key={o.value}>
            <button
              type="button"
              role="option"
              aria-selected={o.value === value}
              className={`block w-full px-3 py-2.5 text-left text-sm transition hover:bg-white/10 ${
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
      </ul>,
      document.body,
    );

  return (
    <div ref={rootRef} className="relative">
      <label htmlFor={id} className="block text-xs font-semibold uppercase tracking-wide text-ink-muted">
        {label}
      </label>
      <button
        ref={btnRef}
        id={id}
        type="button"
        className="glass mt-1.5 flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm text-ink outline-none focus:ring-2 focus:ring-sea/50"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={`${id}-list`}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="truncate">{current}</span>
        <span className="ml-2 shrink-0 text-ink-muted">{open ? "▴" : "▾"}</span>
      </button>
      {menu}
    </div>
  );
}
