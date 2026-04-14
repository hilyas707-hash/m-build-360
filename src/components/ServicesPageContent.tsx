"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckSquare, Phone } from "lucide-react";

const SPRING      = { duration: 0.65, ease: [0.32, 0.72, 0, 1] as const };
const SPRING_FAST = { duration: 0.5,  ease: [0.16, 1,    0.3, 1] as const };

const services = [
  {
    id:          "01",
    title:       "Maçonnerie neuve",
    subtitle:    "Briques · Parpaings · Béton armé",
    description:
      "Construction de murs porteurs, cloisons, fondations et structures complètes. Briques Wienerberger ou Vandersanden, parpaings béton, béton armé coulé. Chaque projet est dimensionné selon l'Eurocode 6 pour les charges et les conditions du sol.",
    includes: [
      "Diagnostic préalable et plan d'exécution",
      "Terrassement et fondations béton armé",
      "Pose maçonneries portantes et cloisons",
      "Linteaux, poutres et chaînages béton",
      "Nettoyage et évacuation des gravats",
    ],
    norms:  ["NBN EN 1996", "Eurocode 6", "CSTC NIT 214"],
    primes: "Selon travaux — entrepreneur certifié",
    primesOk: false,
    image:  "/images/maconnerie-neuve.jpg",
    imageAlt: "Maçonnerie neuve — construction murs en briques",
  },
  {
    id:          "02",
    title:       "Rénovation & restauration",
    subtitle:    "Ravalement · Rejointoiement · Fissures",
    description:
      "Diagnostic complet, ravalement de façades, rejointoiement de briques et pierres, réparation de fissures structurelles et non-structurelles. Chaux naturelle NHL pour les bâtiments anciens et patrimoniaux. Aucune sous-traitance.",
    includes: [
      "Diagnostic photographié avant/après",
      "Nettoyage haute pression (100–150 bars)",
      "Rejointoiement briques, pierres et mortiers",
      "Réparation fissures et zones dégradées",
      "Hydrofuge ou peinture de façade (option)",
    ],
    norms:  ["CSTC NIT 218", "NBN EN 998-2"],
    primes: "Prime rénovation disponible sous conditions",
    primesOk: true,
    image:  "/images/renovation-facade.jpg",
    imageAlt: "Rénovation façade — ravalement et rejointoiement",
  },
  {
    id:          "03",
    title:       "Façades & isolation",
    subtitle:    "ITE · Crépis · Enduits de finition",
    description:
      "Isolation thermique par l'extérieur (ITE) avec systèmes ETICS certifiés ATG. Panneaux EPS ou laine de roche, entoilage treillis de verre et enduit de finition (800+ teintes). Primes régionales 2025 jusqu'à 60 €/m².",
    includes: [
      "Audit thermique et calcul R préalable",
      "Fixation panneaux EPS ou laine de roche",
      "Entoilage treillis de verre anti-fissures",
      "Enduit de finition (800+ teintes disponibles)",
      "Dossier PEB et demande de primes inclus",
    ],
    norms:  ["NBN EN 13499", "CSTC NIT 253", "ATG"],
    primes: "Jusqu'à 60 €/m² de prime en Bruxelles",
    primesOk: true,
    image:  "/images/facades-enduits.jpg",
    imageAlt: "Façades et enduits — isolation thermique extérieure",
  },
  {
    id:          "04",
    title:       "Terrasses & dallage",
    subtitle:    "Carrelage · Pavés · Béton désactivé",
    description:
      "Pose de carrelage extérieur grès cérame R11, pavés naturels (porphyre de Lessines, granit, calcaire), béton désactivé ou imprimé. Conception drainage conforme législation belge sur les eaux pluviales.",
    includes: [
      "Terrassement et préparation fond de forme",
      "Dalle béton armé ou hérisson drainant",
      "Pose carrelage, pavés ou béton désactivé",
      "Joints polymère anti-herbe et anti-insectes",
      "Caniveaux et évacuation eaux pluviales",
    ],
    norms:  ["NBN EN 1341", "CSTC NIT 234"],
    primes: "Non éligible aux primes énergie",
    primesOk: false,
    image:  "/images/terrasses-dallage.jpg",
    imageAlt: "Terrasses et dallage — pavés et carrelage extérieur",
  },
];

