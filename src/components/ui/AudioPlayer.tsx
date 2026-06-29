"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2 } from "lucide-react";
import { siteConfig } from "@/data/site-data";

export function AudioPlayer() {
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(siteConfig.sampleAudio);
    audioRef.current = audio;

    audio.addEventListener("canplaythrough", () => setReady(true));
    audio.addEventListener("error", () => setReady(false));
    audio.addEventListener("ended", () => setPlaying(false));

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio || !ready) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.currentTime = 0;
      audio.play().catch(() => setPlaying(false));
      setPlaying(true);
    }
  };

  return (
    <button
      onClick={toggle}
      disabled={!ready}
      className="group flex items-center gap-3 rounded-full border border-gold/30 bg-dark-brown/40 px-5 py-2.5 backdrop-blur-sm transition-all hover:border-gold/60 hover:bg-dark-brown/60 disabled:cursor-not-allowed disabled:opacity-60"
      aria-label={playing ? "Pause voice sample" : "Play Rajan's voice sample"}
    >
      <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gold/20 text-gold transition-colors group-hover:bg-gold/30">
        {playing ? (
          <Pause size={14} />
        ) : (
          <Play size={14} className="ml-0.5" />
        )}
        {playing && (
          <span className="absolute -inset-1 animate-ping rounded-full border border-gold/40" />
        )}
      </span>
      <span className="text-sm font-medium text-cream/90">
        {playing ? "Playing..." : "Hear Rajan Sing"}
      </span>
      <Volume2 size={14} className="text-gold/60" />
    </button>
  );
}
