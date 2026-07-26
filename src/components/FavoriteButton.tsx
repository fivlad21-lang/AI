"use client";

import { useApp } from "@/components/providers/AppProviders";

export function FavoriteButton({ id }: { id: string }) {
  const { isFavorite, toggleFavorite } = useApp();
  const on = isFavorite(id);

  return (
    <button
      type="button"
      aria-label={on ? "Remove favorite" : "Save"}
      aria-pressed={on}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite(id);
      }}
      className={`glass flex h-9 w-9 items-center justify-center rounded-full text-sm transition ${
        on ? "text-rose-300" : "text-ink-muted hover:text-ink"
      }`}
    >
      {on ? "♥" : "♡"}
    </button>
  );
}
