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
    services: string;
    about: string;
    contacts: string;
    favorites: string;
    compare: string;
    guide: string;
    blog: string;
    privacy: string;
    menu: string;
    closeMenu: string;
  };
  cta: {
    viewListings: string;
    sellWithUs: string;
    whatsapp: string;
    telegram: string;
    telegramSoon: string;
    viber: string;
    applyViewing: string;
    send: string;
    reset: string;
    shortlist: string;
    compareAdd: string;
    compareRemove: string;
    share: string;
    copyLink: string;
    copied: string;
    leaveReview: string;
    getMatch: string;
    showResults: string;
  };
  home: {
    featured: string;
    featuredHint: string;
    howTitle: string;
    howSteps: [string, string, string];
    areasTitle: string;
    ownersTitle: string;
    ownersText: string;
    trustTitle: string;
    searchTitle: string;
    guideTitle: string;
    guideText: string;
    guideInstagram: string;
    guideWrite: string;
    /** Soft note: we search beyond the public catalog */
    approachNote: string;
  };
  search: {
    title: string;
    subtitle: string;
    submit: string;
    anyArea: string;
    budgetHint: string;
    commentHint: string;
    defaultNote: string;
  };
  review: {
    title: string;
    subtitle: string;
    stars: string;
    description: string;
    submit: string;
    hint: string;
    optional: string;
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
    viewList: string;
    viewMap: string;
    openListing: string;
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
    viewingMode: string;
    viewingOffline: string;
    viewingOnline: string;
    viewingOfflineHint: string;
    viewingOnlineHint: string;
    onlineViewing: string;
    autoReply: string;
  };
  passport: {
    title: string;
    subtitle: string;
    yearBuilt: string;
    condition: string;
    heating: string;
    parking: string;
    furniture: string;
    maintenance: string;
    maintenanceMonth: string;
    maintenanceNone: string;
    docs: string;
    act: string;
    conditionValues: {
      new: string;
      renovated: string;
      good: string;
      "needs-work": string;
    };
    heatingValues: {
      central: string;
      electric: string;
      ac: string;
      none: string;
    };
    parkingValues: {
      garage: string;
      spot: string;
      street: string;
      none: string;
    };
    furnitureValues: {
      furnished: string;
      partial: string;
      unfurnished: string;
    };
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
    deal: string;
    dealSell: string;
    dealRent: string;
    type: string;
    location: string;
    budget: string;
    comment: string;
    description: string;
    needShoot: string;
    success: string;
    error: string;
    invalidName: string;
    invalidContact: string;
    sending: string;
    replyNote: string;
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
  agent: {
    role: string;
    bio: string;
  };
  services: {
    title: string;
    subtitle: string;
    request: string;
    linkLabel: string;
    invalidLink: string;
    note: string;
    homeTitle: string;
    homeText: string;
    homeCta: string;
    consult: { title: string; text: string; price: string };
    audit: { title: string; text: string; price: string };
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
    costsTeaser: string;
    costsCta: string;
  };
  costs: {
    title: string;
    subtitle: string;
    price: string;
    maintenance: string;
    closing: string;
    cashAtClose: string;
    firstYear: string;
    commissionNote: string;
    disclaimer: string;
    ctaAudit: string;
    ctaChat: string;
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
    dockHint: string;
  };
};

