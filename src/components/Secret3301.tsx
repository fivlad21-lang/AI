"use client";

import { motion } from "framer-motion";
import { CICADA_ASCII, PGP_BLOCK, BOSS_BINARY } from "@/data/content";

export function Secret3301() {
  return (
    <div className="flex flex-col gap-3 h-full">
      <p className="text-[9px] text-[var(--poke-dark-red)]">
        SECRET AREA · PROJECT 3301
      </p>
      <div className="pixel-border bg-black p-3 sm:p-4 flex-1 overflow-y-auto font-mono shadow-[4px_4px_0_#0006]">
        <motion.pre
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[#39ff14] text-[8px] sm:text-[10px] leading-tight mb-4 whitespace-pre overflow-x-auto"
        >
          {CICADA_ASCII}
        </motion.pre>

        <p className="text-[#39ff14] text-[9px] sm:text-[10px] mb-3 blink-cursor">
          root@cicada:~$ ./welcome.sh
        </p>

        <div className="space-y-3 text-[9px] sm:text-[10px] text-[#39ff14] leading-relaxed">
          <p>3301: Welcome. Epiphany is upon you.</p>
          <p className="text-[#1a9a1a]">
            Binary transmission:
            <br />
            {BOSS_BINARY}
          </p>
          <p className="text-[#0d6b0d]">→ decoded: BOSS3301</p>
          <p className="text-[#1a9a1a]">
            cargo://temu/ali → BOSS_WAREHOUSE · STATUS: BOUGHT OUT
          </p>
          <p>
            True passive income is not through Slack before 13:00.
          </p>
          <p>
            Seek the Master Ball. Decrypt the Taycan. Mind the packages.
          </p>
        </div>

        <div className="mt-6 pixel-border border-[#39ff14]! bg-[#050805] p-3">
          <p className="text-[8px] text-[#1a7a1a] mb-2">// ENCRYPTED PAYLOAD</p>
          <pre className="text-[8px] sm:text-[9px] text-[#39ff14] whitespace-pre-wrap leading-relaxed">
            {PGP_BLOCK}
          </pre>
        </div>

        <p className="mt-4 text-[8px] text-[#1a5a1a]">
          tip: open DevTools (F12) — try boss()
          <br />
          tip: in BATTLE, type 3301 on your keyboard.
        </p>
      </div>
    </div>
  );
}
