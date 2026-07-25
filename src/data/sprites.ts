import type { PokemonId } from "@/data/characters";

export type SpriteVariant = "front" | "back" | "icon";

export const POKEDEX_NUMBERS: Record<PokemonId, number> = {
  bulbasaur: 1,
  squirtle: 7,
  pikachu: 25,
  psyduck: 54,
};

export function useRealSpritesEnabled(): boolean {
  return process.env.NEXT_PUBLIC_USE_REAL_SPRITES === "true";
}

/** Candidate URLs for a sprite; first that loads wins (client-side). */
export function getSpriteCandidates(
  id: PokemonId,
  variant: SpriteVariant = "front",
): string[] {
  const base = `/sprites/${id}`;
  if (variant === "front") {
    return [`${base}/front.gif`, `${base}/front.png`, `${base}/icon.png`];
  }
  if (variant === "back") {
    return [`${base}/back.png`, `${base}/front.png`, `${base}/front.gif`];
  }
  return [`${base}/icon.png`, `${base}/front.png`, `${base}/front.gif`];
}
