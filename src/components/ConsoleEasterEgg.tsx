"use client";

import { useEffect } from "react";
import { CICADA_ASCII, BIRTHDAY_MESSAGE, BOSS_BINARY } from "@/data/content";
import { playSfx } from "@/lib/audio";

declare global {
  interface Window {
    boss?: () => string;
    ceo?: () => string;
  }
}

function runBossGreeting() {
  playSfx("fanfare");
  console.log(
    "%c🎂 С ДНЁМ РОЖДЕНИЯ, BOSS ПИКАЧУ! ⚡",
    "color: #f4d03f; font-size: 16px; font-family: monospace;",
  );
  console.log(
    `%c${BIRTHDAY_MESSAGE}`,
    "color: #39ff14; font-family: monospace; white-space: pre-wrap;",
  );
  console.log(
    "%c📦 TEMU + Ali Express: статус склада — ВЫКУПЛЕНО. Открой Master Ball!",
    "color: #7dcea0; font-family: monospace;",
  );
  return "🎉 BOSS protocol OK. Epiphany is upon you.";
}

export function ConsoleEasterEgg() {
  useEffect(() => {
    console.log(
      `%c${CICADA_ASCII}`,
      "color: #39ff14; font-family: monospace; font-size: 12px;",
    );
    console.log(
      "%c3301: Welcome. Epiphany is upon you.",
      "color: #39ff14; font-family: monospace;",
    );
    console.log(
      `%c${BOSS_BINARY}`,
      "color: #39ff14; font-family: monospace;",
    );
    console.log(
      "%c(decode binary → BOSS3301)",
      "color: #1a7a1a; font-family: monospace;",
    );
    console.log(
      "%cTry: boss() 🎂📦",
      "color: #f4d03f; font-family: monospace; font-size: 14px;",
    );

    window.boss = runBossGreeting;
    window.ceo = () => {
      console.log(
        "%cceo() deprecated → use boss()",
        "color: #f1c40f; font-family: monospace;",
      );
      return runBossGreeting();
    };

    return () => {
      delete window.boss;
      delete window.ceo;
    };
  }, []);

  return null;
}
