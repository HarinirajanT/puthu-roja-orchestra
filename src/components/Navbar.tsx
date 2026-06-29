"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site-data";
import { GoldButton } from "./ui/SectionHeading";

export function Navbar() {
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

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-cream/70 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <GoldButton href="#booking" variant="solid" className="!px-6 !py-2.5 !text-xs">
            Book Now
          </GoldButton>
        </div>

        <button
          className="text-ivory lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
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
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-3 text-cream/80 transition-colors hover:bg-gold/10 hover:text-gold"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="mt-2 rounded-full bg-gold px-6 py-3 text-center text-sm font-semibold text-dark-brown"
              >
                Call {siteConfig.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
