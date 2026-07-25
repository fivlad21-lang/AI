"use client";

import { useEffect, useState } from "react";
import { playSfx } from "@/lib/audio";

type TypewriterProps = {
  text: string;
  speed?: number;
  className?: string;
  onDone?: () => void;
  withTicks?: boolean;
};

export function Typewriter({
  text,
  speed = 28,
  className = "",
  onDone,
  withTicks = false,
}: TypewriterProps) {
  const [shown, setShown] = useState("");

  useEffect(() => {
    setShown("");
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setShown(text.slice(0, i));
      if (withTicks && i % 3 === 0) {
        playSfx("tick");
      }
      if (i >= text.length) {
        window.clearInterval(id);
        onDone?.();
      }
    }, speed);
    return () => window.clearInterval(id);
    // intentionally omit onDone to avoid restart loops
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, speed, withTicks]);

  return (
    <p className={`whitespace-pre-wrap leading-relaxed ${className}`}>
      {shown}
      <span className="animate-pulse">▌</span>
    </p>
  );
}
