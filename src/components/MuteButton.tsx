"use client";

import { useEffect, useState } from "react";
import { initMuteFromStorage, isMuted, toggleMute, unlockAudio, playSfx } from "@/lib/audio";

export function MuteButton() {
  const [muted, setMutedState] = useState(false);

  useEffect(() => {
    initMuteFromStorage();
    setMutedState(isMuted());
  }, []);

  const onClick = async () => {
    await unlockAudio();
    const next = toggleMute();
    setMutedState(next);
    if (!next) playSfx("menu");
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className="pixel-btn text-[8px] px-2 py-1.5"
      aria-label={muted ? "Unmute" : "Mute"}
      title={muted ? "Sound OFF" : "Sound ON"}
    >
      {muted ? "🔇 MUTE" : "🔊 SFX"}
    </button>
  );
}
