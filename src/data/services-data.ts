export interface ServicePrime {
  region: string;
  montant: string;
  conditions: string;
  url: string;
}

export interface ServiceNorm {
  code: string;
  description: string;
}

export interface ServicePortfolioItem {
  src: string;
  alt: string;
  caption: string;
}

export interface ServiceOfficialLink {
  label: string;
  url: string;
}

export interface ServiceData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  longDescription: string[];
  expertNote: string;
  includes: string[];
  norms: ServiceNorm[];
  primes: ServicePrime[];
  officialLinks: ServiceOfficialLink[];
  portfolio: ServicePortfolioItem[];
  image: string;
  imageAlt: string;
  tags: string[];
}

export const servicesData: ServiceData[] = [
  {
    id: "01",
    slug: "maconnerie-neuve",
    title: "Maçonnerie neuve",
    subtitle: "Briques · Parpaings · Béton armé",
    shortDescription:
      "Construction de murs porteurs, cloisons, fondations et structures complètes en briques, parpaings ou béton armé. Conforme aux normes NBN belges.",
    longDescription: [
      "La maçonnerie neuve exige une maîtrise totale des matériaux et des techniques de mise en œuvre conformes aux normes belges en vigueur. Nous intervenons sur tous les types de structures : fondations en béton armé, murs porteurs en briques de parement ou parpaings hourdés, cloisons intérieures, linteaux et poutres en béton. Chaque projet débute par une analyse du sol et un calcul des charges selon l'Eurocode 2 et 6.",
      "Les matériaux sont sélectionnés selon les contraintes du chantier : briques Wienerberger ou Vandersanden pour les façades, blocs béton Ytong ou Besix pour les cloisons, béton C25/30 ou C30/37 pour les éléments structurels. Les coffrages sont réalisés en régie interne par notre équipe. Aucune sous-traitance sur les travaux structurels.",
      "À la livraison, vous recevez un procès-verbal de réception photographié, les fiches techniques de tous les matériaux posés, et l'attestation de garantie décennale couvrant les vices structurels pendant 10 ans.",
    ],
    expertNote:
      "Notre chef maçon est certifié Constructiv (formation obligatoire depuis 2018 pour les entreprises générales de construction en Belgique). Cette certification garantit une connaissance actualisée des normes NBN et des règles de l'art belges.",
    includes: [
      "Diagnostic préalable et plan d'exécution détaillé",
      "Terrassement et fondations en béton armé",
      "Pose des maçonneries portantes et cloisons",
      "Linteaux, poutres et chaînages en béton",
      "Nettoyage et évacuation des gravats",
    ],
    norms: [
      { code: "NBN EN 1996",  description: "Eurocode 6 — Calcul des ouvrages en maçonnerie" },
      { code: "NBN EN 1992",  description: "Eurocode 2 — Calcul des structures en béton" },
      { code: "CSTC NIT 214", description: "Maçonneries de briques en Belgique" },
    ],
    primes: [
      { region: "Wallonie", montant: "Selon travaux", conditions: "Travaux de gros œuvre certifiés", url: "https://energie.wallonie.be" },
      { region: "Bruxelles", montant: "Selon travaux", conditions: "Entrepreneur enregistré", url: "https://renolution.brussels" },
    ],
    officialLinks: [
      { label: "CSTC — Centre Scientifique et Technique de la Construction", url: "https://www.cstc.be" },
      { label: "Constructiv — Formation professionnelle construction", url: "https://www.constructiv.be" },
    ],
    portfolio: [
      { src: "https://picsum.photos/seed/m360-neuve-a/900/675", alt: "Construction murs porteurs briques", caption: "Murs porteurs — briques de parement Vandersanden" },
      { src: "https://picsum.photos/seed/m360-neuve-b/900/675", alt: "Fondations béton armé",              caption: "Fondations — béton armé C30/37" },
      { src: "https://picsum.photos/seed/m360-neuve-c/900/675", alt: "Cloisons parpaings",                 caption: "Cloisons — blocs Ytong 15 cm" },
    ],
    image: "https://picsum.photos/seed/m360-neuve-hero/1200/800",
    imageAlt: "Maçonnerie neuve — construction de murs en briques",
    tags: ["Briques", "Parpaings", "Béton armé", "Fondations", "Garantie décennale"],
  },
  {
    id: "02",
    slug: "renovation",
    title: "Rénovation & restauration",
    subtitle: "Ravalement · Rejointoiement · Fissures",
    shortDescription:
      "Diagnostic complet, ravalement de façades, rejointoiement de briques et pierres, réparation de fissures structurelles et non-structurelles. Restauration fidèle des façades anciennes.",
    longDescription: [
      "La rénovation de maçonnerie existante nécessite un diagnostic rigoureux avant toute intervention. Nous effectuons une inspection complète de la façade : relevé des fissures (actives ou stabilisées), analyse des joints, détection des zones de décollement par thermographie infrarouge si nécessaire. Ce diagnostic photographié vous est remis avant le démarrage des travaux.",
      "Le ravalement inclut le nettoyage haute pression (100 à 150 bars selon les matériaux), le rebouchage des fissures non-structurelles à la résine époxy ou au mortier de réparation Weber, le rejointoiement complet ou sélectif, et l'application d'un hydrofuge ou d'une peinture de façade selon les souhaits. Pour les façades classées ou de style architectural particulier, nous utilisons des mortiers de chaux hydraulique naturelle (NHL) compatibles avec les pierres et briques anciennes.",
      "Les fissures structurelles font l'objet d'une intervention spécifique : agrafage par fibres de carbone ou renforts métalliques injectés, injection de résine polyuréthane ou cimentaire sous pression, puis reprise de la maçonnerie. Toutes les interventions structurelles sont couvertes par la garantie décennale.",
    ],
    expertNote:
      "Notre équipe est formée à la restauration du patrimoine bâti belge : briques de Boom, pierres bleues de Wallonie, calcaire de Gobertange, façades Art Nouveau bruxelloises. Nous utilisons exclusivement des mortiers de chaux compatibles avec les matériaux anciens.",
    includes: [
      "Diagnostic photographié avant/après",
      "Nettoyage haute pression (100–150 bars)",
      "Rejointoiement briques, pierres et mortiers",
      "Réparation fissures et zones dégradées",
      "Hydrofuge ou peinture de façade (option)",
    ],
    norms: [
      { code: "CSTC NIT 218", description: "Rénovation des façades en maçonnerie" },
      { code: "NBN EN 998-2",  description: "Mortiers de maçonnerie — spécifications" },
      { code: "ASTM C881",     description: "Résines époxy pour réparation structurelle" },
    ],
    primes: [
      { region: "Wallonie", montant: "Prime rénovation", conditions: "Bâtiment >10 ans, entrepreneur certifié", url: "https://energie.wallonie.be" },
      { region: "Bruxelles", montant: "Prime RENOLUTION façade", conditions: "Dossier avant travaux obligatoire", url: "https://renolution.brussels" },
    ],
    officialLinks: [
      { label: "CSTC — NIT Rénovation façades", url: "https://www.cstc.be" },
      { label: "Monuments & Sites Wallonie", url: "https://spw.wallonie.be" },
    ],
    portfolio: [
      { src: "https://picsum.photos/seed/m360-reno-a/900/675", alt: "Ravalement façade briques",       caption: "Ravalement — briques de Boom, rejointoiement NHL" },
      { src: "https://picsum.photos/seed/m360-reno-b/900/675", alt: "Réparation fissures façade",       caption: "Fissures actives — agrafage et injection résine" },
      { src: "https://picsum.photos/seed/m360-reno-c/900/675", alt: "Restauration façade Art Nouveau", caption: "Restauration Art Nouveau — chaux naturelle" },
    ],
    image: "https://picsum.photos/seed/m360-reno-hero/1200/800",
    imageAlt: "Rénovation façade — ravalement et rejointoiement",
    tags: ["Ravalement", "Rejointoiement", "Fissures", "Pierres", "Chaux naturelle"],
  },
  {
    id: "03",
    slug: "facades",
    title: "Façades & isolation",
    subtitle: "ITE · Crépis · Enduits de finition",
    shortDescription:
      "Isolation thermique par l'extérieur (ITE), crépis minéraux et organiques, enduits de finition monocouche ou multicouches. Accès aux primes régionales 2025.",
    longDescription: [
      "L'isolation thermique par l'extérieur (ITE) est la solution la plus efficace pour améliorer l'enveloppe thermique d'un bâtiment sans réduire la surface habitable. Le système consiste à fixer des panneaux isolants sur la façade existante, puis à les recouvrir d'un enduit armé d'une toile de verre et d'une finition crépis. Nous maîtrisons les deux systèmes : ETICS (External Thermal Insulation Composite System) avec panneaux EPS ou laine de roche, et bardage ventilé pour les bâtiments à forte exposition.",
      "Les panneaux isolants sont dimensionnés pour atteindre les valeurs R exigées par la réglementation PEB régionale (R ≥ 4,5 m²K/W en Wallonie, R ≥ 3,5 m²K/W à Bruxelles). Les fixations mécaniques et chimiques sont calculées selon le NIT 253 (CSTC) pour résister aux vents calculés selon l'Eurocode 1. L'ensemble du système est couvert par un Agrément Technique ATG.",
      "Les enduits de finition sont disponibles dans plus de 800 teintes. Textures : monocouche lissé, grésé, rustique ou à la tyrolienne. Nous réalisons également des finitions minérales à base de silicate de potassium (Keim Granital) pour les façades classées ou nécessitant une haute perméabilité à la vapeur.",
    ],
    expertNote:
      "Tous nos systèmes d'ITE sont certifiés ATG (Agrément Technique Belge) et conformes à la norme NBN EN 13499. Cette certification est obligatoire pour accéder aux primes régionales énergie en Belgique en 2025.",
    includes: [
      "Audit thermique et calcul R préalable",
      "Fixation panneaux EPS ou laine de roche",
      "Entoilage treillis de verre anti-fissures",
      "Enduit de finition (800+ teintes disponibles)",
      "Dossier PEB et demande de primes inclus",
    ],
    norms: [
      { code: "NBN EN 13499",  description: "Systèmes d'isolation thermique par l'extérieur (ETICS)" },
      { code: "CSTC NIT 253",  description: "Fixation des systèmes d'isolation de façade" },
      { code: "PEB Wallonie",  description: "Performance Énergétique des Bâtiments — R ≥ 4,5 m²K/W" },
    ],
    primes: [
      { region: "Wallonie",  montant: "Jusqu'à 50 €/m²", conditions: "Revenus catégories 1–3, ATG obligatoire", url: "https://energie.wallonie.be" },
      { region: "Bruxelles", montant: "Jusqu'à 60 €/m²", conditions: "Dossier avant travaux, entrepreneur agréé", url: "https://renolution.brussels" },
      { region: "Flandre",   montant: "Jusqu'à 40 €/m²", conditions: "Via MIJN VERBOUWPREMIE", url: "https://www.vlaanderen.be/premies-voor-energiebesparing" },
    ],
    officialLinks: [
      { label: "CSTC — NIT Isolation façades", url: "https://www.cstc.be" },
      { label: "Energie Wallonie — Primes 2025", url: "https://energie.wallonie.be" },
      { label: "Bruxelles Environnement — RENOLUTION", url: "https://renolution.brussels" },
    ],
    portfolio: [
      { src: "https://picsum.photos/seed/m360-fac-a/900/675", alt: "Isolation thermique par l'extérieur", caption: "ITE — panneaux EPS 14 cm, R = 4,9 m²K/W" },
      { src: "https://picsum.photos/seed/m360-fac-b/900/675", alt: "Crépis et enduits de finition",       caption: "Enduit minéral — texture grésée, teinte RAL" },
      { src: "https://picsum.photos/seed/m360-fac-c/900/675", alt: "Façade avant/après isolation",     caption: "Avant/après — ITE + crépis, gain PEB A" },
    ],
    image: "https://picsum.photos/seed/m360-fac-hero/1200/800",
    imageAlt: "Façades et enduits — isolation thermique extérieure",
    tags: ["ITE", "Crépis", "Enduits", "Primes", "PEB", "ATG"],
  },
  {
    id: "04",
    slug: "terrasses",
    title: "Terrasses & dallage",
    subtitle: "Carrelage · Pavés · Béton désactivé",
    shortDescription:
      "Pose de carrelage extérieur grès cérame, pavés naturels (porphyre, granit, calcaire), béton désactivé ou imprimé. Terrasses, allées, cours et zones de stationnement.",
    longDescription: [
      "La réalisation d'une terrasse ou d'un dallage extérieur requiert une préparation rigoureuse du fond de forme : terrassement, compactage, pose d'un hérisson drainant, dalle en béton armé dosé à 300 kg/m³ ou pose sur plots selon le type de dallage. Chaque projet est dimensionné en fonction des charges, de la pente d'évacuation des eaux (minimum 1,5%) et du type de matériau choisi.",
      "Pour le carrelage extérieur, nous travaillons exclusivement avec du grès cérame pleine masse R11 anti-dérapant (classement UPEC U4P3E2C2). Les formats disponibles vont de 30x30 à 120x60 cm. Pour les pavés naturels, nous sélectionnons des pierres certifiées CE : porphyre belge de Lessines, granit de Chine ou d'Espagne, calcaire de Bourgogne. La pose est réalisée à joint serré ou joint au sable selon l'esthétique souhaitée.",
      "Le béton désactivé est coulé sur place avec une finition par lavage à haute pression pour révéler les granulats (gravier roulé, quartz coloré, ardoise concassée). Cette finition est idéale pour les allées de garage, les zones de stationnement et les accès piétons. Nous proposons également le béton imprimé (pattern béton) pour un rendu décoratif à moindre coût.",
    ],
    expertNote:
      "Tous nos travaux de dallage intègrent une conception de l'évacuation des eaux pluviales conforme à la législation belge sur les surfaces imperméables (ordonnance bruxelloise du 1er mars 2018, décret wallon sur l'eau). Nous prévoyons systématiquement des noues ou des caniveaux de récupération.",
    includes: [
      "Terrassement et préparation fond de forme",
      "Dalle béton armé ou hérisson drainant",
      "Pose carrelage, pavés ou béton désactivé",
      "Joints polymère anti-herbe et anti-insectes",
      "Caniveaux et évacuation eaux pluviales",
    ],
    norms: [
      { code: "NBN EN 1341",   description: "Pavés en pierre naturelle pour revêtement de voirie" },
      { code: "NBN EN ISO 10545", description: "Carreaux céramiques — méthodes d'essai" },
      { code: "CSTC NIT 234",  description: "Revêtements de sol en béton" },
    ],
    primes: [],
    officialLinks: [
      { label: "CSTC — Revêtements extérieurs",      url: "https://www.cstc.be" },
      { label: "Bruxelles — Ordonnance eaux pluviales", url: "https://environnement.brussels" },
    ],
    portfolio: [
      { src: "https://picsum.photos/seed/m360-ter-a/900/675", alt: "Terrasse grès cérame extérieur",      caption: "Terrasse — grès cérame 60x60, R11 anti-dérapant" },
      { src: "https://picsum.photos/seed/m360-ter-b/900/675", alt: "Allée pavés porphyre belge",          caption: "Allée — porphyre belge de Lessines, joint sable" },
      { src: "https://picsum.photos/seed/m360-ter-c/900/675", alt: "Béton désactivé allée de garage",     caption: "Allée garage — béton désactivé granit blanc" },
    ],
    image: "https://picsum.photos/seed/m360-ter-hero/1200/800",
    imageAlt: "Terrasses et dallage — pavés et carrelage extérieur",
    tags: ["Grès cérame", "Porphyre", "Béton désactivé", "Pavés naturels", "Terrasses"],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((s) => s.slug === slug);
}
