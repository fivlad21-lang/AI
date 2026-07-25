# Pokémon CEO Birthday Quest

Интерактивная веб-открытка в стиле **Pokémon FireRed / GBA** с пасхалками Cicada 3301.

## Запуск

```bash
npm install
npm run dev
```

Открой [http://localhost:3000](http://localhost:3000).

## Локальные спрайты покемонов (опционально)

Спрайти **не коммитятся** (gitignore). Только для локального просмотра:

```bash
npm run sprites:fetch
cp .env.local.example .env.local
npm run dev
```

Без спрайтов сайт работает на emoji-fallback — так и задумано для GitHub / Vercel.

## Вкладки

| Tab | Описание |
|-----|----------|
| 🏠 HUB | Офис + Taycan + 4 покемона с живыми диалогами |
| ⚔️ BATTLE | Бой против CEO Пикачу (GBA layout) |
| 🎴 POKÉDEX | Досье команды |
| 🌐 3301 | Секретный терминал Cicada |

## Пасхалки

- Футер / `???` → Secret 3301
- `F12` → ASCII + `ceo()`
- Клавиши **3301** → Protocol в бою
- **Konami** ↑↑↓↓←→←→BA → Party Mode
- Клик по **Taycan**
- **Master Ball** → confetti + поздравление

## Стек

Next.js · React · Tailwind · Framer Motion · canvas-confetti · Press Start 2P
