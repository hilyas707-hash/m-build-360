import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesPageContent from "@/components/ServicesPageContent";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Services de toiture — Pose, Rénovation, Isolation & Zinguerie",
  description:
    "Découvrez nos 4 services de toiture : pose de tuiles, ardoises et zinc, rénovation lourde de charpente, isolation thermique PEB jusqu'à 7 200 € de primes, et zinguerie sur mesure. Couvreur certifié, garantie décennale, devis gratuit 48h.",
  keywords: [
    "services toiture belgique",
    "pose toiture bruxelles",
    "rénovation charpente belgique",
    "isolation sarking peb primes",
    "zinguerie gouttières zinc",
    "couvreur certifié constructiv",
    "garantie décennale belgique",
    "devis couvreur gratuit",
  ],
  alternates: {
    canonical: "https://toiture-site.vercel.app/services",
  },
  openGraph: {
    type: "website",
    locale: "fr_BE",
    url: "https://toiture-site.vercel.app/services",
    siteName: "Toiture Expert Belgique",
    title: "Services de toiture — Pose, Rénovation, Isolation & Zinguerie",
    description:
      "Pose, rénovation, isolation thermique PEB et zinguerie. Couvreur expert certifié depuis 2004. Garantie décennale. Devis gratuit 48h.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Services de toiture — Toiture Expert Belgique",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services de toiture — Toiture Expert Belgique",
    description:
      "Pose, rénovation, isolation thermique PEB et zinguerie. Devis gratuit 48h. Garantie décennale.",
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
