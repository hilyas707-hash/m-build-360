"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const SPRING = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

const services = [
  {
    id: "01",
    slug: "maconnerie-neuve",
    title: "Maçonnerie neuve",
    subtitle: "Briques · Parpaings · Béton armé",
    description:
      "Construction de murs porteurs, cloisons, fondations et structures complètes. Briques de parement, parpaings, béton coulé ou banché selon les exigences structurelles et esthétiques du projet.",
    tags: ["Briques", "Parpaings", "Béton armé", "Fondations"],
    highlight: true,
    image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Maçonnerie neuve — construction de murs en briques",
  },
  {
    id: "02",
    slug: "renovation",
    title: "Rénovation & restauration",
    subtitle: "Ravalement · Rejointoiement · Fissures",
    description:
      "Diagnostic complet, ravalement de façades, rejointoiement de briques et pierres, réparation de fissures structurelles et non-structurelles. Restauration fidèle des façades anciennes.",
    tags: ["Ravalement", "Rejointoiement", "Fissures", "Pierres"],
    highlight: false,
    image: "https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Rénovation façade — ravalement et rejointoiement",
  },
  {
    id: "03",
    slug: "facades",
    title: "Façades & isolation",
    subtitle: "ITE · Crépis · Enduits de finition",
    description:
      "Isolation thermique par l'extérieur (ITE), crépis minéraux et organiques, enduits de finition monocouche ou multicouches. Accès aux primes régionales 2025 pour l'isolation de façade.",
    tags: ["ITE", "Crépis", "Enduits", "Primes"],
    highlight: false,
    image: "https://images.unsplash.com/photo-1564182842519-8a3b2af3e228?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Façades et enduits — isolation thermique extérieure",
  },
  {
    id: "04",
    slug: "terrasses",
    title: "Terrasses & dallage",
    subtitle: "Carrelage · Pavés · Béton désactivé",
    description:
      "Pose de carrelage extérieur grès cérame, pavés naturels (porphyre, granit, calcaire), béton désactivé ou imprimé. Terrasses, allées, cours et zones de stationnement.",
    tags: ["Grès cérame", "Porphyre", "Béton désactivé", "Pavés"],
    highlight: false,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Terrasses et dallage — pavés et carrelage extérieur",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="construction-grid"
      style={{ paddingTop: "140px", paddingBottom: "140px", position: "relative", overflow: "hidden" }}
    >
      <span className="bg-number" style={{ left: "-2%", top: "0" }} aria-hidden="true">02</span>

      <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={SPRING}
          style={{ marginBottom: "88px" }}
        >
          <span className="tag-orange" style={{ marginBottom: "24px", display: "inline-flex" }}>
            Services de maçonnerie
          </span>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "40px", flexWrap: "wrap" }}>
            <h2
              className="font-industrial"
              style={{ fontSize: "clamp(40px, 6.5vw, 88px)", color: "#F2E8D4", maxWidth: "700px" }}
            >
              Ce que nous
              <br />
              <span style={{ color: "#8C3518" }}>construisons</span>
            </h2>
            <p style={{ fontSize: "14px", color: "rgba(242,232,212,0.48)", lineHeight: 1.75, maxWidth: "340px", textWrap: "pretty" as "pretty" }}>
              Chaque chantier est suivi par notre chef maçon certifié.
              Matériaux sourcés auprès de fournisseurs belges et
              européens labellisés.
            </p>
          </div>
          <div className="tech-divider" style={{ marginTop: "44px" }} />
        </motion.div>

        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "2px", background: "rgba(255,255,255,0.04)" }}
          className="md:grid-cols-2"
        >
          {services.map((s, i) => (
            <motion.a
              key={s.id}
              href={`/services/${s.slug}`}
              className="service-card"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ ...SPRING, delay: i * 0.09 }}
              style={{
                position:       "relative",
                minHeight:      "420px",
                display:        "flex",
                alignItems:     "flex-end",
                textDecoration: "none",
                color:          "inherit",
                overflow:       "hidden",
                border:         s.highlight ? "1px solid rgba(140,53,24,0.22)" : "none",
              }}
            >
              <Image
                src={s.image}
                alt={s.imageAlt}
                fill
                quality={80}
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{
                  objectFit:      "cover",
                  objectPosition: "center left",
                  filter:         "grayscale(18%) contrast(1.06) brightness(0.78)",
                  transition:     "transform 0.7s cubic-bezier(0.16,1,0.3,1)",
                }}
                className="service-card-img"
              />

              <div aria-hidden="true" style={{
                position:   "absolute", inset: 0,
                background: "linear-gradient(to right, rgba(10,8,5,0.04) 0%, rgba(10,8,5,0.38) 38%, rgba(10,8,5,0.88) 62%, rgba(10,8,5,0.98) 80%, #18130E 100%)",
                zIndex:     1,
              }} />
              <div aria-hidden="true" style={{
                position:   "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(15,15,15,0.65) 0%, transparent 50%)",
                zIndex:     1,
              }} />

              {s.highlight && (
                <div aria-hidden="true" style={{
                  position:   "absolute", top: 0, left: 0, right: 0, height: "2px",
                  background: "linear-gradient(90deg, transparent 0%, rgba(140,53,24,0.3) 45%, #8C3518 100%)",
                  zIndex:     3,
                }} />
              )}

              <div className="service-card-content">
                <div className="font-mono-label" style={{ color: "#8C3518", marginBottom: "14px" }}>
                  {s.id} — {s.subtitle}
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px", gap: "12px" }}>
                  <h3
                    className="font-industrial-md"
                    style={{ fontSize: "clamp(22px, 2.6vw, 32px)", color: "#F2E8D4", lineHeight: 1.1 }}
                  >
                    {s.title}
                  </h3>
                  <div
                    className="card-arrow"
                    aria-hidden="true"
                    style={{
                      width: "38px", height: "38px",
                      border: "1px solid rgba(255,255,255,0.12)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <ArrowUpRight size={15} color="rgba(242,232,212,0.5)" />
                  </div>
                </div>
                <div style={{ height: "1px", background: "rgba(255,255,255,0.08)", marginBottom: "14px" }} />
                <p style={{ fontSize: "13px", color: "rgba(242,232,212,0.62)", lineHeight: 1.75, marginBottom: "22px", textWrap: "pretty" as "pretty" }}>
                  {s.description}
                </p>
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  {s.tags.map((tag) => (
                    <span key={tag} className="tag-white">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={SPRING}
          style={{
            marginTop: "3px",
            padding: "52px 44px",
            background: "rgba(140,53,24,0.055)",
            border: "1px solid rgba(140,53,24,0.18)",
            display: "flex", alignItems: "center",
            justifyContent: "space-between", gap: "32px", flexWrap: "wrap",
          }}
        >
          <div>
            <div className="font-industrial-md" style={{ fontSize: "clamp(18px, 2.8vw, 30px)", color: "#F2E8D4", marginBottom: "8px" }}>
              Votre projet ne rentre pas dans une case ?
            </div>
            <p style={{ fontSize: "13px", color: "rgba(242,232,212,0.48)" }}>
              Nous analysons chaque chantier sur mesure. Contactez-nous pour un diagnostic gratuit.
            </p>
          </div>
          <a href="#contact" className="btn-primary" style={{ flexShrink: 0 }}>
            Diagnostic gratuit
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
