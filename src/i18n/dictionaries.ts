import type { Locale } from "@/i18n/config";

export type Dictionary = {
  brand: string;
  tagline: string;
  taglineSub: string;
  nav: {
    buy: string;
    rent: string;
    sell: string;
    about: string;
    contacts: string;
    favorites: string;
  };
  cta: {
    viewListings: string;
    sellWithUs: string;
    whatsapp: string;
    applyViewing: string;
    send: string;
    reset: string;
  };
  home: {
    featured: string;
    howTitle: string;
    howSteps: [string, string, string];
    areasTitle: string;
    ownersTitle: string;
    ownersText: string;
    demoNote: string;
  };
  catalog: {
    saleTitle: string;
    rentTitle: string;
    results: string;
    empty: string;
    filters: string;
    all: string;
    type: string;
    location: string;
    rooms: string;
    sortNew: string;
  };
  listing: {
    demo: string;
    sale: string;
    rent: string;
    video: string;
    month: string;
    area: string;
    floor: string;
    act: string;
    similar: string;
    features: string;
    share: string;
  };
  sell: {
    title: string;
    subtitle: string;
    modelB: string;
    includesTitle: string;
    includes: string[];
    stepsTitle: string;
    steps: string[];
    formTitle: string;
  };
  forms: {
    name: string;
    contact: string;
    dealSell: string;
    dealRent: string;
    type: string;
    location: string;
    budget: string;
    comment: string;
    description: string;
    needShoot: string;
    success: string;
  };
  about: {
    title: string;
    p1: string;
    p2: string;
  };
  contacts: {
    title: string;
    subtitle: string;
    lookingTitle: string;
  };
  types: Record<string, string>;
  features: Record<string, string>;
  footer: {
    rights: string;
    demo: string;
  };
};

const en: Dictionary = {
  brand: "Nomore Real Estate",
  tagline: "Homes by the sea. No more hassle.",
  taglineSub:
    "Buy, sell, and rent across Burgas region and Sunny Beach — clear listings, fast replies, modern media.",
  nav: {
    buy: "Buy",
    rent: "Rent",
    sell: "Sell with Nomore",
    about: "About",
    contacts: "Contacts",
    favorites: "Saved",
  },
  cta: {
    viewListings: "View listings",
    sellWithUs: "Sell with Nomore",
    whatsapp: "WhatsApp",
    applyViewing: "Request a viewing",
    send: "Send via WhatsApp",
    reset: "Reset",
  },
  home: {
    featured: "Featured (demo)",
    howTitle: "How it works",
    howSteps: [
      "Tell us what you need — or list your place",
      "We shoot, publish, and filter real interest",
      "Viewings and deal support without the chaos",
    ],
    areasTitle: "Where we work",
    ownersTitle: "Own a property?",
    ownersText:
      "List with Nomore: pro photo & vertical video for our socials, then we handle the leads. Shooting is free — we work on a deal commission.",
    demoNote: "Catalog currently shows demo homes so you can feel the product.",
  },
  catalog: {
    saleTitle: "Buy",
    rentTitle: "Rent",
    results: "listings",
    empty: "Nothing matched. Write us on WhatsApp — we’ll dig.",
    filters: "Filters",
    all: "All",
    type: "Type",
    location: "Area",
    rooms: "Rooms",
    sortNew: "Newest",
  },
  listing: {
    demo: "Demo",
    sale: "Sale",
    rent: "Rent",
    video: "Video",
    month: "/ month",
    area: "Area",
    floor: "Floor",
    act: "Act",
    similar: "Similar",
    features: "Highlights",
    share: "Share",
  },
  sell: {
    title: "Sell with Nomore",
    subtitle: "Want a faster, cleaner sale? We’ll shoot it properly and push it to our audience.",
    modelB:
      "Professional photo & video are included when you work with us — no separate shooting fee. We earn on a commission from the deal.",
    includesTitle: "What you get",
    includes: [
      "On-site photo session (interior / exterior / views)",
      "Short vertical video for Reels & TikTok",
      "Listing on the Nomore site",
      "Posts on our social channels",
      "Lead handling via WhatsApp",
    ],
    stepsTitle: "Process",
    steps: [
      "Send a quick request",
      "We align on details in WhatsApp",
      "Shoot day",
      "Publish & start viewings",
    ],
    formTitle: "Quick sale request",
  },
  forms: {
    name: "Name",
    contact: "Phone / WhatsApp",
    dealSell: "Sell",
    dealRent: "Rent out",
    type: "Property type",
    location: "Location",
    budget: "Budget (EUR)",
    comment: "Comment",
    description: "Short description",
    needShoot: "I need photo & video shooting",
    success: "Opening WhatsApp with your request…",
  },
  about: {
    title: "About Nomore",
    p1: "Nomore means two things: no more outdated realtor noise — and life by the sea (на морі).",
    p2: "We’re a modern agency for Burgas and the coast. Clear presentation, messenger-first communication, media that actually helps sell.",
  },
  contacts: {
    title: "Contacts",
    subtitle: "Write anytime — we reply on WhatsApp.",
    lookingTitle: "Looking for a home?",
  },
  types: {
    apartment: "Apartment",
    house: "House",
    villa: "Villa",
    studio: "Studio",
  },
  features: {
    "sea-view": "Sea view",
    parking: "Parking",
    furnished: "Furnished",
    elevator: "Elevator",
    pool: "Pool",
    act16: "Act 16",
  },
  footer: {
    rights: "All rights reserved.",
    demo: "Demo listings for preview.",
  },
};

