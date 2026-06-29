export type PerformanceVideo = {
  id: string;
  title: string;
  titleTamil: string;
  src: string;
  duration: string;
};

/** 1-minute clips from WhatsApp performances */
export const performanceVideos = [
  {
    id: "live",
    title: "Live Performance",
    titleTamil: "நேரடி நிகழ்ச்சி",
    src: "/video/live-performance.mp4",
    duration: "1:00",
  },
  {
    id: "family",
    title: "Family Performance",
    titleTamil: "குடும்ப நிகழ்ச்சி",
    src: "/video/family-performance.mp4",
    duration: "1:00",
  },
  {
    id: "hindi",
    title: "Hindi Song",
    titleTamil: "ஹிந்தி பாடல்",
    src: "/video/hindi-song.mp4",
    duration: "1:00",
  },
  {
    id: "tamil",
    title: "Tamil Song",
    titleTamil: "தமிழ் பாடல்",
    src: "/video/tamil-song.mp4",
    duration: "1:00",
  },
] satisfies PerformanceVideo[];

export const welcomeVideo = performanceVideos[0].src;
