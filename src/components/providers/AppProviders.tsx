"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { readJson, writeJson } from "@/lib/storage";

const COMPARE_KEY = "nomore-compare";
const FAVORITES_KEY = "nomore-favorites";
const COOKIES_KEY = "nomore-cookies-ok";

type AppCtx = {
  favorites: string[];
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  compare: string[];
  toggleCompare: (id: string) => boolean;
  clearCompare: () => void;
  isCompared: (id: string) => boolean;
  cookiesOk: boolean;
  acceptCookies: () => void;
};

const Ctx = createContext<AppCtx | null>(null);

export function AppProviders({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [compare, setCompare] = useState<string[]>([]);
  const [cookiesOk, setCookiesOk] = useState(true);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setFavorites(readJson<string[]>(FAVORITES_KEY, []));
    setCompare(readJson<string[]>(COMPARE_KEY, []));
    setCookiesOk(readJson<boolean>(COOKIES_KEY, false));
    setHydrated(true);
  }, []);

  const toggleFavorite = useCallback((id: string) => {
    setFavorites((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      writeJson(FAVORITES_KEY, next);
      return next;
    });
  }, []);

  const isFavorite = useCallback(
    (id: string) => favorites.includes(id),
    [favorites],
  );

  const toggleCompare = useCallback((id: string) => {
    let ok = true;
    setCompare((prev) => {
      if (prev.includes(id)) {
        const next = prev.filter((x) => x !== id);
        writeJson(COMPARE_KEY, next);
        return next;
      }
      if (prev.length >= 3) {
        ok = false;
        return prev;
      }
      const next = [...prev, id];
      writeJson(COMPARE_KEY, next);
      return next;
    });
    return ok;
  }, []);

  const clearCompare = useCallback(() => {
    setCompare([]);
    writeJson(COMPARE_KEY, []);
  }, []);

  const isCompared = useCallback((id: string) => compare.includes(id), [compare]);

  const acceptCookies = useCallback(() => {
    setCookiesOk(true);
    writeJson(COOKIES_KEY, true);
  }, []);

  const value = useMemo(
    () => ({
      favorites,
      toggleFavorite,
      isFavorite,
      compare,
      toggleCompare,
      clearCompare,
      isCompared,
      cookiesOk: hydrated ? cookiesOk : true,
      acceptCookies,
    }),
    [
      favorites,
      toggleFavorite,
      isFavorite,
      compare,
      toggleCompare,
      clearCompare,
      isCompared,
      cookiesOk,
      hydrated,
      acceptCookies,
    ],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useApp() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useApp must be used within AppProviders");
  return ctx;
}
