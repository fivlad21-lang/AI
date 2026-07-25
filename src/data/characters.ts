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
    role: "BOSS & Vibe Coder",
    color: "#F4D03F",
    bg: "#5C4A1F",
    dialogue: [
      {
        text: "…Zzz. Если это не трек с Ali — пиши после 13:00.",
        mood: "sleep",
      },
      {
        text: "Taycan заведён. TEMU выкуплен. Проблема? В одно предложение.",
        mood: "smug",
      },
      {
        text: "США ждёт. Посылки — тоже. Виза-ран mentally уже в пути.",
        mood: "idle",
      },
      {
        text: "Меткое слово + трек-номер = любой затык closed.",
        mood: "smug",
      },
      {
        text: "Псайдак опять про пассивку? Пусть сначала разберёт мои коробки с Ali.",
        mood: "idle",
      },
      {
        text: "С Днём Рождения мне? Ок. Принимаю XP, кофе и… ещё один склад на TEMU. 🎂",
        mood: "birthday",
        sfx: "fanfare",
      },
      {
        text: "Команда собралась? Красота. Сегодня можно даже до 13:00. Шучу.",
        mood: "happy",
      },
      {
        text: "Лучший подарок — респект. И чтобы Сквиртл перестал извиняться за мой шопинг.",
        mood: "happy",
      },
    ],
    stats: [
      { label: "HP", value: 100 },
      { label: "ATK", value: 95 },
      { label: "VIBE", value: 99 },
      { label: "CART", value: 100 },
    ],
    passives: [
      "Сонный Джетлаг — offline в Slack до 13:00",
      "Bulk Buyer — TEMU & AliExpress в одной корзине",
      "Меткое Слово — закрывает любой затык одной фразой",
    ],
    attack: "Критическое Меткое Слово",
    attackDesc: "Команда в шоке. Баги и менеджеры сдаются добровольно.",
    details: [
      "Транспорт: Porsche Taycan (фиолетовый, и да — коробки влезают)",
      "Склад: весь TEMU + Ali Express",
      "Мечта: 🇺🇸 США + бесконечный трекинг «вручено»",
      "Caught packages: 999+",
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
        text: "Шахматы, гитара, бит, TikTok — не хвастаюсь. Констатирую.",
        mood: "smug",
      },
      {
        text: "Припев уже готов: BOSS, level up!",
        mood: "happy",
      },
      {
        text: "ЧСВ команды +200%. Это не бафф. Это lifestyle.",
        mood: "smug",
      },
      {
        text: "Пока BOSS ждёт Ali — я уже снял TikTok: unboxing империи.",
        mood: "idle",
      },
      {
        text: "Сквиртл, хватит извиняться. Ты у нас support tank, не баг-репорт.",
        mood: "idle",
      },
      {
        text: "С Днём Рождения, BOSS! Записал festive beat специально под тебя.",
        mood: "birthday",
        sfx: "fanfare",
      },
      {
        text: "На доске ты уже король. Осталось рокировать в США — и забрать TEMU.",
        mood: "happy",
      },
      {
        text: "Если тренд не залетел — виноват алгоритм. Я талант во всём!",
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
    attackDesc: "Увеличивает ЧСВ команды на 200%. Иногда даже заслуженно.",
    details: [
      "Локация: шахматы + гитара",
      "Контент: TikTok-мотивация и биты",
      "Side quest: снять unboxing посылок BOSS",
    ],
  },
  {
    id: "squirtle",
    name: "Сквиртл",
    emoji: "💧",
    dexNo: "007",
    role: "Emotional Support & Chief Apologizer",
    color: "#5DADE2",
    bg: "#1A3344",
    dialogue: [
      {
        text: "Извините… я снова перепутал треки с TEMU и поставил не туда.",
        mood: "panic",
      },
      {
        text: "Если что-то упало — это я. Простите. Я дурак.",
        mood: "panic",
      },
      {
        text: "Держусь за голову, но я на связи. Emotional support online!",
        mood: "idle",
      },
      {
        text: "Псайдак, твоя идея бизнеса снова давит мне на HP…",
        mood: "panic",
      },
      {
        text: "С Днём Рождения! Торт кривой — зато не с Ali за 200₽. От души.",
        mood: "birthday",
        sfx: "fanfare",
      },
      {
        text: "BOSS, ты лучший. Даже когда я порчу треки — ты не кикаешь.",
        mood: "happy",
      },
      {
        text: "Уже три раза извинился за баги. Четвёртый — заранее. И за посылки тоже.",
        mood: "idle",
      },
      {
        text: "Ульта: снять с себя ответственность… ой. Извините.",
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
    attackDesc: "Автоматически снимает с себя любую ответственность. Даже за TEMU.",
    details: [
      "Форма: чуть кругленький (это мило)",
      "Эмоция: виноватый support tank",
      "Квест: не перепутать трек-номера BOSS",
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
        text: "*голова горит* Идея: перепродавать то, что BOSS случайно выкупил на TEMU.",
        mood: "panic",
      },
      {
        text: "Этот сайт — мой crit. Свайбкодил для BOSS. Ship it!",
        mood: "smug",
      },
      {
        text: "Dota 2 + вайбкодинг = AoE головная боль. Worth it.",
        mood: "idle",
      },
      {
        text: "Пикачу, проснись. Бизнес-план готов. Ну почти. На 47% как твоя корзина Ali.",
        mood: "happy",
      },
      {
        text: "С Днём Рождения, BOSS! Лучший пассивный доход — когда ты доволен.",
        mood: "birthday",
        sfx: "fanfare",
      },
      {
        text: "Сквиртл извиняется за мой код. Классика. GG WP.",
        mood: "smug",
      },
      {
        text: "Если сайт лагает — это не баг. Ладно, баг. Фикшу после катки.",
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
    attackDesc: "Головная боль у всех. Иногда — миллиарды. Иногда — ещё коробки.",
    details: [
      "Локация: ноутбук + Dota 2 + горящий код",
      "Статус: создатель этого сайта",
      "Мечта: пассивка на реселле TEMU-стока BOSS",
    ],
  },
];

export const getCharacter = (id: PokemonId) =>
  characters.find((c) => c.id === id)!;

export const TAYCAN_LINE: DialogueLine = {
  text: "*щёлкает дверь Taycan* Садись. Только убери две коробки с Ali с сиденья. И с Днём Рождения — поехали. 🚗",
  mood: "smug",
  sfx: "select",
};

export const PACKAGE_LINES: DialogueLine[] = [
  {
    text: "Пикачу: Это с TEMU. Не трогай — там мой новый «must have». Как и прошлые 46.",
    mood: "smug",
  },
  {
    text: "Пикачу: Ali Express пишет «вручено». Мне. В офис. Ещё до того, как я проснулся.",
    mood: "happy",
  },
];
