import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesPageContent from "@/components/ServicesPageContent";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Services de maçonnerie — Neuve, Rénovation, Façades & Terrasses",
  description:
    "Découvrez nos 4 services de maçonnerie : construction neuve (briques, parpaings, béton), rénovation et ravalement, isolation de façades ITE et terrasses & dallage. Maçon certifié, garantie décennale, devis gratuit 48h.",
  keywords: [
    "services maçonnerie belgique",
    "maçonnerie neuve bruxelles",
    "rénovation façade belgique",
    "isolation ite primes",
    "terrasse dallage belgique",
    "maçon certifié constructiv",
    "garantie décennale belgique",
    "devis maçonnerie gratuit",
  ],
  alternates: {
    canonical: "https://m-build-360.vercel.app/services",
  },
  openGraph: {
    type: "website",
    locale: "fr_BE",
    url: "https://m-build-360.vercel.app/services",
    siteName: "M Build 360",
    title: "Services de maçonnerie — Neuve, Rénovation, Façades & Terrasses",
    description:
      "Maçonnerie neuve, rénovation, isolation de façades ITE et terrasses. Maçon certifié depuis 2009. Garantie décennale. Devis gratuit 48h.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Services de maçonnerie — M Build 360",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services de maçonnerie — M Build 360",
    description:
      "Maçonnerie neuve, rénovation, isolation ITE et terrasses. Devis gratuit 48h. Garantie décennale.",
    images: ["/og-image.jpg"],
  },
};

export default function ServicesPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">Aller au contenu principal</a>
      <Navbar />
      <main id="main-content">
        <ServicesPageContent />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
