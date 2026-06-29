"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/data/site-data";
import { SectionHeading } from "./ui/SectionHeading";

export function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-maroon py-24 md:py-32">
      <div className="spotlight absolute inset-0 opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Testimonials"
          title="Words from Our Families"
          subtitle="Real stories from celebrations we've been part of"
          light
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl border border-gold/20 bg-ivory/5 p-8 backdrop-blur-sm transition-all hover:border-gold/40 hover:bg-ivory/10"
            >
              <div className="absolute top-6 right-6 font-[family-name:var(--font-cormorant)] text-6xl leading-none text-gold/10">
                &ldquo;
              </div>

              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-gold text-gold" />
                ))}
              </div>

              <p className="relative text-cream/90 leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="mt-6 border-t border-gold/10 pt-6">
                <p className="font-[family-name:var(--font-cormorant)] text-lg font-semibold text-ivory">
                  — {t.author}
                </p>
                <p className="mt-1 text-xs text-cream/50">
                  {t.event} · {t.location} · {t.year}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