const bg: Dictionary = {
  ...en,
  tagline: "Жилище край морето. Без излишното.",
  taglineSub:
    "Покупка, продажба и наем в Бургас и по крайбрежието — ясни обяви, бърз отговор, модерно медио.",
  nav: {
    buy: "Купи",
    rent: "Наем",
    sell: "Продай с Nomore",
    about: "За нас",
    contacts: "Контакти",
    favorites: "Запазени",
  },
  cta: {
    viewListings: "Виж имотите",
    sellWithUs: "Продай с Nomore",
    whatsapp: "WhatsApp",
    applyViewing: "Заяви оглед",
    send: "Изпрати във WhatsApp",
    reset: "Изчисти",
  },
  home: {
    featured: "Избрани (демо)",
    howTitle: "Как работим",
    howSteps: [
      "Казваш какво търсиш — или даваш имота",
      "Заснемаме, публикуваме, филтрираме интереса",
      "Огледи и сделка без хаос",
    ],
    areasTitle: "Къде работим",
    ownersTitle: "Имаш имот?",
    ownersText:
      "Пусни го с Nomore: професионални фото и вертикално видео за нашите социални мрежи. Заснемането е без отделна такса — работим на комисиона от сделката.",
    demoNote: "Каталогът показва демо имоти, за да усетиш продукта.",
  },
  catalog: {
    saleTitle: "Купи",
    rentTitle: "Наем",
    results: "имота",
    empty: "Няма съвпадения. Пиши ни във WhatsApp.",
    filters: "Филтри",
    all: "Всички",
    type: "Тип",
    location: "Район",
    rooms: "Стаи",
    sortNew: "Най-нови",
  },
  listing: {
    demo: "Демо",
    sale: "Продажба",
    rent: "Наем",
    video: "Видео",
    month: "/ месец",
    area: "Площ",
    floor: "Етаж",
    act: "Акт",
    similar: "Подобни",
    features: "Акценти",
    share: "Сподели",
  },
  sell: {
    title: "Продай с Nomore",
    subtitle: "Искаш по-чиста и бърза продажба? Заснемаме както трябва и пускаме към аудиторията ни.",
    modelB:
      "Професионалните фото и видео са включени при работа с нас — без отделна такса за заснемане. Печелим комисиона от сделката.",
    includesTitle: "Какво получаваш",
    includes: [
      "Фотосесия на място",
      "Кратко вертикално видео за Reels & TikTok",
      "Обява в сайта Nomore",
      "Публикации в нашите социални мрежи",
      "Обработка на запитвания във WhatsApp",
    ],
    stepsTitle: "Стъпки",
    steps: [
      "Кратка заявка",
      "Уговаряме детайли във WhatsApp",
      "Ден на заснемане",
      "Публикация и огледи",
    ],
    formTitle: "Заявка за бърза продажба",
  },
  forms: {
    name: "Име",
    contact: "Телефон / WhatsApp",
    dealSell: "Продажба",
    dealRent: "Наем",
    type: "Тип имот",
    location: "Локация",
    budget: "Бюджет (EUR)",
    comment: "Коментар",
    description: "Кратко описание",
    needShoot: "Искам фото и видео заснемане",
    success: "Отваряме WhatsApp със заявката…",
  },
  about: {
    title: "За Nomore",
    p1: "Nomore означава две неща: no more остарял брокерски шум — и живот край морето (на морі).",
    p2: "Модерна агенция за Бургас и крайбрежието. Ясна презентация, комуникация в месинджър, медио което помага да се продаде.",
  },
  contacts: {
    title: "Контакти",
    subtitle: "Пиши по всяко време — отговаряме във WhatsApp.",
    lookingTitle: "Търсиш дом?",
  },
  types: {
    apartment: "Апартамент",
    house: "Къща",
    villa: "Вила",
    studio: "Студио",
  },
  features: {
    "sea-view": "Морски изглед",
    parking: "Паркинг",
    furnished: "Обзаведен",
    elevator: "Асансьор",
    pool: "Басейн",
    act16: "Акт 16",
  },
  footer: {
    rights: "Всички права запазени.",
    demo: "Демо обяви за преглед.",
  },
};

