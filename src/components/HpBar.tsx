"use client";

import { motion } from "framer-motion";

type HpBarProps = {
  value: number;
  max?: number;
  label?: string;
  className?: string;
};

export function HpBar({
  value,
  max = 100,
  label = "HP",
  className = "",
}: HpBarProps) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  const color =
    pct > 50
      ? "var(--poke-hp-green)"
      : pct > 20
        ? "var(--poke-hp-yellow)"
        : "var(--poke-hp-red)";

  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <span className="font-display text-[7px] bg-[var(--poke-yellow)] px-1 border-2 border-black shrink-0">
        {label}
      </span>
      <div className="flex-1 hp-track">
        <motion.div
          className="hp-fill"
          style={{ background: color }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.4 }}
        />
      </div>
      <span className="font-display text-[7px] text-[var(--poke-shadow)] w-10 text-right shrink-0">
        {Math.max(0, value)}/{max}
      </span>
    </div>
  );
}
