"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ChevronDown, Play } from "lucide-react";
import { siteConfig, founder } from "@/data/site-data";
import { GoldButton } from "./ui/SectionHeading";
import { Petals } from "./ui/Petals";
import { AudioPlayer } from "./ui/AudioPlayer";
import { SiteImage } from "./ui/SiteImage";

export function Hero() {
  const curtainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!curtainRef.current) return;
    gsap.fromTo(
      curtainRef.current,
      { scaleY: 1 },
      {
        scaleY: 0,
        transformOrigin: "top center",
        duration: 2.5,
        delay: 0.8,
        ease: "power3.inOut",
      }
    );
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden curtain-gradient">
      <Petals />

      <div className="spotlight absolute inset-0" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(44,27,21,0.4)_100%)]" />

      <div
        ref={curtainRef}
        className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-b from-dark-brown via-maroon to-dark-brown"
        style={{ transformOrigin: "top center" }}
      />

      <div className="absolute inset-0 z-0">
        <SiteImage
          image={founder.image}
          alt={founder.name}
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-brown via-dark-brown/80 to-dark-brown/60" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pt-24 pb-20 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-gold"
        >
          Since {siteConfig.founded}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.8 }}
          className="font-[family-name:var(--font-cormorant)] text-5xl leading-tight font-semibold text-ivory md:text-7xl lg:text-8xl"
        >
          Creating Musical
          <br />
          <span className="text-gradient-gold italic">Memories</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.7, duration: 0.8 }}
          className="mx-auto mt-6 max-w-xl text-lg text-cream/70 md:text-xl"
        >
          {siteConfig.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.8 }}
          className="mt-8"
        >
          <p className="font-[family-name:var(--font-cormorant)] text-2xl text-gold md:text-3xl">
            {founder.name}
          </p>
          <p className="mt-1 text-sm uppercase tracking-[0.2em] text-cream/50">
            {founder.title}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.3, duration: 0.8 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <GoldButton href="#booking">Book Your Event</GoldButton>
          <GoldButton href="#songs" variant="outline">
            <Play size={16} />
            Watch Live
          </GoldButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.6, duration: 0.8 }}
          className="mt-8 flex justify-center"
        >
          <AudioPlayer />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.8, duration: 0.8 }}
          className="mt-12 font-[family-name:var(--font-cormorant)] text-3xl tracking-[0.15em] text-ivory/90 md:text-4xl"
        >
          PUTHU <span className="text-gold">ROJA</span> ORCHESTRA
        </motion.p>
      </div>

      <motion.a
        href="#story"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-gold/60 transition-colors hover:text-gold"
      >
        <ChevronDown size={28} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
