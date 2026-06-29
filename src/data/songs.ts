export type SongTrack = {
  id: string;
  title: string;
  titleTamil: string;
  /** MP3 path — drop file in public/audio/songs/ */
  src: string;
  cover: string;
  duration?: string;
};

/** Drop your MP3 files here (same filenames). Uploaded icons were cover art only — not audio. */
export const songTracks = [
  {
    id: "vanakkam",
    title: "Vanakkam Welcome",
    titleTamil: "வணக்கம்",
    src: "/audio/songs/vanakkam.mp3",
    cover: "/audio/covers/album-art.webp",
  },
  {
    id: "wedding",
    title: "Wedding Melody",
    titleTamil: "திருமண பாடல்",
    src: "/audio/songs/wedding.mp3",
    cover: "/audio/covers/album-art.webp",
  },
  {
    id: "kovil",
    title: "Kovil Vizha",
    titleTamil: "கோவில் விழா",
    src: "/audio/songs/kovil.mp3",
    cover: "/audio/covers/album-art.webp",
  },
  {
    id: "party",
    title: "Party Vibe",
    titleTamil: "விசேஷ நிகழ்வு",
    src: "/audio/songs/party.mp3",
    cover: "/audio/covers/album-art.webp",
  },
] satisfies SongTrack[];
