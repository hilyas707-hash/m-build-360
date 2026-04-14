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
    slug: "pose-toiture",
    title: "Pose de toitures neuves",
    subtitle: "Tuiles · Ardoises · Zinc · EPDM",
    shortDescription:
      "Installation complète de toitures neuves selon les normes NBN belges. Tuiles terre cuite, ardoises naturelles, zinc prépatiné RHEINZINK® ou membrane EPDM pour toitures plates.",
    longDescription: [
      "L'installation d'une toiture neuve exige une maîtrise totale des matériaux et des techniques de pose conformes aux normes NBN B 62-002 en vigueur en Belgique. Nous intervenons sur tous les types de toitures : pentes faibles (< 15°) en membrane EPDM ou bicouche bitumineux, toitures à pentes moyennes en tuiles béton ou terre cuite Koramic, et toitures ardoisées à forte pente.",
      "Chaque projet débute par une analyse de la charpente existante ou neuve, un calcul de pente selon le NIT 229 (CSTC) et un dimensionnement des écrans sous-toiture haute performance. Les matériaux sont sourcés auprès de fabricants certifiés : Eternit, Koramic, RHEINZINK®, Sika. La fixation mécanique respecte les charges de vent et de neige calculées selon l'Eurocode 1 pour la Belgique (zone géographique et rugosité de terrain).",
      "À la livraison, vous recevez un procès-verbal de réception photographié, les fiches techniques des matériaux posés, et l'attestation de garantie décennale couvrant les vices structurels pendant 10 ans.",
    ],
    expertNote:
      "Notre chef de chantier est certifié Constructiv (anciennement Fonds de Formation Toiture) — formation obligatoire pour les couvreurs professionnels en Belgique depuis 2018. Cette certification garantit une connaissance actualisée des normes NBN et des règles de l'art belges.",
    includes: [
      "Diagnostic préalable et plan de pose détaillé",
      "Fourniture et pose des matériaux sélectionnés",
      "Écran sous-toiture HPV haute performance (SIGA, Tyvek ou équivalent)",
      "Contre-lattage ventilé selon NIT 229 (CSTC)",
      "Fixation mécanique conforme Eurocode 1 (charges vent/neige Belgique)",
      "Évacuation des déchets de chantier et recyclage matières",
      "Procès-verbal de réception photographié + garantie décennale",
    ],
    norms: [
      {
        code: "NBN B 62-002",
        description: "Couvertures de toiture — règles générales belges pour la conception et la mise en œuvre",
      },
      {
        code: "NIT 229 (CSTC)",
        description: "Toitures en pente — écrans de sous-toiture, ventilation et contre-lattage",
      },
      {
        code: "Eurocode 1 — EN 1991",
        description: "Actions sur les structures — charges climatiques de neige et de vent en Belgique",
      },
      {
        code: "NBN EN 14351-1",
        description: "Caractéristiques de performance des fenêtres de toit et lanterneaux",
      },
    ],
    primes: [
      {
        region: "Wallonie",
        montant: "Non applicable seule",
        conditions:
          "La pose neuve sans isolation n'ouvre pas droit aux primes énergie. Combinez avec l'isolation toiture pour débloquer jusqu'à 7 200 € via le Guichet de l'Énergie.",
        url: "https://energie.wallonie.be",
      },
      {
        region: "Bruxelles",
        montant: "Non applicable seule",
        conditions:
          "Identique — la prime RENOLUTION est conditionnée à l'amélioration du niveau PEB. Combinez avec l'isolation pour accéder au programme.",
        url: "https://renolution.brussels",
      },
      {
        region: "Flandre",
        montant: "Non applicable seule",
        conditions:
          "Geen premie voor loutere herplaatsing zonder isolatie. Combineer met dakisolatie voor de MyRenovBonus (crédit fiscal 20–30 %).",
        url: "https://www.energiesparen.be",
      },
    ],
    officialLinks: [
      { label: "CSTC — NIT 229 : Toitures en pente", url: "https://www.cstc.be" },
      { label: "Bureau de Normalisation — NBN B 62-002", url: "https://www.nbn.be" },
      { label: "Constructiv — Certification couvreurs Belgique", url: "https://www.constructiv.be" },
    ],
    portfolio: [
      {
        src: "https://picsum.photos/seed/toiture-pose1/800/560",
        alt: "Pose de tuiles terre cuite en Brabant wallon",
        caption: "Toiture neuve tuiles terre cuite Koramic — Brabant wallon, 2024",
      },
      {
        src: "https://picsum.photos/seed/toiture-pose2/800/560",
        alt: "Pose d'ardoises naturelles à Liège",
        caption: "Ardoises naturelles d'Espagne — Liège, 2024",
      },
      {
        src: "https://picsum.photos/seed/toiture-pose3/800/560",
        alt: "Toiture zinc prépatiné à Bruxelles",
        caption: "Zinc prépatiné RHEINZINK® — Bruxelles, 2023",
      },
    ],
    image: "/images/pose-tuiles.png",
    imageAlt: "Pose de toitures — tuiles terre cuite",
    tags: ["Tuiles", "Ardoises", "Zinc prépatiné", "EPDM", "NBN B 62-002"],
  },
  {
    id: "02",
    slug: "renovation",
    title: "Rénovation lourde & charpente",
    subtitle: "Diagnostic · Structure · Étanchéité",
    shortDescription:
      "Réfection complète de toitures vétustes. Diagnostic structurel photographié, remplacement de charpente, traitement fongicide certifié Ctb-B+. Aucune sous-traitance.",
    longDescription: [
      "La rénovation d'une toiture ancienne est une intervention complexe qui nécessite une approche méthodique. Avant tout engagement, nous réalisons un diagnostic structurel complet : inspection visuelle de la charpente, sondages des éléments porteurs, identification des zones de pourriture ou d'infestation par insectes xylophages. Ce diagnostic est remis sous forme de rapport photographié avec recommandations.",
      "Le remplacement ou le renforcement de la charpente est réalisé en conformité avec l'Eurocode 5 (EN 1995) pour les structures en bois. Le traitement fongicide et insecticide utilise exclusivement des produits certifiés Ctb-B+ agréés en Belgique — certification obligatoire pour les traitements curatifs professionnels. La chaîne de traçabilité (fiche de données de sécurité, certificat applicateur) est documentée pour votre dossier d'assurance.",
      "Toute l'équipe est interne — aucune sous-traitance. Cela nous permet de contrôler la qualité d'exécution à chaque étape et de tenir les délais communiqués lors du devis. La réception des travaux donne lieu à une attestation décennale couvrant les vices structurels pendant 10 ans.",
    ],
    expertNote:
      "La garantie décennale couvre les vices cachés affectant la solidité de l'ouvrage ou le rendant impropre à sa destination (art. 1792 du Code civil belge). Elle est obligatoire pour tout entrepreneur en construction depuis la loi du 9 mai 2019 relative à la responsabilité décennale.",
    includes: [
      "Inspection structurelle photographiée et rapport écrit sous 24h",
      "Démolition et évacuation tri-sélective de l'ancienne couverture",
      "Remplacement ou renforcement des chevrons, pannes et fermes",
      "Traitement fongicide et insecticide certifié Ctb-B+",
      "Pose d'une nouvelle couverture (tuiles, ardoises ou zinc)",
      "Remise aux normes étanchéité, ventilation et écran sous-toiture",
      "Attestation décennale remise à la réception des travaux",
    ],
    norms: [
      {
        code: "Eurocode 5 — EN 1995-1-1",
        description: "Conception et calcul des structures bois — règles générales",
      },
      {
        code: "Ctb-B+ (FCBA/FCBA)",
        description: "Certification traitement du bois contre insectes et champignons lignivores",
      },
      {
        code: "CSTC NIT 221",
        description: "Toitures plates — conception, drainage et étanchéité",
      },
      {
        code: "Loi 9 mai 2019",
        description: "Responsabilité décennale des entrepreneurs en construction en Belgique",
      },
    ],
    primes: [
      {
        region: "Wallonie",
        montant: "Prime HABITATION jusqu'à 10 000 €",
        conditions:
          "Prime travaux de toiture pour logement de plus de 15 ans. Conditions de revenus applicables. Dossier via le guichet unique communal de votre commune.",
        url: "https://logement.wallonie.be",
      },
      {
        region: "Bruxelles",
        montant: "Programme RENOLUTION",
        conditions:
          "Travaux d'entretien et de rénovation de toiture éligibles sous conditions RENOLUTION Brussels. Taux variable selon les revenus du ménage (catégories 1 à 3).",
        url: "https://renolution.brussels",
      },
      {
        region: "Flandre",
        montant: "Renovatiepremie",
        conditions:
          "Renovatiepremie pour travaux de toiture sur logement de plus de 20 ans. Via le Vlaams Woningfonds ou les services communaux compétents.",
        url: "https://www.wonenvlaanderen.be",
      },
    ],
    officialLinks: [
      { label: "CSTC — Documentation charpente et structures bois", url: "https://www.cstc.be" },
      { label: "Certificat Ctb-B+ — traitement bois certifié", url: "https://www.ctbp.fr" },
      { label: "SPF Economie — Garantie décennale en Belgique", url: "https://economie.fgov.be" },
    ],
    portfolio: [
      {
        src: "https://picsum.photos/seed/renovation-hainaut1/800/560",
        alt: "Charpente traditionnelle rénovée en Hainaut",
        caption: "Remplacement charpente traditionnelle — Hainaut, 2024",
      },
      {
        src: "https://picsum.photos/seed/renovation-namur2/800/560",
        alt: "Rénovation lourde à Namur",
        caption: "Réfection complète traitement bois Ctb-B+ — Namur, 2024",
      },
      {
        src: "https://picsum.photos/seed/renovation-mons3/800/560",
        alt: "Charpente neuve fermettes à Mons",
        caption: "Pose fermettes industrielles certifiées — Mons, 2023",
      },
    ],
    image: "/images/renovation-charpente.png",
    imageAlt: "Rénovation lourde — charpente en bois",
    tags: ["Charpente", "Fermettes", "Ctb-B+", "Eurocode 5", "Garantie décennale"],
  },
  {
    id: "03",
    slug: "isolation",
    title: "Isolation thermique & PEB",
    subtitle: "Sarking · Entre-chevrons · Certification PEB",
    shortDescription:
      "Amélioration PEB par isolation toiture — sarking R ≥ 6 m²K/W. Accès aux primes régionales 2025 jusqu'à 7 200 € en Wallonie. Dossier PEB inclus dans la mission.",
    longDescription: [
      "L'isolation de la toiture représente le levier le plus efficace pour améliorer la performance énergétique d'un bâtiment : jusqu'à 30 % des déperditions thermiques d'une maison non rénovée passent par la toiture. Deux techniques sont maîtrisées en interne selon la configuration de vos combles et les objectifs de performance.",
      "L'isolation par l'extérieur (sarking) consiste à poser des panneaux isolants rigides (PIR ou PUR) au-dessus des chevrons, sous la latte de couverture. Cette méthode préserve intégralement l'espace habitable, supprime les ponts thermiques au droit des chevrons, et atteint facilement R ≥ 6 m²K/W — seuil requis pour les primes Wallonie 2025. Pour les combles perdus ou non aménageables, l'isolation entre chevrons par panneaux semi-rigides de laine minérale ou soufflage de ouate de cellulose est plus économique.",
      "Nous coordonnons ou réalisons intégralement le dossier PEB (Performance Énergétique des Bâtiments) pour l'accès aux primes régionales. En Wallonie, ce dossier est déposé auprès du Guichet de l'Énergie. À Bruxelles, via le portail MyBrussels dans le cadre de RENOLUTION. En Flandre, la MyRenovBonus est un crédit fiscal déclaré à l'impôt des personnes physiques.",
    ],
    expertNote:
      "Depuis janvier 2023, la Wallonie exige R ≥ 6 m²K/W (au lieu de R ≥ 4,5 m²K/W) pour l'accès aux primes isolation toiture. Vérifiez que votre devis précise bien la valeur R obtenue avec le produit proposé, pas seulement l'épaisseur nominale.",
    includes: [
      "Audit thermique préalable (thermographie IR disponible sur demande)",
      "Calcul de la valeur R cible selon les normes PEB régionales",
      "Isolation sarking PIR/PUR ou entre chevrons laine minérale/ouate",
      "Traitement des ponts thermiques (acrotères, rives, solins)",
      "Pare-vapeur et membrane d'étanchéité à l'air certifiée",
      "Constitution et dépôt du dossier PEB auprès de l'administration",
      "Demande de primes régionales incluse dans la mission",
    ],
    norms: [
      {
        code: "PEB Wallonie 2024",
        description: "R ≥ 6 m²K/W pour toitures en pente — seuil obligatoire pour les primes isolation",
      },
      {
        code: "PEB Bruxelles 2024",
        description: "U ≤ 0,20 W/m²K pour toitures et planchers sous toiture non chauffée",
      },
      {
        code: "NBN EN ISO 6946",
        description: "Composants et parois de bâtiments — calcul de la résistance et de la transmission thermiques",
      },
      {
        code: "NBN EN ISO 13788",
        description: "Performances hygrothermiques — méthode de calcul risque de condensation superficielle et interne",
      },
    ],
    primes: [
      {
        region: "Wallonie",
        montant: "Jusqu'à 7 200 €",
        conditions:
          "Prime ÉNERGIE isolation toiture : 30 €/m² pour R ≥ 6 m²K/W, plafonnée à 7 200 €. Aucune condition de revenus pour les travaux de toiture. Dossier via Guichet de l'Énergie Wallonie.",
        url: "https://energie.wallonie.be",
      },
      {
        region: "Bruxelles",
        montant: "Jusqu'à 5 000 €",
        conditions:
          "Prime RENOLUTION isolation toiture : de 20 à 40 €/m² selon revenus du ménage. U ≤ 0,20 W/m²K requis. Demande via portail MyBrussels Renolution.",
        url: "https://renolution.brussels",
      },
      {
        region: "Flandre",
        montant: "MyRenovBonus 20–30 %",
        conditions:
          "Crédit d'impôt MyRenovBonus de 20 à 30 % sur les travaux d'isolation toiture. R ≥ 4,5 m²K/W requis. Déclaré annuellement via l'impôt des personnes physiques.",
        url: "https://www.energiesparen.be/myrenovbonus",
      },
    ],
    officialLinks: [
      { label: "Guichet de l'Énergie Wallonie — primes 2025", url: "https://energie.wallonie.be" },
      { label: "Bruxelles Environnement — RENOLUTION", url: "https://renolution.brussels" },
      { label: "Vlaanderen Energiesparen — MyRenovBonus", url: "https://www.energiesparen.be" },
      { label: "SPF Economie — Réglementation énergie", url: "https://economie.fgov.be/fr/themes/energie" },
    ],
    portfolio: [
      {
        src: "https://picsum.photos/seed/isolation-ott1/800/560",
        alt: "Isolation sarking PIR à Ottignies-Louvain-la-Neuve",
        caption: "Sarking PIR 200 mm (R = 8,7 m²K/W) — Ottignies, 2024",
      },
      {
        src: "https://picsum.photos/seed/isolation-wav2/800/560",
        alt: "Isolation entre chevrons ouate de cellulose à Wavre",
        caption: "Ouate de cellulose soufflée 300 mm — Wavre, 2024",
      },
      {
        src: "https://picsum.photos/seed/isolation-lln3/800/560",
        alt: "Finition sarking avec ardoises à Louvain-la-Neuve",
        caption: "Sarking + ardoises naturelles — Louvain-la-Neuve, 2023",
      },
    ],
    image: "/images/isolation-thermique.jpg",
    imageAlt: "Isolation thermique — pose de panneaux isolants",
    tags: ["Sarking", "PIR/PUR", "PEB", "R ≥ 6 m²K/W", "Primes 2025"],
  },
  {
    id: "04",
    slug: "zinguerie",
    title: "Zinguerie & finitions métalliques",
    subtitle: "Gouttières · Noues · Faîtages · Chéneaux",
    shortDescription:
      "Fabrication sur mesure et pose de zinguerie en zinc naturel, aluminium laqué ou cuivre. Réparation de fuites ciblées sans dépose de couverture existante.",
    longDescription: [
      "La zinguerie regroupe l'ensemble des éléments métalliques assurant l'étanchéité périphérique et l'évacuation des eaux de toiture. Un défaut de zinguerie est responsable de la majorité des infiltrations constatées en Belgique — souvent davantage que la couverture elle-même. Nous fabriquons et posons tous ces éléments sur mesure, en atelier ou directement sur chantier selon la complexité des formes.",
      "Les matériaux sont choisis en fonction des contraintes architecturales, environnementales et budgétaires. Le zinc naturel (RHEINZINK® ou VM Zinc) offre une durée de vie de 60 à 80 ans en Belgique grâce à sa patine naturelle protectrice. L'aluminium laqué (RAL au choix) convient aux architectures contemporaines avec une durée de vie de 30 à 40 ans. Le cuivre est réservé aux bâtiments classés ou à haute valeur patrimoniale. L'acier galvanisé prélaqué reste la solution économique pour les constructions industrielles et les bâtiments agricoles.",
      "Nous intervenons également sans dépose complète de toiture pour les réparations ciblées : remplacement d'une noue dégradée, rejointoiement d'un solin, réparation d'un chéneau fuyant. Un diagnostic par caméra d'inspection thermique peut être proposé pour localiser les infiltrations difficiles à détecter visuellement.",
    ],
    expertNote:
      "La durée de vie d'une gouttière en zinc naturel est de 60 à 80 ans en Belgique (45 à 60 ans en zone côtière exposée aux embruns). En aluminium laqué : 30 à 40 ans. En PVC : 15 à 25 ans maximum. Le choix du matériau impacte directement le coût sur le cycle de vie complet du bâtiment.",
    includes: [
      "Gouttières carrées et demi-rondes sur mesure (zinc, aluminium, cuivre)",
      "Descentes d'eau avec raccords, coudes et crépines emboutis",
      "Noues, faîtages et arêtiers soudés à l'étain ou à la flamme",
      "Solins, bavettes, tablettes de fenêtre et tabatières",
      "Joints de dilatation selon NBN EN 988 (espacement ≤ 6 m)",
      "Test d'étanchéité à l'eau après pose documenté",
      "Nettoyage haute pression en fin de chantier",
    ],
    norms: [
      {
        code: "NBN EN 988",
        description: "Zinc et alliages de zinc — spécifications pour le zinc laminé destiné aux bâtiments",
      },
      {
        code: "NIT 191 (CSTC)",
        description: "Les gouttières et tuyaux de descente — conception et mise en œuvre",
      },
      {
        code: "NBN EN 612",
        description: "Gouttières et tuyaux de descente en métal — définitions et spécifications techniques",
      },
      {
        code: "EN 1462",
        description: "Supports de gouttières — exigences mécaniques et méthodes d'essai",
      },
    ],
    primes: [
      {
        region: "Wallonie",
        montant: "Non éligible en standalone",
        conditions:
          "Les travaux de zinguerie seule ne sont pas éligibles aux primes énergie. Ils peuvent être intégrés dans un dossier de rénovation globale ouvrant droit à d'autres primes.",
        url: "https://energie.wallonie.be",
      },
      {
        region: "Bruxelles",
        montant: "Non éligible en standalone",
        conditions:
          "Pas de prime spécifique pour la zinguerie. Consultez RENOLUTION Brussels pour les projets de rénovation globale combinant isolation et finitions.",
        url: "https://renolution.brussels",
      },
      {
        region: "Flandre",
        montant: "Non éligible en standalone",
        conditions:
          "Geen specifieke premie voor dakgoten en zinkwerk alleen. Combineer met isolatiewerken voor de MyRenovBonus.",
        url: "https://www.energiesparen.be",
      },
    ],
    officialLinks: [
      { label: "CSTC — NIT 191 : Gouttières et tuyaux de descente", url: "https://www.cstc.be" },
      { label: "Bureau de Normalisation — NBN EN 988 zinc", url: "https://www.nbn.be" },
      { label: "VMZINC Belgique — guide technique zinc", url: "https://www.vmzinc.be" },
    ],
    portfolio: [
      {
        src: "https://picsum.photos/seed/zinc-uccle1/800/560",
        alt: "Gouttières zinc naturel pré-patiné sur villa à Uccle",
        caption: "Gouttières zinc naturel pré-patiné — Uccle, 2024",
      },
      {
        src: "https://picsum.photos/seed/zinc-leuven2/800/560",
        alt: "Chéneau en aluminium laqué gris anthracite à Louvain",
        caption: "Chéneau aluminium RAL 7016 anthracite — Louvain, 2024",
      },
      {
        src: "https://picsum.photos/seed/zinc-namur3/800/560",
        alt: "Noue en cuivre sur bâtiment patrimonial à Namur",
        caption: "Noue cuivre sur bâtiment classé — Namur, 2023",
      },
    ],
    image: "/images/zinguerie-finitions.jpg",
    imageAlt: "Zinguerie — gouttières et finitions métalliques",
    tags: ["Zinc naturel", "Aluminium", "Cuivre", "NBN EN 988", "NIT 191"],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((s) => s.slug === slug);
}
