import type { Locale } from "@/i18n/config";

export type Dictionary = {
  brand: string;
  tagline: string;
  taglineLine1: string;
  taglineLine2: string;
  taglineSub: string;
  microcopy: string;
  nav: {
    buy: string;
    rent: string;
    sell: string;
    about: string;
    contacts: string;
    favorites: string;
    compare: string;
    guide: string;
    blog: string;
    privacy: string;
  };
  cta: {
    viewListings: string;
    sellWithUs: string;
    whatsapp: string;
    telegram: string;
    telegramSoon: string;
    applyViewing: string;
    send: string;
    reset: string;
    shortlist: string;
    compareAdd: string;
    compareRemove: string;
    share: string;
    copyLink: string;
    copied: string;
  };
  home: {
    featured: string;
    howTitle: string;
    howSteps: [string, string, string];
    areasTitle: string;
    ownersTitle: string;
    ownersText: string;
    demoNote: string;
    trustTitle: string;
  };
  catalog: {
    saleTitle: string;
    rentTitle: string;
    results: string;
    empty: string;
    emptyHint: string;
    filters: string;
    all: string;
    type: string;
    location: string;
    rooms: string;
    price: string;
    priceMin: string;
    priceMax: string;
    area: string;
    areaMin: string;
    areaMax: string;
    features: string;
    sort: string;
    sortNew: string;
    sortPriceAsc: string;
    sortPriceDesc: string;
    sortArea: string;
    loading: string;
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
    beach: string;
    minutes: string;
    reserved: string;
    sold: string;
    print: string;
    watchVideo: string;
    viewingTitle: string;
    viewingHint: string;
    autoReply: string;
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
    shootTitle: string;
    shootText: string;
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
    slot: string;
  };
  about: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
    valuesTitle: string;
    values: [string, string, string];
  };
  contacts: {
    title: string;
    subtitle: string;
    lookingTitle: string;
    replyNote: string;
  };
  favorites: {
    title: string;
    empty: string;
    sendShortlist: string;
  };
  compare: {
    title: string;
    empty: string;
    max: string;
    clear: string;
  };
  guide: {
    title: string;
    subtitle: string;
  };
  privacy: {
    title: string;
    updated: string;
    body: string[];
  };
  blog: {
    title: string;
    subtitle: string;
    read: string;
  };
  cookies: {
    text: string;
    accept: string;
    more: string;
  };
  notFound: {
    title: string;
    text: string;
    home: string;
  };
  currency: {
    label: string;
  };
  types: Record<string, string>;
  features: Record<string, string>;
  footer: {
    rights: string;
    demo: string;
    geo: string;
  };
};

