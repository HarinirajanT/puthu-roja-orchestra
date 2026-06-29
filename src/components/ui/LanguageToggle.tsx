"use client";

import { Languages } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { toggleLocale, t } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      className={`inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-dark-brown/40 px-3 py-1.5 text-xs font-semibold text-cream/90 transition-colors hover:border-gold/50 hover:text-gold ${className}`}
      aria-label={`Switch language to ${t.langToggle.switchTo}`}
    >
      <Languages size={14} className="text-gold" />
      {t.langToggle.switchTo}
    </button>
  );
}
