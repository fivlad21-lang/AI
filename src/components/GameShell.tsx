"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HubScene } from "./HubScene";
import { BattleArena } from "./BattleArena";
import { Pokedex } from "./Pokedex";
import { Secret3301 } from "./Secret3301";
import { PokeBallFinale, firePartyConfetti } from "./PokeBallFinale";
import { ConsoleEasterEgg } from "./ConsoleEasterEgg";
import { IntroSplash } from "./IntroSplash";
import { MuteButton } from "./MuteButton";
import { useKonami } from "@/hooks/useKonami";
import { playSfx, unlockAudio } from "@/lib/audio";

export type TabId = "hub" | "battle" | "pokedex" | "secret";

const TABS: { id: TabId; label: string; icon: string; secret?: boolean }[] = [
  { id: "hub", label: "HUB", icon: "🏠" },
  { id: "battle", label: "BATTLE", icon: "⚔️" },
  { id: "pokedex", label: "POKÉDEX", icon: "🎴" },
  { id: "secret", label: "3301", icon: "🌐", secret: true },
];

export function GameShell() {
  const [showIntro, setShowIntro] = useState(true);
  const [tab, setTab] = useState<TabId>("hub");
  const [secretUnlocked, setSecretUnlocked] = useState(false);
  const [protocol3301, setProtocol3301] = useState(false);
  const [buffer, setBuffer] = useState("");
  const [partyMode, setPartyMode] = useState(false);
  const [ballHighlight, setBallHighlight] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const unlockSecret = useCallback(async () => {
    await unlockAudio();
    playSfx("protocol");
    setSecretUnlocked(true);
    setTab("secret");
  }, []);

  const onKonami = useCallback(async () => {
    await unlockAudio();
    playSfx("party");
    setPartyMode(true);
    setToast("🎮 KONAMI CODE! PARTY MODE ON");
    firePartyConfetti();
    window.setTimeout(() => firePartyConfetti(), 600);
    window.setTimeout(() => setToast(null), 3500);
  }, []);

  useKonami(onKonami);

  const onIntroDone = useCallback(async () => {
    await unlockAudio();
    setShowIntro(false);
  }, []);

  const changeTab = async (id: TabId) => {
    await unlockAudio();
    playSfx("menu");
    setTab(id);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }
      const key = e.key;
      if (!/^[0-9]$/.test(key)) {
        return;
      }
      setBuffer((prev) => {
        const next = (prev + key).slice(-4);
        if (next === "3301") {
          setProtocol3301(true);
          setSecretUnlocked(true);
          setTab("battle");
          playSfx("protocol");
          setToast("🦗 3301 PROTOCOL UNLOCKED");
          window.setTimeout(() => setToast(null), 2500);
        }
        return next;
      });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center py-4 sm:py-8 px-3 sm:px-4">
      <ConsoleEasterEgg />

      <AnimatePresence>
        {showIntro && <IntroSplash onDone={onIntroDone} />}
      </AnimatePresence>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-[90] pixel-border bg-[#ffcb05] text-[#202020] text-[9px] px-4 py-2"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full max-w-3xl poke-shell relative">
        <header className="text-center mb-4 sm:mb-5 relative">
          <div className="absolute right-0 top-0">
            <MuteButton />
          </div>
          <p className="text-[8px] text-[#ffe8e0] mb-2 tracking-widest">
            POKéDEX · TEAM EDITION
          </p>
          <h1 className="text-sm sm:text-base text-white leading-relaxed drop-shadow-[2px_2px_0_#5a0f08]">
            POKÉMON
            <span className="block text-[10px] sm:text-xs text-[#ffcb05] mt-1">
              CEO BIRTHDAY QUEST
            </span>
          </h1>
          <motion.p
            className="mt-2 inline-block pixel-border bg-[#ffcb05] text-[#202020] text-[8px] px-2 py-1"
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            🎂 LEVEL UP: +1 YEAR
          </motion.p>
        </header>

        <div className="poke-screen">
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="text-[7px] text-[var(--poke-dark-red)]">● POWER</span>
            <span className="text-[7px] text-[var(--poke-shadow)]">
              {buffer.length > 0
                ? `SEQ:${buffer}`
                : partyMode
                  ? "🎉 PARTY MODE"
                  : "FIRE RED STYLE · STEREO"}
            </span>
          </div>

          <nav className="flex flex-wrap gap-1.5 mb-3">
            {TABS.map((t) => {
              if (t.secret && !secretUnlocked) {
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={unlockSecret}
                    className="pixel-btn opacity-40 text-[8px] px-2 py-1.5"
                    title="???"
                  >
                    ???
                  </button>
                );
              }
              const active = tab === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => changeTab(t.id)}
                  className={`pixel-btn text-[8px] sm:text-[9px] px-2.5 py-1.5 ${
                    active ? "pixel-btn-active" : ""
                  } ${t.secret ? "!text-[var(--poke-dark-red)]" : ""}`}
                >
                  {t.icon} {t.label}
                </button>
              );
            })}
          </nav>

          <div className="min-h-[420px] sm:min-h-[520px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="h-full"
              >
                {tab === "hub" && <HubScene partyMode={partyMode} />}
                {tab === "battle" && (
                  <BattleArena
                    protocol3301={protocol3301}
                    onBirthdayClear={() => setBallHighlight(true)}
                  />
                )}
                {tab === "pokedex" && <Pokedex />}
                {tab === "secret" && <Secret3301 />}
              </motion.div>
            </AnimatePresence>
          </div>

          <PokeBallFinale highlight={ballHighlight} />
        </div>

        <footer className="mt-4 text-center space-y-2">
          <button
            type="button"
            onClick={unlockSecret}
            className="text-[7px] text-[#ffe0d0] hover:text-[#ffcb05] transition-colors"
          >
            🦗 3301: Welcome. Epiphany is upon you.
          </button>
          <p className="text-[7px] text-[#ffc8b8]">
            © TEAM POKÉMON · WITH LOVE FOR CEO · 🎂 HAPPY BIRTHDAY
          </p>
        </footer>
      </div>
    </div>
  );
}