const en: Dictionary = {
  brand: "Nomore Real Estate",
  tagline: "Homes by the sea. No more hassle.",
  taglineLine1: "Homes by the sea.",
  taglineLine2: "No more hassle.",
  taglineSub:
    "Buy, sell, and rent across Burgas region and Sunny Beach — clear listings, fast replies, modern media.",
  microcopy: "Clear listings. A simple process. Homes by the sea.",
  nav: {
    buy: "Buy",
    rent: "Rent",
    sell: "Sell with Nomore",
    about: "About",
    contacts: "Contacts",
    favorites: "Saved",
    compare: "Compare",
    guide: "Guide",
    blog: "Journal",
    privacy: "Privacy",
  },
  cta: {
    viewListings: "View listings",
    sellWithUs: "Sell with Nomore",
    whatsapp: "WhatsApp",
    telegram: "Telegram",
    telegramSoon: "Telegram soon",
    applyViewing: "Request a viewing",
    send: "Send via WhatsApp",
    reset: "Reset",
    shortlist: "Send shortlist",
    compareAdd: "Compare",
    compareRemove: "In compare",
    share: "Share",
    copyLink: "Copy link",
    copied: "Copied",
  },
  home: {
    featured: "Featured (demo)",
    howTitle: "How it works",
    howSteps: [
      "Tell us what you need — or list your place",
      "We shoot, publish, and filter real interest",
      "Viewings and deal support without the chaos",
    ],
    areasTitle: "Homes in the region",
    ownersTitle: "Own a property?",
    ownersText:
      "List with Nomore: pro photo & vertical video for our socials, then we handle the leads. Shooting is free — we work on a deal commission.",
    demoNote: "Catalog currently shows demo homes so you can feel the product.",
    trustTitle: "What clients say",
  },
  catalog: {
    saleTitle: "Buy",
    rentTitle: "Rent",
    results: "listings",
    empty: "Nothing matched.",
    emptyHint: "Reset filters or write us on WhatsApp — we’ll dig.",
    filters: "Filters",
    all: "All",
    type: "Type",
    location: "Area",
    rooms: "Rooms",
    price: "Price (EUR)",
    priceMin: "Min €",
    priceMax: "Max €",
    area: "Area m²",
    areaMin: "Min m²",
    areaMax: "Max m²",
    features: "Features",
    sort: "Sort",
    sortNew: "Newest",
    sortPriceAsc: "Price ↑",
    sortPriceDesc: "Price ↓",
    sortArea: "Largest",
    loading: "Loading listings…",
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
    beach: "To beach",
    minutes: "min",
    reserved: "Reserved",
    sold: "Sold",
    print: "Print",
    watchVideo: "Watch video",
    viewingTitle: "Pick a viewing slot",
    viewingHint: "We’ll confirm the exact time on WhatsApp.",
    autoReply:
      "Thanks — we’ll reply on WhatsApp usually within a few hours (same day on weekdays).",
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
    shootTitle: "How we shoot",
    shootText: "Light, honest frames — interiors, views, and a short vertical cut for social.",
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
    slot: "Preferred slot",
  },
  about: {
    title: "About Nomore",
    p1: "Nomore means two things: no more outdated realtor noise — and life by the sea (на морі).",
    p2: "We’re a modern agency for Burgas and the coast. Clear presentation, messenger-first communication, media that actually helps sell.",
    p3: "Site in four languages. Catalog built for phones. Owners get shooting without a separate media invoice.",
    valuesTitle: "How we work",
    values: [
      "Show the home honestly — big photos first",
      "Answer in chat, not endless call chains",
      "Earn when the deal closes — aligned with owners",
    ],
  },
  contacts: {
    title: "Contacts",
    subtitle: "Write anytime — we reply on WhatsApp.",
    lookingTitle: "Looking for a home?",
    replyNote:
      "Typical reply: same day on weekdays. Include budget, area, and buy vs rent.",
  },
  favorites: {
    title: "Saved homes",
    empty: "Nothing saved yet. Tap the heart on a listing.",
    sendShortlist: "Send shortlist on WhatsApp",
  },
  compare: {
    title: "Compare",
    empty: "Add up to 3 homes from the catalog.",
    max: "Compare is full (3). Remove one first.",
    clear: "Clear all",
  },
  guide: {
    title: "Coast guide & FAQ",
    subtitle: "Short answers for buyers, renters, and owners on the Burgas coast.",
  },
  privacy: {
    title: "Privacy, cookies & disclaimer",
    updated: "Updated July 2026",
    body: [
      "We collect contact details you send via forms or WhatsApp only to respond about property inquiries.",
      "Favorites, compare list, currency, and cookie consent are stored in your browser (localStorage).",
      "Demo listings are fictional previews and not real offers.",
      "We use essential cookies/local storage for preferences. Analytics may be added later; see this page for updates.",
      "Property info is provided in good faith; always verify documents with professionals before a deal.",
    ],
  },
  blog: {
    title: "Journal",
    subtitle: "Short notes on buying, selling, and living by the sea.",
    read: "Read",
  },
  cookies: {
    text: "We use local storage for language, currency, favorites, and consent. See Privacy.",
    accept: "OK",
    more: "Privacy",
  },
  notFound: {
    title: "Lost on the coast",
    text: "This page isn’t here. Back to homes — or write us on WhatsApp.",
    home: "Home",
  },
  currency: { label: "Currency" },
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
    geo: "Burgas region · Sunny Beach coast",
  },
};

