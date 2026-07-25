export type PokemonId = "pikachu" | "bulbasaur" | "squirtle" | "psyduck";

export type Character = {
  id: PokemonId;
  name: string;
  emoji: string;
  role: string;
  color: string;
  bg: string;
  dialogue: string[];
  stats: { label: string; value: number }[];
  passives: string[];
  attack: string;
  attackDesc: string;
  details: string[];
};

export const characters: Character[] = [
  {
    id: "pikachu",
    name: "Пикачу",
    emoji: "⚡",
    role: "CEO & Vibe Coder",
    color: "#F4D03F",
    bg: "#5C4A1F",
    dialogue: [
      "Пикачу: ...*зевает* Какой сейчас час? Если до 13:00 — я offline.",
      "Пикачу: У меня есть Taycan и меткое слово. Остальное — детали.",
      "Пикачу: Америка ждёт. Виза-ран в процессе... mentally.",
      "Пикачу: Одна фраза — и любой затык решён. Trust the process.",
      "Пикачу: С Днём Рождения мне? Ок. Принимаю респект и билет в США. 🎂",
    ],
    stats: [
      { label: "HP", value: 100 },
      { label: "ATK", value: 95 },
      { label: "VIBE", value: 99 },
      { label: "SLEEP", value: 100 },
    ],
    passives: [
      "Сонный Джетлаг — недоступен в Slack/Telegram до 13:00",
      "Меткое Слово — решает любой затык одной фразой",
    ],
    attack: "Критическое Меткое Слово",
    attackDesc: "Команда в шоке. Баги сдаются добровольно.",
    details: [
      "Транспорт: Porsche Taycan (фиолетовый)",
      "Мечта: 🇺🇸 США",
      "Спец: вайбкодинг после midday reboot",
    ],
  },
  {
    id: "bulbasaur",
    name: "Бульбазавр",
    emoji: "🍃",
    role: "Chess Grandmaster / Guitarist / Beatmaker / TikToker",
    color: "#7DCEA0",
    bg: "#1E3A2F",
    dialogue: [
      "Бульбазавр: Шахматист, гитарист, битмейкер, TikToker — я талант во всём!",
      "Бульбазавр: Хочешь мотивационный рэп под гитару? Уже пишу бит...",
      "Бульбазавр: ЧСВ команды +200%. Это не бафф, это lifestyle.",
      "Бульбазавр: С Днём Рождения, босс! Записал festive beat специально для тебя. 🎂🎸",
    ],
    stats: [
      { label: "HP", value: 85 },
      { label: "TALENT", value: 100 },
      { label: "CHESS", value: 92 },
      { label: "VIRAL", value: 88 },
    ],
    passives: ["Мультиталант — +200% ЧСВ всей команде"],
    attack: "Я талант во всём!",
    attackDesc: "Увеличивает ЧСВ команды на 200%.",
    details: [
      "Локация: у шахматной доски с гитарой",
      "Контент: TikTok-мотивация + биты",
      "Статус: Grandmaster vibe",
    ],
  },
  {
    id: "squirtle",
    name: "Сквиртл",
    emoji: "💧",
    role: "Emotional Support & Chief Apologizer",
    color: "#5DADE2",
    bg: "#1A3344",
    dialogue: [
      "Сквиртл: Извините, я дурак... Но я здесь, чтобы поддержать!",
      "Сквиртл: Если что-то сломалось — это точно я. Простите.",
      "Сквиртл: *держится за голову* Я уже три раза извинился за возможные баги.",
      "Сквиртл: С Днём Рождения! Извини, если торт кривой... я старался. 🎂💧",
    ],
    stats: [
      { label: "HP", value: 90 },
      { label: "SORRY", value: 100 },
      { label: "SUPPORT", value: 95 },
      { label: "GUILT", value: 99 },
    ],
    passives: ["Авто-извинение — снимает с себя любую ответственность"],
    attack: "Извините, я дурак",
    attackDesc: "Автоматически снимает с себя любую ответственность.",
    details: [
      "Форма: чуть кругленький (это мило)",
      "Эмоция: виноватый support tank",
      "Ульта: бесконечный apology loop",
    ],
  },
  {
    id: "psyduck",
    name: "Псайдак",
    emoji: "🧠",
    role: "Lead Vibe Coder / Dota 2 / Startup Generator",
    color: "#F5B041",
    bg: "#4A3518",
    dialogue: [
      "Псайдак: *голова горит* Очередная идея пассивного бизнеса загружается...",
      "Псайдак: Этот сайт? Свайбкодил специально для босса. Happy Birthday!",
      "Псайдак: Dota 2 + вайбкодинг = головная боль у всей команды. Worth it.",
      "Псайдак: С Днём Рождения, CEO! Лучший пассивный бизнес — счастливый босс. 🧠🎂",
    ],
    stats: [
      { label: "HP", value: 70 },
      { label: "IDEAS", value: 100 },
      { label: "DOTA", value: 87 },
      { label: "PAIN", value: 96 },
    ],
    passives: ["Startup Generator — вызывает головную боль у команды"],
    attack: "Идея Пассивного Бизнеса",
    attackDesc: "Вызывает головную боль у всей команды. Иногда приносит миллиарды.",
    details: [
      "Локация: ноутбук с горящим кодом + Dota 2",
      "Статус: создатель этого сайта",
      "Мечта: пассивный бизнес на миллиарды",
    ],
  },
];

export const getCharacter = (id: PokemonId) =>
  characters.find((c) => c.id === id)!;
