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

const STORAGE_KEY = "pokemon-bday-gifts";

export type GiftId =
  | "battle-temu"
  | "battle-taycan"
  | "battle-ticket"
  | "battle-gift"
  | "hub-talk"
  | "hub-taycan"
  | "hub-package"
  | "hub-cake";

type BirthdayContextValue = {
  gifts: Set<GiftId>;
  giftCount: number;
  cleared: boolean;
  ballHighlight: boolean;
  showEnding: boolean;
  partyMode: boolean;
  bossAsleep: boolean;
  addGift: (id: GiftId) => void;
  setBallHighlight: (v: boolean) => void;
  setShowEnding: (v: boolean) => void;
  setPartyMode: (v: boolean) => void;
  markCleared: () => void;
};

const BirthdayContext = createContext<BirthdayContextValue | null>(null);

export function BirthdayProvider({ children }: { children: ReactNode }) {
  const [gifts, setGifts] = useState<Set<GiftId>>(new Set());
  const [cleared, setCleared] = useState(false);
  const [ballHighlight, setBallHighlight] = useState(false);
  const [showEnding, setShowEnding] = useState(false);
  const [partyMode, setPartyMode] = useState(false);
  const [bossAsleep, setBossAsleep] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const loaded = new Set(JSON.parse(raw) as GiftId[]);
        setGifts(loaded);
        if (loaded.size >= 4) {
          setCleared(true);
          setBallHighlight(true);
        }
      }
    } catch {
      /* ignore */
    }
    setBossAsleep(new Date().getHours() < 13);
  }, []);

  const addGift = useCallback((id: GiftId) => {
    setGifts((prev) => {
      if (prev.has(id)) return prev;
      const next = new Set(prev);
      next.add(id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
      if (next.size >= 4) {
        setCleared(true);
        setBallHighlight(true);
      }
      return next;
    });
  }, []);

  const markCleared = useCallback(() => {
    setCleared(true);
    setBallHighlight(true);
  }, []);

  const value = useMemo(
    () => ({
      gifts,
      giftCount: Math.min(gifts.size, 4),
      cleared,
      ballHighlight,
      showEnding,
      partyMode,
      bossAsleep,
      addGift,
      setBallHighlight,
      setShowEnding,
      setPartyMode,
      markCleared,
    }),
    [
      gifts,
      cleared,
      ballHighlight,
      showEnding,
      partyMode,
      bossAsleep,
      addGift,
      markCleared,
    ],
  );

  return (
    <BirthdayContext.Provider value={value}>{children}</BirthdayContext.Provider>
  );
}

export function useBirthday() {
  const ctx = useContext(BirthdayContext);
  if (!ctx) throw new Error("useBirthday outside BirthdayProvider");
  return ctx;
}
