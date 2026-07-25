export type PokemonId = "pikachu" | "bulbasaur" | "squirtle" | "psyduck";

export type DialogueMood =
  | "idle"
  | "happy"
  | "sleep"
  | "panic"
  | "smug"
  | "birthday";

export type DialogueLine = {
  text: string;
  mood?: DialogueMood;
  sfx?: "select" | "hit" | "fanfare";
};

export type Character = {
  id: PokemonId;
  name: string;
  emoji: string;
  dexNo: string;
  role: string;
  color: string;
  bg: string;
  dialogue: DialogueLine[];
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
    dexNo: "025",
    role: "CEO & Vibe Coder",
    color: "#F4D03F",
    bg: "#5C4A1F",
    dialogue: [
      { text: "…Zzz. Если это Slack — пиши после 13:00.", mood: "sleep" },
      {
        text: "Taycan заведён. Проблема? Скажи в одно предложение.",
        mood: "smug",
      },
      {
        text: "Америка ждёт. Виза-ран… mentally уже в процессе.",
        mood: "idle",
      },
      {
        text: "Одна меткая фраза — и любой затык solved. Trust the process.",
        mood: "smug",
      },
      {
        text: "Псайдак опять про пассивный бизнес? Пусть сначала пофиксит прод.",
        mood: "idle",
      },
      {
        text: "С Днём Рождения мне? Принимаю XP, кофе и билет в США. 🎂",
        mood: "birthday",
        sfx: "fanfare",
      },
      {
        text: "Команда собралась? Ок. Сегодня можно даже до 13:00… шучу.",
        mood: "happy",
      },
      {
        text: "Лучший подарок — респект. И чтобы Сквиртл перестал извиняться.",
        mood: "happy",
      },
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
    dexNo: "001",
    role: "Chess / Guitar / Beats / TikTok",
    color: "#7DCEA0",
    bg: "#1E3A2F",
    dialogue: [
      {
        text: "Шахматы, гитара, бит, TikTok — я не хвастаюсь. Я констатирую.",
        mood: "smug",
      },
      {
        text: "Хочешь мотивационный рэп? Припев уже в голове: CEO, level up!",
        mood: "happy",
      },
      {
        text: "ЧСВ команды +200%. Это не бафф. Это lifestyle.",
        mood: "smug",
      },
      {
        text: "Пикачу спит — я пишу бит. Идеальный morning routine… в 14:00.",
        mood: "idle",
      },
      {
        text: "Сквиртл, хватит извиняться. Ты у нас emotional support tank.",
        mood: "idle",
      },
      {
        text: "С Днём Рождения, босс! Записал festive beat специально для тебя.",
        mood: "birthday",
        sfx: "fanfare",
      },
      {
        text: "На шахматной доске ты уже король. Осталось рокировать в США.",
        mood: "happy",
      },
      {
        text: "Если тренд не залетел — это не я. Это алгоритм. Я талант во всём!",
        mood: "panic",
      },
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
    dexNo: "007",
    color: "#5DADE2",
    bg: "#1A3344",
    dialogue: [
      {
        text: "Извините… я снова всё сломал? Хотя ещё ничего не трогал.",
        mood: "panic",
      },
      {
        text: "Если что-то упало — это точно я. Простите. Я дурак.",
        mood: "panic",
      },
      {
        text: "Держусь за голову, но я здесь. Emotional support online!",
        mood: "idle",
      },
      {
        text: "Псайдак, твоя идея бизнеса снова давит мне на HP…",
        mood: "panic",
      },
      {
        text: "С Днём Рождения! Торт кривой — это я. Зато от души.",
        mood: "birthday",
        sfx: "fanfare",
      },
      {
        text: "Босс, ты лучший. Даже когда я всё порчу — ты не кикаешь. Спасибо.",
        mood: "happy",
      },
      {
        text: "Я уже три раза извинился за возможные баги. Четвёртый — заранее.",
        mood: "idle",
      },
      {
        text: "Моя ульта: снять с себя ответственность… ой. Извините.",
        mood: "smug",
      },
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
    dexNo: "054",
    role: "Lead Vibe Coder / Dota 2 / Startups",
    color: "#F5B041",
    bg: "#4A3518",
    dialogue: [
      {
        text: "*голова горит* Очередная идея пассивного бизнеса загружается…",
        mood: "panic",
      },
      {
        text: "Этот сайт — мой crit. Свайбкодил для босса. Ship it!",
        mood: "smug",
      },
      {
        text: "Dota 2 + вайбкодинг = AoE головная боль. Worth it.",
        mood: "idle",
      },
      {
        text: "Пикачу, проснись. Я придумал бизнес, который печатает деньги. Наверное.",
        mood: "happy",
      },
      {
        text: "С Днём Рождения, CEO! Лучший пассивный доход — счастливый босс.",
        mood: "birthday",
        sfx: "fanfare",
      },
      {
        text: "Сквиртл извиняется за мой код. Классика. GG WP.",
        mood: "smug",
      },
      {
        text: "Если сайт лагает — это не баг. Это… ладно, баг. Фикшу после катки.",
        mood: "panic",
      },
      {
        text: "Бульба, хватит тиктоков. Иди лучше закоммить мотивацию в main.",
        mood: "idle",
      },
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

export const TAYCAN_LINE: DialogueLine = {
  text: "*щёлкает дверь Taycan* Садись. Но только после 13:00. И с Днём Рождения — поехали. 🚗",
  mood: "smug",
  sfx: "select",
};
