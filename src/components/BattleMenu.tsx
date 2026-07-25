"use client";

type BattleMenuItem = {
  id: string;
  label: string;
  emoji?: string;
  done?: boolean;
};

type BattleMenuProps = {
  items: BattleMenuItem[];
  disabled?: boolean;
  onSelect: (id: string) => void;
};

export function BattleMenu({ items, disabled, onSelect }: BattleMenuProps) {
  return (
    <div className="battle-menu grid grid-cols-1 sm:grid-cols-2 gap-2">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          disabled={disabled}
          onClick={() => onSelect(item.id)}
          className={`battle-menu-btn font-display ${item.done ? "opacity-70" : ""}`}
        >
          <span className="text-[var(--poke-red)] mr-1">▶</span>
          {item.emoji ? `${item.emoji} ` : ""}
          {item.label}
          {item.done ? " ✓" : ""}
        </button>
      ))}
    </div>
  );
}
