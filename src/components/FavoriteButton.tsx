"use client";

import { useEffect, useState, type MouseEvent } from "react";

const KEY = "nomore-favorites";

function read(): string[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}

export function FavoriteButton({ id }: { id: string }) {
  const [on, setOn] = useState(false);

  useEffect(() => {
    setOn(read().includes(id));
  }, [id]);

  const toggle = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const cur = read();
    const next = cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id];
    localStorage.setItem(KEY, JSON.stringify(next));
    setOn(next.includes(id));
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="glass flex h-9 w-9 items-center justify-center rounded-full text-sm"
      aria-label="Favorite"
    >
      {on ? "♥" : "♡"}
    </button>
  );
}