const en: Dictionary = {
  brand: "Nomore Real Estate",
  tagline: "Homes by the sea. No more hassle.",
  taglineLine1: "Homes by the sea.",
  taglineLine2: "No more hassle.",
  taglineSub:
    "We shortlist homes on the Burgas coast for you — consult, review a listing, or ask for a personal match. Catalog is optional.",
  microcopy: "Homes by the sea. Clear answers. No more hassle.",
  nav: {
    buy: "Buy",
    rent: "Rent",
    sell: "Sell with Nomore",
    services: "Services",
    about: "About",
    contacts: "Contacts",
    favorites: "Saved",
    compare: "Compare",
    guide: "Guide",
    blog: "Journal",
    privacy: "Privacy",
    menu: "Menu",
    closeMenu: "Close menu",
  },
  cta: {
    viewListings: "View homes",
    sellWithUs: "Sell with Nomore",
    whatsapp: "WhatsApp",
    telegram: "Telegram",
    telegramSoon: "Telegram soon",
    viber: "Viber",
    applyViewing: "Request a viewing",
    send: "Send",
    reset: "Reset",
    shortlist: "Send selection",
    compareAdd: "Compare",
    compareRemove: "In compare",
    share: "Share",
    copyLink: "Copy link",
    copied: "Copied",
    leaveReview: "Leave a review",
    getMatch: "Get a shortlist",
    showResults: "Show homes",
  },
  home: {
    featured: "Example homes",
    featuredHint:
      "Sample stock while we build the live catalog — for a real match, send a search request or book a consult.",
    howTitle: "How it works",
    howSteps: [
      "Tell us budget, area, and timing — form or messenger",
      "We shortlist what fits from the market, not only the site",
      "Viewings (on-site or online) and calm deal support",
    ],
    areasTitle: "Where we work",
    ownersTitle: "Own a property?",
    ownersText:
      "List with Nomore: pro photo & vertical video for our socials, then we handle the leads. Shooting is free — we work on a deal commission.",
    trustTitle: "What clients say",
    searchTitle: "Quick search",
    guideTitle: "Who leads the shortlist",
    guideText:
      "I’m on the Burgas coast and help with buy, rent, and sale — without pushing complexes that look nice in ads but hurt later with fees or winter costs. Clear options, real checks on the ground, answers in chat.",
    guideInstagram: "My Instagram",
    guideWrite: "Write to me",
    approachNote:
      "We are not a warehouse of 100 ads. You describe the need — we search and filter on the coast.",
  },
  search: {
    title: "Find a home for me",
    subtitle:
      "Budget, area, buy or rent — we reply with a shortlist in chat. No catalog required.",
    submit: "Send search request",
    anyArea: "Any coast area",
    budgetHint: "e.g. up to €120,000",
    commentHint: "Rooms, sea distance, for living or rent…",
    defaultNote: "Personal shortlist request",
  },
  review: {
    title: "Leave a review",
    subtitle: "Stars and a short note — sent to us in WhatsApp.",
    stars: "Your rating",
    description: "Your review",
    submit: "Send review via WhatsApp",
    hint: "We moderate before publishing — nothing goes live automatically.",
    optional: "optional",
  },
  catalog: {
    saleTitle: "Buy",
    rentTitle: "Rent",
    results: "listings",
    empty: "Nothing matched.",
    emptyHint: "Reset filters or write us — we’ll dig.",
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
    viewList: "List",
    viewMap: "Map",
    openListing: "Open listing →",
  },
  listing: {
    demo: "",
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
    viewingHint: "We’ll confirm the exact time in chat.",
    viewingMode: "Viewing type",
    viewingOffline: "On-site",
    viewingOnline: "Online",
    viewingOfflineHint: "On-site visit — we’ll confirm the exact time in chat.",
    viewingOnlineHint: "Video call walkthrough — we’ll send the link after confirming the slot.",
    onlineViewing: "Online viewing",
    autoReply:
      "Thanks — we usually reply within a few hours (same day on weekdays).",
  },
  passport: {
    title: "Listing passport",
    subtitle: "Clear facts before you book a viewing — no pushy extras.",
    yearBuilt: "Year built",
    condition: "Condition",
    heating: "Heating",
    parking: "Parking",
    furniture: "Furniture",
    maintenance: "Monthly fee",
    maintenanceMonth: "/ mo",
    maintenanceNone: "None / owner pays",
    docs: "Documents",
    act: "Act",
    conditionValues: {
      new: "New build",
      renovated: "Renovated",
      good: "Good",
      "needs-work": "Needs work",
    },
    heatingValues: {
      central: "Central",
      electric: "Electric",
      ac: "Air conditioning",
      none: "None listed",
    },
    parkingValues: {
      garage: "Garage",
      spot: "Assigned spot",
      street: "Street",
      none: "None",
    },
    furnitureValues: {
      furnished: "Furnished",
      partial: "Partly furnished",
      unfurnished: "Unfurnished",
    },
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
      "Lead handling in messengers",
    ],
    stepsTitle: "Process",
    steps: [
      "Send a quick request",
      "We align on details in chat",
      "Shoot day",
      "Publish & start viewings",
    ],
    formTitle: "Quick sale request",
    shootTitle: "How we shoot",
    shootText: "Light, honest frames — interiors, views, and a short vertical cut for social.",
  },
  forms: {
    name: "Name",
    contact: "Phone / messenger",
    deal: "Looking to",
    dealSell: "Sell",
    dealRent: "Rent out",
    type: "Property type",
    location: "Location",
    budget: "Budget (EUR)",
    comment: "Comment",
    description: "Short description",
    needShoot: "I need photo & video shooting",
    success: "Request sent — we’ll reply soon.",
    error: "Couldn’t send. Try again or write us in the messenger dock.",
    invalidName: "Enter a real name (at least 2 letters).",
    invalidContact: "Enter a phone (+359…) or messenger (@username).",
    sending: "Sending…",
    replyNote: "We reply the same business day in WhatsApp, Telegram, or Viber.",
    slot: "Preferred slot",
  },
  about: {
    title: "About Nomore",
    p1: "Nomore means two things: an end to outdated realtor noise — and life by the sea.",
    p2: "We’re a modern agency for Burgas and the Sunny Beach coast. Clear listings, messenger-first communication, media that helps sell.",
    p3: "We reply the same business day in messengers. Site in four languages. Owners get shooting without a separate media invoice.",
    valuesTitle: "How we work",
    values: [
      "Show the home honestly — big photos first",
      "Answer in chat, not endless call chains",
      "Earn when the deal closes — aligned with owners",
    ],
  },
  contacts: {
    title: "Contacts",
    subtitle: "Write anytime — we reply quickly.",
    lookingTitle: "Looking for a home?",
    replyNote:
      "Typical reply: same day on weekdays. Include budget, area, and buy vs rent.",
  },
  agent: {
    role: "Helps with homes on the Burgas coast",
    bio: "I’ll help with shortlists, viewings, and deals — clearly and without pressure.",
  },
  services: {
    title: "Services",
    subtitle:
      "Not only listings — a short call or a clear verdict on a property or complex before you commit.",
    request: "Send request",
    linkLabel: "Link to listing or complex",
    invalidLink: "Add a valid link (https://…).",
    note: "We reply in messengers. Price is a starting point — details in chat.",
    homeTitle: "Need more than a catalog?",
    homeText:
      "Video consultation or a property check — useful if you follow our coast content and want a clear next step.",
    homeCta: "View services",
    consult: {
      title: "Video consultation",
      text: "About 30 minutes: living, rent, or investment — we go through your situation and next steps.",
      price: "from €49",
    },
    audit: {
      title: "Property review",
      text: "Send a link to an apartment or complex — verdict on fees, winter readiness, and obvious risks.",
      price: "from €79",
    },
  },
  favorites: {
    title: "Saved homes",
    empty: "Nothing saved yet. Tap the heart on a listing.",
    sendShortlist: "Send selection",
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
    costsTeaser: "Buying soon? Rough closing costs and first-year living — ranges, not promises.",
    costsCta: "Estimate costs",
  },
  costs: {
    title: "Hidden-cost estimate",
    subtitle: "Orientational ranges for a purchase on the Burgas coast — before you book a viewing.",
    price: "Purchase price (€)",
    maintenance: "Monthly complex fee (€)",
    closing: "Closing (tax, notary, registry)",
    cashAtClose: "Cash needed near closing",
    firstYear: "First-year living (fees + buffer)",
    commissionNote:
      "Agent commission depends on the deal — we confirm it in chat, not as a fixed % here.",
    disclaimer:
      "Figures are approximate, not legal or tax advice. Final amounts come from your notary and lawyer.",
    ctaAudit: "Property review from €79",
    ctaChat: "Ask in chat",
  },
  privacy: {
    title: "Privacy, cookies & disclaimer",
    updated: "Updated July 2026",
    body: [
      "We collect contact details you send via forms or messengers only to respond about property inquiries.",
      "Favorites, compare list, and cookie consent are stored in your browser (localStorage).",
      "Prices and availability can change; we confirm details during viewings and in chat.",
      "After you accept the cookie banner we may load Google Analytics (GA4) to understand traffic and improve the site. You can clear site data in the browser to reset consent.",
      "Property info is provided in good faith; always verify documents with professionals before a deal.",
    ],
  },
  blog: {
    title: "Journal",
    subtitle: "Short notes on buying, selling, and living by the sea.",
    read: "Read",
  },
  cookies: {
    text: "We use local storage for language, favorites, and consent. After OK we may load analytics (GA4) to improve the site. See Privacy.",
    accept: "OK",
    more: "Privacy",
  },
  notFound: {
    title: "Lost on the coast",
    text: "This page isn’t here. Back to homes — or write us in a messenger.",
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
    demo: "Write us in a messenger — we reply the same business day.",
    geo: "Burgas region · Sunny Beach coast",
    dockHint: "Messengers: use the floating buttons (WhatsApp, Telegram, Viber).",
  },
};

