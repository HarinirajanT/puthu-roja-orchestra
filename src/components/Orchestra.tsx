"use client";

import { motion } from "framer-motion";
import { teamRoles, teamFeatured } from "@/data/site-data";
import { useLanguage } from "@/context/LanguageProvider";
import { SectionHeading } from "./ui/SectionHeading";
import { SiteImage } from "./ui/SiteImage";

export function Orchestra() {
  const { t } = useLanguage();

  return (
    <section id="orchestra" className="relative bg-cream py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label={t.orchestra.label}
          title={t.orchestra.title}
          subtitle={t.orchestra.subtitle}
        />

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-xl lg:max-w-none"
          >
            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-gold/25 to-maroon/15" />
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-xl">
              <SiteImage
                image={teamFeatured.image}
                alt={t.orchestra.teamAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/60 via-transparent to-transparent" />
              <div className="absolute right-0 bottom-0 left-0 p-6">
                <p className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-ivory">
                  {t.founder.title}
                </p>
                <p className="text-sm uppercase tracking-wider text-gold">
                  {t.founder.titleRole}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="w-full min-w-0"
          >
            <p className="text-lg leading-relaxed text-dark-brown/80">
              {t.orchestra.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {teamRoles.map((item, i) => (
                <motion.span
                  key={item.role}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-ivory px-4 py-2 text-sm text-dark-brown/80"
                >
                  <span>{item.icon}</span>
                  {t.orchestra.roles[i]}
                </motion.span>
              ))}
            </div>

            <p className="mt-8 text-sm text-dark-brown/50">{t.orchestra.footnote}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
