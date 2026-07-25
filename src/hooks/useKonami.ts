"use client";

import { useCallback, useEffect, useState } from "react";

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export function useKonami(onSuccess: () => void) {
  const [idx, setIdx] = useState(0);

  const reset = useCallback(() => setIdx(0), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      const expected = KONAMI[idx];
      const match =
        key === expected ||
        (expected.length === 1 && key === expected.toLowerCase());

      if (match) {
        const next = idx + 1;
        if (next === KONAMI.length) {
          setIdx(0);
          onSuccess();
        } else {
          setIdx(next);
        }
      } else {
        // allow restart if first key matches
        setIdx(key === KONAMI[0] ? 1 : 0);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [idx, onSuccess]);

  return { progress: idx, reset };
}
