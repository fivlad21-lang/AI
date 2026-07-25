"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getCharacter } from "@/data/characters";
import { battleActions } from "@/data/content";
import { PokemonSprite } from "./PokemonSprite";
import { BattleMenu } from "./BattleMenu";
import { HpBar } from "./HpBar";
import { playCry, playSfx, unlockAudio } from "@/lib/audio";
import { useBirthday, type GiftId } from "@/context/BirthdayContext";

type BattleArenaProps = {
  protocol3301: boolean;
};

const ACTION_GIFT: Record<string, GiftId> = {
  temu: "battle-temu",
  taycan: "battle-taycan",
  ticket: "battle-ticket",
  gift: "battle-gift",
};

export function BattleArena({ protocol3301 }: BattleArenaProps) {
  const { addGift, markCleared, cleared } = useBirthday();
  const boss = getCharacter("pikachu");
  const team = [
    getCharacter("psyduck"),
    getCharacter("squirtle"),
    getCharacter("bulbasaur"),
  ];

  const [hp, setHp] = useState(100);
  const [log, setLog] = useState<string[]>([
    "A wild BOSS Пикачу (Lvl 100) appeared!",
    "Что будет делать команда?",
  ]);
  const [busy, setBusy] = useState(false);
  const [bossReact, setBossReact] = useState<
    "idle" | "hit" | "happy" | "sleep"
  >("idle");
  const [used, setUsed] = useState<Set<string>>(new Set());
  const [floatDmg, setFloatDmg] = useState<string | null>(null);
  const [flash, setFlash] = useState(false);

  const pushLog = useCallback((line: string) => {
    setLog((prev) => [...prev.slice(-6), line]);
  }, []);

  useEffect(() => {
    if (protocol3301) {
      playSfx("protocol");
      pushLog("⚠️ 3301 PROTOCOL ACTIVATED");
      pushLog(
        "Пикачу в маске Цикады: «Расшифруй хэш… и разбери склады TEMU. С Днём Рождения!»",
      );
    }
  }, [protocol3301, pushLog]);

  useEffect(() => {
    void unlockAudio().then(() => playCry("pikachu"));
  }, []);

  const triggerClear = useCallback(
    (reason: string) => {
      markCleared();
      setBossReact("happy");
      pushLog(`★ BIRTHDAY CLEAR! ${reason}`);
      pushLog("▸ Открой Master Ball внизу!");
      playSfx("fanfare");
    },
    [markCleared, pushLog],
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
    const giftId = ACTION_GIFT[actionId];
    if (giftId) addGift(giftId);

    if (action.damage >= 9999) {
      setFloatDmg("-9999");
      setBossReact("hit");
      setFlash(true);
      setHp(0);
      playSfx("crit");
      await wait(450);
      setFlash(false);
      setBossReact("happy");
      setFloatDmg(null);
      pushLog("★ CRITICAL HIT! США + новые склады!");
      triggerClear("Билет в Америку доставлен.");
    } else if (action.healBoss) {
      setBossReact("sleep");
      setHp((h) => Math.min(100, h + 10));
      await wait(350);
      setBossReact("idle");
    } else if (action.damage > 0) {
      setFloatDmg(`-${action.damage}`);
      setBossReact("hit");
      setFlash(true);
      setHp((h) => Math.max(0, h - action.damage));
      await wait(350);
      setFlash(false);
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
      pushLog("Система: TEMU status — BOUGHT OUT.");
    }

    if (nextUsed.size >= 4 && !cleared && action.damage < 9999) {
      triggerClear("Все 4 подарка вручены!");
    }

    setBusy(false);
  };

  return (
    <div className="flex flex-col gap-2 h-full">
      <div className="pixel-border relative overflow-hidden min-h-[210px]">
        <div className="absolute inset-0 scene-sky" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 scene-tiles opacity-40" />
        {flash && (
          <div className="absolute inset-0 bg-white/70 z-20 pointer-events-none" />
        )}

        <div className="relative z-10 p-3 flex justify-between items-start gap-2">
          <div className="bg-white/95 pixel-border p-2 flex-1 max-w-[58%]">
            <p className="font-display text-[9px] mb-1">
              BOSS {boss.name} {protocol3301 ? "🦗" : ""}{" "}
              <span className="text-[var(--poke-shadow)]">Lv100</span>
            </p>
            <HpBar value={hp} />
          </div>
          <div className="relative">
            <PokemonSprite
              character={boss}
              size="lg"
              variant="front"
              mask={protocol3301}
              react={bossReact}
              showLabel={false}
              withCry
            />
            <AnimatePresence>
              {floatDmg && (
                <motion.span
                  initial={{ opacity: 1, y: 0 }}
                  animate={{ opacity: 0, y: -28 }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 font-display text-[12px] text-[var(--poke-hp-red)]"
                >
                  {floatDmg}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="relative z-10 px-3 pb-3 flex items-end justify-between">
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
          <div className="bg-white/90 pixel-border px-2 py-1 font-display text-[7px]">
            TEAM ×3
          </div>
        </div>

        {cleared && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative z-10 mx-3 mb-3 bg-[#ffcb05] pixel-border p-2 text-center"
          >
            <p className="font-display text-[9px]">🎉 BIRTHDAY CLEAR! 🎉</p>
            <p className="font-body text-[16px] mt-1">Открой Master Ball ↓</p>
          </motion.div>
        )}
      </div>

      <div className="dialogue-box min-h-[88px] max-h-[110px] overflow-y-auto py-2">
        {log.map((line, i) => (
          <motion.p
            key={`${i}-${line.slice(0, 10)}`}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-body text-[17px] sm:text-[18px] mb-1 leading-snug"
          >
            {line}
          </motion.p>
        ))}
      </div>

      <BattleMenu
        disabled={busy}
        onSelect={(id) => void doAction(id)}
        items={battleActions.map((a) => ({
          id: a.id,
          label: a.label,
          emoji: a.emoji,
          done: used.has(a.id),
        }))}
      />

      <p className="font-display text-[7px] text-center text-[var(--poke-shadow)]">
        секрет: 3-3-0-1 · konami: ↑↑↓↓←→←→BA
      </p>
    </div>
  );
}

function wait(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}