const ru: Dictionary = {
  ...en,
  tagline: "Жильё у моря. Без лишнего.",
  taglineSub:
    "Покупка, продажа и аренда в Бургасе и на побережье — понятные объявления, быстрый ответ, современная подача.",
  nav: {
    buy: "Купить",
    rent: "Аренда",
    sell: "Продать с Nomore",
    about: "О нас",
    contacts: "Контакты",
    favorites: "Избранное",
  },
  cta: {
    viewListings: "Смотреть объекты",
    sellWithUs: "Продать с Nomore",
    whatsapp: "WhatsApp",
    applyViewing: "Заявка на просмотр",
    send: "Отправить в WhatsApp",
    reset: "Сбросить",
  },
  home: {
    featured: "Избранное (демо)",
    howTitle: "Как это работает",
    howSteps: [
      "Пишешь, что нужно — или отдаёшь объект",
      "Снимаем, публикуем, отсеиваем интерес",
      "Показы и сделка без хаоса",
    ],
    areasTitle: "Где работаем",
    ownersTitle: "Есть объект?",
    ownersText:
      "С Nomore: профессиональные фото и вертикальное видео для наших соцсетей. Съёмка без отдельной оплаты — работаем за комиссию со сделки.",
    demoNote: "В каталоге демо-объекты, чтобы показать продукт.",
  },
  catalog: {
    saleTitle: "Купить",
    rentTitle: "Аренда",
    results: "объектов",
    empty: "Ничего не нашли. Напишите в WhatsApp — подберём.",
    filters: "Фильтры",
    all: "Все",
    type: "Тип",
    location: "Район",
    rooms: "Комнаты",
    sortNew: "Новые",
  },
  listing: {
    demo: "Демо",
    sale: "Продажа",
    rent: "Аренда",
    video: "Видео",
    month: "/ мес",
    area: "Площадь",
    floor: "Этаж",
    act: "Акт",
    similar: "Похожие",
    features: "Особенности",
    share: "Поделиться",
  },
  sell: {
    title: "Продать с Nomore",
    subtitle: "Хотите продать чище и быстрее? Снимем как надо и покажем нашей аудитории.",
    modelB:
      "Проф. фото и видео включены при работе с нами — без отдельной платы за съёмку. Мы зарабатываем комиссию со сделки.",
    includesTitle: "Что входит",
    includes: [
      "Фотосессия на объекте",
      "Короткое вертикальное видео для Reels & TikTok",
      "Карточка на сайте Nomore",
      "Публикации в наших соцсетях",
      "Обработка заявок в WhatsApp",
    ],
    stepsTitle: "Шаги",
    steps: [
      "Короткая заявка",
      "Уточняем детали в WhatsApp",
      "День съёмки",
      "Публикация и показы",
    ],
    formTitle: "Заявка на быструю продажу",
  },
  forms: {
    name: "Имя",
    contact: "Телефон / WhatsApp",
    dealSell: "Продать",
    dealRent: "Сдать",
    type: "Тип объекта",
    location: "Локация",
    budget: "Бюджет (EUR)",
    comment: "Комментарий",
    description: "Короткое описание",
    needShoot: "Нужна фото- и видеосъёмка",
    success: "Открываем WhatsApp с заявкой…",
  },
  about: {
    title: "О Nomore",
    p1: "Nomore — это два смысла: no more устаревшего риелторского шума и жизнь у моря (на морі).",
    p2: "Современное агентство для Бургаса и побережья. Понятная подача, общение в мессенджере, медиа которое помогает продать.",
  },
  contacts: {
    title: "Контакты",
    subtitle: "Пишите в любое время — отвечаем в WhatsApp.",
    lookingTitle: "Ищете жильё?",
  },
  types: {
    apartment: "Квартира",
    house: "Дом",
    villa: "Вилла",
    studio: "Студия",
  },
  features: {
    "sea-view": "Вид на море",
    parking: "Паркинг",
    furnished: "С мебелью",
    elevator: "Лифт",
    pool: "Бассейн",
    act16: "Акт 16",
  },
  footer: {
    rights: "Все права защищены.",
    demo: "Демо-объявления для превью.",
  },
};

