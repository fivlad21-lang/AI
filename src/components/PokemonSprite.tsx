"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Character, DialogueMood } from "@/data/characters";
import {
  getSpriteCandidates,
  useRealSpritesEnabled,
  type SpriteVariant,
} from "@/data/sprites";

type PokemonSpriteProps = {
  character: Character;
  size?: "sm" | "md" | "lg";
  variant?: SpriteVariant;
  onClick?: () => void;
  selected?: boolean;
  mask?: boolean;
  react?: DialogueMood | "hit" | "win" | "talk" | "idle";
  className?: string;
  showLabel?: boolean;
};

const sizes = {
  sm: "w-14 h-14 sm:w-16 sm:h-16",
  md: "w-24 h-24",
  lg: "w-28 h-28 sm:w-36 sm:h-36",
};

const emojiSizes = {
  sm: "text-3xl",
  md: "text-5xl",
  lg: "text-6xl",
};

export function PokemonSprite({
  character,
  size = "md",
  variant = "front",
  onClick,
  selected,
  mask,
  react = "idle",
  className = "",
  showLabel = true,
}: PokemonSpriteProps) {
  const real = useRealSpritesEnabled();
  const candidates = real ? getSpriteCandidates(character.id, variant) : [];
  const [srcIndex, setSrcIndex] = useState(0);
  const [failed, setFailed] = useState(!real);

  useEffect(() => {
    setSrcIndex(0);
    setFailed(!real);
  }, [character.id, variant, real]);

  const src = candidates[srcIndex];
  const showImg = real && src && !failed;

  const bob =
    react === "sleep"
      ? { y: [0, 2, 0], rotate: [-2, 2, -2] }
      : react === "hit"
        ? { x: [-4, 4, -3, 3, 0] }
        : react === "talk" || selected
          ? { y: [0, -8, 0, -4, 0] }
          : react === "win" || react === "happy" || react === "birthday"
            ? { y: [0, -10, 0], scale: [1, 1.08, 1] }
            : react === "panic"
              ? { x: [-2, 2, -2, 2, 0], rotate: [-3, 3, -3, 3, 0] }
              : { y: [0, -4, 0] };

  const duration =
    react === "hit" || react === "talk"
      ? 0.35
      : react === "panic"
        ? 0.4
        : selected
          ? 0.9
          : 1.25;

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={onClick ? { scale: 1.06, y: -3 } : undefined}
      whileTap={onClick ? { scale: 0.95 } : undefined}
      animate={bob}
      transition={{
        repeat: react === "hit" || react === "talk" ? 0 : Infinity,
        duration,
        ease: "easeInOut",
      }}
      className={`relative flex flex-col items-center gap-1 ${
        onClick ? "cursor-pointer" : "cursor-default"
      } ${className}`}
      aria-label={character.name}
    >
      <div className="relative flex flex-col items-center">
        {/* ground shadow */}
        <div
          className="absolute -bottom-1 w-[70%] h-2 rounded-[100%] bg-black/25"
          style={{ zIndex: 0 }}
        />
        <div
          className={`${sizes[size]} relative z-[1] flex items-center justify-center overflow-hidden`}
          style={{
            filter: selected
              ? `drop-shadow(0 0 6px ${character.color})`
              : undefined,
          }}
        >
          {showImg ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={src}
              alt={character.name}
              className="w-full h-full object-contain poke-sprite"
              draggable={false}
              onError={() => {
                if (srcIndex + 1 < candidates.length) {
                  setSrcIndex((i) => i + 1);
                } else {
                  setFailed(true);
                }
              }}
            />
          ) : (
            <span
              className={`${emojiSizes[size]} drop-shadow-[2px_2px_0_#0003]`}
            >
              {character.emoji}
            </span>
          )}
          {mask && (
            <span className="absolute inset-0 flex items-center justify-center bg-black/40 text-2xl z-20">
              🦗
            </span>
          )}
          {react === "sleep" && (
            <span className="absolute -top-1 -right-1 text-[10px] animate-pulse">
              zzz
            </span>
          )}
        </div>
      </div>
      {showLabel && (
        <span
          className="text-[7px] sm:text-[8px] text-center px-1 text-[var(--poke-ink)]"
          style={{ color: undefined }}
        >
          <span style={{ color: character.color === "#F4D03F" ? "#B8860B" : character.color }}>
            {character.name}
          </span>
        </span>
      )}
    </motion.button>
  );
}
