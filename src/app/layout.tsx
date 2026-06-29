import type { Metadata } from "next";
import { Cormorant_Garamond, Poppins } from "next/font/google";
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

export const metadata: Metadata = {
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
    description: "Creating Musical Memories Since 1996",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${poppins.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
