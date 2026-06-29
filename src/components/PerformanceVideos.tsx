"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { performanceVideos } from "@/data/performance-videos";
import { useLanguage } from "@/context/LanguageProvider";
import { assetPath } from "@/lib/asset-path";
import { SectionHeading } from "./ui/SectionHeading";

const MAX_SECONDS = 60;

function PerformanceVideoCard({
  video,
  index,
}: {
  video: (typeof performanceVideos)[number];
  index: number;
}) {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const copy = t.watch.videos.find((v) => v.id === video.id)!;

  const handleTimeUpdate = () => {
    const el = videoRef.current;
    if (el && el.currentTime >= MAX_SECONDS) {
      el.pause();
      el.currentTime = 0;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12 }}
      className="overflow-hidden rounded-2xl border border-gold/20 bg-dark-brown shadow-xl"
    >
      <div className="relative aspect-video w-full bg-black">
        <video
          ref={videoRef}
          src={assetPath(video.src)}
          controls
          playsInline
          preload="metadata"
          onTimeUpdate={handleTimeUpdate}
          className="h-full w-full object-contain"
        >
          {t.watch.noVideo}
        </video>
        <span className="absolute top-3 right-3 rounded-full bg-dark-brown/80 px-2.5 py-1 text-xs font-medium text-gold">
          {video.duration}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-ivory">
          {copy.title}
        </h3>
        <p className="mt-1 text-sm text-gold/70">{copy.titleTamil}</p>
        <p className="mt-2 text-xs text-cream/50">{t.watch.credit}</p>
      </div>
    </motion.div>
  );
}

export function PerformanceVideos() {
  const { t } = useLanguage();

  return (
    <section id="songs" className="relative bg-ivory py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label={t.watch.label}
          title={t.watch.title}
          subtitle={t.watch.subtitle}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {performanceVideos.map((video, i) => (
            <PerformanceVideoCard key={video.id} video={video} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
