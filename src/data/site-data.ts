export type SiteImage = {
  src: string;
  objectPosition?: string;
};


export const siteConfig = {
  name: "Puthu Roja Orchestra",
  tagline: "Creating Musical Memories Since 1996",
  subtitle: "Live Music for Every Special Occasion",
  quote: "From Tradition to Trendy... We Make Every Moment Unforgettable.",
  founded: 1996,
  phone: "94434 69939",
  whatsapp: "919443469939",
  email: "bookings@puthurojaorchestra.com",
  location: "Kovilpatti, Tamil Nadu",
  serviceArea: "Serving Across Tamil Nadu",
  instagram: "https://www.instagram.com/thiru_pathirajan",
  facebook: "https://www.facebook.com",
  youtube: "https://www.youtube.com",
  sampleAudio: "/audio/sample.m4a?v=2",
};

export const images = {
  poster: {
    src: "/images/poster.png",
    objectPosition: "center top",
  },
  promoBanner: {
    src: "/images/promo-banner.png",
    objectPosition: "20% center",
  },
  founderPortrait: {
    src: "/images/rajan-portrait-vintage.png",
    objectPosition: "center 20%",
  },
  rajanSinging: {
    src: "/images/performance-rajan-singing.png",
    objectPosition: "center 15%",
  },
  reunion: {
    src: "/images/performance-reunion.png",
    objectPosition: "center center",
  },
  duet: {
    src: "/images/performance-duet.png",
    objectPosition: "center 30%",
  },
  rajanStageBlue: {
    src: "/images/rajan-stage-blue.png",
    objectPosition: "center 25%",
  },
  rajanDuetIndoor: {
    src: "/images/rajan-duet-indoor.png",
    objectPosition: "center 20%",
  },
} satisfies Record<string, SiteImage>;

export const founder = {
  name: "Thirupathi Rajan",
  title: "Founder & Lead Singer",
  image: images.promoBanner,
  portrait: images.founderPortrait,
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
};

export const story = {
  headline: "Every celebration deserves a melody.",
  subheadline: "Every melody deserves a memory.",
  paragraphs: [
    "In 1996, a young musician in Kovilpatti had a vision — to create an orchestra that didn't just play music, but created memories that last a lifetime.",
    "Puthu Roja Orchestra was born from that dream. What started with a handful of passionate musicians has blossomed into a full ensemble trusted by families across Tamil Nadu for weddings, temple festivals, corporate events, and every celebration in between.",
    "Today, when the curtains rise and the first note fills the air, something magical happens. Grandparents tap their feet. Children dance with joy. Brides smile through happy tears. That is the Puthu Roja promise.",
  ],
};

export const journeyChapters = [
  {
    id: "beginning",
    icon: "🌱",
    highlight: "1996 · Kovilpatti",
    title: "Where It All Began",
    titleTamil: "தொடக்கம்",
    description:
      "Thirupathi Rajan founded Puthu Roja Orchestra with a simple dream — to bring live music that touches every heart at every celebration in his hometown.",
    image: images.promoBanner,
  },
  {
    id: "trust",
    icon: "🤝",
    highlight: "Word of Mouth",
    title: "Built on Trust",
    titleTamil: "நம்பிக்கையின் அடிப்படை",
    description:
      "One family told another. One kovil function led to the next wedding. Over the years, the orchestra earned its place through dedication, punctuality, and music that moves people.",
    image: images.founderPortrait,
  },
  {
    id: "occasions",
    icon: "🎤",
    highlight: "Every Celebration",
    title: "Music for All Occasions",
    titleTamil: "எல்லா விழாக்களுக்கும்",
    description:
      "From intimate family gatherings to grand temple festivals, wedding receptions, and cultural programs — Puthu Roja adapts to every stage and every crowd.",
    image: images.reunion,
  },
  {
    id: "today",
    icon: "✨",
    highlight: "Still Going Strong",
    title: "Creating Memories Today",
    titleTamil: "இன்றும் தொடரும் பயணம்",
    description:
      "Nearly three decades later, R S T Rajan and his team continue to serve families across Tamil Nadu — with the same passion that started it all in 1996.",
    image: images.rajanStageBlue,
  },
];

