"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  characters,
  PACKAGE_LINES,
  TAYCAN_LINE,
  type DialogueLine,
  type PokemonId,
} from "@/data/characters";
import { PokemonSprite } from "./PokemonSprite";
import { DialogueBox } from "./DialogueBox";
import { playSfx, unlockAudio } from "@/lib/audio";

type HubSceneProps = {
  partyMode?: boolean;
};

export function HubScene({ partyMode = false }: HubSceneProps) {
  const [active, setActive] = useState<PokemonId | null>(null);
  const [lineIndex, setLineIndex] = useState(0);
  const [override, setOverride] = useState<DialogueLine | null>(null);
  const [pkgIndex, setPkgIndex] = useState(0);

  const char = characters.find((c) => c.id === active);
  const line: DialogueLine | null = override
    ? override
    : char
      ? char.dialogue[lineIndex % char.dialogue.length]
      : null;

  const handleClick = async (id: PokemonId) => {
    await unlockAudio();
    playSfx("select");
    setOverride(null);
    if (active === id) {
      const next = (lineIndex + 1) % (char?.dialogue.length || 1);
      setLineIndex(next);
      const nextLine = characters.find((c) => c.id === id)?.dialogue[next];
      if (nextLine?.sfx) playSfx(nextLine.sfx);
    } else {
      setActive(id);
      setLineIndex(0);
      const first = characters.find((c) => c.id === id)?.dialogue[0];
      if (first?.sfx) playSfx(first.sfx);
    }
  };

  const handleTaycan = async () => {
    await unlockAudio();
    playSfx("door");
    setActive("pikachu");
    setOverride(TAYCAN_LINE);
    setLineIndex(0);
  };

  const handlePackage = async () => {
    await unlockAudio();
    playSfx("select");
    const line = PACKAGE_LINES[pkgIndex % PACKAGE_LINES.length];
    setPkgIndex((i) => i + 1);
    setActive("pikachu");
    setOverride(line);
    setLineIndex(0);
  };

  return (
    <div className="flex flex-col gap-3 h-full">
      <div className="pixel-border relative overflow-hidden min-h-[300px] sm:min-h-[360px] flex-1 bg-[#78c850]">
        {/* sky / office wall */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#87ceeb] via-[#b8e090] to-[#78c850]" />
        <div
          className="absolute inset-x-0 bottom-0 h-1/2 opacity-40"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, #5a9a3a 0 16px, #6bb043 16px 32px)",
          }}
        />

        {/* garland */}
        <div className="absolute top-1 inset-x-0 flex justify-center gap-1 z-10 pointer-events-none">
          {["🟡", "🔴", "🔵", "🟡", "🔴", "🔵"].map((c, i) => (
            <motion.span
              key={i}
              className="text-[9px]"
              animate={{ y: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.1 }}
            >
              {c}
            </motion.span>
          ))}
        </div>

        <motion.span
          className="absolute top-8 left-5 text-lg z-10 pointer-events-none"
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 2.4 }}
        >
          🎈
        </motion.span>
        <motion.span
          className="absolute top-9 right-14 text-lg z-10 pointer-events-none"
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 2.1, delay: 0.3 }}
        >
          🎈
        </motion.span>

        <div className="absolute top-10 left-1/2 -translate-x-1/2 text-center z-10 pointer-events-none">
          <span className="text-2xl">🎂</span>
          <p className="text-[6px] text-[#9b1b0e]">BDAY</p>
        </div>

        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-50">
          {(partyMode ? 12 : 5) > 0 &&
            Array.from({ length: partyMode ? 12 : 5 }).map((_, i) => (
              <motion.span
                key={i}
                className="absolute text-[7px]"
                style={{ left: `${10 + i * 8}%`, top: `${15 + (i % 4) * 10}%` }}
                animate={{ y: [0, 30, 0], opacity: [0.3, 0.9, 0.3] }}
                transition={{
                  repeat: Infinity,
                  duration: 2.8 + (i % 3) * 0.4,
                  delay: i * 0.15,
                }}
              >
                ✦
              </motion.span>
            ))}
        </div>

        <div className="absolute top-3 right-3 pixel-border bg-white/90 px-2 py-1 text-[8px] z-10">
          🇺🇸 USA DREAM
        </div>
        <div className="absolute top-3 left-3 text-[8px] text-[#1a3a1a] z-10 bg-white/70 px-1">
          OFFICE · LVL 100
        </div>

        {/* TEMU / Ali packages */}
        <button
          type="button"
          onClick={handlePackage}
          className="absolute bottom-[7.5rem] right-2 sm:right-6 z-20 flex gap-1"
          aria-label="Packages from TEMU and AliExpress"
        >
          <div className="pixel-border bg-[#ff6a00] w-9 h-8 flex items-center justify-center shadow-[2px_2px_0_#0006]">
            <span className="text-[5px] text-white leading-none text-center">
              TEMU
            </span>
          </div>
          <div className="pixel-border bg-[#ff4747] w-9 h-8 flex items-center justify-center shadow-[2px_2px_0_#0006]">
            <span className="text-[5px] text-white leading-none text-center">
              ALI
            </span>
          </div>
        </button>

        {/* Taycan */}
        <motion.button
          type="button"
          onClick={handleTaycan}
          className="absolute bottom-[4.5rem] right-3 sm:right-8 flex flex-col items-center z-20"
          animate={
            partyMode
              ? { x: [0, 6, 0, -6, 0] }
              : { x: [0, 2, 0, -2, 0] }
          }
          transition={{ repeat: Infinity, duration: partyMode ? 1.1 : 4 }}
          aria-label="Porsche Taycan"
        >
          <div className="relative">
            <div className="w-28 sm:w-36 h-10 sm:h-12 rounded-sm bg-gradient-to-r from-[#4a1a6b] via-[#7b2cbf] to-[#2d0a45] pixel-border">
              <div className="absolute top-1 left-3 w-8 h-4 bg-[#9b59b6]/70 rounded-sm" />
              <div className="absolute bottom-0 left-3 w-4 h-3 rounded-full bg-[#111]" />
              <div className="absolute bottom-0 right-3 w-4 h-3 rounded-full bg-[#111]" />
              <motion.div
                className="absolute top-2 right-2 w-2 h-1 bg-[#f1c40f]"
                animate={{ opacity: [1, 0.25, 1] }}
                transition={{ repeat: Infinity, duration: 1.4 }}
              />
            </div>
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[7px] text-[#4a1a6b] whitespace-nowrap bg-white/80 px-1">
              TAYCAN ▸
            </span>
          </div>
        </motion.button>

        <div className="absolute bottom-16 left-3 sm:left-6 w-10 h-10 grid grid-cols-4 grid-rows-4 pixel-border opacity-90 z-10">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className={
                (Math.floor(i / 4) + i) % 2 === 0 ? "bg-[#eee]" : "bg-[#333]"
              }
            />
          ))}
        </div>

        <div className="absolute bottom-20 left-1/2 -translate-x-10 w-12 h-8 pixel-border bg-[#333] z-10">
          <div className="w-full h-5 bg-[#0a2a1a] text-[5px] text-[#39ff14] p-0.5 leading-none">
            DOTA
            <br />
            $$$
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-2 flex justify-around items-end px-1 sm:px-4 z-20">
          {characters.map((c) => (
            <div key={c.id} className="relative">
              {c.id === "pikachu" && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[7px] bg-[#ffcb05] px-1 border border-black whitespace-nowrap">
                  BOSS
                </span>
              )}
              <PokemonSprite
                character={c}
                size="md"
                selected={active === c.id || partyMode}
                react={
                  override && active === c.id
                    ? override.mood || "talk"
                    : active === c.id
                      ? line?.mood || "talk"
                      : partyMode
                        ? "happy"
                        : "idle"
                }
                onClick={() => handleClick(c.id)}
              />
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {line ? (
          <motion.div
            key={`${active}-${lineIndex}-${override ? "o" : "n"}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <DialogueBox
              name={`${char?.name ?? "Пикачу"} / ${char?.role.split("&")[0].trim() ?? "BOSS"}`}
              text={line.text}
              face={<span className="text-2xl">{char?.emoji ?? "⚡"}</span>}
              hint="▼ кликни снова · или коробки TEMU/ALI"
            />
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <DialogueBox
              name="NARRATOR"
              text="Дикая birthday-команда появилась! Выбери покемона, кликни Taycan или коробки с TEMU/Ali."
              withTicks={false}
              hint="▼ start"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
