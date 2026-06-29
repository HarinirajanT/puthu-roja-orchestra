"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { services } from "@/data/site-data";
import { useLanguage } from "@/context/LanguageProvider";
import { SectionHeading } from "./ui/SectionHeading";

const serviceIcons: Record<string, string> = {
  wedding: "💍",
  temple: "🛕",
  corporate: "🏢",
  birthday: "🎂",
  engagement: "💑",
  college: "🎓",
  cultural: "🎭",
  private: "🎵",
  religious: "🪔",
};

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="relative bg-cream py-24 md:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label={t.services.label}
          title={t.services.title}
          subtitle={t.services.subtitle}
        />

        <div className="grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const copy = t.services.items.find((s) => s.id === service.id)!;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="group flex h-full overflow-hidden rounded-2xl border border-gold/10 shadow-md transition-all hover:border-gold/25 hover:shadow-lg"
              >
                <div
                  className={`relative flex h-full min-h-[220px] w-full flex-col justify-end bg-gradient-to-br p-7 ${service.gradient}`}
                >
                  <Sparkles
                    className="absolute top-5 right-5 text-gold/20 transition-colors group-hover:text-gold/35"
                    size={36}
                    strokeWidth={1.5}
                  />

                  <div className="relative z-10">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-xl backdrop-blur-sm transition-all group-hover:border-gold/50 group-hover:bg-gold/20">
                      {serviceIcons[service.id]}
                    </div>
                    <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-ivory">
                      {copy.title}
                    </h3>
                    <p className="mt-1 text-sm text-gold/80">{copy.titleTamil}</p>
                    <p className="mt-3 text-sm leading-relaxed text-cream/75">
                      {copy.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
