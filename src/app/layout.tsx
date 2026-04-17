import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "./structured-data";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
  display: "swap",
  preload: true,
});

const BASE_URL = "https://m-build-360.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    template: "%s | M Build 360",
    default: "M Build 360 — Maçonnerie Complète Bruxelles & Belgique",
  },
  description:
    "Maçon expert depuis 15 ans à Bruxelles et en Belgique. Maçonnerie neuve, rénovation, ravalement de façades, terrasses et dallage. Garantie décennale. Devis gratuit en 48h.",
  keywords: [
    "maçon bruxelles",
    "maçonnerie belgique",
    "maçonnerie neuve bruxelles",
    "rénovation façade belgique",
    "ravalement bruxelles",
    "terrasse dallage belgique",
    "rejointoiement briques belgique",
    "garantie décennale maçon",
    "maçon brabant wallon",
    "isolation façade ite belgique",
    "maçon hainaut namur",
    "devis maçonnerie gratuit",
  ],
  authors: [{ name: "M Build 360", url: BASE_URL }],
  creator: "M Build 360",
  publisher: "M Build 360",
  category: "Construction & Maçonnerie",
  openGraph: {
    type: "website",
    locale: "fr_BE",
    url: BASE_URL,
    siteName: "M Build 360",
    title: "M Build 360 — Maçonnerie Complète Bruxelles & Belgique",
    description:
      "Expert en maçonnerie depuis 15 ans. Maçonnerie neuve, rénovation, façades et dallage. Garantie décennale. Devis gratuit 48h.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "M Build 360 — Maçon professionnel Bruxelles",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "M Build 360 — Maçonnerie Complète Bruxelles & Belgique",
    description:
      "Expert en maçonnerie depuis 15 ans. Maçonnerie neuve, rénovation, façades et dallage. Garantie décennale. Devis gratuit 48h.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      "fr-BE": BASE_URL,
    },
  },
  verification: {
    google: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-BE" className={`${outfit.variable} ${jetbrainsMono.variable}`}>
      <body>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
