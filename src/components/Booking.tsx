"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, ExternalLink } from "lucide-react";
import { siteConfig } from "@/data/site-data";
import { useLanguage } from "@/context/LanguageProvider";
import { SectionHeading, GoldButton } from "./ui/SectionHeading";

interface BookingForm {
  name: string;
  phone: string;
  eventType: string;
  date: string;
  location: string;
  message: string;
}

export function Booking() {
  const { t } = useLanguage();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingForm>();

  const onSubmit = async (data: BookingForm) => {
    const text = t.booking.whatsappTemplate
      .replace("{name}", data.name)
      .replace("{phone}", data.phone)
      .replace("{eventType}", data.eventType)
      .replace("{date}", data.date)
      .replace("{location}", data.location)
      .replace("{message}", data.message || "—");

    window.open(
      `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
    reset();
  };

  return (
    <section id="booking" className="relative bg-dark-brown py-24 md:py-32">
      <div className="spotlight absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label={t.booking.label}
          title={t.booking.title}
          subtitle={t.booking.subtitle}
          light
        />

        <div className="grid gap-12 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 lg:col-span-2"
          >
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-4 rounded-xl border border-gold/20 bg-maroon/20 p-5 transition-all hover:border-gold/40 hover:bg-maroon/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15">
                <Phone size={20} className="text-gold" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-cream/50">{t.booking.callUs}</p>
                <p className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-ivory">
                  {siteConfig.phone}
                </p>
              </div>
            </a>

            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl border border-gold/20 bg-maroon/20 p-5 transition-all hover:border-gold/40 hover:bg-maroon/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15">
                <MessageCircle size={20} className="text-gold" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-cream/50">{t.booking.whatsapp}</p>
                <p className="text-lg font-medium text-ivory">{t.booking.messageDirect}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-xl border border-gold/20 bg-maroon/20 p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15">
                <MapPin size={20} className="text-gold" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-cream/50">{t.booking.location}</p>
                <p className="text-lg font-medium text-ivory">{siteConfig.location}</p>
                <p className="text-sm text-cream/50">{siteConfig.serviceArea}</p>
              </div>
            </div>

            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl border border-gold/20 bg-maroon/20 p-5 transition-all hover:border-gold/40 hover:bg-maroon/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15">
                <ExternalLink size={20} className="text-gold" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-cream/50">{t.booking.instagram}</p>
                <p className="text-lg font-medium text-ivory">@thiru_pathirajan</p>
              </div>
            </a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5 rounded-2xl border border-gold/20 bg-maroon/15 p-8 backdrop-blur-sm lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-cream/50">
                  {t.booking.yourName}
                </label>
                <input
                  {...register("name", { required: t.booking.errors.name })}
                  className="w-full rounded-xl border border-gold/15 bg-dark-brown/40 px-4 py-3 text-ivory placeholder:text-cream/30 focus:border-gold/40 focus:outline-none"
                  placeholder={t.booking.namePlaceholder}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-cream/50">
                  {t.booking.phone}
                </label>
                <input
                  {...register("phone", { required: t.booking.errors.phone })}
                  className="w-full rounded-xl border border-gold/15 bg-dark-brown/40 px-4 py-3 text-ivory placeholder:text-cream/30 focus:border-gold/40 focus:outline-none"
                  placeholder={t.booking.phonePlaceholder}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>
                )}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-cream/50">
                  {t.booking.eventType}
                </label>
                <select
                  {...register("eventType", { required: t.booking.errors.eventType })}
                  className="w-full rounded-xl border border-gold/15 bg-dark-brown/40 px-4 py-3 text-ivory focus:border-gold/40 focus:outline-none"
                  defaultValue=""
                >
                  <option value="" disabled>
                    {t.booking.selectEvent}
                  </option>
                  {t.services.items.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
                {errors.eventType && (
                  <p className="mt-1 text-xs text-red-400">{errors.eventType.message}</p>
                )}
              </div>
              <div>
                <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-cream/50">
                  {t.booking.eventDate}
                </label>
                <input
                  type="date"
                  {...register("date", { required: t.booking.errors.date })}
                  className="w-full rounded-xl border border-gold/15 bg-dark-brown/40 px-4 py-3 text-ivory focus:border-gold/40 focus:outline-none"
                />
                {errors.date && (
                  <p className="mt-1 text-xs text-red-400">{errors.date.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-cream/50">
                {t.booking.eventLocation}
              </label>
              <input
                {...register("location", { required: t.booking.errors.location })}
                className="w-full rounded-xl border border-gold/15 bg-dark-brown/40 px-4 py-3 text-ivory placeholder:text-cream/30 focus:border-gold/40 focus:outline-none"
                placeholder={t.booking.locationPlaceholder}
              />
              {errors.location && (
                <p className="mt-1 text-xs text-red-400">{errors.location.message}</p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-cream/50">
                {t.booking.message}
              </label>
              <textarea
                {...register("message")}
                rows={4}
                className="w-full resize-none rounded-xl border border-gold/15 bg-dark-brown/40 px-4 py-3 text-ivory placeholder:text-cream/30 focus:border-gold/40 focus:outline-none"
                placeholder={t.booking.messagePlaceholder}
              />
            </div>

            <GoldButton type="submit" className="w-full sm:w-auto">
              {isSubmitting ? t.booking.sending : t.booking.submit}
            </GoldButton>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