export const services = [
  {
    id: "wedding",
    title: "Wedding Reception",
    titleTamil: "திருமண வரவேற்பு",
    description: "Make your special day truly magical with live orchestral music that moves hearts.",
    gradient: "from-[#651a28] via-[#4a1520] to-[#2c1b15]",
  },
  {
    id: "temple",
    title: "Temple Festival",
    titleTamil: "கோவில் விழா",
    description: "Devotional performances that honor tradition with soul-stirring melodies.",
    gradient: "from-[#2c1b15] via-[#651a28] to-[#3d1218]",
  },
  {
    id: "corporate",
    title: "Corporate Event",
    titleTamil: "நிறுவன நிகழ்வு",
    description: "Professional live entertainment that elevates your corporate gatherings.",
    gradient: "from-[#2c1b15] via-[#5a1825] to-[#2c1b15]",
  },
  {
    id: "birthday",
    title: "Birthday Celebration",
    titleTamil: "பிறந்தநாள் விழா",
    description: "Turn birthdays into unforgettable celebrations with the perfect soundtrack.",
    gradient: "from-[#651a28] via-[#2c1b15] to-[#651a28]",
  },
  {
    id: "engagement",
    title: "Engagement",
    titleTamil: "நிச்சயதார்த்தம்",
    description: "Romantic melodies for the beginning of a beautiful journey together.",
    gradient: "from-[#3a1520] via-[#651a28] to-[#2c1b15]",
  },
  {
    id: "college",
    title: "College Functions",
    titleTamil: "கல்லூரி நிகழ்வு",
    description: "High-energy performances that bring campuses alive with music and joy.",
    gradient: "from-[#2c1b15] via-[#4a1520] to-[#651a28]",
  },
  {
    id: "cultural",
    title: "Cultural Programs",
    titleTamil: "பண்பாட்டு நிகழ்ச்சி",
    description: "Celebrating heritage through music that bridges tradition and modernity.",
    gradient: "from-[#651a28] via-[#2c1b15] to-[#351018]",
  },
  {
    id: "private",
    title: "Private Concerts",
    titleTamil: "தனியார் இசை நிகழ்வு",
    description: "Intimate performances tailored to your exclusive gathering.",
    gradient: "from-[#2c1b15] via-[#5a1825] to-[#2c1b15]",
  },
  {
    id: "religious",
    title: "Religious Events",
    titleTamil: "மத நிகழ்வுகள்",
    description: "Sacred music that creates an atmosphere of devotion and peace.",
    gradient: "from-[#2c1b15] via-[#651a28] to-[#3d1218]",
  },
];

export const teamRoles = [
  { role: "Lead Vocals", icon: "🎤" },
  { role: "Keyboard", icon: "🎹" },
  { role: "Drums & Percussion", icon: "🥁" },
  { role: "Flute", icon: "🪈" },
  { role: "Violin", icon: "🎻" },
  { role: "Guitar", icon: "🎸" },
  { role: "Backing Vocals", icon: "🎵" },
];

export const teamFeatured = {
  image: images.reunion,
  alt: "Rajan and team at kovil function",
};

export const testimonials = [
  {
    quote: "They made our wedding unforgettable. The crowd didn't stop dancing until midnight!",
    author: "Anitha & Kumar",
    event: "Wedding Reception",
    location: "Madurai",
    year: 2023,
    rating: 5,
  },
  {
    quote: "Puthu Roja Orchestra brought such beautiful energy to our temple festival. Truly divine.",
    author: "Ramesh Kumar",
    event: "Temple Festival",
    location: "Kovilpatti",
    year: 2024,
    rating: 5,
  },
  {
    quote: "Professional, punctual, and absolutely magical. Our guests are still talking about the music.",
    author: "Priya Devi",
    event: "Engagement",
    location: "Tirunelveli",
    year: 2023,
    rating: 5,
  },
  {
    quote: "Thirupathi Rajan's voice gave us goosebumps. Best decision for our daughter's wedding.",
    author: "Selvam Family",
    event: "Wedding",
    location: "Thoothukudi",
    year: 2024,
    rating: 5,
  },
  {
    quote: "From sound check to final note — flawless performance. Highly recommended!",
    author: "Corporate HR Team",
    event: "Corporate Event",
    location: "Chennai",
    year: 2024,
    rating: 5,
  },
  {
    quote: "The orchestra made my father's 60th birthday so special. Tears of joy everywhere.",
    author: "Meena Raj",
    event: "Birthday Celebration",
    location: "Kovilpatti",
    year: 2023,
    rating: 5,
  },
];

export const faqs = [
  {
    question: "How far in advance should we book?",
    answer: "We recommend booking at least 2-4 weeks in advance for weddings and major events. For temple festivals and peak season (November–February), earlier booking is advised.",
  },
  {
    question: "Do you travel outside Kovilpatti?",
    answer: "Yes! We serve across Tamil Nadu and can travel to other states for special events. Travel arrangements are discussed during booking.",
  },
  {
    question: "What is included in a typical package?",
    answer: "Our packages include the full orchestra, professional sound system, stage setup coordination, and a curated song list. Custom packages are available based on your event needs.",
  },
  {
    question: "How many musicians perform?",
    answer: "Our standard ensemble includes 8-12 musicians. Package size can be adjusted based on your venue and event scale.",
  },
  {
    question: "Can we request specific songs?",
    answer: "Absolutely! We welcome song requests and can prepare special dedications for weddings, birthdays, and other celebrations.",
  },
  {
    question: "Do you provide sound and lighting?",
    answer: "Yes, we come equipped with professional-grade sound systems. Lighting can be coordinated with your venue or arranged separately.",
  },
];

export const navLinks = [
  { label: "Story", href: "#story" },
  { label: "Journey", href: "#journey" },
  { label: "Founder", href: "#founder" },
  { label: "Watch", href: "#songs" },
  { label: "Services", href: "#services" },
  { label: "Orchestra", href: "#orchestra" },
  { label: "Book", href: "#booking" },
];
