"use client";

import type { ReactNode } from "react";
import { Typewriter } from "./Typewriter";

type DialogueBoxProps = {
  name?: string;
  text: string;
  face?: ReactNode;
  hint?: string;
  withTicks?: boolean;
};

export function DialogueBox({
  name,
  text,
  face,
  hint = "▼ tap / click",
  withTicks = true,
}: DialogueBoxProps) {
  return (
    <div className="dialogue-box">
      <div className="flex items-start gap-3">
        {face && <div className="shrink-0 pt-0.5">{face}</div>}
        <div className="flex-1 min-w-0">
          {name && (
            <p className="text-[8px] sm:text-[9px] text-[var(--poke-blue)] mb-2 uppercase tracking-wide">
              {name}
            </p>
          )}
          <Typewriter
            text={text}
            className="text-[10px] sm:text-[11px] text-[var(--poke-ink)] leading-relaxed"
            withTicks={withTicks}
          />
          <p className="dialogue-caret mt-2 text-[8px] text-[var(--poke-shadow)]">
            {hint}
          </p>
        </div>
      </div>
    </div>
  );
}
