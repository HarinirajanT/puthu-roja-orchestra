"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Volume2, Video, Loader2 } from "lucide-react";
import { dollConfig } from "@/data/doll-config";
import { playDollVoiceLine, stopDollVoice } from "@/lib/doll-voice";

function DollSvg({ singing }: { singing: boolean }) {
  return (
    <svg viewBox="0 0 120 160" className="h-full w-full drop-shadow-lg" aria-hidden>
      <ellipse cx="60" cy="150" rx="28" ry="6" fill="#c9a227" opacity="0.25" />
      <rect x="38" y="88" width="44" height="42" rx="8" fill="#fffdf8" />
      <path d="M38 100 Q60 108 82 100" fill="none" stroke="#e8dcc8" strokeWidth="1" />
      <motion.g
        animate={singing ? { rotate: [-8, 8, -8] } : { rotate: 0 }}
        transition={{ repeat: singing ? Infinity : 0, duration: 0.4 }}
        style={{ originX: "30px", originY: "95px" }}
      >
        <rect x="22" y="92" width="14" height="32" rx="7" fill="#f5e6c8" />
      </motion.g>
      <motion.g
        animate={singing ? { rotate: [12, -4, 12] } : { rotate: 0 }}
        transition={{ repeat: singing ? Infinity : 0, duration: 0.35, delay: 0.1 }}
        style={{ originX: "88px", originY: "95px" }}
      >
        <rect x="84" y="88" width="14" height="28" rx="7" fill="#f5e6c8" />
        <rect x="88" y="72" width="8" height="18" rx="4" fill="#2c1b15" />
        <circle cx="92" cy="70" r="6" fill="#2c1b15" />
        <circle cx="92" cy="70" r="3" fill="#651a28" />
      </motion.g>
      <rect x="42" y="128" width="16" height="24" rx="4" fill="#2c1b15" />
      <rect x="62" y="128" width="16" height="24" rx="4" fill="#2c1b15" />
      <circle cx="60" cy="58" r="26" fill="#c68642" />
      <path d="M34 52 Q38 28 60 26 Q82 28 86 52 Q84 38 60 34 Q36 38 34 52" fill="#1a0f0c" />
      <rect x="44" y="52" width="14" height="10" rx="3" fill="#1a0f0c" />
      <rect x="62" y="52" width="14" height="10" rx="3" fill="#1a0f0c" />
      <rect x="56" y="55" width="8" height="3" fill="#1a0f0c" />
      <path d="M52 68 Q60 72 68 68" fill="none" stroke="#1a0f0c" strokeWidth="2" strokeLinecap="round" />
      <path d="M54 74 Q60 78 66 74" fill="none" stroke="#651a28" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M48 82 Q60 90 72 82" fill="none" stroke="#c9a227" strokeWidth="2" />
      <text x="48" y="48" fill="#c9a227" fontSize="8" fontWeight="bold" fontFamily="sans-serif">
        RST
      </text>
      {singing && (
        <>
          <motion.text x="8" y="50" fill="#c9a227" fontSize="14" animate={{ y: [50, 30], opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 1.2 }}>♪</motion.text>
          <motion.text x="100" y="45" fill="#c9a227" fontSize="12" animate={{ y: [45, 25], opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.3 }}>♫</motion.text>
        </>
      )}
    </svg>
  );
}

