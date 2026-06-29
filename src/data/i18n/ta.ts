import type { Translations } from "./types";
import { en } from "./en";

/** Tamil UI labels + English for long-form copy where full Tamil isn't available yet. */
export const ta: Translations = {
  nav: {
    story: "கதை",
    journey: "பயணம்",
    founder: "நிறுவனர்",
    watch: "காணொளி",
    services: "சேவைகள்",
    orchestra: "இசைக்குழு",
    book: "முன்பதிவு",
    bookNow: "இப்போது முன்பதிவு",
    call: "அழை",
  },
  hero: {
    since: "ஆண்டு முதல்",
    line1: "இசை நினைவுகளை",
    line2: "உருவாக்குகிறோம்",
    subtitle: "எல்லா சிறப்பு நிகழ்வுகளுக்கும் நேரடி இசை",
    bookEvent: "உங்கள் நிகழ்வை முன்பதிவு செய்யுங்கள்",
    watchLive: "நேரடி நிகழ்ச்சி",
    hearSing: "ராஜன் பாடல் கேளுங்கள்",
    playing: "இயங்குகிறது...",
  },
  story: {
    label: "எங்கள் கதை",
    headline: "ஒவ்வொரு விழாவுக்கும் ஒரு இசை தேவை.",
    subheadline: "ஒவ்வொரு இசைக்கும் ஒரு நினைவு தேவை.",
    paragraphs: en.story.paragraphs,
    quote: "நினைவுகளை உருவாக்கும் இசை",
    quoteBy: "— புது ரோஜா ஆர்க்கஸ்ட்ரா",
  },
  journey: {
    label: "எங்கள் பயணம்",
    title: "இரண்டு தசாப்தங்களுக்கும் மேலான இசை",
    subtitle:
      "ஆர்வம், நம்பிக்கை மற்றும் மறக்க முடியாத விழாக்களின் கதை",
    closingQuote: en.journey.closingQuote,
    chapters: en.journey.chapters.map((chapter) => ({
      ...chapter,
      title:
        chapter.id === "beginning"
          ? "எங்கே தொடங்கியது"
          : chapter.id === "trust"
            ? "நம்பிக்கையின் அடிப்படை"
            : chapter.id === "occasions"
              ? "எல்லா விழாக்களுக்கும் இசை"
              : "இன்றும் நினைவுகளை உருவாக்குகிறோம்",
      highlight:
        chapter.id === "beginning"
          ? "1996 · Kovilpatti"
          : chapter.id === "trust"
            ? "வாய்மொழி"
            : chapter.id === "occasions"
              ? "எல்லா விழாக்கள்"
              : "இன்னும் தொடர்கிறது",
    })),
  },
  founder: {
    label: "நிறுவனர்",
    title: "Thirupathi Rajan",
    titleRole: "நிறுவனர் & முதன்மை பாடகர்",
    sinceBadge: "1996 முதல்",
    excellence: "இசை சிறப்பு",
    story: en.founder.story,
    stats: [
      { label: "நிறுவப்பட்டது", value: "1996" },
      { label: "வீடு", value: "Kovilpatti" },
      { label: "பணிபுரியும் இடம்", value: "Tamil Nadu" },
      { label: "பாணி", value: "Live Orchestra" },
    ],
  },
  watch: {
    label: "காணொளி",
    title: "நிகழ்ச்சி காணொளிகள்",
    subtitle: en.watch.subtitle,
    credit: en.watch.credit,
    noVideo: en.watch.noVideo,
    videos: [
      { id: "live", title: "நேரடி நிகழ்ச்சி", titleTamil: "நேரடி நிகழ்ச்சி" },
      { id: "family", title: "குடும்ப நிகழ்ச்சி", titleTamil: "குடும்ப நிகழ்ச்சி" },
      { id: "hindi", title: "ஹிந்தி பாடல்", titleTamil: "ஹிந்தி பாடல்" },
      { id: "tamil", title: "தமிழ் பாடல் — நேரடி", titleTamil: "தமிழ் பாடல் — நேரடி" },
      { id: "religious", title: "பக்தி பாடல்", titleTamil: "பக்தி பாடல்" },
      { id: "tamil-song", title: "தமிழ் பாடல்", titleTamil: "தமிழ் பாடல்" },
    ],
  },
  services: {
    label: "நாம் என்ன செய்கிறோம்",
    title: "எல்லா விழாக்களுக்கும் இசை",
    subtitle: en.services.subtitle,
    items: en.services.items.map((item) => ({
      ...item,
      title: item.titleTamil,
    })),
  },
  orchestra: {
    label: "இசைக்குழு",
    title: "ராஜன் மற்றும் குழு",
    subtitle: en.orchestra.subtitle,
    description: en.orchestra.description,
    footnote: en.orchestra.footnote,
    teamAlt: en.orchestra.teamAlt,
    roles: [
      "Lead Vocals",
      "Keyboard",
      "Drums & Percussion",
      "Flute",
      "Violin",
      "Guitar",
      "Backing Vocals",
    ],
  },
  testimonials: {
    label: "பாராட்டுகள்",
    title: "எங்கள் குடும்பங்களின் வார்த்தைகள்",
    subtitle: en.testimonials.subtitle,
    items: en.testimonials.items,
  },
  faq: {
    label: "கேள்விகள்",
    title: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
    subtitle: en.faq.subtitle,
    items: en.faq.items,
  },
  booking: {
    label: "இப்போது முன்பதிவு",
    title: "உங்கள் அடுத்த நினைவை உருவாக்குவோம்",
    subtitle: en.booking.subtitle,
    callUs: "எங்களை அழையுங்கள்",
    whatsapp: "WhatsApp",
    messageDirect: "WhatsApp-ல் message செய்யுங்கள்",
    location: "இடம்",
    instagram: "Instagram",
    yourName: "உங்கள் பெயர்",
    phone: "தொலைபேசி எண்",
    eventType: "நிகழ்வு வகை",
    eventDate: "நிகழ்வு தேதி",
    eventLocation: "நிகழ்வு இடம்",
    message: "செய்தி",
    selectEvent: "நிகழ்வு வகையை தேர்ந்தெடுக்கவும்",
    namePlaceholder: "உங்கள் பெயரை உள்ளிடவும்",
    phonePlaceholder: "உங்கள் தொலைபேசி எண்",
    locationPlaceholder: "City / Venue name",
    messagePlaceholder: en.booking.messagePlaceholder,
    submit: "WhatsApp-ல் முன்பதிவு செய்யுங்கள்",
    sending: "அனுப்புகிறது...",
    errors: {
      name: "பெயர் தேவை",
      phone: "தொலைபேசி தேவை",
      eventType: "நிகழ்வு வகையை தேர்ந்தெடுக்கவும்",
      date: "தேதி தேவை",
      location: "இடம் தேவை",
    },
    whatsappTemplate: en.booking.whatsappTemplate,
  },
  footer: {
    thankYou1: "நன்றி",
    thankYou2: "உங்கள் விழாக்களின்",
    thankYou3: "ஒரு பகுதியாக இருக்க அனுமதித்ததற்கு.",
    categories: [
      "திருமணங்கள்",
      "வரவேற்புகள்",
      "கோவில் நிகழ்வுகள்",
      "நிறுவன நிகழ்வுகள்",
      "பிறந்தநாள் விழாக்கள்",
      "தனியார் நிகழ்வுகள்",
    ],
    bookNow: "இப்போது முன்பதிவு",
    rights: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
  },
  whatsappFab: {
    call: "அழை",
    book: "முன்பதிவு",
  },
  langToggle: {
    switchTo: "English",
  },
};