const ua: Dictionary = {
  ...en,
  tagline: "Житло на морі. Без зайвого.",
  taglineSub:
    "Купівля, продаж і оренда в Бургасі та на узбережжі — зрозумілі оголошення, швидка відповідь, сучасна подача.",
  nav: {
    buy: "Купити",
    rent: "Оренда",
    sell: "Продати з Nomore",
    about: "Про нас",
    contacts: "Контакти",
    favorites: "Збережене",
  },
  cta: {
    viewListings: "Дивитись об’єкти",
    sellWithUs: "Продати з Nomore",
    whatsapp: "WhatsApp",
    applyViewing: "Заявка на перегляд",
    send: "Надіслати в WhatsApp",
    reset: "Скинути",
  },
  home: {
    featured: "Обране (демо)",
    howTitle: "Як це працює",
    howSteps: [
      "Пишеш, що потрібно — або віддаєш об’єкт",
      "Знімаємо, публікуємо, відсіюємо інтерес",
      "Покази й угода без хаосу",
    ],
    areasTitle: "Де працюємо",
    ownersTitle: "Є об’єкт?",
    ownersText:
      "З Nomore: професійні фото та вертикальне відео для наших соцмереж. Зйомка без окремої оплати — працюємо за комісією з угоди.",
    demoNote: "У каталозі демо-об’єкти, щоб показати продукт.",
  },
  catalog: {
    saleTitle: "Купити",
    rentTitle: "Оренда",
    results: "об’єктів",
    empty: "Нічого не знайшли. Напишіть у WhatsApp — підберемо.",
    filters: "Фільтри",
    all: "Усі",
    type: "Тип",
    location: "Район",
    rooms: "Кімнати",
    sortNew: "Нові",
  },
  listing: {
    demo: "Демо",
    sale: "Продаж",
    rent: "Оренда",
    video: "Відео",
    month: "/ міс",
    area: "Площа",
    floor: "Поверх",
    act: "Акт",
    similar: "Схожі",
    features: "Особливості",
    share: "Поділитись",
  },
  sell: {
    title: "Продати з Nomore",
    subtitle: "Хочете продати чистіше й швидше? Знімемо як треба і покажемо аудиторії.",
    modelB:
      "Проф. фото та відео включені при роботі з нами — без окремої плати за зйомку. Заробляємо комісію з угоди.",
    includesTitle: "Що входить",
    includes: [
      "Фотосесія на об’єкті",
      "Коротке вертикальне відео для Reels & TikTok",
      "Картка на сайті Nomore",
      "Публікації в наших соцмережах",
      "Обробка заявок у WhatsApp",
    ],
    stepsTitle: "Кроки",
    steps: [
      "Коротка заявка",
      "Узгоджуємо деталі в WhatsApp",
      "День зйомки",
      "Публікація і покази",
    ],
    formTitle: "Заявка на швидкий продаж",
  },
  forms: {
    name: "Ім’я",
    contact: "Телефон / WhatsApp",
    dealSell: "Продати",
    dealRent: "Здати",
    type: "Тип об’єкта",
    location: "Локація",
    budget: "Бюджет (EUR)",
    comment: "Коментар",
    description: "Короткий опис",
    needShoot: "Потрібна фото- та відеозйомка",
    success: "Відкриваємо WhatsApp із заявкою…",
  },
  about: {
    title: "Про Nomore",
    p1: "Nomore — два сенси: no more застарілого ріелторського шуму і життя на морі.",
    p2: "Сучасне агентство для Бургаса та узбережжя. Зрозуміла подача, спілкування в месенджері, медіа яке допомагає продати.",
  },
  contacts: {
    title: "Контакти",
    subtitle: "Пишіть будь-коли — відповідаємо в WhatsApp.",
    lookingTitle: "Шукаєте житло?",
  },
  types: {
    apartment: "Квартира",
    house: "Будинок",
    villa: "Вілла",
    studio: "Студія",
  },
  features: {
    "sea-view": "Вид на море",
    parking: "Паркінг",
    furnished: "З меблями",
    elevator: "Ліфт",
    pool: "Басейн",
    act16: "Акт 16",
  },
  footer: {
    rights: "Усі права захищено.",
    demo: "Демо-оголошення для прев’ю.",
  },
};

const maps: Record<Locale, Dictionary> = { en, bg, ru, ua };

export function getDictionary(locale: Locale): Dictionary {
  return maps[locale] ?? en;
}