function DollAvatar({ singing }: { singing: boolean }) {
  const [useCustomArt, setUseCustomArt] = useState(true);

  if (useCustomArt) {
    return (
      <div className="relative h-full w-full">
        <Image
          src={dollConfig.customArt}
          alt={dollConfig.name}
          fill
          className="object-contain object-bottom drop-shadow-lg"
          onError={() => setUseCustomArt(false)}
          unoptimized
        />
        {singing && (
          <motion.span
            className="absolute -top-2 -left-2 text-lg text-gold"
            animate={{ y: [-2, -12], opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            ♪
          </motion.span>
        )}
      </div>
    );
  }

  return <DollSvg singing={singing} />;
}

export function OrchestraDoll() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [singing, setSinging] = useState(false);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [voiceMode, setVoiceMode] = useState<"ai" | null>(null);
  const [videoOpen, setVideoOpen] = useState(false);

  const hasVideo = Boolean(
    dollConfig.welcomeVideo?.trim() || dollConfig.welcomeVideoEmbed?.trim()
  );
  const useLocalVideo = Boolean(dollConfig.welcomeVideo?.trim());

  useEffect(() => () => stopDollVoice(), []);

  const playLine = useCallback(async (lineId: string) => {
    const line = dollConfig.voiceLines.find((l) => l.id === lineId);
    if (!line) return;

    setPlayingId(lineId);
    setSinging(true);
    setOpen(true);

    const mode = await playDollVoiceLine(line);
    setVoiceMode(mode === "failed" ? null : "ai");
    setPlayingId(null);
    setTimeout(() => setSinging(false), 800);
  }, []);

  const handleDollTap = () => {
    setOpen((v) => !v);
    if (!open) {
      playLine("welcome");
    } else {
      stopDollVoice();
      setSinging(false);
    }
  };

  if (hidden) return null;

  return (
    <>
      <div className="fixed right-3 bottom-20 z-50 flex flex-col items-end gap-2 sm:right-6 sm:bottom-6">
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="relative w-[min(100vw-2rem,280px)] rounded-2xl border border-gold/30 bg-cream p-4 shadow-xl shadow-dark-brown/25"
            >
              <button
                onClick={() => {
                  setOpen(false);
                  stopDollVoice();
                  setSinging(false);
                }}
                className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-maroon text-ivory"
                aria-label="Close"
              >
                <X size={12} />
              </button>

              <p className="font-[family-name:var(--font-cormorant)] text-lg font-bold text-maroon">
                {dollConfig.name}
              </p>
              <p className="text-xs text-dark-brown/50">{dollConfig.subtitle}</p>

              {voiceMode === "ai" && (
                <p className="mt-2 rounded-lg bg-gold/10 px-2 py-1 text-[10px] text-dark-brown/60">
                  AI guide voice — tap &ldquo;Hear Rajan Sing&rdquo; on the homepage for his real voice
                </p>
              )}

              <p className="mt-3 text-xs font-medium text-dark-brown/70">Tap a line to hear me speak:</p>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {dollConfig.voiceLines.map((line) => (
                  <button
                    key={line.id}
                    onClick={() => playLine(line.id)}
                    disabled={playingId !== null}
                    className="flex items-center gap-1.5 rounded-xl border border-gold/20 bg-ivory px-2.5 py-2 text-left text-xs transition-all hover:border-gold/50 hover:bg-gold/5 disabled:opacity-50"
                  >
                    {playingId === line.id ? (
                      <Loader2 size={12} className="shrink-0 animate-spin text-gold" />
                    ) : (
                      <Volume2 size={12} className="shrink-0 text-gold" />
                    )}
                    <span>
                      <span className="block font-medium text-dark-brown">{line.labelTamil}</span>
                      <span className="text-[10px] text-dark-brown/50">{line.label}</span>
                    </span>
                  </button>
                ))}
              </div>

              {hasVideo && (
                <button
                  onClick={() => setVideoOpen(true)}
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-maroon/20 bg-maroon/5 py-2 text-xs font-medium text-maroon transition-all hover:bg-maroon/10"
                >
                  <Video size={14} />
                  Watch welcome video
                </button>
              )}

              <a
                href="#booking"
                onClick={() => setOpen(false)}
                className="mt-3 block text-center text-xs font-semibold text-gold hover:underline"
              >
                Book your event →
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative">
          <motion.button
            onClick={handleDollTap}
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="group relative h-[100px] w-[72px] cursor-pointer sm:h-[120px] sm:w-[86px]"
            aria-label={`${dollConfig.name} — tap to talk`}
          >
            <div className="absolute -inset-2 rounded-full bg-gold/10 opacity-0 transition-opacity group-hover:opacity-100" />
            <DollAvatar singing={singing} />
            {!open && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-dark-brown shadow">
                <MessageCircle size={12} />
              </span>
            )}
          </motion.button>

          <p className="mt-1 text-center text-[10px] font-semibold tracking-wide text-dark-brown/60 sm:text-xs">
            {dollConfig.shortName} · Tap me!
          </p>

          <button
            onClick={() => {
              setHidden(true);
              stopDollVoice();
            }}
            className="absolute -top-6 right-0 text-[10px] text-dark-brown/30 hover:text-dark-brown/60"
          >
            hide
          </button>
        </div>
      </div>

      <AnimatePresence>
        {videoOpen && hasVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-dark-brown/90 p-4 backdrop-blur-sm"
            onClick={() => setVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-gold/30 bg-dark-brown"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setVideoOpen(false)}
                className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-dark-brown/80 text-ivory"
                aria-label="Close video"
              >
                <X size={16} />
              </button>
              <div className="relative aspect-[9/16] w-full bg-black sm:aspect-video">
                {useLocalVideo ? (
                  <video
                    src={dollConfig.welcomeVideo}
                    controls
                    autoPlay
                    playsInline
                    className="absolute inset-0 h-full w-full object-contain"
                    onTimeUpdate={(e) => {
                      if (e.currentTarget.currentTime >= 60) {
                        e.currentTarget.pause();
                      }
                    }}
                  />
                ) : (
                  <iframe
                    src={dollConfig.welcomeVideoEmbed}
                    title={`${dollConfig.name} welcome video`}
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                )}
              </div>
              <p className="p-3 text-center text-xs text-cream/60">
                Vanakkam from {dollConfig.name}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
