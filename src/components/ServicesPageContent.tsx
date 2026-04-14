"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckSquare, Phone } from "lucide-react";

const SPRING      = { duration: 0.65, ease: [0.32, 0.72, 0, 1] as const };
const SPRING_FAST = { duration: 0.5,  ease: [0.16, 1,    0.3, 1] as const };

const services = [
  {
    id:          "01",
    title:       "Pose de toitures neuves",
    subtitle:    "Tuiles · Ardoises · Zinc · EPDM",
    description:
      "Installation complète de toitures neuves selon les normes NBN B 62-002. Nous sélectionnons les matériaux en concertation avec vous — tuiles terre cuite ou béton, ardoises naturelles d'Espagne, zinc prépatiné RHEINZINK® ou membrane EPDM pour toitures plates. Chaque pose inclut un écran sous-toiture haute performance et un contre-lattage ventilé.",
    includes: [
      "Diagnostic préalable et plan de pose",
      "Fourniture et pose des matériaux",
      "Écran sous-toiture et contre-lattage",
      "Fixation mécanique conforme NBN",
      "Nettoyage et évacuation des déchets",
    ],
    norms:  ["NBN B 62-002", "DTU 40.11"],
    primes: "Éligible primes isolation selon région",
    primesOk: true,
    image:  "/images/pose-tuiles.png",
    imageAlt: "Pose de toitures — tuiles terre cuite",
  },
  {
    id:          "02",
    title:       "Rénovation lourde & charpente",
    subtitle:    "Diagnostic · Structure · Étanchéité",
    description:
      "Réfection complète de toitures vétustes ou endommagées. Nous effectuons un diagnostic structurel approfondi avant toute intervention : analyse des chevrons, pannes et fermes. Remplacement ou renforcement de la charpente, traitement fongicide et insecticide certifié Ctb-B+, puis pose d'une nouvelle couverture. Aucune sous-traitance — toute l'équipe est interne.",
    includes: [
      "Inspection structurelle photographiée",
      "Remplacement de chevrons et pannes",
      "Traitement fongicide & insecticide Ctb-B+",
      "Démolition et évacuation de l'ancienne couverture",
      "Remise aux normes étanchéité et ventilation",
    ],
    norms:  ["Eurocode 5", "NBN EN 1995", "CSTC"],
    primes: "Prime rénovation disponible sous conditions",
    primesOk: true,
    image:  "/images/renovation-charpente.png",
    imageAlt: "Rénovation lourde — charpente en bois",
  },
  {
    id:          "03",
    title:       "Isolation thermique & PEB",
    subtitle:    "Sarking · Entre-chevrons · Certification",
    description:
      "Amélioration du niveau de performance énergétique (PEB) de votre bâtiment. Deux techniques maîtrisées : isolation par l'extérieur (sarking, R ≥ 6 m²K/W sans perte d'espace habitable) ou isolation entre les chevrons. Nous réalisons ou coordonnons votre dossier PEB pour l'accès aux primes régionales 2025. Jusqu'à 7 200 € disponibles en Wallonie.",
    includes: [
      "Audit thermique préalable",
      "Isolation sarking ou entre-chevrons",
      "Panneaux PIR, PUR ou laine minérale",
      "Traitement des ponts thermiques",
      "Dossier PEB et demande de primes",
    ],
    norms:  ["PEB Wallonie/Bruxelles", "NBN EN ISO 6946"],
    primes: "Jusqu'à 7 200 € de primes en Wallonie",
    primesOk: true,
    image:  "/images/isolation-thermique.jpg",
    imageAlt: "Isolation thermique — pose de panneaux isolants",
  },
  {
    id:          "04",
    title:       "Zinguerie & finitions métalliques",
    subtitle:    "Gouttières · Noues · Faîtages · Chéneaux",
    description:
      "Fabrication sur mesure et pose de tous les éléments de zinguerie. Travail en zinc naturel, aluminium laqué, acier galvanisé ou cuivre selon vos préférences et l'architecture du bâtiment. Nous intervenons également pour l'entretien, la réparation de fuites et le remplacement sélectif sans déposer la couverture existante.",
    includes: [
      "Gouttières carrées et demi-rondes sur mesure",
      "Descentes d'eau et raccords emboutis",
      "Noues, faîtages et arêtiers",
      "Solins, bavettes et tabatières",
      "Nettoyage haute pression en fin de chantier",
    ],
    norms:  ["NBN EN 988", "CSTC"],
    primes: "Non éligible aux primes énergie",
    primesOk: false,
    image:  "/images/zinguerie-finitions.jpg",
    imageAlt: "Zinguerie — gouttières et finitions métalliques",
  },
];

