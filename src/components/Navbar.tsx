"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site-data";
import { useLanguage } from "@/context/LanguageProvider";
import { GoldButton } from "./ui/SectionHeading";
import { LanguageToggle } from "./ui/LanguageToggle";

const navHrefs = [
  { key: "story" as const, href: "#story" },
  { key: "journey" as const, href: "#journey" },
  { key: "founder" as const, href: "#founder" },
  { key: "watch" as const, href: "#songs" },
  { key: "services" as const, href: "#services" },
  { key: "orchestra" as const, href: "#orchestra" },
  { key: "book" as const, href: "#booking" },
];

export function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark-brown/95 py-3 shadow-lg shadow-black/20 backdrop-blur-md"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#" className="group flex flex-col">
          <span className="font-[family-name:var(--font-cormorant)] text-xl font-bold tracking-wide text-ivory md:text-2xl">
            PUTHU <span className="text-gold">ROJA</span>
          </span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-cream/50">
            Orchestra
          </span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {navHrefs.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-cream/70 transition-colors hover:text-gold"
            >
              {t.nav[link.key]}
            </a>
          ))}
          <LanguageToggle />
          <GoldButton href="#booking" variant="solid" className="!px-6 !py-2.5 !text-xs">
            {t.nav.bookNow}
          </GoldButton>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <LanguageToggle />
          <button
            className="text-ivory"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-dark-brown/98 backdrop-blur-lg lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navHrefs.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-3 text-cream/80 transition-colors hover:bg-gold/10 hover:text-gold"
                >
                  {t.nav[link.key]}
                </a>
              ))}
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="mt-2 rounded-full bg-gold px-6 py-3 text-center text-sm font-semibold text-dark-brown"
              >
                {t.nav.call} {siteConfig.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
