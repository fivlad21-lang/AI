import type { PokemonId } from "@/data/characters";

export type SpriteVariant = "front" | "back" | "icon";

export const POKEDEX_NUMBERS: Record<PokemonId, number> = {
  bulbasaur: 1,
  squirtle: 7,
  pikachu: 25,
  psyduck: 54,
};

const RAW =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

/** Default ON. Set NEXT_PUBLIC_USE_REAL_SPRITES=false to force emoji. */
export function useRealSpritesEnabled(): boolean {
  return process.env.NEXT_PUBLIC_USE_REAL_SPRITES !== "false";
}

/**
 * Candidates: first that loads wins.
 * Dev prefers local overrides; production prefers CDN (no 404 spam).
 */
export function getSpriteCandidates(
  id: PokemonId,
  variant: SpriteVariant = "front",
): string[] {
  const n = POKEDEX_NUMBERS[id];
  const local = `/sprites/${id}`;
  const animated = `${RAW}/versions/generation-v/black-white/animated/${n}.gif`;
  const front = `${RAW}/${n}.png`;
  const back = `${RAW}/back/${n}.png`;

  const localFront = [`${local}/front.gif`, `${local}/front.png`];
  const cdnFront = [animated, front];
  const preferLocal = process.env.NODE_ENV === "development";

  if (variant === "front") {
    return preferLocal
      ? [...localFront, ...cdnFront]
      : [...cdnFront, ...localFront];
  }
  if (variant === "back") {
    const localBack = [`${local}/back.png`, `${local}/front.png`];
    const cdnBack = [back, front];
    return preferLocal
      ? [...localBack, ...cdnBack]
      : [...cdnBack, ...localBack];
  }
  const localIcon = [`${local}/icon.png`, `${local}/front.png`];
  const cdnIcon = [front];
  return preferLocal
    ? [...localIcon, ...cdnIcon]
    : [...cdnIcon, ...localIcon];
}
