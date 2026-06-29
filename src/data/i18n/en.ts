import type { Translations } from "./types";

export const en: Translations = {
  nav: {
    story: "Story",
    journey: "Journey",
    founder: "Founder",
    watch: "Watch",
    services: "Services",
    orchestra: "Orchestra",
    book: "Book",
    bookNow: "Book Now",
    call: "Call",
  },
  hero: {
    since: "Since",
    line1: "Creating Musical",
    line2: "Memories",
    subtitle: "Live Music for Every Special Occasion",
    bookEvent: "Book Your Event",
    watchLive: "Watch Live",
    hearSing: "Hear Rajan Sing",
    playing: "Playing...",
  },
  story: {
    label: "Our Story",
    headline: "Every celebration deserves a melody.",
    subheadline: "Every melody deserves a memory.",
    paragraphs: [
      "In 1996, a young musician in Kovilpatti had a vision — to create an orchestra that didn't just play music, but created memories that last a lifetime.",
      "Puthu Roja Orchestra was born from that dream. What started with a handful of passionate musicians has blossomed into a full ensemble trusted by families across Tamil Nadu for weddings, temple festivals, corporate events, and every celebration in between.",
      "Today, when the curtains rise and the first note fills the air, something magical happens. Grandparents tap their feet. Children dance with joy. Brides smile through happy tears. That is the Puthu Roja promise.",
    ],
    quote: "Music That Creates Memories",
    quoteBy: "— Puthu Roja Orchestra",
  },
  journey: {
    label: "Our Journey",
    title: "Nearly Three Decades of Music",
    subtitle:
      "A story built on passion, trust, and unforgettable celebrations — no numbers needed, just memories",
    closingQuote: "From Tradition to Trendy... We Make Every Moment Unforgettable.",
    chapters: [
      {
        id: "beginning",
        highlight: "1996 · Kovilpatti",
        title: "Where It All Began",
        titleTamil: "தொடக்கம்",
        description:
          "Thirupathi Rajan founded Puthu Roja Orchestra with a simple dream — to bring live music that touches every heart at every celebration in his hometown.",
      },
      {
        id: "trust",
        highlight: "Word of Mouth",
        title: "Built on Trust",
        titleTamil: "நம்பிக்கையின் அடிப்படை",
        description:
          "One family told another. One kovil function led to the next wedding. Over the years, the orchestra earned its place through dedication, punctuality, and music that moves people.",
      },
      {
        id: "occasions",
        highlight: "Every Celebration",
        title: "Music for All Occasions",
        titleTamil: "எல்லா விழாக்களுக்கும்",
        description:
          "From intimate family gatherings to grand temple festivals, wedding receptions, and cultural programs — Puthu Roja adapts to every stage and every crowd.",
      },
      {
        id: "today",
        highlight: "Still Going Strong",
        title: "Creating Memories Today",
        titleTamil: "இன்றும் தொடரும் பயணம்",
        description:
          "Nearly three decades later, R S T Rajan and his team continue to serve families across Tamil Nadu — with the same passion that started it all in 1996.",
      },
    ],
  },
  founder: {
    label: "The Founder",
    title: "Thirupathi Rajan",
    titleRole: "Founder & Lead Singer",
    sinceBadge: "Since 1996",
    excellence: "Musical Excellence",
    story: [
      "Nearly three decades ago, in the heart of Kovilpatti, a dream took shape — to bring live music that touches every heart at every celebration.",
      "What began as a small orchestra in 1996 has grown into one of Tamil Nadu's most trusted names in live performance. From intimate family gatherings to grand temple festivals, Thirupathi Rajan has led Puthu Roja Orchestra with passion, dedication, and an unwavering commitment to excellence.",
      "Countless smiles. Countless celebrations. One mission — making every occasion unforgettable.",
    ],
    stats: [
      { label: "Founded", value: "1996" },
      { label: "Home", value: "Kovilpatti" },
      { label: "Serving", value: "Tamil Nadu" },
      { label: "Style", value: "Live Orchestra" },
    ],
  },
  watch: {
    label: "Watch",
    title: "Performance Clips",
    subtitle: "Performance highlights — live songs and orchestra clips by R S T Rajan",
    credit: "R S T Rajan · Puthu Roja Orchestra",
    noVideo: "Your browser does not support video playback.",
    videos: [
      { id: "live", title: "Live Performance", titleTamil: "நேரடி நிகழ்ச்சி" },
      { id: "family", title: "Family Performance", titleTamil: "குடும்ப நிகழ்ச்சி" },
      { id: "hindi", title: "Hindi Song", titleTamil: "ஹிந்தி பாடல்" },
      { id: "tamil", title: "Tamil Song", titleTamil: "தமிழ் பாடல்" },
      { id: "stage", title: "Stage Performance", titleTamil: "மேடை நிகழ்ச்சி" },
      { id: "orchestra", title: "Orchestra Performance", titleTamil: "ஆர்க்கஸ்ட்ரா நிகழ்ச்சி" },
    ],
  },
  services: {
    label: "What We Do",
    title: "Music for Every Occasion",
    subtitle:
      "From intimate gatherings to grand celebrations — we bring the perfect melody to your event",
    items: [
      {
        id: "wedding",
        title: "Wedding Reception",
        titleTamil: "திருமண வரவேற்பு",
        description:
          "Make your special day truly magical with live orchestral music that moves hearts.",
      },
      {
        id: "temple",
        title: "Temple Festival",
        titleTamil: "கோவில் விழா",
        description:
          "Devotional performances that honor tradition with soul-stirring melodies.",
      },
      {
        id: "corporate",
        title: "Corporate Event",
        titleTamil: "நிறுவன நிகழ்வு",
        description:
          "Professional live entertainment that elevates your corporate gatherings.",
      },
      {
        id: "birthday",
        title: "Birthday Celebration",
        titleTamil: "பிறந்தநாள் விழா",
        description:
          "Turn birthdays into unforgettable celebrations with the perfect soundtrack.",
      },
      {
        id: "engagement",
        title: "Engagement",
        titleTamil: "நிச்சயதார்த்தம்",
        description:
          "Romantic melodies for the beginning of a beautiful journey together.",
      },
      {
        id: "college",
        title: "College Functions",
        titleTamil: "கல்லூரி நிகழ்வு",
        description:
          "High-energy performances that bring campuses alive with music and joy.",
      },
      {
        id: "cultural",
        title: "Cultural Programs",
        titleTamil: "பண்பாட்டு நிகழ்ச்சி",
        description:
          "Celebrating heritage through music that bridges tradition and modernity.",
      },
      {
        id: "private",
        title: "Private Concerts",
        titleTamil: "தனியார் இசை நிகழ்வு",
        description: "Intimate performances tailored to your exclusive gathering.",
      },
      {
        id: "religious",
        title: "Religious Events",
        titleTamil: "மத நிகழ்வுகள்",
        description: "Sacred music that creates an atmosphere of devotion and peace.",
      },
    ],
  },
  orchestra: {
    label: "The Ensemble",
    title: "Rajan and Team",
    subtitle:
      "A passionate group of musicians led by Thirupathi Rajan — bringing every performance to life",
    description:
      "Behind every unforgettable performance is a dedicated team of skilled musicians. From soulful vocals and rhythmic percussion to melodic strings and keys, Rajan and his ensemble work together to create the perfect soundtrack for your celebration.",
    footnote:
      "Our full ensemble of 8–12 musicians adapts to your event — weddings, temple festivals, corporate gatherings, and every special occasion across Tamil Nadu.",
    teamAlt: "Rajan and team at kovil function",
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
    label: "Testimonials",
    title: "Words from Our Families",
    subtitle: "Real stories from celebrations we've been part of",
    items: [
      {
        quote: "They made our wedding unforgettable. The crowd didn't stop dancing until midnight!",
        author: "Anitha & Kumar",
        event: "Wedding Reception",
        location: "Madurai",
      },
      {
        quote:
          "Puthu Roja Orchestra brought such beautiful energy to our temple festival. Truly divine.",
        author: "Ramesh Kumar",
        event: "Temple Festival",
        location: "Kovilpatti",
      },
      {
        quote:
          "Professional, punctual, and absolutely magical. Our guests are still talking about the music.",
        author: "Priya Devi",
        event: "Engagement",
        location: "Tirunelveli",
      },
      {
        quote:
          "Thirupathi Rajan's voice gave us goosebumps. Best decision for our daughter's wedding.",
        author: "Selvam Family",
        event: "Wedding",
        location: "Thoothukudi",
      },
      {
        quote: "From sound check to final note — flawless performance. Highly recommended!",
        author: "Corporate HR Team",
        event: "Corporate Event",
        location: "Chennai",
      },
      {
        quote:
          "The orchestra made my father's 60th birthday so special. Tears of joy everywhere.",
        author: "Meena Raj",
        event: "Birthday Celebration",
        location: "Kovilpatti",
      },
    ],
  },
  faq: {
    label: "FAQ",
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know before booking",
    items: [
      {
        question: "How far in advance should we book?",
        answer:
          "We recommend booking at least 2-4 weeks in advance for weddings and major events. For temple festivals and peak season (November–February), earlier booking is advised.",
      },
      {
        question: "Do you travel outside Kovilpatti?",
        answer:
          "Yes! We serve across Tamil Nadu and can travel to other states for special events. Travel arrangements are discussed during booking.",
      },
      {
        question: "What is included in a typical package?",
        answer:
          "Our packages include the full orchestra, professional sound system, stage setup coordination, and a curated song list. Custom packages are available based on your event needs.",
      },
      {
        question: "How many musicians perform?",
        answer:
          "Our standard ensemble includes 8-12 musicians. Package size can be adjusted based on your venue and event scale.",
      },
      {
        question: "Can we request specific songs?",
        answer:
          "Absolutely! We welcome song requests and can prepare special dedications for weddings, birthdays, and other celebrations.",
      },
      {
        question: "Do you provide sound and lighting?",
        answer:
          "Yes, we come equipped with professional-grade sound systems. Lighting can be coordinated with your venue or arranged separately.",
      },
    ],
  },
  booking: {
    label: "Book Now",
    title: "Let's Create Your Next Memory",
    subtitle: "Book Puthu Roja Orchestra for your celebration",
    callUs: "Call Us",
    whatsapp: "WhatsApp",
    messageDirect: "Message Us Directly",
    location: "Location",
    instagram: "Instagram",
    yourName: "Your Name",
    phone: "Phone Number",
    eventType: "Event Type",
    eventDate: "Event Date",
    eventLocation: "Event Location",
    message: "Message",
    selectEvent: "Select event type",
    namePlaceholder: "Enter your name",
    phonePlaceholder: "Your phone number",
    locationPlaceholder: "City / Venue name",
    messagePlaceholder: "Tell us about your event...",
    submit: "Book Now via WhatsApp",
    sending: "Sending...",
    errors: {
      name: "Name is required",
      phone: "Phone is required",
      eventType: "Please select an event type",
      date: "Date is required",
      location: "Location is required",
    },
    whatsappTemplate:
      "New Booking Request\n\nName: {name}\nPhone: {phone}\nEvent: {eventType}\nDate: {date}\nLocation: {location}\nMessage: {message}",
  },
  footer: {
    thankYou1: "Thank you",
    thankYou2: "for letting us become",
    thankYou3: "a part of your celebrations.",
    categories: [
      "Weddings",
      "Receptions",
      "Temple Functions",
      "Corporate Events",
      "Birthday Parties",
      "Private Events",
    ],
    bookNow: "Book Now",
    rights: "All rights reserved.",
  },
  whatsappFab: {
    call: "Call",
    book: "Book",
  },
  langToggle: {
    switchTo: "தமிழ்",
  },
};
