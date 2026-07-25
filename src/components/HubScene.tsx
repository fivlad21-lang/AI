"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { characters, type PokemonId } from "@/data/characters";
import { PokemonSprite } from "./PokemonSprite";
import { Typewriter } from "./Typewriter";
import { playSfx, unlockAudio } from "@/lib/audio";

type HubSceneProps = {
  partyMode?: boolean;
};

const TAYCAN_LINE =
  "Пикачу: *открывает дверь Taycan* Садись. Но только после 13:00. И с Днём Рождения — поехали. 🚗💜";

export function HubScene({ partyMode = false }: HubSceneProps) {
  const [active, setActive] = useState<PokemonId | null>(null);
  const [lineIndex, setLineIndex] = useState(0);
  const [overrideLine, setOverrideLine] = useState<string | null>(null);

  const char = characters.find((c) => c.id === active);
  const line = overrideLine
    ? overrideLine
    : char
      ? char.dialogue[lineIndex % char.dialogue.length]
      : "";

  const handleClick = async (id: PokemonId) => {
    await unlockAudio();
    playSfx("select");
    setOverrideLine(null);
    if (active === id) {
      setLineIndex((i) => i + 1);
    } else {
      setActive(id);
      setLineIndex(0);
    }
  };

  const handleTaycan = async () => {
    await unlockAudio();
    playSfx("door");
    setActive("pikachu");
    setOverrideLine(TAYCAN_LINE);
    setLineIndex(0);
  };

  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="pixel-border bg-[#1a3a28] relative overflow-hidden min-h-[280px] sm:min-h-[340px] flex-1">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2d5a40] via-[#1e3d2c] to-[#0f2418]" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, #0000 0 7px, #0003 7px 8px), repeating-linear-gradient(0deg, #0000 0 7px, #0003 7px 8px)",
          }}
        />

        {/* Birthday garland */}
        <div className="absolute top-0 inset-x-0 flex justify-center gap-1 pt-1 z-10 pointer-events-none">
          {["🟨", "🟪", "🟩", "🟦", "🟨", "🟪", "🟩"].map((c, i) => (
            <motion.span
              key={i}
              className="text-[8px]"
              animate={{ y: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.1 }}
            >
              {c}
            </motion.span>
          ))}
        </div>

        {/* Balloons */}
        <motion.span
          className="absolute top-8 left-6 text-lg z-10 pointer-events-none"
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
        >
          🎈
        </motion.span>
        <motion.span
          className="absolute top-10 right-16 text-lg z-10 pointer-events-none"
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, delay: 0.4 }}
        >
          🎈
        </motion.span>

        {/* Cake */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 text-center z-10 pointer-events-none">
          <span className="text-xl">🎂</span>
          <p className="text-[6px] text-[#f4d03f]">BDAY</p>
        </div>

        {/* Party confetti dust */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
          {(partyMode ? Array.from({ length: 14 }) : Array.from({ length: 6 })).map(
            (_, i) => (
              <motion.span
                key={i}
                className="absolute text-[6px]"
                style={{ left: `${8 + i * 7}%`, top: `${10 + (i % 5) * 12}%` }}
                animate={{ y: [0, 40, 0], opacity: [0.2, 0.8, 0.2] }}
                transition={{
                  repeat: Infinity,
                  duration: 3 + (i % 3),
                  delay: i * 0.2,
                }}
              >
                {["✦", "·", "✧", "•"][i % 4]}
              </motion.span>
            ),
          )}
        </div>

        <div className="absolute top-3 right-4 pixel-border bg-[#0d1f14] px-2 py-1 text-[8px] text-[#f5f5f5] z-10">
          🇺🇸 USA DREAM
        </div>
        <div className="absolute top-3 left-4 text-[8px] text-[#7dcea0] z-10">
          OFFICE LVL 100
        </div>

        {/* Purple Taycan — clickable easter egg */}
        <motion.button
          type="button"
          onClick={handleTaycan}
          className="absolute bottom-16 right-4 sm:right-10 flex flex-col items-center z-20 cursor-pointer"
          animate={
            partyMode
              ? { x: [0, 8, 0, -8, 0], rotate: [0, 2, 0, -2, 0] }
              : { x: [0, 2, 0, -2, 0] }
          }
          transition={{ repeat: Infinity, duration: partyMode ? 1.2 : 4 }}
          aria-label="Porsche Taycan"
        >
          <div className="relative">
            <div className="w-28 sm:w-36 h-10 sm:h-12 rounded-sm bg-gradient-to-r from-[#4a1a6b] via-[#7b2cbf] to-[#2d0a45] pixel-border border-[#1a0a2a]">
              <div className="absolute top-1 left-3 w-8 h-4 bg-[#9b59b6]/70 rounded-sm" />
              <div className="absolute bottom-0 left-3 w-4 h-3 rounded-full bg-[#111]" />
              <div className="absolute bottom-0 right-3 w-4 h-3 rounded-full bg-[#111]" />
              <motion.div
                className="absolute top-2 right-2 w-2 h-1 bg-[#f1c40f]"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
            </div>
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[7px] text-[#c39bd3] whitespace-nowrap">
              TAYCAN ▸
            </span>
          </div>
        </motion.button>

        <div className="absolute bottom-14 left-3 sm:left-8 w-10 h-10 grid grid-cols-4 grid-rows-4 pixel-border opacity-80 z-10">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className={
                (Math.floor(i / 4) + i) % 2 === 0 ? "bg-[#eee]" : "bg-[#333]"
              }
            />
          ))}
        </div>

        <div className="absolute bottom-20 left-1/2 -translate-x-8 w-12 h-8 pixel-border bg-[#222] z-10">
          <div className="w-full h-5 bg-[#0a2a1a] text-[5px] text-[#39ff14] p-0.5 overflow-hidden leading-none">
            DOTA
            <br />
            $$$
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-2 flex justify-around items-end px-2 sm:px-6 z-20">
          {characters.map((c) => (
            <div key={c.id} className="relative">
              {c.id === "pikachu" && (
                <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[7px] text-[#f4d03f] whitespace-nowrap">
                  👔 CEO
                </span>
              )}
              {c.id === "bulbasaur" && (
                <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px]">
                  🎸
                </span>
              )}
              <PokemonSprite
                character={c}
                size="md"
                selected={active === c.id || partyMode}
                onClick={() => handleClick(c.id)}
              />
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {char || overrideLine ? (
          <motion.div
            key={`${active}-${lineIndex}-${overrideLine ? "ov" : "n"}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="pixel-border bg-[#0d1f14] p-3 sm:p-4 min-h-[88px]"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl shrink-0">
                {char?.emoji ?? "⚡"}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-[8px] text-[#7dcea0] mb-2 uppercase">
                  {char?.name ?? "Пикачу"} —{" "}
                  {char?.role.split("&")[0].trim() ?? "CEO"}
                </p>
                <Typewriter
                  text={line}
                  className="text-[10px] sm:text-xs text-[#d4edda]"
                  withTicks
                />
                <p className="text-[7px] text-[#4a7c59] mt-2">
                  ▸ кликни снова для следующей реплики
                </p>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="pixel-border bg-[#0d1f14] p-4 min-h-[88px] flex items-center"
          >
            <p className="text-[10px] sm:text-xs text-[#7dcea0]">
              ▸ Выбери покемона или кликни Taycan... С Днём Рождения! 🎂
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
