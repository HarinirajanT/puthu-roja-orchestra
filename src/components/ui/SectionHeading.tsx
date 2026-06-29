"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  title,
  subtitle,
  light = false,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {label && (
        <span
          className={`mb-3 block text-xs font-semibold uppercase tracking-[0.3em] ${
            light ? "text-gold" : "text-gold"
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`font-[family-name:var(--font-cormorant)] text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl ${
          light ? "text-ivory" : "text-dark-brown"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mx-auto mt-4 max-w-2xl text-lg md:text-xl ${
            align === "center" ? "" : "mx-0"
          } ${light ? "text-cream/80" : "text-dark-brown/70"}`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-6 h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
}

interface GoldButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "outline" | "ghost";
  className?: string;
  type?: "button" | "submit";
}

export function GoldButton({
  children,
  href,
  onClick,
  variant = "solid",
  className = "",
  type = "button",
}: GoldButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300";

  const variants = {
    solid:
      "bg-gold text-dark-brown hover:bg-gold/90 hover:shadow-lg hover:shadow-gold/25",
    outline:
      "border border-gold/60 text-gold hover:bg-gold/10 hover:border-gold",
    ghost: "text-gold hover:bg-gold/10",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
