"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type SceneWipeProps = {
  wipeKey: string;
  children: ReactNode;
};

export function SceneWipe({ wipeKey, children }: SceneWipeProps) {
  return (
    <motion.div
      key={wipeKey}
      className="h-full relative overflow-hidden"
      initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0.6 }}
      animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
      exit={{ clipPath: "inset(0 0 0 100%)", opacity: 0.6 }}
      transition={{ duration: 0.22, ease: "easeInOut" }}
    >
      {children}
      <motion.div
        className="pointer-events-none absolute inset-0 z-30"
        initial={{ opacity: 0.35 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #0000 0 2px, #0003 2px 4px)",
        }}
      />
    </motion.div>
  );
}