const bg: Dictionary = {
  ...en,
  tagline: "Жилище край морето. Без излишното.",
  taglineLine1: "Жилище край морето.",
  taglineLine2: "Без излишното.",
  taglineSub:
    "Купи, наеми или продай по Бургаското крайбрежие — ясни варианти, без натиск. Бърз отговор в месинджърите.",
  microcopy: "Жилище край морето. Ясни отговори. Без излишното.",
  nav: {
    buy: "Купи",
    rent: "Наем",
    sell: "Продай с Nomore",
    services: "Услуги",
    about: "За нас",
    contacts: "Контакти",
    favorites: "Запазени",
    compare: "Сравни",
    guide: "Гид",
    blog: "Журнал",
    privacy: "Поверителност",
    menu: "Меню",
    closeMenu: "Затвори менюто",
  },
  cta: {
    ...en.cta,
    viewListings: "Виж имотите",
    sellWithUs: "Продай с Nomore",
    applyViewing: "Заяви оглед",
    send: "Изпрати",
    reset: "Изчисти",
    shortlist: "Изпрати подборка",
    compareAdd: "Сравни",
    compareRemove: "В сравнение",
    share: "Сподели",
    copyLink: "Копирай линк",
    copied: "Копирано",
    telegramSoon: "Telegram скоро",
    viber: "Viber",
    leaveReview: "Остави отзив",
    getMatch: "Получи подборка",
    showResults: "Покажи имоти",
  },
  home: {
    featured: "Примерни имоти",
    featuredHint:
      "Примерен каталог, докато събираме живи обяви — за реален подбор изпрати заявка или запази консултация.",
    howTitle: "Как работим",
    howSteps: [
      "Казваш бюджет, район и срок — форма или месинджър",
      "Подбираме от пазара, не само от сайта",
      "Огледи (на място или онлайн) и спокойна сделка",
    ],
    areasTitle: "Къде работим",
    ownersTitle: "Имаш имот?",
    ownersText:
      "Пусни го с Nomore: професионални фото и вертикално видео за нашите социални мрежи. Заснемането е без отделна такса — работим на комисиона от сделката.",
    trustTitle: "Какво казват клиентите",
    searchTitle: "Бързо търсене",
    guideTitle: "Кой води подбора",
    guideText:
      "На място съм по Бургаското крайбрежие — помагам с покупка, наем и продажба, без да ти впарявам комплекси, които после излизат скъпо с такси или зима. Ясни варианти, проверка на място, отговор в чат.",
    guideInstagram: "Моят Instagram",
    guideWrite: "Напиши ми",
    approachNote:
      "Не сме склад със 100 обяви. Описваш нуждата — търсим и филтрираме на брега.",
  },
  search: {
    title: "Намери ми дом",
    subtitle:
      "Бюджет, район, покупка или наем — отговаряме с подборка в чат. Каталогът не е задължителен.",
    submit: "Изпрати заявка за търсене",
    anyArea: "Всеки район на брега",
    budgetHint: "напр. до €120 000",
    commentHint: "Стаи, близост до морето, за живот или под наем…",
    defaultNote: "Лична заявка за подборка",
  },
  review: {
    title: "Остави отзив",
    subtitle: "Звезди и кратък текст — изпраща се към нас във WhatsApp.",
    stars: "Твоята оценка",
    description: "Отзивът",
    submit: "Изпрати отзив във WhatsApp",
    hint: "Публикуваме след преглед — нищо не излиза автоматично.",
    optional: "по желание",
  },
  catalog: {
    ...en.catalog,
    saleTitle: "Купи",
    rentTitle: "Наем",
    results: "имота",
    empty: "Няма съвпадения.",
    emptyHint: "Изчисти филтрите или пиши ни.",
    filters: "Филтри",
    all: "Всички",
    type: "Тип",
    location: "Район",
    rooms: "Стаи",
    price: "Цена (EUR)",
    priceMin: "Мин €",
    priceMax: "Макс €",
    area: "Площ m²",
    areaMin: "Мин m²",
    areaMax: "Макс m²",
    features: "Акценти",
    sort: "Подредба",
    sortNew: "Най-нови",
    sortPriceAsc: "Цена ↑",
    sortPriceDesc: "Цена ↓",
    sortArea: "Най-големи",
    loading: "Зареждане…",
    viewList: "Списък",
    viewMap: "Карта",
    openListing: "Отвори обява →",
  },
  listing: {
    ...en.listing,
    demo: "",
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
    viewingHint: "Точния час потвърждаваме в чат.",
    viewingMode: "Тип оглед",
    viewingOffline: "На място",
    viewingOnline: "Онлайн",
    viewingOfflineHint: "Оглед на място — точния час потвърждаваме в чат.",
    viewingOnlineHint: "Видео оглед — след потвърждение на слота изпращаме линк.",
    onlineViewing: "Онлайн оглед",
    autoReply:
      "Благодарим — обикновено отговаряме до няколко часа (в работни дни).",
  },
  passport: {
    ...en.passport,
    title: "Паспорт на имота",
    subtitle: "Ясни факти преди оглед — без натиск.",
    yearBuilt: "Година на строеж",
    condition: "Състояние",
    heating: "Отопление",
    parking: "Паркинг",
    furniture: "Обзавеждане",
    maintenance: "Месечна такса",
    maintenanceMonth: "/ мес.",
    maintenanceNone: "Няма / плаща собственикът",
    docs: "Документи",
    act: "Акт",
    conditionValues: {
      new: "Ново строителство",
      renovated: "Ремонтиран",
      good: "Добро",
      "needs-work": "Нуждае се от ремонт",
    },
    heatingValues: {
      central: "Централно",
      electric: "Електричество",
      ac: "Климатик",
      none: "Не е посочено",
    },
    parkingValues: {
      garage: "Гараж",
      spot: "Място",
      street: "Улица",
      none: "Няма",
    },
    furnitureValues: {
      furnished: "Обзаведен",
      partial: "Частично",
      unfurnished: "Необзаведен",
    },
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
      "Обработка на запитвания в месинджърите",
    ],
    stepsTitle: "Стъпки",
    steps: [
      "Кратка заявка",
      "Уговаряме детайли в чат",
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
    contact: "Телефон / месинджър",
    dealSell: "Продажба",
    dealRent: "Наем",
    type: "Тип имот",
    location: "Локация",
    budget: "Бюджет (EUR)",
    comment: "Коментар",
    description: "Кратко описание",
    needShoot: "Искам фото и видео заснемане",
    success: "Заявката е изпратена — ще отговорим скоро.",
    error: "Не успяхме да изпратим. Опитай отново или пиши през бутоните долу.",
    invalidName: "Въведи истинско име (поне 2 букви).",
    invalidContact: "Въведи телефон (+359…) или месинджър (@username).",
    sending: "Изпращане…",
    replyNote: "Отговаряме в същия работен ден във WhatsApp, Telegram или Viber.",
    slot: "Предпочитан слот",
  },
  about: {
    title: "За Nomore",
    p1: "Nomore означава две неща: край на остарелия брокерски шум — и живот край морето.",
    p2: "Модерна агенция за Бургас и Слънчев бряг. Ясни обяви, комуникация в месинджър, медио което помага да се продаде.",
    p3: "Отговаряме в същия работен ден в месинджърите. Сайт на четири езика. Собствениците получават заснемане без отделна фактура за медио.",
    valuesTitle: "Как работим",
    values: [
      "Показваме имота честно — първо големите снимки",
      "Отговаряме в чат, не в безкрайни обаждания",
      "Печелим когато има сделка — заедно със собственика",
    ],
  },
  contacts: {
    title: "Контакти",
    subtitle: "Пиши по всяко време — отговаряме бързо.",
    lookingTitle: "Търсиш дом?",
    replyNote:
      "Обикновено отговор в същия работен ден. Напиши бюджет, район и покупка/наем.",
  },
  agent: {
    role: "Помага с жилища по Бургаското крайбрежие",
    bio: "Помагам с подбор, огледи и сделки — ясно и без натиск.",
  },
  services: {
    title: "Услуги",
    subtitle:
      "Не само обяви — кратък разговор или ясен вердикт за имот/комплекс преди да решиш.",
    request: "Изпрати заявка",
    linkLabel: "Линк към обява или комплекс",
    invalidLink: "Добави валиден линк (https://…).",
    note: "Отговаряме в месинджърите. Цената е начална — детайли в чат.",
    homeTitle: "Трябва ти повече от каталог?",
    homeText:
      "Видео консултация или проверка на имот — полезно, ако гледаш нашите материали и искаш ясна следваща стъпка.",
    homeCta: "Виж услугите",
    consult: {
      title: "Видео консултация",
      text: "Около 30 мин: живот, наем или инвестиция — минаваме ситуацията и следващите стъпки.",
      price: "от €49",
    },
    audit: {
      title: "Разбор на обект",
      text: "Пращаш линк към апартамент или комплекс — вердикт за такси, зима и очевидни рискове.",
      price: "от €79",
    },
  },
  favorites: {
    title: "Запазени имоти",
    empty: "Още няма запазени. Натисни сърцето на обява.",
    sendShortlist: "Изпрати подборка",
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
    costsTeaser: "Купуваш скоро? Ориентировъчни разходи при сделка и първа година — диапазони, не обещания.",
    costsCta: "Оцени разходите",
  },
  costs: {
    ...en.costs,
    title: "Оценка на скрити разходи",
    subtitle: "Ориентировъчни диапазони при покупка по Бургаското крайбрежие — преди оглед.",
    price: "Цена на имота (€)",
    maintenance: "Месечна такса комплекс (€)",
    closing: "Закриване (данък, нотариус, вписване)",
    cashAtClose: "Пари близо до сделката",
    firstYear: "Първа година (такси + буфер)",
    commissionNote:
      "Комисионата на агента зависи от сделката — уточняваме в чат, без фиксиран % тук.",
    disclaimer:
      "Цифрите са приблизителни, не са правен или данъчен съвет. Финалът е при нотариус и адвокат.",
    ctaAudit: "Разбор на обект от €79",
    ctaChat: "Пиши в чат",
  },
  privacy: {
    title: "Поверителност, cookies и отказ от отговорност",
    updated: "Обновено юли 2026",
    body: [
      "Събираме контакти, които изпращате чрез форми или месинджъри, само за да отговорим за имоти.",
      "Запазени, сравнение и съгласие за cookies се пазят в браузъра (localStorage).",
      "Цените и наличността могат да се променят; уточняваме детайлите при оглед и в чат.",
      "След OK на cookie банера можем да заредим Google Analytics (GA4), за да разбираме трафика и да подобряваме сайта. Можеш да изчистиш данните на сайта в браузъра, за да нулираш съгласието.",
      "Информацията за имоти е добросъвестна; винаги проверявайте документите с професионалисти преди сделка.",
    ],
  },
  blog: {
    title: "Журнал",
    subtitle: "Кратки бележки за покупка, продажба и живот край морето.",
    read: "Чети",
  },
  cookies: {
    text: "Ползваме local storage за език, запазени и съгласие. След ОК може да заредим аналитика (GA4), за да подобрим сайта. Виж Поверителност.",
    accept: "ОК",
    more: "Поверителност",
  },
  notFound: {
    title: "Изгубен на брега",
    text: "Тази страница я няма. Обратно към имотите — или пиши в месинджър.",
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
    demo: "Пиши в месинджър — отговаряме в същия работен ден.",
    geo: "Област Бургас · Слънчев бряг",
    dockHint: "Месинджъри: плаващите бутони (WhatsApp, Telegram, Viber).",
  },
};

