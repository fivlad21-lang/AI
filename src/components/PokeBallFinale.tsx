"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { BIRTHDAY_MESSAGE, PGP_BLOCK } from "@/data/content";
import { playSfx, unlockAudio } from "@/lib/audio";

type PokeBallFinaleProps = {
  highlight?: boolean;
};

export function PokeBallFinale({ highlight = false }: PokeBallFinaleProps) {
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
    fireConfetti();
  };

  return (
    <>
      <div
        className={`flex flex-col items-center gap-2 py-4 ${
          highlight ? "ring-2 ring-[#f4d03f] ring-offset-2 ring-offset-[#0a1f12] rounded" : ""
        }`}
      >
        <p className="text-[8px] text-[#7dcea0]">
          {highlight ? "🎂 MASTER BALL READY!" : "MASTER BALL — OPEN ME"}
        </p>
        <motion.button
          type="button"
          onClick={handleClick}
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
              : { repeat: Infinity, duration: highlight ? 1.2 : 2, ease: "easeInOut" }
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
        <p className="text-[7px] text-[#4a7c59]">
          3 покачивания → салют → поздравление
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
              className="pixel-border bg-[#0d1f14] max-w-lg w-full max-h-[85vh] overflow-y-auto p-4 sm:p-6 relative"
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute top-2 right-3 text-[#7dcea0] text-xs hover:text-white"
              >
                ✕
              </button>
              <p className="text-[10px] text-[#f4d03f] mb-3 text-center">
                🎉 CATCH SUCCESSFUL! HAPPY BIRTHDAY! 🎉
              </p>
              <pre className="text-[9px] sm:text-[10px] text-[#d4edda] whitespace-pre-wrap leading-relaxed">
                {BIRTHDAY_MESSAGE}
              </pre>
              <details className="mt-4">
                <summary className="text-[8px] text-[#39ff14] cursor-pointer">
                  🔐 encrypted PGP payload
                </summary>
                <pre className="mt-2 text-[7px] text-[#39ff14] whitespace-pre-wrap bg-black p-2 pixel-border">
                  {PGP_BLOCK}
                </pre>
              </details>
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
  const colors = ["#f4d03f", "#39ff14", "#7b2cbf", "#5dade2", "#ffffff"];

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
      colors,
      ticks: 200,
      scalar: 0.9,
      disableForReducedMotion: true,
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.7 },
      colors,
      ticks: 200,
      scalar: 0.9,
      disableForReducedMotion: true,
    });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}

export function firePartyConfetti() {
  const colors = ["#f4d03f", "#39ff14", "#7b2cbf", "#5dade2", "#ff6b9d"];
  confetti({
    particleCount: 80,
    spread: 100,
    origin: { y: 0.6 },
    colors,
    disableForReducedMotion: true,
  });
}
