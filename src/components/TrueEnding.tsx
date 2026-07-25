"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toPng } from "html-to-image";
import { characters } from "@/data/characters";
import { ENDING_FINALE, ENDING_LINES } from "@/data/ending";
import { PokemonSprite } from "./PokemonSprite";
import { DialogueBox } from "./DialogueBox";
import { playCry, playSfx, unlockAudio } from "@/lib/audio";

type TrueEndingProps = {
  open: boolean;
  onClose: () => void;
};

export function TrueEnding({ open, onClose }: TrueEndingProps) {
  const [step, setStep] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (open) {
      setStep(0);
      void unlockAudio().then(() => playSfx("fanfare"));
    }
  }, [open]);

  const line = ENDING_LINES[step];
  const done = step >= ENDING_LINES.length;

  const advance = async () => {
    await unlockAudio();
    if (!done) {
      const next = step + 1;
      if (next < ENDING_LINES.length) {
        playCry(ENDING_LINES[next].id);
        playSfx("select");
      } else {
        playSfx("party");
      }
      setStep(next);
    }
  };

  const savePng = useCallback(async () => {
    if (!cardRef.current) return;
    setSaving(true);
    try {
      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        pixelRatio: 2,
        backgroundColor: "#e3350d",
      });
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = "boss-birthday-postcard.png";
      a.click();
      playSfx("fanfare");
    } catch {
      playSfx("hit");
    } finally {
      setSaving(false);
    }
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center p-3 bg-black/85"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="w-full max-w-lg space-y-3">
            <div
              ref={cardRef}
              className="pixel-border bg-gradient-to-b from-[#5c94fc] via-[#78c850] to-[#c6e4a5] p-4"
            >
              <p className="font-display text-center text-[10px] text-white drop-shadow-[1px_1px_0_#000] mb-3">
                TRUE ENDING · BOSS BIRTHDAY
              </p>
              <div className="flex justify-around items-end mb-3">
                {characters.map((c) => (
                  <PokemonSprite
                    key={c.id}
                    character={c}
                    size="sm"
                    react="happy"
                    showLabel={false}
                  />
                ))}
              </div>
              <div className="text-center text-2xl mb-2">🎂🚗📦</div>
              {!done && line ? (
                <DialogueBox
                  name={characters.find((c) => c.id === line.id)?.name}
                  text={line.text}
                  withTicks
                  hint="▼ next"
                />
              ) : (
                <div className="dialogue-box text-center">
                  <pre className="font-body text-[20px] whitespace-pre-wrap leading-snug">
                    {ENDING_FINALE}
                  </pre>
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {!done ? (
                <button
                  type="button"
                  onClick={() => void advance()}
                  className="pixel-btn font-display text-[9px] px-4 py-2"
                >
                  NEXT ▸
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => void savePng()}
                  disabled={saving}
                  className="pixel-btn font-display text-[9px] px-4 py-2 pixel-btn-active"
                >
                  {saving ? "SAVING…" : "💾 SAVE POSTCARD"}
                </button>
              )}
              <button
                type="button"
                onClick={onClose}
                className="pixel-btn font-display text-[9px] px-4 py-2"
              >
                CLOSE
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
