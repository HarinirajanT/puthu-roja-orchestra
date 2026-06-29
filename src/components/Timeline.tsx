"use client";

import { motion } from "framer-motion";
import { journeyChapters } from "@/data/site-data";
import { useLanguage } from "@/context/LanguageProvider";
import { SectionHeading } from "./ui/SectionHeading";
import { SiteImage } from "./ui/SiteImage";

export function Timeline() {
  const { t } = useLanguage();

  return (
    <section id="journey" className="relative bg-dark-brown py-24 md:py-32">
      <div className="spotlight absolute inset-0 opacity-50" />

      <div className="relative mx-auto w-full max-w-5xl px-6 lg:px-8">
        <SectionHeading
          label={t.journey.label}
          title={t.journey.title}
          subtitle={t.journey.subtitle}
          light
        />

        <div className="relative mt-16">
          <div className="absolute top-0 bottom-0 left-6 hidden w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent md:left-1/2 md:block md:-translate-x-px" />

          <div className="space-y-12 md:space-y-16">
            {journeyChapters.map((chapter, i) => {
              const isEven = i % 2 === 0;
              const copy = t.journey.chapters.find((c) => c.id === chapter.id)!;

              return (
                <motion.div
                  key={chapter.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  className={`relative flex flex-col gap-6 md:flex-row md:items-center md:gap-10 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-6 top-8 z-10 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-gold bg-dark-brown md:left-1/2 md:block" />

                  <div className="w-full md:w-[calc(50%-2rem)] md:shrink-0">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-gold/20 shadow-xl">
                      <SiteImage
                        image={chapter.image}
                        alt={copy.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 480px"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/60 to-transparent" />
                      <span className="absolute top-4 left-4 rounded-full bg-dark-brown/70 px-3 py-1 text-lg">
                        {chapter.icon}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`w-full pl-12 md:w-[calc(50%-2rem)] md:pl-0 ${
                      isEven ? "md:text-left" : "md:text-right"
                    }`}
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                      {copy.highlight}
                    </span>
                    <h3 className="mt-2 font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-ivory sm:text-3xl">
                      {copy.title}
                    </h3>
                    <p className="mt-1 text-sm text-gold/70">{copy.titleTamil}</p>
                    <p className="mt-4 leading-relaxed text-cream/70">{copy.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center font-[family-name:var(--font-cormorant)] text-xl text-gold/80 italic sm:text-2xl"
        >
          &ldquo;{t.journey.closingQuote}&rdquo;
        </motion.p>
      </div>
    </section>
  );
}