const ru: Dictionary = {
  ...en,
  tagline: "Жильё у моря. Без лишнего.",
  taglineLine1: "Жильё у моря.",
  taglineLine2: "Без лишнего.",
  taglineSub:
    "Купи, сними или продай на побережье Бургаса — понятные варианты, без давления. Быстро отвечаем в мессенджерах.",
  microcopy: "Жильё у моря. Понятные ответы. Без лишнего.",
  nav: {
    buy: "Купить",
    rent: "Аренда",
    sell: "Продать с Nomore",
    services: "Услуги",
    about: "О нас",
    contacts: "Контакты",
    favorites: "Избранное",
    compare: "Сравнение",
    guide: "Гид",
    blog: "Журнал",
    privacy: "Конфиденциальность",
    menu: "Меню",
    closeMenu: "Закрыть меню",
  },
  cta: {
    ...en.cta,
    viewListings: "Смотреть объекты",
    sellWithUs: "Продать с Nomore",
    applyViewing: "Заявка на просмотр",
    send: "Отправить",
    reset: "Сбросить",
    shortlist: "Отправить подборку",
    compareAdd: "Сравнить",
    compareRemove: "В сравнении",
    share: "Поделиться",
    copyLink: "Копировать ссылку",
    copied: "Скопировано",
    telegramSoon: "Telegram скоро",
    leaveReview: "Оставить отзыв",
    getMatch: "Получить подборку",
    showResults: "Показать объекты",
  },
  home: {
    featured: "Примеры объектов",
    featuredHint:
      "Образцы, пока собираем живой каталог — для реального подбора отправьте запрос или запишитесь на консультацию.",
    howTitle: "Как это работает",
    howSteps: [
      "Пишете бюджет, район и сроки — форма или мессенджер",
      "Подбираем с рынка, не только с сайта",
      "Показы (на месте или онлайн) и спокойная сделка",
    ],
    areasTitle: "Где работаем",
    ownersTitle: "Есть объект?",
    ownersText:
      "С Nomore: профессиональные фото и вертикальное видео для наших соцсетей. Съёмка без отдельной оплаты — работаем за комиссию со сделки.",
    trustTitle: "Что говорят клиенты",
    searchTitle: "Быстрый поиск",
    guideTitle: "Кто ведёт подбор",
    guideText:
      "Я на побережье Бургаса и помогаю с покупкой, арендой и продажей — без впаривания комплексов, которые потом бьют по карману таксами или зимой. Понятные варианты, проверка на месте, ответ в чате.",
    guideInstagram: "Мой Instagram",
    guideWrite: "Написать мне",
    approachNote:
      "Мы не склад из 100 объявлений. Вы описываете задачу — мы ищем и фильтруем на побережье.",
  },
  search: {
    title: "Найдите мне жильё",
    subtitle:
      "Бюджет, район, покупка или аренда — ответим подборкой в чате. Каталог не обязателен.",
    submit: "Отправить запрос на поиск",
    anyArea: "Любой район побережья",
    budgetHint: "напр. до €120 000",
    commentHint: "Комнаты, до моря, для жизни или под аренду…",
    defaultNote: "Личный запрос на подборку",
  },
  review: {
    title: "Оставить отзыв",
    subtitle: "Звёзды и короткий текст — уходит нам в WhatsApp.",
    stars: "Ваша оценка",
    description: "Отзыв",
    submit: "Отправить отзыв в WhatsApp",
    hint: "Публикуем после проверки — ничего не выходит автоматически.",
    optional: "необязательно",
  },
  catalog: {
    ...en.catalog,
    saleTitle: "Купить",
    rentTitle: "Аренда",
    results: "объектов",
    empty: "Ничего не нашли.",
    emptyHint: "Сбросьте фильтры или напишите нам.",
    filters: "Фильтры",
    all: "Все",
    type: "Тип",
    location: "Район",
    rooms: "Комнаты",
    price: "Цена (EUR)",
    priceMin: "Мин €",
    priceMax: "Макс €",
    area: "Площадь m²",
    areaMin: "Мин m²",
    areaMax: "Макс m²",
    features: "Особенности",
    sort: "Сортировка",
    sortNew: "Новые",
    sortPriceAsc: "Цена ↑",
    sortPriceDesc: "Цена ↓",
    sortArea: "Площадь",
    loading: "Загрузка…",
    viewList: "Список",
    viewMap: "Карта",
    openListing: "Открыть объявление →",
  },
  listing: {
    ...en.listing,
    demo: "",
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
    viewingHint: "Точное время подтвердим в чате.",
    viewingMode: "Тип показа",
    viewingOffline: "На объекте",
    viewingOnline: "Онлайн",
    viewingOfflineHint: "Показ на объекте — точное время подтвердим в чате.",
    viewingOnlineHint: "Видео-показ — после подтверждения слота пришлём ссылку.",
    onlineViewing: "Онлайн-показ",
    autoReply:
      "Спасибо — обычно отвечаем в течение нескольких часов (в будни).",
  },
  passport: {
    ...en.passport,
    title: "Паспорт объекта",
    subtitle: "Понятные факты до показа — без давления.",
    yearBuilt: "Год постройки",
    condition: "Состояние",
    heating: "Отопление",
    parking: "Парковка",
    furniture: "Мебель",
    maintenance: "Ежемесячный сбор",
    maintenanceMonth: "/ мес.",
    maintenanceNone: "Нет / платит собственник",
    docs: "Документы",
    act: "Акт",
    conditionValues: {
      new: "Новострой",
      renovated: "После ремонта",
      good: "Хорошее",
      "needs-work": "Нужен ремонт",
    },
    heatingValues: {
      central: "Центральное",
      electric: "Электрическое",
      ac: "Кондиционер",
      none: "Не указано",
    },
    parkingValues: {
      garage: "Гараж",
      spot: "Место",
      street: "Улица",
      none: "Нет",
    },
    furnitureValues: {
      furnished: "С мебелью",
      partial: "Частично",
      unfurnished: "Без мебели",
    },
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
      "Обработка заявок в мессенджерах",
    ],
    stepsTitle: "Шаги",
    steps: [
      "Короткая заявка",
      "Уточняем детали в чате",
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
    contact: "Телефон / мессенджер",
    dealSell: "Продать",
    dealRent: "Сдать",
    type: "Тип объекта",
    location: "Локация",
    budget: "Бюджет (EUR)",
    comment: "Комментарий",
    description: "Короткое описание",
    needShoot: "Нужна фото- и видеосъёмка",
    success: "Заявка отправлена — скоро ответим.",
    error: "Не удалось отправить. Попробуйте ещё раз или напишите через кнопки внизу.",
    invalidName: "Укажите настоящее имя (минимум 2 буквы).",
    invalidContact: "Укажите телефон (+359…) или мессенджер (@username).",
    sending: "Отправка…",
    replyNote: "Отвечаем в тот же рабочий день в WhatsApp, Telegram или Viber.",
    slot: "Удобный слот",
  },
  about: {
    title: "О Nomore",
    p1: "Nomore — это два смысла: конец устаревшему риелторскому шуму и жизнь у моря.",
    p2: "Современное агентство для Бургаса и Солнечного Берега. Понятные объявления, мессенджеры, медиа которое помогает продать.",
    p3: "Отвечаем в тот же рабочий день в мессенджерах. Сайт на четырёх языках. Собственникам — съёмка без отдельного счёта за медиа.",
    valuesTitle: "Как работаем",
    values: [
      "Показываем дом честно — сначала большие фото",
      "Отвечаем в чате, не в бесконечных звонках",
      "Зарабатываем, когда сделка закрыта — вместе с собственником",
    ],
  },
  contacts: {
    title: "Контакты",
    subtitle: "Пишите в любое время — отвечаем быстро.",
    lookingTitle: "Ищете жильё?",
    replyNote:
      "Обычно ответ в тот же будний день. Укажите бюджет, район и покупка/аренда.",
  },
  agent: {
    role: "Помогает с жильём на побережье Бургаса",
    bio: "Помогу с подбором, показами и сделками — понятно и без давления.",
  },
  services: {
    title: "Услуги",
    subtitle:
      "Не только объявления — короткий созвон или понятный вердикт по объекту/комплексу до решения.",
    request: "Отправить заявку",
    linkLabel: "Ссылка на объявление или комплекс",
    invalidLink: "Добавьте рабочую ссылку (https://…).",
    note: "Отвечаем в мессенджерах. Цена стартовая — детали в чате.",
    homeTitle: "Нужно больше, чем каталог?",
    homeText:
      "Видео-консультация или разбор объекта — полезно, если смотрите наш контент и хотите понятный следующий шаг.",
    homeCta: "Смотреть услуги",
    consult: {
      title: "Видео-консультация",
      text: "Около 30 минут: жизнь, аренда или инвестиция — разбираем ситуацию и следующие шаги.",
      price: "от €49",
    },
    audit: {
      title: "Разбор объекта",
      text: "Присылаете ссылку на квартиру или комплекс — вердикт по таксам, зиме и очевидным рискам.",
      price: "от €79",
    },
  },
  favorites: {
    title: "Избранное",
    empty: "Пока пусто. Нажмите сердце на объекте.",
    sendShortlist: "Отправить подборку",
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
    costsTeaser: "Скоро покупка? Ориентировочные расходы на сделку и первый год — диапазоны, не обещания.",
    costsCta: "Оценить расходы",
  },
  costs: {
    ...en.costs,
    title: "Оценка скрытых расходов",
    subtitle: "Ориентировочные диапазоны при покупке на побережье Бургаса — до показа.",
    price: "Цена объекта (€)",
    maintenance: "Ежемесячный сбор комплекса (€)",
    closing: "Закрытие (налог, нотариус, реестр)",
    cashAtClose: "Деньги к закрытию сделки",
    firstYear: "Первый год (сборы + буфер)",
    commissionNote:
      "Комиссия агента зависит от сделки — уточняем в чате, без фиксированного % здесь.",
    disclaimer:
      "Цифры приблизительные, не юридический и не налоговый совет. Финал — у нотариуса и юриста.",
    ctaAudit: "Разбор объекта от €79",
    ctaChat: "Написать в чат",
  },
  privacy: {
    title: "Конфиденциальность, cookies и дисклеймер",
    updated: "Обновлено июль 2026",
    body: [
      "Мы обрабатываем контакты из форм или мессенджеров только для ответа по недвижимости.",
      "Избранное, сравнение и согласие на cookies хранятся в браузере (localStorage).",
      "Цены и наличие могут меняться; детали подтверждаем на просмотре и в чате.",
      "После OK на cookie-баннере можем загрузить Google Analytics (GA4), чтобы понимать трафик и улучшать сайт. Согласие можно сбросить, очистив данные сайта в браузере.",
      "Информация об объектах добросовестная; документы всегда проверяйте со специалистами перед сделкой.",
    ],
  },
  blog: {
    title: "Журнал",
    subtitle: "Короткие заметки о покупке, продаже и жизни у моря.",
    read: "Читать",
  },
  cookies: {
    text: "Мы используем local storage для языка, избранного и согласия. После OK можем загрузить аналитику (GA4), чтобы улучшать сайт. См. Конфиденциальность.",
    accept: "OK",
    more: "Конфиденциальность",
  },
  notFound: {
    title: "Заблудились на берегу",
    text: "Страницы нет. На главную — или напишите в мессенджер.",
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
    demo: "Пишите в мессенджер — отвечаем в тот же рабочий день.",
    geo: "Область Бургас · Солнечный Берег",
    dockHint: "Мессенджеры: плавающие кнопки (WhatsApp, Telegram, Viber).",
  },
};

