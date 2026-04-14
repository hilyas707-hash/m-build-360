"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const SPRING = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

const articles = [
  {
    id:       "01",
    category: "Primes & subventions",
    date:     "02 AVRIL 2025",
    readTime: "4 MIN",
    tag:      "NOUVEAU",
    title:    "Primes maçonnerie 2025 : jusqu'à 60 €/m² pour l'ITE de façade en Belgique",
    excerpt:
      "Wallonie, Bruxelles-Capitale et Flandre ont révisé leurs barèmes pour 2025. Les travaux de maçonnerie couvrant l'isolation thermique par l'extérieur (ITE) peuvent bénéficier de primes cumulables allant jusqu'à 60 €/m² selon la région et les revenus du ménage. Conditions : dossier déposé avant le début des travaux, entrepreneur enregistré Constructiv, système certifié ATG. M Build 360 constitue votre dossier complet.",
    featured: true,
  },
  {
    id:       "02",
    category: "Normes NBN",
    date:     "18 MARS 2025",
    readTime: "3 MIN",
    tag:      null,
    title:    "Eurocode 6 (NBN EN 1996) : nouvelles exigences pour les maçonneries portantes en 2025",
    excerpt:
      "La mise à jour de l'Eurocode 6 renforce les critères de calcul des ouvrages en maçonnerie. Les murs porteurs en briques ou parpaings doivent désormais être dimensionnés selon des règles de charge révisées. Tout entrepreneur belge certifié Constructiv est tenu d'appliquer ces normes dès le 1er trimestre 2025.",
    featured: false,
  },
  {
    id:       "03",
    category: "Réglementation PEB",
    date:     "05 FÉVRIER 2025",
    readTime: "2 MIN",
    tag:      null,
    title:    "PEB 2026 : les façades en maçonnerie non isolées dans le collimateur wallon",
    excerpt:
      "Dès janvier 2026, toute rénovation lourde en Wallonie devra atteindre un niveau PEB minimum. Les façades en briques non isolées figurent parmi les travaux prioritaires. L'ITE sur maçonnerie existante est la solution la plus efficace pour atteindre R ≥ 4,5 m²K/W sans réduire la surface habitable.",
    featured: false,
  },
];

