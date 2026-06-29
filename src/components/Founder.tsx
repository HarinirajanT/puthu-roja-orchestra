"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageProvider";
import { SectionHeading } from "./ui/SectionHeading";
import { SiteImage } from "./ui/SiteImage";
import { founder } from "@/data/site-data";

export function Founder() {
  const { t } = useLanguage();

  return (
    <section id="founder" className="relative bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label={t.founder.label}
          title={t.founder.title}
          subtitle={t.founder.titleRole}
        />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-gold/20 to-maroon/10" />
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl shadow-maroon/10">
              <SiteImage
                image={founder.portrait}
                alt={t.founder.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 80vw, 480px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/40 to-transparent" />
            </div>
            <div className="absolute -right-4 -bottom-4 rounded-xl border border-gold/30 bg-cream px-6 py-4 shadow-lg">
              <p className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-maroon">
                {t.founder.sinceBadge}
              </p>
              <p className="text-xs uppercase tracking-wider text-dark-brown/50">
                {t.founder.excellence}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              {t.founder.story.map((paragraph, i) => (
                <p
                  key={i}
                  className={`leading-relaxed text-dark-brown/80 ${
                    i === t.founder.story.length - 1
                      ? "font-[family-name:var(--font-cormorant)] text-2xl font-medium text-maroon"
                      : "text-lg"
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {t.founder.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-gold/15 bg-cream p-4 text-center"
                >
                  <p className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-gold">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-dark-brown/50">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
