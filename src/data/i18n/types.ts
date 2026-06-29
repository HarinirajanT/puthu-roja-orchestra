export type Locale = "en" | "ta";

export type Translations = {
  nav: {
    story: string;
    journey: string;
    founder: string;
    watch: string;
    services: string;
    orchestra: string;
    book: string;
    bookNow: string;
    call: string;
  };
  hero: {
    since: string;
    line1: string;
    line2: string;
    subtitle: string;
    bookEvent: string;
    watchLive: string;
    hearSing: string;
    playing: string;
  };
  story: {
    label: string;
    headline: string;
    subheadline: string;
    paragraphs: string[];
    quote: string;
    quoteBy: string;
  };
  journey: {
    label: string;
    title: string;
    subtitle: string;
    closingQuote: string;
    chapters: {
      id: string;
      highlight: string;
      title: string;
      titleTamil: string;
      description: string;
    }[];
  };
  founder: {
    label: string;
    title: string;
    titleRole: string;
    sinceBadge: string;
    excellence: string;
    story: string[];
    stats: { label: string; value: string }[];
  };
  watch: {
    label: string;
    title: string;
    subtitle: string;
    credit: string;
    noVideo: string;
    videos: { id: string; title: string; titleTamil: string }[];
  };
  services: {
    label: string;
    title: string;
    subtitle: string;
    items: { id: string; title: string; titleTamil: string; description: string }[];
  };
  orchestra: {
    label: string;
    title: string;
    subtitle: string;
    description: string;
    footnote: string;
    teamAlt: string;
    roles: string[];
  };
  testimonials: {
    label: string;
    title: string;
    subtitle: string;
    items: { quote: string; author: string; event: string; location: string }[];
  };
  faq: {
    label: string;
    title: string;
    subtitle: string;
    items: { question: string; answer: string }[];
  };
  booking: {
    label: string;
    title: string;
    subtitle: string;
    callUs: string;
    whatsapp: string;
    messageDirect: string;
    location: string;
    instagram: string;
    yourName: string;
    phone: string;
    eventType: string;
    eventDate: string;
    eventLocation: string;
    message: string;
    selectEvent: string;
    namePlaceholder: string;
    phonePlaceholder: string;
    locationPlaceholder: string;
    messagePlaceholder: string;
    submit: string;
    sending: string;
    errors: {
      name: string;
      phone: string;
      eventType: string;
      date: string;
      location: string;
    };
    whatsappTemplate: string;
  };
  footer: {
    thankYou1: string;
    thankYou2: string;
    thankYou3: string;
    categories: string[];
    bookNow: string;
    rights: string;
  };
  whatsappFab: {
    call: string;
    book: string;
  };
  langToggle: {
    switchTo: string;
  };
};
