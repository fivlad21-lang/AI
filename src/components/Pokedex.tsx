"use client";

import { useState } from "react";
import { characters } from "@/data/characters";
import { PokemonSprite } from "./PokemonSprite";
import { playSfx, unlockAudio } from "@/lib/audio";

export function Pokedex() {
  const [active, setActive] = useState(0);
  const c = characters[active];

  const select = async (i: number) => {
    await unlockAudio();
    playSfx("menu");
    setActive(i);
  };

  return (
    <div className="flex flex-col gap-3 h-full">
      <p className="text-[9px] text-[var(--poke-dark-red)]">
        POKéDEX // TEAM ENTRIES
      </p>

      <div className="dex-card p-3 flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col items-center gap-2 sm:w-[40%]">
          <p className="text-[8px] text-[var(--poke-shadow)]">
            №{c.dexNo}
          </p>
          <PokemonSprite
            character={c}
            size="lg"
            react="idle"
            showLabel={false}
          />
          <h3 className="text-[11px]" style={{ color: c.color === "#F4D03F" ? "#B8860B" : c.color }}>
            {c.name}
          </h3>
          <p className="text-[8px] text-center text-[var(--poke-shadow)] leading-relaxed">
            {c.role}
          </p>
        </div>

        <div className="flex-1 space-y-3 min-w-0">
          <div>
            <p className="text-[7px] text-[var(--poke-blue)] mb-1">STATS</p>
            {c.stats.map((s) => (
              <div key={s.label} className="flex items-center gap-2 mb-1">
                <span className="text-[7px] w-12">{s.label}</span>
                <div className="flex-1 hp-track">
                  <div
                    className="hp-fill"
                    style={{
                      width: `${s.value}%`,
                      background: c.color,
                    }}
                  />
                </div>
                <span className="text-[7px] w-6 text-right">{s.value}</span>
              </div>
            ))}
          </div>
          <div>
            <p className="text-[7px] text-[var(--poke-blue)] mb-1">ABILITY</p>
            {c.passives.map((p) => (
              <p key={p} className="text-[8px] mb-1 leading-relaxed">
                ◆ {p}
              </p>
            ))}
          </div>
          <div>
            <p className="text-[7px] text-[var(--poke-blue)] mb-1">MOVE</p>
            <p className="text-[9px]" style={{ color: c.color === "#F4D03F" ? "#B8860B" : c.color }}>
              {c.attack}
            </p>
            <p className="text-[8px] text-[var(--poke-shadow)]">{c.attackDesc}</p>
          </div>
          <div>
            <p className="text-[7px] text-[var(--poke-blue)] mb-1">NOTES</p>
            {c.details.map((d) => (
              <p key={d} className="text-[8px]">
                · {d}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-1.5">
        {characters.map((ch, i) => (
          <button
            key={ch.id}
            type="button"
            onClick={() => select(i)}
            className={`pixel-btn p-1 flex flex-col items-center ${
              i === active ? "pixel-btn-active" : ""
            }`}
          >
            <PokemonSprite
              character={ch}
              size="sm"
              variant="icon"
              showLabel={false}
              selected={i === active}
            />
            <span className="text-[6px] mt-1">{ch.name.slice(0, 4)}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
