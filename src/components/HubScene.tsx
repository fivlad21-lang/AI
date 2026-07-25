"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  characters,
  TAYCAN_LINE,
  type DialogueLine,
  type PokemonId,
} from "@/data/characters";
import { pickTemuItem } from "@/data/temuCatalog";
import { PokemonSprite } from "./PokemonSprite";
import { DialogueBox } from "./DialogueBox";
import { playSfx, unlockAudio } from "@/lib/audio";
import { useBirthday } from "@/context/BirthdayContext";

type HubSceneProps = {
  partyMode?: boolean;
};

export function HubScene({ partyMode = false }: HubSceneProps) {
  const { addGift, bossAsleep } = useBirthday();
  const [active, setActive] = useState<PokemonId | null>(null);
  const [lineIndex, setLineIndex] = useState(0);
  const [override, setOverride] = useState<DialogueLine | null>(null);

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
    addGift("hub-talk");
    if (active === id) {
      const ch = characters.find((c) => c.id === id);
      const next = (lineIndex + 1) % (ch?.dialogue.length || 1);
      setLineIndex(next);
      const nextLine = ch?.dialogue[next];
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
    addGift("hub-taycan");
  };

  const handlePackage = async () => {
    await unlockAudio();
    playSfx("drop");
    const item = pickTemuItem();
    setActive("pikachu");
    setOverride({
      text: `Пикачу: 📦 ${item}`,
      mood: "smug",
    });
    setLineIndex(0);
    addGift("hub-package");
  };

  const handleCake = async () => {
    await unlockAudio();
    playSfx("fanfare");
    setActive("pikachu");
    setOverride({
      text: "Пикачу: Торт? Принимаю. Свечи потом — сначала респект и треки с Ali.",
      mood: "birthday",
      sfx: "fanfare",
    });
    addGift("hub-cake");
  };

  return (
    <div className="flex flex-col gap-3 h-full">
      {bossAsleep && (
        <div className="gifts-bar font-display text-[8px] text-[var(--poke-dark-red)]">
          😴 BOSS offline until 13:00 — пиши в трек-номер
        </div>
      )}

      <div className="pixel-border relative overflow-hidden min-h-[300px] sm:min-h-[360px] flex-1">
        <div className="absolute inset-0 scene-sky" />
        <div className="absolute inset-x-0 bottom-0 h-[45%] scene-tiles opacity-50" />

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

        <button
          type="button"
          onClick={() => void handleCake()}
          className="absolute top-10 left-1/2 -translate-x-1/2 text-center z-20 cursor-pointer"
          aria-label="Birthday cake"
        >
          <span className="text-2xl">🎂</span>
          <p className="font-display text-[6px] text-[#9b1b0e] bg-white/80 px-1">
            CAKE ▸
          </p>
        </button>

        <div className="absolute top-3 right-3 pixel-border bg-white/90 px-2 py-1 text-[8px] z-10 font-display">
          🇺🇸 USA DREAM
        </div>
        <div className="absolute top-3 left-3 text-[8px] z-10 bg-white/80 px-1 font-display">
          OFFICE · LVL 100
        </div>

        <button
          type="button"
          onClick={() => void handlePackage()}
          className="absolute bottom-[7.5rem] right-2 sm:right-6 z-20 flex gap-1"
          aria-label="TEMU and Ali packages"
        >
          <div className="pixel-border bg-[#ff6a00] w-9 h-8 flex items-center justify-center">
            <span className="text-[5px] text-white font-display">TEMU</span>
          </div>
          <div className="pixel-border bg-[#ff4747] w-9 h-8 flex items-center justify-center">
            <span className="text-[5px] text-white font-display">ALI</span>
          </div>
        </button>

        <motion.button
          type="button"
          onClick={() => void handleTaycan()}
          className="absolute bottom-[4.5rem] right-3 sm:right-8 flex flex-col items-center z-20"
          animate={
            partyMode ? { x: [0, 6, 0, -6, 0] } : { x: [0, 2, 0, -2, 0] }
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
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[7px] text-[#4a1a6b] whitespace-nowrap bg-white/80 px-1 font-display">
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
          <div className="w-full h-5 bg-[#0a2a1a] text-[5px] text-[#39ff14] p-0.5 leading-none font-display">
            DOTA
            <br />
            $$$
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-2 flex justify-around items-end px-1 sm:px-4 z-20">
          {characters.map((c) => {
            const isPika = c.id === "pikachu";
            const mood =
              override && active === c.id
                ? override.mood || "talk"
                : active === c.id
                  ? line?.mood || "talk"
                  : partyMode
                    ? "happy"
                    : isPika && bossAsleep && active !== "pikachu"
                      ? "sleep"
                      : "idle";
            return (
              <div key={c.id} className="relative">
                {isPika && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[7px] bg-[#ffcb05] px-1 border border-black whitespace-nowrap font-display">
                    BOSS
                  </span>
                )}
                <PokemonSprite
                  character={c}
                  size="md"
                  selected={active === c.id || partyMode}
                  react={mood}
                  withCry
                  onClick={() => void handleClick(c.id)}
                />
              </div>
            );
          })}
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
              hint="▼ кликни снова · TEMU/ALI · торт"
            />
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <DialogueBox
              name="NARRATOR"
              text="Дикая birthday-команда появилась! Выбери покемона, Taycan, торт или коробки TEMU/Ali."
              withTicks={false}
              hint="▼ start"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
