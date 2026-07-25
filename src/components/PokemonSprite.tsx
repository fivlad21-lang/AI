"use client";

import { motion } from "framer-motion";
import type { Character } from "@/data/characters";

type PokemonSpriteProps = {
  character: Character;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  selected?: boolean;
  mask?: boolean;
  className?: string;
};

const sizes = {
  sm: "w-16 h-16 text-3xl",
  md: "w-24 h-24 text-5xl",
  lg: "w-32 h-32 text-6xl",
};

export function PokemonSprite({
  character,
  size = "md",
  onClick,
  selected,
  mask,
  className = "",
}: PokemonSpriteProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={onClick ? { scale: 1.08, y: -4 } : undefined}
      whileTap={onClick ? { scale: 0.95 } : undefined}
      animate={selected ? { y: [0, -6, 0] } : { y: 0 }}
      transition={
        selected
          ? { repeat: Infinity, duration: 1.2, ease: "easeInOut" }
          : { duration: 0.2 }
      }
      className={`relative flex flex-col items-center gap-2 ${
        onClick ? "cursor-pointer" : "cursor-default"
      } ${className}`}
      aria-label={character.name}
    >
      <div
        className={`${sizes[size]} pixel-border flex items-center justify-center relative overflow-hidden`}
        style={{
          background: `linear-gradient(160deg, ${character.color}55, ${character.bg})`,
          boxShadow: selected
            ? `0 0 0 3px ${character.color}, 4px 4px 0 #0a1a0a`
            : "4px 4px 0 #0a1a0a",
        }}
      >
        <span className="relative z-10 drop-shadow-[2px_2px_0_#000]">
          {character.emoji}
        </span>
        {mask && (
          <span className="absolute inset-0 flex items-center justify-center bg-black/50 text-2xl z-20">
            🦗
          </span>
        )}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 3px, #000 3px, #000 4px)",
          }}
        />
      </div>
      <span
        className="text-[8px] sm:text-[9px] text-center px-1"
        style={{ color: character.color }}
      >
        {character.name}
      </span>
    </motion.button>
  );
}