export default function ActualitesSection() {
  return (
    <section
      id="actualites"
      className="construction-grid"
      style={{
        paddingTop:    "140px",
        paddingBottom: "140px",
        position:      "relative",
        overflow:      "hidden",
      }}
    >
      <span className="bg-number" style={{ right: "-2%", top: "0" }} aria-hidden="true">04</span>

      <div
        style={{
          maxWidth: "1160px",
          margin:   "0 auto",
          padding:  "0 24px",
          position: "relative",
          zIndex:   1,
        }}
      >
        {/* ── En-tête ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={SPRING}
          style={{ marginBottom: "80px" }}
        >
          <span className="tag-orange" style={{ marginBottom: "24px", display: "inline-flex" }}>
            Actualités
          </span>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "40px", flexWrap: "wrap" }}>
            <h2
              className="font-industrial"
              style={{ fontSize: "clamp(38px, 6vw, 84px)", color: "#F2E8D4", maxWidth: "600px" }}
            >
              Normes &
              <br />
              <span style={{ color: "#8C3518" }}>réglementation</span>
            </h2>
            <p
              style={{
                fontSize:  "13px",
                color:     "rgba(242,232,212,0.45)",
                lineHeight: 1.75,
                maxWidth:  "340px",
                textWrap:  "pretty" as "pretty",
              }}
            >
              Primes, normes NBN, Eurocodes et réglementation PEB
              pour les travaux de maçonnerie en Belgique.
              Mise à jour mensuelle par notre équipe.
            </p>
          </div>
          <div className="tech-divider" style={{ marginTop: "44px" }} />
        </motion.div>

        {/* ── Grille articles ── */}
        <div
          style={{
            display:             "grid",
            gridTemplateColumns: "1fr",
            gap:                 "2px",
            background:          "rgba(255,255,255,0.04)",
          }}
          className="lg:grid-cols-[1.65fr_1fr]"
        >
          {/* Article vedette */}
          {articles.filter((a) => a.featured).map((a, i) => (
            <motion.article
              key={a.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ ...SPRING, delay: 0.05 }}
              style={{
                background: "var(--zinc-mid)",
                padding:    "52px 44px",
                position:   "relative",
                overflow:   "hidden",
                display:    "flex",
                flexDirection: "column",
                gap:        "0",
              }}
            >
              {/* Barre top orange reveal */}
              <div
                aria-hidden="true"
                style={{
                  position:   "absolute",
                  top:        0, left: 0, right: 0,
                  height:     "2px",
                  background: "linear-gradient(90deg, var(--orange) 0%, rgba(140,53,24,0.4) 100%)",
                }}
              />

              {/* Méta */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px", flexWrap: "wrap" }}>
                {a.tag && (
                  <span className="tag-orange">{a.tag}</span>
                )}
                <span className="tag-white">{a.category}</span>
              </div>

              {/* Date + durée */}
              <div
                className="font-mono-label"
                style={{ color: "rgba(140,53,24,0.6)", marginBottom: "18px", display: "flex", gap: "16px" }}
              >
                <span>{a.date}</span>
                <span style={{ color: "rgba(242,232,212,0.2)" }}>—</span>
                <span>{a.readTime} DE LECTURE</span>
              </div>

              {/* Titre */}
              <h3
                className="font-industrial-md"
                style={{
                  fontSize:     "clamp(22px, 2.4vw, 32px)",
                  color:        "#F2E8D4",
                  marginBottom: "24px",
                  textWrap:     "balance" as "balance",
                }}
              >
                {a.title}
              </h3>

              {/* Séparateur */}
              <div style={{ height: "1px", background: "rgba(255,255,255,0.065)", marginBottom: "22px" }} />

              {/* Extrait */}
              <p
                style={{
                  fontSize:     "14px",
                  color:        "rgba(242,232,212,0.58)",
                  lineHeight:   1.8,
                  textWrap:     "pretty" as "pretty",
                  flex:         1,
                  marginBottom: "36px",
                }}
              >
                {a.excerpt}
              </p>

              {/* CTA */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <a
                  href="#contact"
                  style={{
                    fontFamily:    "var(--font-mono), monospace",
                    fontSize:      "11px",
                    fontWeight:    700,
                    letterSpacing: "0.1em",
                    color:         "#8C3518",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    display:       "flex",
                    alignItems:    "center",
                    gap:           "8px",
                    transition:    "gap 0.25s cubic-bezier(0.16,1,0.3,1)",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.gap = "14px"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.gap = "8px"; }}
                >
                  Vérifier mes primes maçonnerie
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
                <span
                  className="font-mono-label"
                  style={{ color: "rgba(242,232,212,0.18)" }}
                >
                  {a.id} / 03
                </span>
              </div>
            </motion.article>
          ))}

          {/* Colonne articles secondaires */}
          <div
            style={{
              display:       "flex",
              flexDirection: "column",
              gap:           "2px",
              background:    "rgba(255,255,255,0.04)",
            }}
          >
            {articles.filter((a) => !a.featured).map((a, i) => (
              <motion.article
                key={a.id}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ ...SPRING, delay: 0.12 + i * 0.1 }}
                style={{
                  background: "var(--zinc-mid)",
                  padding:    "36px 32px",
                  flex:       1,
                  position:   "relative",
                  overflow:   "hidden",
                  display:    "flex",
                  flexDirection: "column",
                  transition: "background 0.25s cubic-bezier(0.16,1,0.3,1)",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--zinc-raised)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--zinc-mid)"; }}
              >
                {/* Méta */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px", marginBottom: "20px" }}>
                  <span className="tag-white">{a.category}</span>
                  <span
                    className="font-mono-label"
                    style={{ color: "rgba(242,232,212,0.22)" }}
                  >
                    {a.readTime}
                  </span>
                </div>

                <div
                  className="font-mono-label"
                  style={{ color: "rgba(140,53,24,0.5)", marginBottom: "14px" }}
                >
                  {a.date}
                </div>

                <h3
                  className="font-industrial-md"
                  style={{
                    fontSize:     "clamp(16px, 1.8vw, 22px)",
                    color:        "#F2E8D4",
                    marginBottom: "14px",
                    textWrap:     "balance" as "balance",
                    flex:         1,
                  }}
                >
                  {a.title}
                </h3>

                <div style={{ height: "1px", background: "rgba(255,255,255,0.065)", marginBottom: "14px" }} />

                <p
                  style={{
                    fontSize:  "13px",
                    color:     "rgba(242,232,212,0.5)",
                    lineHeight: 1.72,
                  }}
                >
                  {a.excerpt}
                </p>

                {/* Indicateur de section */}
                <div
                  aria-hidden="true"
                  style={{
                    position:      "absolute",
                    bottom:        "16px",
                    right:         "20px",
                    fontFamily:    "var(--font-mono), monospace",
                    fontSize:      "9px",
                    fontWeight:    700,
                    color:         "rgba(140,53,24,0.2)",
                    letterSpacing: "0.1em",
                  }}
                >
                  {a.id} / 03
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Bannière CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={SPRING}
          style={{
            marginTop:      "3px",
            padding:        "40px 44px",
            background:     "rgba(140,53,24,0.055)",
            border:         "1px solid rgba(140,53,24,0.18)",
            display:        "flex",
            alignItems:     "center",
            justifyContent: "space-between",
            gap:            "32px",
            flexWrap:       "wrap",
          }}
        >
          <div>
            <div
              className="font-industrial-md"
              style={{ fontSize: "clamp(16px, 2.4vw, 26px)", color: "#F2E8D4", marginBottom: "6px" }}
            >
              Vérifiez vos droits aux primes maçonnerie 2025
            </div>
            <p style={{ fontSize: "13px", color: "rgba(242,232,212,0.45)" }}>
              Analyse gratuite de votre éligibilité selon votre commune et vos revenus.
            </p>
          </div>
          <a href="#contact" className="btn-primary" style={{ flexShrink: 0 }}>
            Vérifier mes primes
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
