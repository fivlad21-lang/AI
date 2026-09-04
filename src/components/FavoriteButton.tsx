"use client";

import { useApp } from "@/components/providers/AppProviders";
import { HeartIcon } from "@/components/HeartIcon";

export function FavoriteButton({ id, onMedia = false }: { id: string; onMedia?: boolean }) {
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
      className={`flex h-9 w-9 items-center justify-center rounded-full transition ${
        onMedia
          ? "bg-black/55 text-white shadow-[0_2px_8px_rgba(0,0,0,0.35)] backdrop-blur-sm hover:bg-black/70"
          : "glass text-ink-muted hover:text-ink"
      } ${on ? "text-rose-400" : ""}`}
    >
      <HeartIcon className="h-[18px] w-[18px]" filled={on} />
    </button>
  );
}
