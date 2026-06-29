"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, ExternalLink } from "lucide-react";
import { siteConfig, services } from "@/data/site-data";
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
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingForm>();

  const onSubmit = async (data: BookingForm) => {
    const text = encodeURIComponent(
      `New Booking Request\n\nName: ${data.name}\nPhone: ${data.phone}\nEvent: ${data.eventType}\nDate: ${data.date}\nLocation: ${data.location}\nMessage: ${data.message}`
    );
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${text}`, "_blank");
    reset();
  };

  return (
    <section id="booking" className="relative bg-dark-brown py-24 md:py-32">
      <div className="spotlight absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label="Book Now"
          title="Let's Create Your Next Memory"
          subtitle="Book Puthu Roja Orchestra for your celebration"
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
                <p className="text-xs uppercase tracking-wider text-cream/50">Call Us</p>
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
                <p className="text-xs uppercase tracking-wider text-cream/50">WhatsApp</p>
                <p className="text-lg font-medium text-ivory">Message Us Directly</p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-xl border border-gold/20 bg-maroon/20 p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15">
                <MapPin size={20} className="text-gold" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-cream/50">Location</p>
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
                <p className="text-xs uppercase tracking-wider text-cream/50">Instagram</p>
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
                  Your Name
                </label>
                <input
                  {...register("name", { required: "Name is required" })}
                  className="w-full rounded-xl border border-gold/15 bg-dark-brown/40 px-4 py-3 text-ivory placeholder:text-cream/30 focus:border-gold/40 focus:outline-none"
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-cream/50">
                  Phone Number
                </label>
                <input
                  {...register("phone", { required: "Phone is required" })}
                  className="w-full rounded-xl border border-gold/15 bg-dark-brown/40 px-4 py-3 text-ivory placeholder:text-cream/30 focus:border-gold/40 focus:outline-none"
                  placeholder="Your phone number"
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>
                )}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-cream/50">
                  Event Type
                </label>
                <select
                  {...register("eventType", { required: "Please select an event type" })}
                  className="w-full rounded-xl border border-gold/15 bg-dark-brown/40 px-4 py-3 text-ivory focus:border-gold/40 focus:outline-none"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select event type
                  </option>
                  {services.map((s) => (
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
                  Event Date
                </label>
                <input
                  type="date"
                  {...register("date", { required: "Date is required" })}
                  className="w-full rounded-xl border border-gold/15 bg-dark-brown/40 px-4 py-3 text-ivory focus:border-gold/40 focus:outline-none"
                />
                {errors.date && (
                  <p className="mt-1 text-xs text-red-400">{errors.date.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-cream/50">
                Event Location
              </label>
              <input
                {...register("location", { required: "Location is required" })}
                className="w-full rounded-xl border border-gold/15 bg-dark-brown/40 px-4 py-3 text-ivory placeholder:text-cream/30 focus:border-gold/40 focus:outline-none"
                placeholder="City / Venue name"
              />
              {errors.location && (
                <p className="mt-1 text-xs text-red-400">{errors.location.message}</p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-cream/50">
                Message
              </label>
              <textarea
                {...register("message")}
                rows={4}
                className="w-full resize-none rounded-xl border border-gold/15 bg-dark-brown/40 px-4 py-3 text-ivory placeholder:text-cream/30 focus:border-gold/40 focus:outline-none"
                placeholder="Tell us about your event..."
              />
            </div>

            <GoldButton type="submit" className="w-full sm:w-auto">
              {isSubmitting ? "Sending..." : "Book Now via WhatsApp"}
            </GoldButton>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
