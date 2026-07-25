"use client";

import { useEffect } from "react";
import { CICADA_ASCII, BIRTHDAY_MESSAGE } from "@/data/content";
import { playSfx } from "@/lib/audio";

declare global {
  interface Window {
    ceo?: () => void;
  }
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
      "%c01000011 01000101 01001111 00110011 00110011 00110000 00110001",
      "color: #39ff14; font-family: monospace;",
    );
    console.log(
      "%c(decode binary → CEO3301)",
      "color: #1a7a1a; font-family: monospace;",
    );
    console.log(
      "%cTry: ceo() 🎂",
      "color: #f4d03f; font-family: monospace; font-size: 14px;",
    );

    window.ceo = () => {
      playSfx("fanfare");
      console.log(
        "%c🎂 С ДНЁМ РОЖДЕНИЯ, CEO ПИКАЧУ! ⚡",
        "color: #f4d03f; font-size: 16px; font-family: monospace;",
      );
      console.log(
        `%c${BIRTHDAY_MESSAGE}`,
        "color: #39ff14; font-family: monospace; white-space: pre-wrap;",
      );
      console.log(
        "%cКоманда покемонов передаёт респект. Открой Master Ball на сайте!",
        "color: #7dcea0; font-family: monospace;",
      );
      return "🎉 Birthday protocol OK. Epiphany is upon you.";
    };

    return () => {
      delete window.ceo;
    };
  }, []);

  return null;
}