const steps = [
  {
    number:      "01",
    title:       "Diagnostic",
    description: "Inspection complète de votre façade ou de votre chantier par un expert certifié. Analyse des zones dégradées, fissures, défauts d'isolation. Rapport photographié remis sous 24 heures.",
  },
  {
    number:      "02",
    title:       "Devis",
    description: "Chiffrage détaillé avec les matériaux sélectionnés, le calendrier d'intervention et les primes régionales auxquelles vous êtes éligible. Remis gratuitement sous 48 heures, sans engagement.",
  },
  {
    number:      "03",
    title:       "Réalisation",
    description: "Exécution par notre équipe interne — aucune sous-traitance. Respect strict des délais, des normes NBN et des procédures de sécurité sur chantier. Nettoyage complet en fin de chantier.",
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
          background:    "#18130E",
        }}
      >
        {/* Ligne orange gauche */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute", left: 0, top: 0, bottom: 0, width: "3px",
            background: "linear-gradient(180deg, transparent 0%, #C8A020 20%, #C8A020 80%, transparent 100%)",
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
            color:         "rgba(200,160,32,0.3)",
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
            style={{ color: "rgba(242,232,212,0.3)", marginBottom: "28px", display: "flex", gap: "8px" }}
          >
            <a href="/" style={{ color: "inherit", textDecoration: "none" }}>Accueil</a>
            <span>›</span>
            <span style={{ color: "rgba(200,160,32,0.7)" }}>Services</span>
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
                  background: "#C8A020",
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
            style={{ fontSize: "clamp(44px, 8vw, 112px)", color: "#F2E8D4" }}
          >
            Nos prestations
            <br />
            <span style={{ color: "#C8A020" }}>en toiture</span>
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
              color:      "rgba(242,232,212,0.58)",
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
                      La carte (var(--zinc-mid) = #211710) fond vers l'image en dégradé étendu.
                      isEven  → contenu à gauche : dégradé part de droite vers transparent
                      !isEven → contenu à droite : dégradé part de gauche vers transparent        */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute", inset: 0,
                      background: isEven
                        ? "linear-gradient(to left,  rgba(26,26,26,0) 0%, rgba(26,26,26,0.18) 30%, rgba(26,26,26,0.72) 58%, rgba(26,26,26,0.96) 78%, #211710 100%)"
                        : "linear-gradient(to right, rgba(26,26,26,0) 0%, rgba(26,26,26,0.18) 30%, rgba(26,26,26,0.72) 58%, rgba(26,26,26,0.96) 78%, #211710 100%)",
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
                  <div className="font-mono-label" style={{ color: "#C8A020", marginBottom: "16px" }}>
                    {s.id} — {s.subtitle}
                  </div>

                  <h2
                    className="font-industrial-md"
                    style={{
                      fontSize:     "clamp(24px, 3vw, 38px)",
                      color:        "#F2E8D4",
                      marginBottom: "20px",
                    }}
                  >
                    {s.title}
                  </h2>

                  <div style={{ height: "1px", background: "rgba(255,255,255,0.065)", marginBottom: "22px" }} />

                  <p
                    style={{
                      fontSize:     "14px",
                      color:        "rgba(242,232,212,0.58)",
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
                          color="#C8A020"
                          style={{ flexShrink: 0, marginTop: "2px" }}
                          aria-hidden="true"
                        />
                        <span style={{ fontSize: "13px", color: "rgba(242,232,212,0.62)", lineHeight: 1.55 }}>
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
              style={{ fontSize: "clamp(36px, 5.5vw, 80px)", color: "#F2E8D4" }}
            >
              Notre processus
              <br />
              <span style={{ color: "#C8A020" }}>en 4 étapes</span>
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
                <div className="font-mono-label" style={{ color: "#C8A020", marginBottom: "20px" }}>
                  Étape {step.number}
                </div>

                <div style={{ height: "2px", width: "32px", background: "#C8A020", marginBottom: "20px" }} />

                <h3
                  className="font-industrial-md"
                  style={{ fontSize: "clamp(20px, 2.2vw, 28px)", color: "#F2E8D4", marginBottom: "16px" }}
                >
                  {step.title}
                </h3>

                <p style={{ fontSize: "13px", color: "rgba(242,232,212,0.52)", lineHeight: 1.75, textWrap: "pretty" as "pretty" }}>
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
          background:    "#211710",
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
                color:        "#F2E8D4",
                marginBottom: "28px",
              }}
            >
              Votre toiture
              <br />
              <span style={{ color: "#C8A020" }}>mérite mieux</span>
            </h2>
            <p
              style={{
                fontSize:     "15px",
                color:        "rgba(242,232,212,0.52)",
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
