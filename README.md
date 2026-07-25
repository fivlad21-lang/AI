# Pokémon BOSS Birthday Quest

Интерактивная веб-открытка в стиле **Pokémon FireRed / GBA** с пасхалками Cicada 3301.

## Запуск

```bash
npm install
npm run dev
```

Открой [http://localhost:3000](http://localhost:3000).

## Спрайты покемонов

По умолчанию грузятся **реальные спрайты** с PokeAPI CDN (animated Gen V + PNG).  
Emoji — только fallback.

Локальный офлайн-кэш (не коммитится):

```bash
npm run sprites:fetch
```

Выключить спрайты: в `.env.local` поставь `NEXT_PUBLIC_USE_REAL_SPRITES=false`.

Fan gift / non-commercial. Sprites © Pokémon/Nintendo/Creatures/GAME FREAK.

## Вкладки

| Tab | Описание |
|-----|----------|
| 🏠 HUB | Офис + Taycan + коробки TEMU/Ali + диалоги |
| ⚔️ BATTLE | Бой против BOSS Пикачу |
| 🎴 POKÉDEX | Досье команды |
| 🌐 3301 | Секретный терминал |

## Пасхалки

- `boss()` в консоли (legacy: `ceo()` → redirect)
- Клавиши **3301**, Konami, клик Taycan / коробки
- **Master Ball** → confetti + поздравление

## Стек

Next.js · React · Tailwind · Framer Motion · canvas-confetti · Press Start 2P
