"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { playSfx, unlockAudio } from "@/lib/audio";

type IntroSplashProps = {
  onDone: () => void;
};

export function IntroSplash({ onDone }: IntroSplashProps) {
  const [phase, setPhase] = useState(0);
  const doneRef = useRef(false);

  const finish = async (withFanfare: boolean) => {
    if (doneRef.current) return;
    doneRef.current = true;
    await unlockAudio();
    if (withFanfare) playSfx("fanfare");
    else playSfx("menu");
    onDone();
  };

  useEffect(() => {
    const t1 = window.setTimeout(() => setPhase(1), 400);
    const t2 = window.setTimeout(() => setPhase(2), 1400);
    const t3 = window.setTimeout(() => {
      void finish(true);
    }, 3200);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#1a0c08] p-6"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#e3350d33] to-transparent pointer-events-none" />

      <motion.p
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: phase >= 0 ? 1 : 0, scale: 1 }}
        className="text-[#ffcb05] text-[10px] sm:text-xs mb-6 tracking-widest"
      >
        GAME START
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: phase >= 1 ? 1 : 0, y: phase >= 1 ? 0 : 20 }}
        className="text-center dialogue-box max-w-md"
      >
        <p className="text-2xl sm:text-4xl mb-4">🎂⚡</p>
        <h1 className="text-[var(--poke-dark-red)] text-sm sm:text-lg leading-relaxed mb-3">
          HAPPY BIRTHDAY
        </h1>
        <p className="text-[var(--poke-ink)] text-[10px] sm:text-xs mb-2">
          BOSS ПИКАЧУ!
        </p>
        <p className="text-[8px] text-[var(--poke-shadow)]">
          A birthday legend is about to begin!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: phase >= 2 ? 1 : 0 }}
        className="mt-8 flex gap-2 text-xl"
      >
        {["🎈", "🎁", "🎂", "🎉", "🎈"].map((e, i) => (
          <motion.span
            key={i}
            animate={{ y: [0, -8, 0] }}
            transition={{
              repeat: Infinity,
              duration: 0.8,
              delay: i * 0.1,
            }}
          >
            {e}
          </motion.span>
        ))}
      </motion.div>

      <p className="mt-10 text-[8px] text-[#ffcb05]">
        LEVEL UP: +1 YEAR UNLOCKED
      </p>

      <button
        type="button"
        onClick={() => void finish(false)}
        className="pixel-btn mt-8 text-[9px] px-4 py-2"
      >
        SKIP ▸
      </button>
    </motion.div>
  );
}
