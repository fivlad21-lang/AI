"use client";

import type { ReactNode } from "react";
import { Typewriter } from "./Typewriter";

type DialogueBoxProps = {
  name?: string;
  text: string;
  face?: ReactNode;
  hint?: string;
  withTicks?: boolean;
  className?: string;
};

export function DialogueBox({
  name,
  text,
  face,
  hint = "▼",
  withTicks = true,
  className = "",
}: DialogueBoxProps) {
  return (
    <div className={`dialogue-box ${className}`}>
      {name && (
        <div className="dialogue-nameplate font-display">{name}</div>
      )}
      <div className="flex items-start gap-3 pt-1">
        {face && <div className="shrink-0 pt-0.5">{face}</div>}
        <div className="flex-1 min-w-0">
          <Typewriter
            text={text}
            className="font-body text-[18px] sm:text-[20px] text-[var(--poke-ink)] leading-snug"
            withTicks={withTicks}
          />
          <p className="dialogue-caret mt-2 font-display text-[8px] text-[var(--poke-shadow)]">
            {hint}
          </p>
        </div>
      </div>
    </div>
  );
}
