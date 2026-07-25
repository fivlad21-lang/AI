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
  | "party"
  | "drop";

type CryId = "pikachu" | "bulbasaur" | "squirtle" | "psyduck";

let ctx: AudioContext | null = null;
let muted = false;
let unlocked = false;
let bgmTimer: number | null = null;
let bgmGain: GainNode | null = null;
let cryAudio: HTMLAudioElement | null = null;

const CRY_URLS: Record<CryId, string> = {
  pikachu:
    "https://play.pokemonshowdown.com/audio/cries/pikachu.mp3",
  bulbasaur:
    "https://play.pokemonshowdown.com/audio/cries/bulbasaur.mp3",
  squirtle:
    "https://play.pokemonshowdown.com/audio/cries/squirtle.mp3",
  psyduck:
    "https://play.pokemonshowdown.com/audio/cries/psyduck.mp3",
};

function criesEnabled() {
  return process.env.NEXT_PUBLIC_ENABLE_CRIES !== "false";
}

function bgmEnabled() {
  return process.env.NEXT_PUBLIC_ENABLE_BGM !== "false";
}

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
  if (muted) {
    stopBgm();
    if (cryAudio) {
      cryAudio.pause();
      cryAudio = null;
    }
  }
}

export function toggleMute() {
  setMuted(!muted);
  return muted;
}

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
  if (c.state === "suspended") void c.resume();

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
    case "drop":
      beep(240, 0.06, "triangle", 0.07);
      window.setTimeout(() => beep(160, 0.1, "square", 0.05), 70);
      break;
  }
}

export function playCry(id: CryId) {
  if (muted || !criesEnabled() || typeof window === "undefined") return;
  try {
    if (cryAudio) {
      cryAudio.pause();
    }
    const a = new Audio(CRY_URLS[id]);
    a.volume = 0.45;
    cryAudio = a;
    void a.play().catch(() => {
      /* autoplay / network — ignore */
    });
  } catch {
    /* ignore */
  }
}

export function startHubBgm() {
  if (muted || !bgmEnabled() || typeof window === "undefined") return;
  stopBgm();
  const c = getCtx();
  if (!c) return;
  if (c.state === "suspended") void c.resume();

  bgmGain = c.createGain();
  bgmGain.gain.value = 0.035;
  bgmGain.connect(c.destination);

  const pattern = [262, 330, 392, 330, 294, 349, 440, 349];
  let i = 0;

  const tick = () => {
    if (muted || !bgmGain) return;
    const osc = c.createOscillator();
    const g = c.createGain();
    osc.type = "square";
    osc.frequency.value = pattern[i % pattern.length];
    g.gain.setValueAtTime(0.04, c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.18);
    osc.connect(g);
    g.connect(bgmGain);
    osc.start();
    osc.stop(c.currentTime + 0.2);
    i += 1;
  };

  tick();
  bgmTimer = window.setInterval(tick, 220);
}

export function stopBgm() {
  if (bgmTimer != null) {
    window.clearInterval(bgmTimer);
    bgmTimer = null;
  }
  if (bgmGain) {
    try {
      bgmGain.disconnect();
    } catch {
      /* ignore */
    }
    bgmGain = null;
  }
}