const bg: Dictionary = {
  ...en,
  tagline: "Жилище край морето. Без излишното.",
  taglineLine1: "Жилище край морето.",
  taglineLine2: "Без излишното.",
  taglineSub:
    "Покупка, продажба и наем в Бургас и по крайбрежието — ясни обяви, бърз отговор, модерно медио.",
  microcopy: "Ясни имоти. Удобен процес. Жилище край морето.",
  nav: {
    buy: "Купи",
    rent: "Наем",
    sell: "Продай с Nomore",
    about: "За нас",
    contacts: "Контакти",
    favorites: "Запазени",
    compare: "Сравни",
    guide: "Гид",
    blog: "Журнал",
    privacy: "Поверителност",
  },
  cta: {
    ...en.cta,
    viewListings: "Виж имотите",
    sellWithUs: "Продай с Nomore",
    applyViewing: "Заяви оглед",
    send: "Изпрати във WhatsApp",
    reset: "Изчисти",
    shortlist: "Изпрати shortlist",
    compareAdd: "Сравни",
    compareRemove: "В сравнение",
    share: "Сподели",
    copyLink: "Копирай линк",
    copied: "Копирано",
    telegramSoon: "Telegram скоро",
  },
  home: {
    featured: "Избрани (демо)",
    howTitle: "Как работим",
    howSteps: [
      "Казваш какво търсиш — или даваш имота",
      "Заснемаме, публикуваме, филтрираме интереса",
      "Огледи и сделка без хаос",
    ],
    areasTitle: "Имоти в региона",
    ownersTitle: "Имаш имот?",
    ownersText:
      "Пусни го с Nomore: професионални фото и вертикално видео за нашите социални мрежи. Заснемането е без отделна такса — работим на комисиона от сделката.",
    demoNote: "Каталогът показва демо имоти, за да усетиш продукта.",
    trustTitle: "Какво казват клиентите",
  },
  catalog: {
    ...en.catalog,
    saleTitle: "Купи",
    rentTitle: "Наем",
    results: "имота",
    empty: "Няма съвпадения.",
    emptyHint: "Изчисти филтрите или пиши във WhatsApp.",
    filters: "Филтри",
    all: "Всички",
    type: "Тип",
    location: "Район",
    rooms: "Стаи",
    price: "Цена (EUR)",
    features: "Акценти",
    sort: "Подредба",
    sortNew: "Най-нови",
    sortPriceAsc: "Цена ↑",
    sortPriceDesc: "Цена ↓",
    sortArea: "Най-големи",
    loading: "Зареждане…",
  },
  listing: {
    ...en.listing,
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
    beach: "До плажа",
    minutes: "мин",
    reserved: "Резервиран",
    sold: "Продаден",
    print: "Печат",
    watchVideo: "Гледай видео",
    viewingTitle: "Избери слот за оглед",
    viewingHint: "Точния час потвърждаваме във WhatsApp.",
    autoReply:
      "Благодарим — обикновено отговаряме във WhatsApp до няколко часа (в работни дни).",
  },
  sell: {
    ...en.sell,
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
    shootTitle: "Как снимаме",
    shootText: "Светли, честни кадри — интериор, гледки и кратък вертикал за социалните мрежи.",
  },
  forms: {
    ...en.forms,
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
    slot: "Предпочитан слот",
  },
  about: {
    title: "За Nomore",
    p1: "Nomore означава две неща: no more остарял брокерски шум — и живот край морето (на морі).",
    p2: "Модерна агенция за Бургас и крайбрежието. Ясна презентация, комуникация в месинджър, медио което помага да се продаде.",
    p3: "Сайт на четири езика. Каталог за телефона. Собствениците получават заснемане без отделна фактура за медио.",
    valuesTitle: "Как работим",
    values: [
      "Показваме имота честно — първо големите снимки",
      "Отговаряме в чат, не в безкрайни обаждания",
      "Печелим когато има сделка — заедно със собственика",
    ],
  },
  contacts: {
    title: "Контакти",
    subtitle: "Пиши по всяко време — отговаряме във WhatsApp.",
    lookingTitle: "Търсиш дом?",
    replyNote:
      "Обикновено отговор в същия работен ден. Напиши бюджет, район и покупка/наем.",
  },
  favorites: {
    title: "Запазени имоти",
    empty: "Още няма запазени. Натисни сърцето на обява.",
    sendShortlist: "Изпрати shortlist във WhatsApp",
  },
  compare: {
    title: "Сравнение",
    empty: "Добави до 3 имота от каталога.",
    max: "Сравнението е пълно (3). Премахни един.",
    clear: "Изчисти всички",
  },
  guide: {
    title: "Гид и FAQ",
    subtitle: "Кратки отговори за купувачи, наематели и собственици на брега на Бургас.",
  },
  privacy: {
    title: "Поверителност, cookies и отказ от отговорност",
    updated: "Обновено юли 2026",
    body: [
      "Събираме контакти, които изпращате чрез форми или WhatsApp, само за да отговорим за имоти.",
      "Запазени, сравнение, валута и съгласие за cookies се пазят в браузъра (localStorage).",
      "Демо обявите са примерни и не са реални оферти.",
      "Използваме необходими cookies/local storage за настройки. Аналитика може да се добави по-късно.",
      "Информацията за имоти е добросъвестна; винаги проверявайте документите с професионалисти преди сделка.",
    ],
  },
  blog: {
    title: "Журнал",
    subtitle: "Кратки бележки за покупка, продажба и живот край морето.",
    read: "Чети",
  },
  cookies: {
    text: "Ползваме local storage за език, валута, запазени и съгласие. Виж Поверителност.",
    accept: "ОК",
    more: "Поверителност",
  },
  notFound: {
    title: "Изгубен на брега",
    text: "Тази страница я няма. Обратно към имотите — или пиши във WhatsApp.",
    home: "Начало",
  },
  currency: { label: "Валута" },
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
    geo: "Област Бургас · Слънчев бряг",
  },
};