const ua: Dictionary = {
  ...en,
  tagline: "Житло на морі. Без зайвого.",
  taglineLine1: "Житло на морі.",
  taglineLine2: "Без зайвого.",
  taglineSub:
    "Купи, орендуй або продай на узбережжі Бургаса — зрозумілі варіанти, без тиску. Швидко відповідаємо в месенджерах.",
  microcopy: "Житло на морі. Зрозумілі відповіді. Без зайвого.",
  nav: {
    buy: "Купити",
    rent: "Оренда",
    sell: "Продати з Nomore",
    services: "Послуги",
    about: "Про нас",
    contacts: "Контакти",
    favorites: "Збережене",
    compare: "Порівняння",
    guide: "Гід",
    blog: "Журнал",
    privacy: "Конфіденційність",
    menu: "Меню",
    closeMenu: "Закрити меню",
  },
  cta: {
    ...en.cta,
    viewListings: "Дивитись об’єкти",
    sellWithUs: "Продати з Nomore",
    applyViewing: "Заявка на перегляд",
    send: "Надіслати",
    reset: "Скинути",
    shortlist: "Надіслати підбірку",
    compareAdd: "Порівняти",
    compareRemove: "У порівнянні",
    share: "Поділитись",
    copyLink: "Копіювати лінк",
    copied: "Скопійовано",
    telegramSoon: "Telegram скоро",
    leaveReview: "Залишити відгук",
    getMatch: "Отримати підбірку",
    showResults: "Показати об’єкти",
  },
  home: {
    featured: "Приклади об’єктів",
    featuredHint:
      "Зразки, поки збираємо живий каталог — для реального підбору надішліть запит або запишіться на консультацію.",
    howTitle: "Як це працює",
    howSteps: [
      "Пишете бюджет, район і строки — форма або месенджер",
      "Підбираємо з ринку, не лише з сайту",
      "Покази (на місці чи онлайн) і спокійна угода",
    ],
    areasTitle: "Де працюємо",
    ownersTitle: "Є об’єкт?",
    ownersText:
      "З Nomore: професійні фото та вертикальне відео для наших соцмереж. Зйомка без окремої оплати — працюємо за комісією з угоди.",
    trustTitle: "Що кажуть клієнти",
    searchTitle: "Швидкий пошук",
    guideTitle: "Хто веде підбір",
    guideText:
      "Я на узбережжі Бургаса і допомагаю з купівлею, орендою та продажем — без впарювання комплексів, які потім б’ють по гаманцю таксами чи зимою. Зрозумілі варіанти, перевірка на місці, відповідь у чаті.",
    guideInstagram: "Мій Instagram",
    guideWrite: "Написати мені",
    approachNote:
      "Ми не склад зі 100 оголошень. Описуєте задачу — шукаємо й фільтруємо на узбережжі.",
  },
  search: {
    title: "Знайдіть мені житло",
    subtitle:
      "Бюджет, район, купівля чи оренда — відповімо підбіркою в чаті. Каталог не обов’язковий.",
    submit: "Надіслати запит на пошук",
    anyArea: "Будь-який район узбережжя",
    budgetHint: "напр. до €120 000",
    commentHint: "Кімнати, до моря, для життя чи під оренду…",
    defaultNote: "Особистий запит на підбірку",
  },
  review: {
    title: "Залишити відгук",
    subtitle: "Зірки й короткий текст — іде нам у WhatsApp.",
    stars: "Ваша оцінка",
    description: "Відгук",
    submit: "Надіслати відгук у WhatsApp",
    hint: "Публікуємо після перевірки — нічого не виходить автоматично.",
    optional: "необов’язково",
  },
  catalog: {
    ...en.catalog,
    saleTitle: "Купити",
    rentTitle: "Оренда",
    results: "об’єктів",
    empty: "Нічого не знайшли.",
    emptyHint: "Скиньте фільтри або напишіть нам.",
    filters: "Фільтри",
    all: "Усі",
    type: "Тип",
    location: "Район",
    rooms: "Кімнати",
    price: "Ціна (EUR)",
    priceMin: "Мін €",
    priceMax: "Макс €",
    area: "Площа m²",
    areaMin: "Мін m²",
    areaMax: "Макс m²",
    features: "Особливості",
    sort: "Сортування",
    sortNew: "Нові",
    sortPriceAsc: "Ціна ↑",
    sortPriceDesc: "Ціна ↓",
    sortArea: "Площа",
    loading: "Завантаження…",
    viewList: "Список",
    viewMap: "Карта",
    openListing: "Відкрити оголошення →",
  },
  listing: {
    ...en.listing,
    demo: "",
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
    viewingHint: "Точний час підтвердимо в чаті.",
    viewingMode: "Тип перегляду",
    viewingOffline: "На об’єкті",
    viewingOnline: "Онлайн",
    viewingOfflineHint: "Огляд на об’єкті — точний час підтвердимо в чаті.",
    viewingOnlineHint: "Відео-огляд — після підтвердження слота надішлемо лінк.",
    onlineViewing: "Онлайн-огляд",
    autoReply:
      "Дякуємо — зазвичай відповідаємо протягом кількох годин (у будні).",
  },
  passport: {
    ...en.passport,
    title: "Паспорт лота",
    subtitle: "Зрозумілі факти перед переглядом — без тиску.",
    yearBuilt: "Рік будівництва",
    condition: "Стан",
    heating: "Опалення",
    parking: "Паркування",
    furniture: "Меблі",
    maintenance: "Щомісячний внесок",
    maintenanceMonth: "/ міс.",
    maintenanceNone: "Немає / платить власник",
    docs: "Документи",
    act: "Акт",
    conditionValues: {
      new: "Новобуд",
      renovated: "Після ремонту",
      good: "Добрий",
      "needs-work": "Потребує ремонту",
    },
    heatingValues: {
      central: "Центральне",
      electric: "Електричне",
      ac: "Кондиціонер",
      none: "Не вказано",
    },
    parkingValues: {
      garage: "Гараж",
      spot: "Місце",
      street: "Вулиця",
      none: "Немає",
    },
    furnitureValues: {
      furnished: "З меблями",
      partial: "Частково",
      unfurnished: "Без меблів",
    },
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
      "Обробка заявок у месенджерах",
    ],
    stepsTitle: "Кроки",
    steps: [
      "Коротка заявка",
      "Узгоджуємо деталі в чаті",
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
    contact: "Телефон / месенджер",
    dealSell: "Продати",
    dealRent: "Здати",
    type: "Тип об’єкта",
    location: "Локація",
    budget: "Бюджет (EUR)",
    comment: "Коментар",
    description: "Короткий опис",
    needShoot: "Потрібна фото- та відеозйомка",
    success: "Заявку надіслано — скоро відповімо.",
    error: "Не вдалося надіслати. Спробуйте ще раз або напишіть через кнопки внизу.",
    invalidName: "Вкажіть справжнє ім’я (мінімум 2 літери).",
    invalidContact: "Вкажіть телефон (+359…) або месенджер (@username).",
    sending: "Надсилання…",
    replyNote: "Відповідаємо того ж робочого дня в WhatsApp, Telegram або Viber.",
    slot: "Зручний слот",
  },
  about: {
    title: "Про Nomore",
    p1: "Nomore — два сенси: кінець застарілому ріелторському шуму і життя на морі.",
    p2: "Сучасне агентство для Бургаса та Сонячного Берега. Зрозумілі оголошення, месенджери, медіа яке допомагає продати.",
    p3: "Відповідаємо того ж робочого дня в месенджерах. Сайт чотирма мовами. Власникам — зйомка без окремого рахунку за медіа.",
    valuesTitle: "Як працюємо",
    values: [
      "Показуємо дім чесно — спочатку великі фото",
      "Відповідаємо в чаті, не в нескінченних дзвінках",
      "Заробляємо, коли угода закрита — разом із власником",
    ],
  },
  contacts: {
    title: "Контакти",
    subtitle: "Пишіть будь-коли — відповідаємо швидко.",
    lookingTitle: "Шукаєте житло?",
    replyNote:
      "Зазвичай відповідь того ж буднього дня. Вкажіть бюджет, район і купівля/оренда.",
  },
  agent: {
    role: "Допомагає з житлом на узбережжі Бургаса",
    bio: "Допоможу з підбором, оглядами та угодами — зрозуміло і без тиску.",
  },
  services: {
    title: "Послуги",
    subtitle:
      "Не лише оголошення — коротка розмова або зрозумілий вердикт по об’єкту/комплексу перед рішенням.",
    request: "Надіслати заявку",
    linkLabel: "Посилання на оголошення або комплекс",
    invalidLink: "Додайте робоче посилання (https://…).",
    note: "Відповідаємо в месенджерах. Ціна стартова — деталі в чаті.",
    homeTitle: "Потрібно більше, ніж каталог?",
    homeText:
      "Відео-консультація або розбір об’єкта — корисно, якщо дивитесь наш контент і хочете зрозумілий наступний крок.",
    homeCta: "Дивитись послуги",
    consult: {
      title: "Відео-консультація",
      text: "Близько 30 хв: життя, оренда чи інвестиція — розбираємо ситуацію і наступні кроки.",
      price: "від €49",
    },
    audit: {
      title: "Розбір об’єкта",
      text: "Кидаєте посилання на квартиру чи комплекс — вердикт по таксах, зимі та очевидних ризиках.",
      price: "від €79",
    },
  },
  favorites: {
    title: "Збережене",
    empty: "Поки порожньо. Натисніть серце на об’єкті.",
    sendShortlist: "Надіслати підбірку",
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
    costsTeaser: "Скоро купуєте? Орієнтовні витрати на угоду й перший рік — діапазони, не обіцянки.",
    costsCta: "Оцінити витрати",
  },
  costs: {
    ...en.costs,
    title: "Оцінка прихованих витрат",
    subtitle: "Орієнтовні діапазони при купівлі на узбережжі Бургаса — перед переглядом.",
    price: "Ціна об’єкта (€)",
    maintenance: "Щомісячний внесок комплексу (€)",
    closing: "Закриття (податок, нотаріус, реєстр)",
    cashAtClose: "Гроші близько до угоди",
    firstYear: "Перший рік (внески + буфер)",
    commissionNote:
      "Комісія агента залежить від угоди — уточнюємо в чаті, без фіксованого % тут.",
    disclaimer:
      "Цифри орієнтовні, не юридична й не податкова порада. Фінал — у нотаріуса та юриста.",
    ctaAudit: "Розбір об’єкта від €79",
    ctaChat: "Написати в чат",
  },
  privacy: {
    title: "Конфіденційність, cookies і дисклеймер",
    updated: "Оновлено липень 2026",
    body: [
      "Ми обробляємо контакти з форм або месенджерів лише щоб відповісти щодо нерухомості.",
      "Збережене, порівняння і згода на cookies зберігаються в браузері (localStorage).",
      "Ціни й наявність можуть змінюватися; деталі підтверджуємо на огляді та в чаті.",
      "Після OK на cookie-банері можемо завантажити Google Analytics (GA4), щоб розуміти трафік і покращувати сайт. Згоду можна скинути, очистивши дані сайту в браузері.",
      "Інформація про об’єкти добросовісна; документи завжди перевіряйте з фахівцями перед угодою.",
    ],
  },
  blog: {
    title: "Журнал",
    subtitle: "Короткі нотатки про купівлю, продаж і життя на морі.",
    read: "Читати",
  },
  cookies: {
    text: "Використовуємо local storage для мови, збереженого і згоди. Після OK можемо завантажити аналітику (GA4), щоб покращувати сайт. Див. Конфіденційність.",
    accept: "OK",
    more: "Конфіденційність",
  },
  notFound: {
    title: "Загубились на березі",
    text: "Сторінки немає. На головну — або напишіть у месенджер.",
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
    demo: "Пишіть у месенджер — відповідаємо того ж робочого дня.",
    geo: "Область Бургас · Сонячний Берег",
    dockHint: "Месенджери: плаваючі кнопки (WhatsApp, Telegram, Viber).",
  },
};

const maps: Record<Locale, Dictionary> = { en, bg, ru, ua };

export function getDictionary(locale: Locale): Dictionary {
  return maps[locale] ?? en;
}
