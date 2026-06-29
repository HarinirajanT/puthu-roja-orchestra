import { welcomeVideo } from "@/data/performance-videos";

export type DollVoiceLine = {
  id: string;
  label: string;
  labelTamil: string;
  /** Spoken by browser AI voice — real recordings are hero-only, not the doll */
  speech: string;
};

export const dollConfig = {
  name: "R S T Rajan",
  shortName: "RST Rajan",
  subtitle: "Puthu Roja Orchestra Guide",
  customArt: "/images/doll-rst-rajan.png",
  welcomeVideo,
  welcomeVideoEmbed: "",
  voiceLines: [
    {
      id: "welcome",
      label: "Welcome",
      labelTamil: "வணக்கம்",
      speech:
        "Vanakkam! I am R S T Rajan, founder of Puthu Roja Orchestra. Welcome to our website!",
    },
    {
      id: "wedding",
      label: "Weddings",
      labelTamil: "திருமணம்",
      speech:
        "Planning a wedding or reception? Puthu Roja Orchestra brings live music that makes every moment unforgettable.",
    },
    {
      id: "temple",
      label: "Kovil Vizha",
      labelTamil: "கோவில் விழா",
      speech:
        "For temple festivals and kovil functions across Tamil Nadu, our devotional performances honor tradition beautifully.",
    },
    {
      id: "book",
      label: "Book Now",
      labelTamil: "பதிவு செய்ய",
      speech:
        "Call nine four four three four, six nine nine three nine to book Puthu Roja Orchestra for your celebration!",
    },
  ] satisfies DollVoiceLine[],
};
