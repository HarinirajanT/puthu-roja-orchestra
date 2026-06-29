"use client";

import { siteConfig } from "@/data/site-data";
import { useLanguage } from "@/context/LanguageProvider";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-maroon py-16 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,162,39,0.08)_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">
          {t.hero.since} {siteConfig.founded}
        </p>

        <h2 className="mt-6 font-[family-name:var(--font-cormorant)] text-3xl leading-relaxed font-medium text-ivory md:text-4xl">
          {t.footer.thankYou1}
          <br />
          <span className="text-cream/70">{t.footer.thankYou2}</span>
          <br />
          <span className="italic text-gold">{t.footer.thankYou3}</span>
        </h2>

        <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

        <p className="mt-8 font-[family-name:var(--font-cormorant)] text-2xl tracking-wide text-ivory">
          PUTHU <span className="text-gold">ROJA</span> ORCHESTRA
        </p>

        <p className="mt-2 text-sm text-cream/50">{siteConfig.tagline}</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-cream/40">
          {t.footer.categories.map((category, i) => (
            <span key={category} className="inline-flex items-center gap-4">
              {i > 0 ? <span className="text-gold/30">|</span> : null}
              {category}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-cream/50">
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="transition-colors hover:text-gold"
          >
            {siteConfig.phone}
          </a>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-gold"
          >
            Instagram
          </a>
          <a href="#booking" className="transition-colors hover:text-gold">
            {t.footer.bookNow}
          </a>
        </div>

        <p className="mt-10 text-xs text-cream/30">
          © {new Date().getFullYear()} {siteConfig.name}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