const ru: Dictionary = {
  ...en,
  tagline: "Жильё у моря. Без лишнего.",
  taglineLine1: "Жильё у моря.",
  taglineLine2: "Без лишнего.",
  taglineSub:
    "Покупка, продажа и аренда в Бургасе и на побережье — понятные объявления, быстрый ответ, современная подача.",
  microcopy: "Понятные объекты. Удобный процесс. Жильё на берегу моря.",
  nav: {
    buy: "Купить",
    rent: "Аренда",
    sell: "Продать с Nomore",
    about: "О нас",
    contacts: "Контакты",
    favorites: "Избранное",
    compare: "Сравнение",
    guide: "Гид",
    blog: "Журнал",
    privacy: "Конфиденциальность",
  },
  cta: {
    ...en.cta,
    viewListings: "Смотреть объекты",
    sellWithUs: "Продать с Nomore",
    applyViewing: "Заявка на просмотр",
    send: "Отправить в WhatsApp",
    reset: "Сбросить",
    shortlist: "Отправить shortlist",
    compareAdd: "Сравнить",
    compareRemove: "В сравнении",
    share: "Поделиться",
    copyLink: "Копировать ссылку",
    copied: "Скопировано",
    telegramSoon: "Telegram скоро",
  },
  home: {
    featured: "Избранное (демо)",
    howTitle: "Как это работает",
    howSteps: [
      "Пишешь, что нужно — или отдаёшь объект",
      "Снимаем, публикуем, отсеиваем интерес",
      "Показы и сделка без хаоса",
    ],
    areasTitle: "Объекты в регионе",
    ownersTitle: "Есть объект?",
    ownersText:
      "С Nomore: профессиональные фото и вертикальное видео для наших соцсетей. Съёмка без отдельной оплаты — работаем за комиссию со сделки.",
    demoNote: "В каталоге демо-объекты, чтобы показать продукт.",
    trustTitle: "Что говорят клиенты",
  },
  catalog: {
    ...en.catalog,
    saleTitle: "Купить",
    rentTitle: "Аренда",
    results: "объектов",
    empty: "Ничего не нашли.",
    emptyHint: "Сбросьте фильтры или напишите в WhatsApp.",
    filters: "Фильтры",
    all: "Все",
    type: "Тип",
    location: "Район",
    rooms: "Комнаты",
    price: "Цена (EUR)",
    features: "Особенности",
    sort: "Сортировка",
    sortNew: "Новые",
    sortPriceAsc: "Цена ↑",
    sortPriceDesc: "Цена ↓",
    sortArea: "Площадь",
    loading: "Загрузка…",
  },
  listing: {
    ...en.listing,
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
    beach: "До пляжа",
    minutes: "мин",
    reserved: "Резерв",
    sold: "Продано",
    print: "Печать",
    watchVideo: "Смотреть видео",
    viewingTitle: "Выберите слот показа",
    viewingHint: "Точное время подтвердим в WhatsApp.",
    autoReply:
      "Спасибо — обычно отвечаем в WhatsApp в течение нескольких часов (в будни).",
  },
  sell: {
    ...en.sell,
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
    shootTitle: "Как снимаем",
    shootText: "Светлые честные кадры — интерьер, виды и короткий вертикал для соцсетей.",
  },
  forms: {
    ...en.forms,
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
    slot: "Удобный слот",
  },
  about: {
    title: "О Nomore",
    p1: "Nomore — это два смысла: no more устаревшего риелторского шума и жизнь у моря (на морі).",
    p2: "Современное агентство для Бургаса и побережья. Понятная подача, общение в мессенджере, медиа которое помогает продать.",
    p3: "Сайт на четырёх языках. Каталог для телефона. Собственникам — съёмка без отдельного счёта за медиа.",
    valuesTitle: "Как работаем",
    values: [
      "Показываем дом честно — сначала большие фото",
      "Отвечаем в чате, не в бесконечных звонках",
      "Зарабатываем, когда сделка закрыта — вместе с собственником",
    ],
  },
  contacts: {
    title: "Контакты",
    subtitle: "Пишите в любое время — отвечаем в WhatsApp.",
    lookingTitle: "Ищете жильё?",
    replyNote:
      "Обычно ответ в тот же будний день. Укажите бюджет, район и покупка/аренда.",
  },
  favorites: {
    title: "Избранное",
    empty: "Пока пусто. Нажмите сердце на объекте.",
    sendShortlist: "Отправить shortlist в WhatsApp",
  },
  compare: {
    title: "Сравнение",
    empty: "Добавьте до 3 объектов из каталога.",
    max: "Сравнение полное (3). Уберите один.",
    clear: "Очистить",
  },
  guide: {
    title: "Гид и FAQ",
    subtitle: "Короткие ответы для покупателей, арендаторов и собственников на побережье Бургаса.",
  },
  privacy: {
    title: "Конфиденциальность, cookies и дисклеймер",
    updated: "Обновлено июль 2026",
    body: [
      "Мы обрабатываем контакты из форм или WhatsApp только для ответа по недвижимости.",
      "Избранное, сравнение, валюта и согласие на cookies хранятся в браузере (localStorage).",
      "Демо-объявления — превью, не реальные оферты.",
      "Используем необходимые cookies/local storage для настроек. Аналитика может появиться позже.",
      "Информация об объектах добросовестная; документы всегда проверяйте со специалистами перед сделкой.",
    ],
  },
  blog: {
    title: "Журнал",
    subtitle: "Короткие заметки о покупке, продаже и жизни у моря.",
    read: "Читать",
  },
  cookies: {
    text: "Мы используем local storage для языка, валюты, избранного и согласия. См. Конфиденциальность.",
    accept: "OK",
    more: "Конфиденциальность",
  },
  notFound: {
    title: "Заблудились на берегу",
    text: "Страницы нет. На главную — или напишите в WhatsApp.",
    home: "На главную",
  },
  currency: { label: "Валюта" },
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
    geo: "Область Бургас · Солнечный Берег",
  },
};

