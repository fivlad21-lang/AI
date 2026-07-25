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
    "Дикий CEO Пикачу (Lvl 100) появился!",
    "Что будет делать команда? (это birthday battle!)",
  ]);
  const [busy, setBusy] = useState(false);
  const [shake, setShake] = useState(false);
  const [used, setUsed] = useState<Set<string>>(new Set());
  const [cleared, setCleared] = useState(false);
  const [floatDmg, setFloatDmg] = useState<string | null>(null);

  const maxHp = 100;
  const hpPct = Math.max(0, Math.min(100, (hp / maxHp) * 100));
  const gifts = used.size;

  const pushLog = useCallback((line: string) => {
    setLog((prev) => [...prev.slice(-6), line]);
  }, []);

  useEffect(() => {
    if (protocol3301) {
      playSfx("protocol");
      pushLog("⚠️ 3301 PROTOCOL ACTIVATED");
      pushLog(
        "Пикачу надел маску Цикады: «Истинный пассивный бизнес доступен только тем, кто расшифрует этот хэш... С Днем Рождения!»",
      );
    }
  }, [protocol3301, pushLog]);

  const triggerClear = useCallback(
    (reason: string) => {
      if (cleared) return;
      setCleared(true);
      pushLog(`★ BIRTHDAY CLEAR! ${reason}`);
      pushLog("▸ Открой Master Ball внизу — там главное поздравление!");
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
    await wait(400);
    pushLog(action.log);

    const nextUsed = new Set(used);
    nextUsed.add(actionId);
    setUsed(nextUsed);

    if (action.damage >= 9999) {
      setFloatDmg("-9999");
      setShake(true);
      setHp(0);
      playSfx("crit");
      await wait(500);
      setShake(false);
      setFloatDmg(null);
      pushLog("★ CRITICAL HIT! CEO в экстазе от билета в США!");
      triggerClear("Билет в Америку доставлен.");
    } else if (action.healBoss) {
      setHp((h) => Math.min(100, h + 10));
      setShake(true);
      await wait(300);
      setShake(false);
    } else if (action.damage > 0) {
      setFloatDmg(`-${action.damage}`);
      setHp((h) => Math.max(0, h - action.damage));
      setShake(true);
      await wait(300);
      setShake(false);
      setFloatDmg(null);
    }

    if (actionId === "gift") {
      pushLog("Псайдак: я свайбкодил этот сайт. Happy Birthday, Boss!");
    }

    if (nextUsed.size >= 4 && !cleared && action.damage < 9999) {
      triggerClear("Все 4 подарка вручены!");
    }

    setBusy(false);
  };

  return (
    <div className="flex flex-col gap-3 h-full">
      <div className="pixel-border bg-[#1a1020] p-2 flex items-center justify-between">
        <span className="text-[8px] text-[#f4d03f]">🎂 GIFTS {gifts}/4</span>
        <div className="flex-1 mx-2 h-2 pixel-border bg-[#111] overflow-hidden">
          <motion.div
            className="h-full bg-[#f4d03f]"
            animate={{ width: `${(gifts / 4) * 100}%` }}
          />
        </div>
        {cleared && (
          <span className="text-[8px] text-[#39ff14]">CLEAR!</span>
        )}
      </div>

      <div className="pixel-border bg-[#1a1020] p-3 relative overflow-hidden">
        <div className="flex justify-between items-start gap-3">
          <div className="flex-1 min-w-0">
            <p className="text-[9px] text-[#f4d03f] mb-1">
              CEO ПИКАЧУ {protocol3301 ? "🦗" : "⚡"} — Lvl 100
            </p>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[8px] text-[#aaa]">HP</span>
              <div className="flex-1 h-3 pixel-border bg-[#111] overflow-hidden">
                <motion.div
                  className="h-full"
                  style={{
                    background:
                      hpPct > 50
                        ? "#39ff14"
                        : hpPct > 20
                          ? "#f1c40f"
                          : "#e74c3c",
                  }}
                  animate={{ width: `${hpPct}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </div>
            <p className="text-[8px] text-[#888]">
              {Math.max(0, hp)}/{maxHp}
            </p>
          </div>
          <div className="relative">
            <motion.div
              animate={shake ? { x: [-4, 4, -4, 4, 0] } : {}}
              transition={{ duration: 0.35 }}
            >
              <PokemonSprite character={boss} size="lg" mask={protocol3301} />
            </motion.div>
            <AnimatePresence>
              {floatDmg && (
                <motion.span
                  initial={{ opacity: 1, y: 0 }}
                  animate={{ opacity: 0, y: -30 }}
                  exit={{ opacity: 0 }}
                  className="absolute -top-2 left-1/2 -translate-x-1/2 text-[12px] text-[#e74c3c] font-bold"
                >
                  {floatDmg}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>

        {protocol3301 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-2 text-[8px] text-[#39ff14] border-t border-[#39ff14]/30 pt-2"
          >
            3301 PROTOCOL — HASH UNLOCKED — С ДНЕМ РОЖДЕНИЯ!
          </motion.div>
        )}

        {cleared && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-2 pixel-border bg-[#0d2a14] p-2 text-center"
          >
            <p className="text-[9px] text-[#f4d03f]">🎉 BIRTHDAY CLEAR! 🎉</p>
            <p className="text-[7px] text-[#7dcea0] mt-1">
              Открой Master Ball ↓
            </p>
          </motion.div>
        )}
      </div>

      <div className="pixel-border bg-[#0d1f14] p-3">
        <p className="text-[8px] text-[#7dcea0] mb-2">ТВОЯ КОМАНДА</p>
        <div className="flex justify-around">
          {team.map((c) => (
            <PokemonSprite key={c.id} character={c} size="sm" />
          ))}
        </div>
      </div>

      <div className="pixel-border bg-[#050f08] p-3 min-h-[100px] flex-1 overflow-y-auto">
        <AnimatePresence initial={false}>
          {log.map((line, i) => (
            <motion.p
              key={`${i}-${line.slice(0, 12)}`}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[9px] sm:text-[10px] text-[#c8e6c9] mb-1.5 leading-relaxed"
            >
              {line}
            </motion.p>
          ))}
        </AnimatePresence>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {battleActions.map((a) => (
          <button
            key={a.id}
            type="button"
            disabled={busy}
            onClick={() => doAction(a.id)}
            className={`pixel-btn text-left text-[9px] sm:text-[10px] px-3 py-2.5 disabled:opacity-50 ${
              used.has(a.id) ? "opacity-70" : ""
            }`}
          >
            <span className="mr-1">{a.emoji}</span>
            {a.label}
            {used.has(a.id) ? " ✓" : ""}
          </button>
        ))}
      </div>

      <p className="text-[7px] text-[#4a7c59] text-center">
        секрет: набери 3-3-0-1 · konami: ↑↑↓↓←→←→BA
      </p>
    </div>
  );
}

function wait(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}
