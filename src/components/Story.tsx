"use client";

import { motion } from "framer-motion";
import { story } from "@/data/site-data";
import { SectionHeading } from "./ui/SectionHeading";

export function Story() {
  return (
    <section id="story" className="relative bg-cream py-24 md:py-32">
      <div className="absolute top-0 right-0 left-0 h-24 bg-gradient-to-b from-dark-brown to-transparent opacity-10" />

      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <SectionHeading
          label="Our Story"
          title={story.headline}
          subtitle={story.subheadline}
        />

        <div className="space-y-8">
          {story.paragraphs.map((paragraph, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className={`text-lg leading-relaxed text-dark-brown/80 md:text-xl md:leading-relaxed ${
                i === 0
                  ? "font-[family-name:var(--font-cormorant)] text-2xl font-medium text-dark-brown md:text-3xl"
                  : ""
              }`}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 rounded-2xl border border-gold/20 bg-ivory p-8 text-center shadow-lg shadow-gold/5 md:p-12"
        >
          <p className="font-[family-name:var(--font-cormorant)] text-2xl italic text-maroon md:text-3xl">
            &ldquo;Music That Creates Memories&rdquo;
          </p>
          <div className="mx-auto mt-4 h-px w-12 bg-gold" />
          <p className="mt-4 text-sm uppercase tracking-[0.2em] text-dark-brown/50">
            — Puthu Roja Orchestra
          </p>
        </motion.div>
      </div>
    </section>
  );
}