const steps = [
  {
    number:      "01",
    title:       "Diagnostic",
    description: "Inspection complète de votre toiture par un expert certifié. Analyse des zones à risque, des infiltrations potentielles et du niveau d'isolation actuel. Rapport photographié remis sous 24 heures.",
  },
  {
    number:      "02",
    title:       "Devis",
    description: "Chiffrage détaillé avec les matériaux sélectionnés, le calendrier d'intervention et les primes régionales auxquelles vous êtes éligible. Remis gratuitement sous 48 heures, sans engagement.",
  },
  {
    number:      "03",
    title:       "Réalisation",
    description: "Exécution par notre équipe interne — aucune sous-traitance. Respect strict des délais, des normes NBN et des procédures de sécurité sur chantier. Nettoyage complet en fin d'intervention.",
  },
  {
    number:      "04",
    title:       "Garantie",
    description: "Remise d'un procès-verbal de réception signé, attestation décennale et guide d'entretien personnalisé. Notre service après-vente reste disponible pour toute question post-travaux.",
  },
];

export default function ServicesPageContent() {
  return (
    <>
      {/* ── Hero de page ── */}
      <section
        className="construction-grid scanlines"
        style={{
          position:      "relative",
          minHeight:     "52vh",
          display:       "flex",
          alignItems:    "flex-end",
          paddingTop:    "140px",
          paddingBottom: "72px",
          overflow:      "hidden",
          background:    "#0F0F0F",
        }}
      >
        {/* Ligne orange gauche */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute", left: 0, top: 0, bottom: 0, width: "3px",
            background: "linear-gradient(180deg, transparent 0%, #E8500A 20%, #E8500A 80%, transparent 100%)",
          }}
        />

        {/* Coordonnées haut-droite */}
        <div
          aria-hidden="true"
          style={{
            position:      "absolute",
            top:           "90px",
            right:         "24px",
            fontFamily:    "var(--font-mono), monospace",
            fontSize:      "9px",
            fontWeight:    700,
            letterSpacing: "0.14em",
            color:         "rgba(232,80,10,0.3)",
            textTransform: "uppercase",
            lineHeight:    1.8,
          }}
        >
          <div>[ SRV / D-02 ]</div>
          <div>TOITURE-BE</div>
          <div>— 2025 —</div>
        </div>

        <div style={{ maxWidth: "1160px", width: "100%", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          {/* Fil d'Ariane */}
          <div
            className="font-mono-label"
            style={{ color: "rgba(237,236,234,0.3)", marginBottom: "28px", display: "flex", gap: "8px" }}
          >
            <a href="/" style={{ color: "inherit", textDecoration: "none" }}>Accueil</a>
            <span>›</span>
            <span style={{ color: "rgba(232,80,10,0.7)" }}>Services</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={SPRING_FAST}
          >
            <span className="tag-orange" style={{ marginBottom: "24px", display: "inline-flex" }}>
              <span
                aria-hidden="true"
                style={{
                  width: "5px", height: "5px", borderRadius: "50%",
                  background: "#E8500A",
                  animation: "pulse-orange 2s cubic-bezier(0.65,0,0.35,1) infinite",
                  flexShrink: 0,
                }}
              />
              Services industriels — Belgique
            </span>
          </motion.div>

          <motion.h1
            className="font-industrial"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...SPRING, delay: 0.07 }}
            style={{ fontSize: "clamp(44px, 8vw, 112px)", color: "#EDECEA" }}
          >
            Nos prestations
            <br />
            <span style={{ color: "#E8500A" }}>en toiture</span>
          </motion.h1>

          <motion.div
            className="tech-divider"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ marginTop: "40px", maxWidth: "520px" }}
          />

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...SPRING_FAST, delay: 0.44 }}
            style={{
              marginTop:  "28px",
              fontSize:   "clamp(14px, 1.6vw, 17px)",
              color:      "rgba(237,236,234,0.58)",
              lineHeight: 1.72,
              maxWidth:   "560px",
              textWrap:   "pretty" as "pretty",
            }}
          >
            Quatre corps de métier maîtrisés en interne. Chaque chantier est
            encadré par notre chef de chantier certifié — aucune sous-traitance,
            garantie décennale sur tous les travaux structurels.
          </motion.p>
        </div>
      </section>

      {/* ── Services détaillés ── */}
      <section
        style={{ paddingTop: "120px", paddingBottom: "40px", position: "relative" }}
      >
        <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "0 24px" }}>
          {services.map((s, i) => {
            const isEven = i % 2 === 1;
            return (
              <motion.article
                key={s.id}
                id={`service-${s.id}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ ...SPRING, delay: 0.05 }}
                style={{
                  display:             "grid",
                  gridTemplateColumns: "1fr",
                  gap:                 "0",
                  marginBottom:        "2px",
                  background:          "rgba(255,255,255,0.025)",
                  scrollMarginTop:     "90px", /* compense le header fixe (68px + marge visuelle) */
                }}
                className={isEven ? "lg:grid-cols-[1fr_1.1fr]" : "lg:grid-cols-[1.1fr_1fr]"}
              >
                {/* Image — ordre alterné */}
                <div
                  className={isEven ? "lg:order-2" : "lg:order-1"}
                  style={{ position: "relative", minHeight: "340px", overflow: "hidden" }}
                >
                  {/* Image — position fixe, pas d'animation */}
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    quality={80}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    style={{
                      objectFit:      "cover",
                      objectPosition: "center",
                      filter:         "grayscale(18%) contrast(1.06) brightness(0.85)",
                    }}
                  />
                  {/* Dégradé progressif carte → image :
                      La carte (var(--zinc-mid) = #1A1A1A) fond vers l'image en dégradé étendu.
                      isEven  → contenu à gauche : dégradé part de droite vers transparent
                      !isEven → contenu à droite : dégradé part de gauche vers transparent        */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute", inset: 0,
                      background: isEven
                        ? "linear-gradient(to left,  rgba(26,26,26,0) 0%, rgba(26,26,26,0.18) 30%, rgba(26,26,26,0.72) 58%, rgba(26,26,26,0.96) 78%, #1A1A1A 100%)"
                        : "linear-gradient(to right, rgba(26,26,26,0) 0%, rgba(26,26,26,0.18) 30%, rgba(26,26,26,0.72) 58%, rgba(26,26,26,0.96) 78%, #1A1A1A 100%)",
                    }}
                  />
                  {/* ID grand fond */}
                  <span
                    aria-hidden="true"
                    style={{
                      position:      "absolute",
                      bottom:        "-12px",
                      right:         "8px",
                      fontFamily:    "var(--font-display), 'Arial Black', sans-serif",
                      fontSize:      "clamp(80px, 14vw, 160px)",
                      fontWeight:    400,
                      color:         "rgba(255,255,255,0.06)",
                      letterSpacing: "-0.07em",
                      lineHeight:    1,
                      userSelect:    "none",
                    }}
                  >
                    {s.id}
                  </span>
                </div>

                {/* Contenu */}
                <div
                  className={isEven ? "lg:order-1" : "lg:order-2"}
                  style={{
                    padding:       "52px 44px",
                    background:    "var(--zinc-mid)",
                    borderTop:     "1px solid rgba(255,255,255,0.04)",
                    display:       "flex",
                    flexDirection: "column",
                    gap:           "0",
                  }}
                >
                  {/* Méta */}
                  <div className="font-mono-label" style={{ color: "#E8500A", marginBottom: "16px" }}>
                    {s.id} — {s.subtitle}
                  </div>

                  <h2
                    className="font-industrial-md"
                    style={{
                      fontSize:     "clamp(24px, 3vw, 38px)",
                      color:        "#EDECEA",
                      marginBottom: "20px",
                    }}
                  >
                    {s.title}
                  </h2>

                  <div style={{ height: "1px", background: "rgba(255,255,255,0.065)", marginBottom: "22px" }} />

                  <p
                    style={{
                      fontSize:     "14px",
                      color:        "rgba(237,236,234,0.58)",
                      lineHeight:   1.8,
                      marginBottom: "28px",
                      textWrap:     "pretty" as "pretty",
                    }}
                  >
                    {s.description}
                  </p>

                  {/* Liste inclus */}
                  <ul
                    style={{
                      listStyle:    "none",
                      display:      "flex",
                      flexDirection: "column",
                      gap:          "10px",
                      marginBottom: "28px",
                    }}
                  >
                    {s.includes.map((item) => (
                      <li
                        key={item}
                        style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}
                      >
                        <CheckSquare
                          size={13}
                          color="#E8500A"
                          style={{ flexShrink: 0, marginTop: "2px" }}
                          aria-hidden="true"
                        />
                        <span style={{ fontSize: "13px", color: "rgba(237,236,234,0.62)", lineHeight: 1.55 }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags normes + prime */}
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "32px" }}>
                    {s.norms.map((n) => (
                      <span key={n} className="tag-white">{n}</span>
                    ))}
                    <span
                      className={s.primesOk ? "tag-orange" : "tag-white"}
                    >
                      {s.primes}
                    </span>
                  </div>

                  {/* CTA */}
                  <div style={{ marginTop: "auto" }}>
                    <a href="/#contact" className="btn-primary">
                      Demander un devis
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* ── Notre processus ── */}
      <section
        className="construction-grid"
        style={{
          paddingTop:    "120px",
          paddingBottom: "120px",
          position:      "relative",
          overflow:      "hidden",
        }}
      >
        <span className="bg-number" style={{ left: "-2%", bottom: "0" }} aria-hidden="true">05</span>

        <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={SPRING}
            style={{ marginBottom: "72px" }}
          >
            <span className="tag-orange" style={{ marginBottom: "24px", display: "inline-flex" }}>
              Méthode de travail
            </span>
            <h2
              className="font-industrial"
              style={{ fontSize: "clamp(36px, 5.5vw, 80px)", color: "#EDECEA" }}
            >
              Notre processus
              <br />
              <span style={{ color: "#E8500A" }}>en 4 étapes</span>
            </h2>
            <div className="tech-divider" style={{ marginTop: "40px", maxWidth: "480px" }} />
          </motion.div>

          {/* Grille des étapes */}
          <div
            style={{
              display:             "grid",
              gridTemplateColumns: "repeat(1, 1fr)",
              gap:                 "2px",
              background:          "rgba(255,255,255,0.04)",
            }}
            className="md:grid-cols-2 lg:grid-cols-4"
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ ...SPRING, delay: i * 0.1 }}
                style={{
                  background:    "var(--zinc-mid)",
                  padding:       "44px 32px",
                  position:      "relative",
                  overflow:      "hidden",
                }}
              >
                {/* Numéro de fond */}
                <span
                  aria-hidden="true"
                  style={{
                    position:      "absolute",
                    top:           "-8px",
                    right:         "12px",
                    fontFamily:    "var(--font-display), 'Arial Black', sans-serif",
                    fontSize:      "88px",
                    fontWeight:    400,
                    color:         "rgba(255,255,255,0.03)",
                    letterSpacing: "-0.06em",
                    lineHeight:    1,
                    userSelect:    "none",
                  }}
                >
                  {step.number}
                </span>

                {/* Étape */}
                <div className="font-mono-label" style={{ color: "#E8500A", marginBottom: "20px" }}>
                  Étape {step.number}
                </div>

                <div style={{ height: "2px", width: "32px", background: "#E8500A", marginBottom: "20px" }} />

                <h3
                  className="font-industrial-md"
                  style={{ fontSize: "clamp(20px, 2.2vw, 28px)", color: "#EDECEA", marginBottom: "16px" }}
                >
                  {step.title}
                </h3>

                <p style={{ fontSize: "13px", color: "rgba(237,236,234,0.52)", lineHeight: 1.75, textWrap: "pretty" as "pretty" }}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section
        style={{
          paddingTop:    "100px",
          paddingBottom: "120px",
          background:    "#1A1A1A",
          borderTop:     "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          style={{ maxWidth: "1160px", margin: "0 auto", padding: "0 24px", textAlign: "center" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={SPRING}
          >
            <span className="tag-orange" style={{ marginBottom: "32px", display: "inline-flex" }}>
              Prêt à démarrer
            </span>
            <h2
              className="font-industrial"
              style={{
                fontSize:     "clamp(40px, 7vw, 96px)",
                color:        "#EDECEA",
                marginBottom: "28px",
              }}
            >
              Votre toiture
              <br />
              <span style={{ color: "#E8500A" }}>mérite mieux</span>
            </h2>
            <p
              style={{
                fontSize:     "15px",
                color:        "rgba(237,236,234,0.52)",
                lineHeight:   1.75,
                maxWidth:     "480px",
                margin:       "0 auto 48px",
                textWrap:     "pretty" as "pretty",
              }}
            >
              Devis gratuit sous 48 heures. Diagnostic complet inclus.
              Aucune surprise sur la facture finale.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="/#contact" className="btn-primary">
                Devis gratuit en 48h
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
              <a
                href="tel:+3200000000"
                className="btn-secondary"
              >
                <Phone size={14} aria-hidden="true" />
                Appel direct
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
