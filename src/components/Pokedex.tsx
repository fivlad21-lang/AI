"use client";

import { motion } from "framer-motion";
import { characters } from "@/data/characters";
import { PokemonSprite } from "./PokemonSprite";

export function Pokedex() {
  return (
    <div className="flex flex-col gap-4 h-full overflow-y-auto pr-1">
      <p className="text-[9px] text-[#7dcea0]">
        POKÉDEX // ДОСЬЕ КОМАНДЫ // 4 ENTRIES
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {characters.map((c, idx) => (
          <motion.article
            key={c.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08 }}
            className="pixel-border p-3 flex flex-col gap-3"
            style={{
              background: `linear-gradient(145deg, ${c.bg}, #0a1510)`,
            }}
          >
            <div className="flex gap-3 items-start">
              <PokemonSprite character={c} size="md" />
              <div className="min-w-0 flex-1">
                <h3
                  className="text-[11px] sm:text-xs mb-1"
                  style={{ color: c.color }}
                >
                  {c.emoji} {c.name}
                </h3>
                <p className="text-[8px] text-[#a8d5b5] leading-relaxed mb-2">
                  {c.role}
                </p>
                <div className="space-y-1">
                  {c.stats.map((s) => (
                    <div key={s.label} className="flex items-center gap-2">
                      <span className="text-[7px] w-10 text-[#888]">
                        {s.label}
                      </span>
                      <div className="flex-1 h-2 bg-[#111] pixel-border overflow-hidden">
                        <div
                          className="h-full"
                          style={{
                            width: `${s.value}%`,
                            background: c.color,
                          }}
                        />
                      </div>
                      <span className="text-[7px] text-[#aaa] w-6 text-right">
                        {s.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-2 space-y-2">
              <div>
                <p className="text-[7px] text-[#7dcea0] mb-1">ПАССИВКИ</p>
                {c.passives.map((p) => (
                  <p key={p} className="text-[8px] text-[#c8e6c9] mb-1">
                    ◆ {p}
                  </p>
                ))}
              </div>
              <div>
                <p className="text-[7px] text-[#7dcea0] mb-1">АТАКА</p>
                <p className="text-[9px]" style={{ color: c.color }}>
                  {c.attack}
                </p>
                <p className="text-[8px] text-[#a8d5b5]">{c.attackDesc}</p>
              </div>
              <div>
                <p className="text-[7px] text-[#7dcea0] mb-1">DETAILS</p>
                {c.details.map((d) => (
                  <p key={d} className="text-[8px] text-[#9ccc9c]">
                    · {d}
                  </p>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
