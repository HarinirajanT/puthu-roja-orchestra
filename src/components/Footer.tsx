import { siteConfig } from "@/data/site-data";

export function Footer() {
  return (
    <footer className="relative bg-maroon py-16 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,162,39,0.08)_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">
          Since {siteConfig.founded}
        </p>

        <h2 className="mt-6 font-[family-name:var(--font-cormorant)] text-3xl leading-relaxed font-medium text-ivory md:text-4xl">
          Thank you
          <br />
          <span className="text-cream/70">for letting us become</span>
          <br />
          <span className="italic text-gold">a part of your celebrations.</span>
        </h2>

        <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

        <p className="mt-8 font-[family-name:var(--font-cormorant)] text-2xl tracking-wide text-ivory">
          PUTHU <span className="text-gold">ROJA</span> ORCHESTRA
        </p>

        <p className="mt-2 text-sm text-cream/50">{siteConfig.tagline}</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-cream/40">
          <span>Weddings</span>
          <span className="text-gold/30">|</span>
          <span>Receptions</span>
          <span className="text-gold/30">|</span>
          <span>Temple Functions</span>
          <span className="text-gold/30">|</span>
          <span>Corporate Events</span>
          <span className="text-gold/30">|</span>
          <span>Birthday Parties</span>
          <span className="text-gold/30">|</span>
          <span>Private Events</span>
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
            Book Now
          </a>
        </div>

        <p className="mt-10 text-xs text-cream/30">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
