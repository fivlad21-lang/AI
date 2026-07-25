"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { BIRTHDAY_MESSAGE, PGP_BLOCK } from "@/data/content";
import { playCry, playSfx, unlockAudio } from "@/lib/audio";

type PokeBallFinaleProps = {
  highlight?: boolean;
  onOpened?: () => void;
  onRequestEnding?: () => void;
};

export function PokeBallFinale({
  highlight = false,
  onOpened,
  onRequestEnding,
}: PokeBallFinaleProps) {
  const [shaking, setShaking] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClick = async () => {
    await unlockAudio();
    if (shaking || open) {
      setOpen(true);
      return;
    }
    setShaking(true);
    playSfx("ball");
    await wait(400);
    playSfx("ball");
    await wait(400);
    playSfx("ball");
    await wait(400);
    setShaking(false);
    setOpen(true);
    playSfx("fanfare");
    playCry("pikachu");
    fireConfetti();
    onOpened?.();
  };

  return (
    <>
      <div
        className={`flex flex-col items-center gap-2 py-4 ${
          highlight
            ? "ring-2 ring-[#ffcb05] ring-offset-2 ring-offset-[#9ccc65] rounded"
            : ""
        }`}
      >
        <p className="font-display text-[8px] text-[var(--poke-dark-red)]">
          {highlight ? "🎂 MASTER BALL READY!" : "MASTER BALL — OPEN ME"}
        </p>
        <motion.button
          type="button"
          onClick={() => void handleClick()}
          animate={
            shaking
              ? { rotate: [-12, 12, -12, 12, -8, 8, 0], y: [0, -6, 0, -4, 0] }
              : highlight
                ? { y: [0, -6, 0], scale: [1, 1.05, 1] }
                : { y: [0, -3, 0] }
          }
          transition={
            shaking
              ? { duration: 1.1 }
              : {
                  repeat: Infinity,
                  duration: highlight ? 1.2 : 2,
                  ease: "easeInOut",
                }
          }
          className="relative w-16 h-16 rounded-full pixel-border overflow-hidden cursor-pointer shadow-[4px_4px_0_#0a1a0a] hover:scale-105 transition-transform"
          aria-label="Open Master Ball"
        >
          <div className="absolute inset-0 top-0 h-1/2 bg-gradient-to-b from-[#7b2cbf] to-[#4a1a6b]" />
          <div className="absolute inset-0 top-1/2 h-1/2 bg-[#f5f5f5]" />
          <div className="absolute top-1/2 left-0 right-0 h-2 -translate-y-1/2 bg-[#111]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#111] pixel-border flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-[#eee]" />
          </div>
        </motion.button>
        <p className="font-display text-[7px] text-[var(--poke-shadow)]">
          3 shakes → салют → письмо
        </p>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="pixel-border bg-[#fffef5] max-w-lg w-full max-h-[85vh] overflow-y-auto p-4 sm:p-6 relative"
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute top-2 right-3 font-display text-[var(--poke-dark-red)] text-xs"
              >
                ✕
              </button>
              <p className="font-display text-[10px] text-[var(--poke-dark-red)] mb-3 text-center">
                🎉 CATCH SUCCESSFUL! HAPPY BIRTHDAY, BOSS! 🎉
              </p>
              <pre className="font-body text-[18px] sm:text-[20px] text-[var(--poke-ink)] whitespace-pre-wrap leading-snug">
                {BIRTHDAY_MESSAGE}
              </pre>
              <details className="mt-4">
                <summary className="font-display text-[8px] text-[var(--poke-blue)] cursor-pointer">
                  🔐 encrypted PGP payload
                </summary>
                <pre className="mt-2 font-body text-[14px] text-[#39ff14] whitespace-pre-wrap bg-black p-2 pixel-border">
                  {PGP_BLOCK}
                </pre>
              </details>
              <button
                type="button"
                className="pixel-btn pixel-btn-active w-full mt-4 font-display text-[9px] py-3"
                onClick={() => {
                  setOpen(false);
                  onRequestEnding?.();
                }}
              >
                ▶ TRUE ENDING
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function wait(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

function fireConfetti() {
  const end = Date.now() + 2500;
  const colors = ["#f4d03f", "#e3350d", "#7b2cbf", "#5dade2", "#ffffff"];
  const defaults = {
    colors,
    ticks: 200,
    scalar: 0.85,
    disableForReducedMotion: true,
    shapes: ["square" as const],
  };

  (function frame() {
    confetti({
      ...defaults,
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
    });
    confetti({
      ...defaults,
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.7 },
    });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}

export function firePartyConfetti() {
  const colors = ["#f4d03f", "#e3350d", "#7b2cbf", "#5dade2", "#ff6b9d"];
  confetti({
    particleCount: 90,
    spread: 100,
    origin: { y: 0.6 },
    colors,
    shapes: ["square"],
    disableForReducedMotion: true,
  });
}
