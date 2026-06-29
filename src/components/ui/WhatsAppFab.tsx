"use client";

import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site-data";
import { useLanguage } from "@/context/LanguageProvider";

const WHATSAPP_MESSAGE =
  "Vanakkam! I would like to book Puthu Roja Orchestra for my event.";

export function WhatsAppFab() {
  const { t } = useLanguage();
  const phoneHref = `tel:${siteConfig.phone.replace(/\s/g, "")}`;
  const whatsappHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div className="fixed right-4 bottom-4 left-4 z-40 flex gap-2 lg:hidden">
      <a
        href={phoneHref}
        className="flex flex-1 items-center justify-center gap-2 rounded-full border border-gold/30 bg-dark-brown/95 py-3.5 text-sm font-semibold text-ivory shadow-lg shadow-black/30 backdrop-blur-md transition-transform active:scale-[0.98]"
        aria-label={`${t.whatsappFab.call} ${siteConfig.phone}`}
      >
        <Phone size={18} className="text-gold" />
        {t.whatsappFab.call}
      </a>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-[1.4] items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/30 transition-transform active:scale-[0.98]"
        aria-label={`${t.whatsappFab.book} via WhatsApp`}
      >
        <MessageCircle size={18} />
        {t.whatsappFab.book}
      </a>
    </div>
  );
}
