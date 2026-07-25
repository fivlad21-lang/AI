"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getCharacter } from "@/data/characters";
import { battleActions } from "@/data/content";
import { PokemonSprite } from "./PokemonSprite";
import { playSfx, unlockAudio } from "@/lib/audio";

type BattleArenaProps = {
  protocol3301: boolean;
  onBirthdayClear?: () => void;
};

export function BattleArena({
  protocol3301,
  onBirthdayClear,
}: BattleArenaProps) {
  const boss = getCharacter("pikachu");
  const team = [
    getCharacter("psyduck"),
    getCharacter("squirtle"),
    getCharacter("bulbasaur"),
  ];

  const [hp, setHp] = useState(100);
  const [log, setLog] = useState<string[]>([
    "A wild BOSS Пикачу (Lvl 100) appeared!",
    "Что будет делать команда? (осторожно: рядом коробки с TEMU)",
  ]);
  const [busy, setBusy] = useState(false);
  const [bossReact, setBossReact] = useState<"idle" | "hit" | "happy" | "sleep">(
    "idle",
  );
  const [used, setUsed] = useState<Set<string>>(new Set());
  const [cleared, setCleared] = useState(false);
  const [floatDmg, setFloatDmg] = useState<string | null>(null);

  const maxHp = 100;
  const hpPct = Math.max(0, Math.min(100, (hp / maxHp) * 100));
  const gifts = used.size;
  const hpColor =
    hpPct > 50
      ? "var(--poke-hp-green)"
      : hpPct > 20
        ? "var(--poke-hp-yellow)"
        : "var(--poke-hp-red)";

  const pushLog = useCallback((line: string) => {
    setLog((prev) => [...prev.slice(-6), line]);
  }, []);

  useEffect(() => {
    if (protocol3301) {
      playSfx("protocol");
      pushLog("⚠️ 3301 PROTOCOL ACTIVATED");
      pushLog(
        "Пикачу в маске Цикады: «Истинный пассивный бизнес — для тех, кто расшифрует хэш… и разберёт склады TEMU. С Днём Рождения!»",
      );
    }
  }, [protocol3301, pushLog]);

  const triggerClear = useCallback(
    (reason: string) => {
      if (cleared) return;
      setCleared(true);
      setBossReact("happy");
      pushLog(`★ BIRTHDAY CLEAR! ${reason}`);
      pushLog("▸ Открой Master Ball внизу!");
      playSfx("fanfare");
      onBirthdayClear?.();
    },
    [cleared, onBirthdayClear, pushLog],
  );

  const doAction = async (actionId: string) => {
    if (busy) return;
    const action = battleActions.find((a) => a.id === actionId);
    if (!action) return;

    await unlockAudio();
    setBusy(true);
    pushLog(`> ${action.emoji} ${action.label}`);
    playSfx("hit");
    await wait(350);
    pushLog(action.log);

    const nextUsed = new Set(used);
    nextUsed.add(actionId);
    setUsed(nextUsed);

    if (action.damage >= 9999) {
      setFloatDmg("-9999");
      setBossReact("hit");
      setHp(0);
      playSfx("crit");
      await wait(450);
      setBossReact("happy");
      setFloatDmg(null);
      pushLog("★ CRITICAL HIT! Пикачу в экстазе: США + новые склады!");
      triggerClear("Билет в Америку доставлен.");
    } else if (action.healBoss) {
      setBossReact("sleep");
      setHp((h) => Math.min(100, h + 10));
      await wait(350);
      setBossReact("idle");
    } else if (action.damage > 0) {
      setFloatDmg(`-${action.damage}`);
      setBossReact("hit");
      setHp((h) => Math.max(0, h - action.damage));
      await wait(350);
      setBossReact("idle");
      setFloatDmg(null);
    } else {
      setBossReact("sleep");
      await wait(400);
      setBossReact("idle");
    }

    if (actionId === "gift") {
      pushLog("Псайдак: свайбкодил сайт. Happy Birthday, BOSS!");
    }
    if (actionId === "temu") {
      pushLog("Система: +12 к карме склада. TEMU status: BOUGHT OUT.");
    }

    if (nextUsed.size >= 4 && !cleared && action.damage < 9999) {
      triggerClear("Все 4 подарка вручены!");
    }

    setBusy(false);
  };

  return (
    <div className="flex flex-col gap-2 h-full">
      {/* gifts */}
      <div className="bg-white/90 pixel-border px-2 py-1.5 flex items-center gap-2">
        <span className="text-[8px] text-[var(--poke-dark-red)]">
          🎂 GIFTS {gifts}/4
        </span>
        <div className="flex-1 hp-track">
          <motion.div
            className="hp-fill"
            style={{ background: "var(--poke-yellow)" }}
            animate={{ width: `${(gifts / 4) * 100}%` }}
          />
        </div>
        {cleared && (
          <span className="text-[8px] text-[var(--poke-blue)]">CLEAR!</span>
        )}
      </div>

      {/* battlefield */}
      <div className="pixel-border relative overflow-hidden bg-gradient-to-b from-[#87ceeb] to-[#78c850] p-3 min-h-[200px]">
        <div className="flex justify-between items-start gap-2">
          <div className="bg-white/95 pixel-border p-2 flex-1 max-w-[58%]">
            <p className="text-[9px] mb-1">
              BOSS {boss.name} {protocol3301 ? "🦗" : ""}{" "}
              <span className="text-[var(--poke-shadow)]">Lv100</span>
            </p>
            <div className="flex items-center gap-1 mb-0.5">
              <span className="text-[7px] bg-[var(--poke-yellow)] px-1 border border-black">
                HP
              </span>
              <div className="flex-1 hp-track">
                <motion.div
                  className="hp-fill"
                  style={{ background: hpColor }}
                  animate={{ width: `${hpPct}%` }}
                />
              </div>
            </div>
            <p className="text-[7px] text-right text-[var(--poke-shadow)]">
              {Math.max(0, hp)}/{maxHp}
            </p>
          </div>
          <div className="relative">
            <PokemonSprite
              character={boss}
              size="lg"
              variant="front"
              mask={protocol3301}
              react={bossReact}
              showLabel={false}
            />
            <AnimatePresence>
              {floatDmg && (
                <motion.span
                  initial={{ opacity: 1, y: 0 }}
                  animate={{ opacity: 0, y: -28 }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 text-[12px] text-[var(--poke-hp-red)]"
                >
                  {floatDmg}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-3 flex items-end justify-between">
          <div className="flex gap-1">
            {team.map((c) => (
              <PokemonSprite
                key={c.id}
                character={c}
                size="sm"
                variant="back"
                showLabel={false}
              />
            ))}
          </div>
          <div className="bg-white/90 pixel-border px-2 py-1 text-[7px]">
            TEAM ×3
          </div>
        </div>

        {cleared && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-2 bg-[#ffcb05] pixel-border p-2 text-center"
          >
            <p className="text-[9px]">🎉 BIRTHDAY CLEAR! 🎉</p>
            <p className="text-[7px] mt-1">Открой Master Ball ↓</p>
          </motion.div>
        )}
      </div>

      {/* message log */}
      <div className="dialogue-box min-h-[88px] max-h-[110px] overflow-y-auto py-2">
        {log.map((line, i) => (
          <motion.p
            key={`${i}-${line.slice(0, 10)}`}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[9px] sm:text-[10px] mb-1.5 leading-relaxed"
          >
            {line}
          </motion.p>
        ))}
      </div>

      {/* FIGHT menu */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {battleActions.map((a) => (
          <button
            key={a.id}
            type="button"
            disabled={busy}
            onClick={() => doAction(a.id)}
            className={`battle-menu-btn ${used.has(a.id) ? "opacity-70" : ""}`}
          >
            <span className="text-[var(--poke-red)] mr-1">▸</span>
            {a.emoji} {a.label}
            {used.has(a.id) ? " ✓" : ""}
          </button>
        ))}
      </div>

      <p className="text-[7px] text-center text-[var(--poke-shadow)]">
        секрет: 3-3-0-1 · konami: ↑↑↓↓←→←→BA
      </p>
    </div>
  );
}

function wait(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}
