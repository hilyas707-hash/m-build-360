"use client";

const BASE_URL = "https://m-build-360.vercel.app";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${BASE_URL}/#business`,
  name: "M Build 360",
  description:
    "Expert en maçonnerie depuis 15 ans. Maçonnerie neuve, rénovation de façades, ravalement, terrasses et dallage. Garantie décennale. Devis gratuit en 48h.",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/logo.png`,
    width: 200,
    height: 60,
  },
  image: `${BASE_URL}/og-image.jpg`,
  telephone: "+3200000000",
  email: "info@m-build-360.be",
  priceRange: "€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Espèces, Virement bancaire, Domiciliation",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rue de la Maçonnerie 1",
    addressLocality: "Bruxelles",
    postalCode: "1000",
    addressRegion: "Bruxelles-Capitale",
    addressCountry: "BE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.8503,
    longitude: 4.3517,
  },
  areaServed: [
    { "@type": "City",                name: "Bruxelles"       },
    { "@type": "AdministrativeArea",  name: "Brabant wallon"  },
    { "@type": "AdministrativeArea",  name: "Brabant flamand" },
    { "@type": "AdministrativeArea",  name: "Hainaut"         },
    { "@type": "AdministrativeArea",  name: "Namur"           },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "13:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services de maçonnerie",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Maçonnerie neuve",
          url: `${BASE_URL}/services/maconnerie-neuve`,
          description: "Construction de murs, cloisons, fondations et structures en briques, parpaings ou béton. Conforme aux normes NBN belges.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Rénovation & restauration",
          url: `${BASE_URL}/services/renovation`,
          description: "Ravalement, rejointoiement de briques, réparation de fissures et restauration de façades anciennes.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Façades & isolation thermique par l'extérieur",
          url: `${BASE_URL}/services/facades`,
          description: "Isolation thermique par l'extérieur (ITE), crépis minéraux et organiques, enduits de finition. Primes régionales disponibles.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Terrasses & dallage",
          url: `${BASE_URL}/services/terrasses`,
          description: "Pose de carrelage extérieur, pavés naturels et béton désactivé. Terrasses, allées et cours.",
        },
      },
    ],
  },
  foundingDate: "2009",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 5,
    maxValue: 25,
  },
  sameAs: [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: "M Build 360",
  description: "Expert en maçonnerie à Bruxelles et en Belgique. Maçonnerie neuve, rénovation, façades et dallage. Garantie décennale.",
  inLanguage: "fr-BE",
  publisher: { "@id": `${BASE_URL}/#business` },
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil",            item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Services",           item: `${BASE_URL}/services` },
    { "@type": "ListItem", position: 3, name: "Maçonnerie neuve",   item: `${BASE_URL}/services/maconnerie-neuve` },
    { "@type": "ListItem", position: 4, name: "Rénovation",         item: `${BASE_URL}/services/renovation` },
    { "@type": "ListItem", position: 5, name: "Façades",            item: `${BASE_URL}/services/facades` },
    { "@type": "ListItem", position: 6, name: "Terrasses",          item: `${BASE_URL}/services/terrasses` },
  ],
};

export default function StructuredData() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
