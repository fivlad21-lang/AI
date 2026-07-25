"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HubScene } from "./HubScene";
import { BattleArena } from "./BattleArena";
import { Pokedex } from "./Pokedex";
import { Secret3301 } from "./Secret3301";
import { PokeBallFinale, firePartyConfetti } from "./PokeBallFinale";
import { ConsoleEasterEgg } from "./ConsoleEasterEgg";
import { IntroSplash } from "./IntroSplash";
import { MuteButton } from "./MuteButton";
import { SceneWipe } from "./SceneWipe";
import { TrueEnding } from "./TrueEnding";
import { useKonami } from "@/hooks/useKonami";
import {
  playSfx,
  startHubBgm,
  stopBgm,
  unlockAudio,
} from "@/lib/audio";
import { BirthdayProvider, useBirthday } from "@/context/BirthdayContext";

export type TabId = "hub" | "battle" | "pokedex" | "secret";

const TABS: { id: TabId; label: string; icon: string; secret?: boolean }[] = [
  { id: "hub", label: "HUB", icon: "🏠" },
  { id: "battle", label: "BATTLE", icon: "⚔️" },
  { id: "pokedex", label: "POKÉDEX", icon: "🎴" },
  { id: "secret", label: "3301", icon: "🌐", secret: true },
];

function GameShellInner() {
  const {
    giftCount,
    cleared,
    ballHighlight,
    showEnding,
    partyMode,
    setPartyMode,
    setShowEnding,
    setBallHighlight,
  } = useBirthday();

  const [showIntro, setShowIntro] = useState(true);
  const [tab, setTab] = useState<TabId>("hub");
  const [secretUnlocked, setSecretUnlocked] = useState(false);
  const [protocol3301, setProtocol3301] = useState(false);
  const [buffer, setBuffer] = useState("");
  const [toast, setToast] = useState<string | null>(null);
  const prevGifts = useRef(0);

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
  }, [setPartyMode]);

  useKonami(onKonami);

  const onIntroDone = useCallback(async () => {
    await unlockAudio();
    setShowIntro(false);
    startHubBgm();
  }, []);

  const changeTab = async (id: TabId) => {
    await unlockAudio();
    playSfx("menu");
    setTab(id);
    if (id === "hub") startHubBgm();
    else stopBgm();
  };

  useEffect(() => {
    if (giftCount >= 4 && prevGifts.current < 4) {
      setToast("🎂 GIFTS 4/4 — BIRTHDAY CLEAR!");
      setBallHighlight(true);
      playSfx("fanfare");
      window.setTimeout(() => setToast(null), 2800);
    }
    prevGifts.current = giftCount;
  }, [giftCount, setBallHighlight]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }
      const key = e.key;
      if (!/^[0-9]$/.test(key)) return;
      setBuffer((prev) => {
        const next = (prev + key).slice(-4);
        if (next === "3301") {
          setProtocol3301(true);
          setSecretUnlocked(true);
          setTab("battle");
          stopBgm();
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

  useEffect(() => () => stopBgm(), []);

  return (
    <div className="min-h-screen flex flex-col items-center py-3 sm:py-8 px-2 sm:px-4">
      <ConsoleEasterEgg />
      <TrueEnding open={showEnding} onClose={() => setShowEnding(false)} />

      <AnimatePresence>
        {showIntro && <IntroSplash onDone={onIntroDone} />}
      </AnimatePresence>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-[90] pixel-border bg-[#ffcb05] text-[#202020] font-display text-[9px] px-4 py-2"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full max-w-3xl poke-shell relative">
        <header className="text-center mb-3 sm:mb-5 relative">
          <div className="absolute right-0 top-0">
            <MuteButton />
          </div>
          <p className="font-display text-[8px] text-[#ffe8e0] mb-2 tracking-widest">
            POKéDEX · TEAM EDITION
          </p>
          <h1 className="font-display text-sm sm:text-base text-white leading-relaxed drop-shadow-[2px_2px_0_#5a0f08]">
            POKÉMON
            <span className="block text-[10px] sm:text-xs text-[#ffcb05] mt-1">
              BOSS BIRTHDAY QUEST
            </span>
          </h1>
          <motion.p
            className="mt-2 inline-block pixel-border bg-[#ffcb05] text-[#202020] font-display text-[8px] px-2 py-1"
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            🎂 LEVEL UP: +1 YEAR
          </motion.p>
        </header>

        <div className="poke-screen">
          <div className="gifts-bar mb-3">
            <span className="font-display text-[8px] text-[var(--poke-dark-red)] shrink-0">
              🎁 GIFTS {Math.min(giftCount, 4)}/4
            </span>
            <div className="flex-1 hp-track">
              <motion.div
                className="hp-fill"
                style={{ background: "var(--poke-yellow)" }}
                animate={{ width: `${(Math.min(giftCount, 4) / 4) * 100}%` }}
              />
            </div>
            {cleared && (
              <span className="font-display text-[8px] text-[var(--poke-blue)]">
                CLEAR!
              </span>
            )}
          </div>

          <div className="flex items-center justify-between mb-3 px-1">
            <span className="font-display text-[7px] text-[var(--poke-dark-red)]">
              ● POWER
            </span>
            <span className="font-display text-[7px] text-[var(--poke-shadow)]">
              {buffer.length > 0
                ? `SEQ:${buffer}`
                : partyMode
                  ? "🎉 PARTY MODE"
                  : "FIRE RED · STEREO"}
            </span>
          </div>

          <nav className="flex flex-wrap gap-1.5 mb-3">
            {TABS.map((t) => {
              if (t.secret && !secretUnlocked) {
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => void unlockSecret()}
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
                  onClick={() => void changeTab(t.id)}
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
              <SceneWipe key={tab} wipeKey={tab}>
                {tab === "hub" && <HubScene partyMode={partyMode} />}
                {tab === "battle" && (
                  <BattleArena protocol3301={protocol3301} />
                )}
                {tab === "pokedex" && <Pokedex />}
                {tab === "secret" && <Secret3301 />}
              </SceneWipe>
            </AnimatePresence>
          </div>

          <PokeBallFinale
            highlight={ballHighlight}
            onOpened={() => {
              /* letter shown inside finale */
            }}
            onRequestEnding={() => setShowEnding(true)}
          />
        </div>

        <footer className="mt-4 text-center space-y-2">
          <button
            type="button"
            onClick={() => void unlockSecret()}
            className="font-display text-[7px] text-[#ffe0d0] hover:text-[#ffcb05] transition-colors"
          >
            🦗 3301: Welcome. Epiphany is upon you.
          </button>
          <p className="font-display text-[7px] text-[#ffc8b8]">
            © TEAM POKÉMON · WITH LOVE FOR BOSS · 🎂 HAPPY BIRTHDAY
          </p>
        </footer>
      </div>
    </div>
  );
}

export function GameShell() {
  return (
    <BirthdayProvider>
      <GameShellInner />
    </BirthdayProvider>
  );
}
