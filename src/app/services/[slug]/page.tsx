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

const BASE_URL = "https://toiture-site.vercel.app";

const serviceMetaOverrides: Record<
  string,
  { description: string; keywords: string[] }
> = {
  "pose-toiture": {
    description:
      "Pose de toitures neuves à Bruxelles et en Belgique — tuiles terre cuite, ardoises naturelles, zinc prépatiné RHEINZINK® et membrane EPDM. Conforme NBN B 62-002. Garantie décennale. Devis gratuit 48h.",
    keywords: [
      "pose toiture neuve bruxelles",
      "couvreur tuiles ardoises zinc",
      "toiture epdm belgique",
      "nbn b 62-002",
      "rheinzink belgique",
      "pose toiture garantie décennale",
    ],
  },
  renovation: {
    description:
      "Rénovation lourde de toiture et charpente à Bruxelles et en Belgique. Diagnostic structurel photographié, remplacement de charpente, traitement fongicide certifié Ctb-B+. Aucune sous-traitance. Garantie décennale.",
    keywords: [
      "rénovation toiture bruxelles",
      "remplacement charpente belgique",
      "traitement bois ctb-b+",
      "diagnostic charpente photographié",
      "couvreur rénovation hainaut namur",
      "garantie décennale toiture",
    ],
  },
  isolation: {
    description:
      "Isolation thermique de toiture et amélioration PEB à Bruxelles et en Belgique — sarking R ≥ 6 m²K/W. Primes régionales 2025 jusqu'à 7 200 € en Wallonie. Dossier PEB inclus. Devis gratuit.",
    keywords: [
      "isolation toiture sarking bruxelles",
      "prime isolation toiture wallonie 2025",
      "peb toiture belgique",
      "isolation pir pur r6",
      "renolution bruxelles isolation",
      "myrenovbonus isolation toiture",
    ],
  },
  zinguerie: {
    description:
      "Zinguerie et finitions métalliques à Bruxelles et en Belgique — gouttières zinc naturel, aluminium laqué ou cuivre, fabrication sur mesure. Réparation de fuites sans dépose de couverture. NBN EN 988.",
    keywords: [
      "zinguerie bruxelles",
      "gouttières zinc naturel belgique",
      "chéneau aluminium laqué",
      "couvreur zingueur certifié",
      "réparation fuite toiture belgique",
      "nbn en 988 zinc bâtiment",
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
    title: `${service.title} — Couvreur Expert Belgique`,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      locale: "fr_BE",
      url: canonicalUrl,
      siteName: "Toiture Expert Belgique",
      title: `${service.title} — Couvreur Expert Belgique`,
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
      title: `${service.title} — Couvreur Expert Belgique`,
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