const ua: Dictionary = {
  ...en,
  tagline: "Житло на морі. Без зайвого.",
  taglineLine1: "Житло на морі.",
  taglineLine2: "Без зайвого.",
  taglineSub:
    "Купівля, продаж і оренда в Бургасі та на узбережжі — зрозумілі оголошення, швидка відповідь, сучасна подача.",
  microcopy: "Зрозумілі об’єкти. Зручний процес. Житло на березі моря.",
  nav: {
    buy: "Купити",
    rent: "Оренда",
    sell: "Продати з Nomore",
    about: "Про нас",
    contacts: "Контакти",
    favorites: "Збережене",
    compare: "Порівняння",
    guide: "Гід",
    blog: "Журнал",
    privacy: "Конфіденційність",
  },
  cta: {
    ...en.cta,
    viewListings: "Дивитись об’єкти",
    sellWithUs: "Продати з Nomore",
    applyViewing: "Заявка на перегляд",
    send: "Надіслати в WhatsApp",
    reset: "Скинути",
    shortlist: "Надіслати shortlist",
    compareAdd: "Порівняти",
    compareRemove: "У порівнянні",
    share: "Поділитись",
    copyLink: "Копіювати лінк",
    copied: "Скопійовано",
    telegramSoon: "Telegram скоро",
  },
  home: {
    featured: "Обране (демо)",
    howTitle: "Як це працює",
    howSteps: [
      "Пишеш, що потрібно — або віддаєш об’єкт",
      "Знімаємо, публікуємо, відсіюємо інтерес",
      "Покази й угода без хаосу",
    ],
    areasTitle: "Об’єкти в регіоні",
    ownersTitle: "Є об’єкт?",
    ownersText:
      "З Nomore: професійні фото та вертикальне відео для наших соцмереж. Зйомка без окремої оплати — працюємо за комісією з угоди.",
    demoNote: "У каталозі демо-об’єкти, щоб показати продукт.",
    trustTitle: "Що кажуть клієнти",
  },
  catalog: {
    ...en.catalog,
    saleTitle: "Купити",
    rentTitle: "Оренда",
    results: "об’єктів",
    empty: "Нічого не знайшли.",
    emptyHint: "Скиньте фільтри або напишіть у WhatsApp.",
    filters: "Фільтри",
    all: "Усі",
    type: "Тип",
    location: "Район",
    rooms: "Кімнати",
    price: "Ціна (EUR)",
    features: "Особливості",
    sort: "Сортування",
    sortNew: "Нові",
    sortPriceAsc: "Ціна ↑",
    sortPriceDesc: "Ціна ↓",
    sortArea: "Площа",
    loading: "Завантаження…",
  },
  listing: {
    ...en.listing,
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
    beach: "До пляжу",
    minutes: "хв",
    reserved: "Резерв",
    sold: "Продано",
    print: "Друк",
    watchVideo: "Дивитись відео",
    viewingTitle: "Оберіть слот перегляду",
    viewingHint: "Точний час підтвердимо в WhatsApp.",
    autoReply:
      "Дякуємо — зазвичай відповідаємо в WhatsApp протягом кількох годин (у будні).",
  },
  sell: {
    ...en.sell,
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
    shootTitle: "Як знімаємо",
    shootText: "Світлі чесні кадри — інтер’єр, види й короткий вертикал для соцмереж.",
  },
  forms: {
    ...en.forms,
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
    slot: "Зручний слот",
  },
  about: {
    title: "Про Nomore",
    p1: "Nomore — два сенси: no more застарілого ріелторського шуму і життя на морі.",
    p2: "Сучасне агентство для Бургаса та узбережжя. Зрозуміла подача, спілкування в месенджері, медіа яке допомагає продати.",
    p3: "Сайт чотирма мовами. Каталог для телефона. Власникам — зйомка без окремого рахунку за медіа.",
    valuesTitle: "Як працюємо",
    values: [
      "Показуємо дім чесно — спочатку великі фото",
      "Відповідаємо в чаті, не в нескінченних дзвінках",
      "Заробляємо, коли угода закрита — разом із власником",
    ],
  },
  contacts: {
    title: "Контакти",
    subtitle: "Пишіть будь-коли — відповідаємо в WhatsApp.",
    lookingTitle: "Шукаєте житло?",
    replyNote:
      "Зазвичай відповідь того ж буднього дня. Вкажіть бюджет, район і купівля/оренда.",
  },
  favorites: {
    title: "Збережене",
    empty: "Поки порожньо. Натисніть серце на об’єкті.",
    sendShortlist: "Надіслати shortlist у WhatsApp",
  },
  compare: {
    title: "Порівняння",
    empty: "Додайте до 3 об’єктів із каталогу.",
    max: "Порівняння повне (3). Приберіть один.",
    clear: "Очистити",
  },
  guide: {
    title: "Гід і FAQ",
    subtitle: "Короткі відповіді для покупців, орендарів і власників на узбережжі Бургаса.",
  },
  privacy: {
    title: "Конфіденційність, cookies і дисклеймер",
    updated: "Оновлено липень 2026",
    body: [
      "Ми обробляємо контакти з форм або WhatsApp лише щоб відповісти щодо нерухомості.",
      "Збережене, порівняння, валюта і згода на cookies зберігаються в браузері (localStorage).",
      "Демо-оголошення — прев’ю, не реальні оферти.",
      "Використовуємо необхідні cookies/local storage для налаштувань. Аналітика може з’явитися пізніше.",
      "Інформація про об’єкти добросовісна; документи завжди перевіряйте з фахівцями перед угодою.",
    ],
  },
  blog: {
    title: "Журнал",
    subtitle: "Короткі нотатки про купівлю, продаж і життя на морі.",
    read: "Читати",
  },
  cookies: {
    text: "Використовуємо local storage для мови, валюти, збереженого і згоди. Див. Конфіденційність.",
    accept: "OK",
    more: "Конфіденційність",
  },
  notFound: {
    title: "Загубились на березі",
    text: "Сторінки немає. На головну — або напишіть у WhatsApp.",
    home: "На головну",
  },
  currency: { label: "Валюта" },
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
    geo: "Область Бургас · Сонячний Берег",
  },
};

const maps: Record<Locale, Dictionary> = { en, bg, ru, ua };

export function getDictionary(locale: Locale): Dictionary {
  return maps[locale] ?? en;
}
