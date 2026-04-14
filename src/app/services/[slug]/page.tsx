import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServiceDetailContent from "./ServiceDetailContent";
import { servicesData, getServiceBySlug } from "@/data/services-data";

export function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

const BASE_URL = "https://m-build-360.vercel.app";

const serviceMetaOverrides: Record<
  string,
  { description: string; keywords: string[] }
> = {
  "maconnerie-neuve": {
    description:
      "Maçonnerie neuve à Bruxelles et en Belgique — construction de murs porteurs, fondations et structures en briques, parpaings et béton armé. Conforme Eurocode 6. Garantie décennale. Devis gratuit 48h.",
    keywords: [
      "maçonnerie neuve bruxelles",
      "construction murs porteurs belgique",
      "fondations béton armé bruxelles",
      "maçon briques parpaings belgique",
      "eurocode 6 maçonnerie",
      "garantie décennale maçonnerie",
    ],
  },
  renovation: {
    description:
      "Rénovation et restauration de façades à Bruxelles et en Belgique. Diagnostic photographié, ravalement, rejointoiement de briques et réparation de fissures. Chaux naturelle NHL pour patrimoine. Garantie décennale.",
    keywords: [
      "rénovation façade bruxelles",
      "ravalement façade belgique",
      "rejointoiement briques belgique",
      "réparation fissures façade",
      "restauration patrimoine bâti belge",
      "garantie décennale maçonnerie",
    ],
  },
  facades: {
    description:
      "Isolation thermique de façade par l'extérieur (ITE) à Bruxelles et en Belgique — systèmes ETICS EPS ou laine de roche, crépis et enduits de finition. Primes régionales 2025 jusqu'à 60 €/m². ATG certifié.",
    keywords: [
      "isolation façade ite bruxelles",
      "etics eps laine roche belgique",
      "prime isolation façade wallonie 2025",
      "renolution bruxelles isolation murs",
      "crepis enduit finition belgique",
      "atg certification ite",
    ],
  },
  terrasses: {
    description:
      "Terrasses et dallage à Bruxelles et en Belgique — pose de carrelage grès cérame R11, pavés naturels (porphyre, granit), béton désactivé. Conception drainage conforme législation belge.",
    keywords: [
      "terrasse carrelage extérieur bruxelles",
      "dallage pavés naturels belgique",
      "béton désactivé bruxelles",
      "porphyre lessines belgique",
      "grès cérame extérieur r11",
      "maçon terrasse garantie décennale",
    ],
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  const overrides = serviceMetaOverrides[slug];
  const description = overrides?.description ?? service.shortDescription;
  const keywords = overrides
    ? [...overrides.keywords, ...service.tags]
    : service.tags;

  const canonicalUrl = `${BASE_URL}/services/${slug}`;

  return {
    title: `${service.title} — M Build 360 — Maçon Expert`,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      locale: "fr_BE",
      url: canonicalUrl,
      siteName: "M Build 360",
      title: `${service.title} — M Build 360 — Maçon Expert`,
      description,
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: service.imageAlt,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} — M Build 360 — Maçon Expert`,
      description,
      images: ["/og-image.jpg"],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <a href="#main-content" className="skip-link">Aller au contenu principal</a>
      <Navbar />
      <main id="main-content">
        <ServiceDetailContent service={service} />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
