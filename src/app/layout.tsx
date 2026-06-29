import type { Metadata } from "next";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import { Providers } from "@/components/Providers";
import { absoluteUrl, SITE_URL } from "@/lib/site-url";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const ogImage = absoluteUrl("/images/poster.png");

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Puthu Roja Orchestra | Creating Musical Memories Since 1996",
  description:
    "Puthu Roja Orchestra — Live music for weddings, temple festivals, corporate events, and every special occasion across Tamil Nadu. Founded by Thirupathi Rajan.",
  keywords: [
    "Puthu Roja Orchestra",
    "live music Tamil Nadu",
    "wedding orchestra Kovilpatti",
    "temple festival music",
    "Thirupathi Rajan",
  ],
  openGraph: {
    title: "Puthu Roja Orchestra",
    description: "Creating Musical Memories Since 1996 — Live orchestra for every celebration",
    type: "website",
    url: SITE_URL,
    siteName: "Puthu Roja Orchestra",
    locale: "en_IN",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Puthu Roja Orchestra — Live music since 1996",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Puthu Roja Orchestra",
    description: "Creating Musical Memories Since 1996",
    images: [ogImage],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${poppins.variable}`}>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
