const MUTE_KEY = "pokemon-bday-muted";

type SfxName =
  | "select"
  | "tick"
  | "menu"
  | "hit"
  | "crit"
  | "protocol"
  | "ball"
  | "fanfare"
  | "door"
  | "party";

let ctx: AudioContext | null = null;
let muted = false;
let unlocked = false;

function getCtx(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const AC =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
  }
  return ctx;
}

export function initMuteFromStorage() {
  if (typeof window === "undefined") return;
  muted = localStorage.getItem(MUTE_KEY) === "1";
}

export function isMuted() {
  return muted;
}

export function setMuted(value: boolean) {
  muted = value;
  if (typeof window !== "undefined") {
    localStorage.setItem(MUTE_KEY, value ? "1" : "0");
  }
}

export function toggleMute() {
  setMuted(!muted);
  return muted;
}

/** Call on first user gesture so AudioContext can start */
export async function unlockAudio() {
  const c = getCtx();
  if (!c) return;
  if (c.state === "suspended") {
    await c.resume();
  }
  unlocked = true;
}

function beep(
  freq: number,
  duration: number,
  type: OscillatorType = "square",
  gain = 0.08,
  slideTo?: number,
) {
  if (muted || typeof window === "undefined") return;
  const c = getCtx();
  if (!c) return;
  if (c.state === "suspended") {
    void c.resume();
  }

  const osc = c.createOscillator();
  const g = c.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, c.currentTime);
  if (slideTo != null) {
    osc.frequency.exponentialRampToValueAtTime(
      Math.max(1, slideTo),
      c.currentTime + duration,
    );
  }
  g.gain.setValueAtTime(gain, c.currentTime);
  g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + duration);
  osc.connect(g);
  g.connect(c.destination);
  osc.start();
  osc.stop(c.currentTime + duration + 0.02);
}

function melody(
  notes: { f: number; d: number; gap?: number }[],
  type: OscillatorType = "square",
  gain = 0.07,
) {
  if (muted) return;
  let t = 0;
  notes.forEach((n) => {
    window.setTimeout(() => beep(n.f, n.d, type, gain), t * 1000);
    t += n.d + (n.gap ?? 0.03);
  });
}

export function playSfx(name: SfxName) {
  if (!unlocked && name !== "menu") {
    // still try — unlockAudio may have run
  }
  switch (name) {
    case "select":
      beep(520, 0.06, "square", 0.07);
      window.setTimeout(() => beep(780, 0.08, "square", 0.06), 60);
      break;
    case "tick":
      beep(880, 0.02, "square", 0.03);
      break;
    case "menu":
      beep(330, 0.05, "square", 0.06);
      window.setTimeout(() => beep(440, 0.07, "square", 0.06), 50);
      break;
    case "hit":
      beep(180, 0.12, "sawtooth", 0.09, 60);
      break;
    case "crit":
      melody(
        [
          { f: 523, d: 0.08 },
          { f: 659, d: 0.08 },
          { f: 784, d: 0.08 },
          { f: 1046, d: 0.2, gap: 0.05 },
          { f: 784, d: 0.1 },
          { f: 1046, d: 0.25 },
        ],
        "square",
        0.08,
      );
      break;
    case "protocol":
      beep(110, 0.25, "sawtooth", 0.06);
      window.setTimeout(() => beep(90, 0.35, "square", 0.05), 200);
      window.setTimeout(() => beep(140, 0.15, "triangle", 0.05), 450);
      break;
    case "ball":
      beep(300, 0.05, "triangle", 0.07);
      window.setTimeout(() => beep(220, 0.08, "triangle", 0.06), 100);
      break;
    case "fanfare":
      melody(
        [
          { f: 392, d: 0.1 },
          { f: 523, d: 0.1 },
          { f: 659, d: 0.1 },
          { f: 784, d: 0.15 },
          { f: 659, d: 0.1 },
          { f: 784, d: 0.28 },
        ],
        "square",
        0.08,
      );
      break;
    case "door":
      beep(200, 0.08, "triangle", 0.07);
      window.setTimeout(() => beep(140, 0.12, "triangle", 0.05), 90);
      break;
    case "party":
      melody(
        [
          { f: 523, d: 0.08 },
          { f: 587, d: 0.08 },
          { f: 659, d: 0.08 },
          { f: 784, d: 0.08 },
          { f: 880, d: 0.12 },
          { f: 784, d: 0.08 },
          { f: 1046, d: 0.22 },
        ],
        "square",
        0.075,
      );
      break;
  }
}
