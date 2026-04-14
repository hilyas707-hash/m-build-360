"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckSquare, ExternalLink, Phone } from "lucide-react";
import type { ServiceData } from "@/data/services-data";

const SPRING      = { duration: 0.65, ease: [0.32, 0.72, 0, 1] as const };
const SPRING_FAST = { duration: 0.5,  ease: [0.16, 1,    0.3, 1] as const };

interface Props {
  service: ServiceData;
}

export default function ServiceDetailContent({ service }: Props) {
  return (
    <>
      {/* ── Hero plein cadre ── */}
      <section
        style={{
          position:      "relative",
          minHeight:     "62vh",
          display:       "flex",
          alignItems:    "flex-end",
          paddingTop:    "160px",
          paddingBottom: "80px",
          overflow:      "hidden",
        }}
      >
        {/* Image de fond */}
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          priority
          quality={85}
          sizes="100vw"
          style={{
            objectFit:      "cover",
            objectPosition: "center",
            filter:         "grayscale(22%) contrast(1.08) brightness(0.55)",
          }}
        />

        {/* Overlay gradient */}
        <div
          aria-hidden="true"
          style={{
            position:   "absolute",
            inset:      0,
            background: "linear-gradient(to top, rgba(15,15,15,0.98) 0%, rgba(15,15,15,0.55) 55%, rgba(15,15,15,0.15) 100%)",
            zIndex:     1,
          }}
        />

        {/* Ligne orange gauche */}
        <div
          aria-hidden="true"
          style={{
            position:   "absolute",
            left:       0, top: 0, bottom: 0,
            width:      "3px",
            background: "linear-gradient(180deg, transparent 0%, #E8500A 20%, #E8500A 80%, transparent 100%)",
            zIndex:     2,
          }}
        />

        <div
          style={{
            maxWidth:  "1160px",
            width:     "100%",
            margin:    "0 auto",
            padding:   "0 24px",
            position:  "relative",
            zIndex:    2,
          }}
        >
          {/* Fil d'Ariane */}
          <motion.div
            className="font-mono-label"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            style={{ color: "rgba(237,236,234,0.35)", marginBottom: "28px", display: "flex", gap: "8px", flexWrap: "wrap" }}
          >
            <a href="/" style={{ color: "inherit", textDecoration: "none" }}>Accueil</a>
            <span>›</span>
            <a href="/services" style={{ color: "inherit", textDecoration: "none" }}>Services</a>
            <span>›</span>
            <span style={{ color: "rgba(232,80,10,0.8)" }}>{service.title}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 6 }}
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
              {service.id} — {service.subtitle}
            </span>
          </motion.div>

          <motion.h1
            className="font-industrial"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...SPRING, delay: 0.06 }}
            style={{ fontSize: "clamp(38px, 7vw, 100px)", color: "#EDECEA", maxWidth: "800px" }}
          >
            {service.title.split(" ").slice(0, -2).join(" ")}
            <br />
            <span style={{ color: "#E8500A" }}>
              {service.title.split(" ").slice(-2).join(" ")}
            </span>
          </motion.h1>

          <motion.div
            className="tech-divider"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            style={{ marginTop: "36px", maxWidth: "480px" }}
          />
        </div>
      </section>

      {/* ── Contenu expert principal ── */}
      <section style={{ paddingTop: "96px", paddingBottom: "80px", background: "#0F0F0F" }}>
        <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr", gap: "60px" }}
            className="lg:grid-cols-[1.3fr_1fr]"
          >
            {/* Description longue */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={SPRING}
            >
              <span className="tag-orange" style={{ marginBottom: "28px", display: "inline-flex" }}>
                Description de la prestation
              </span>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {service.longDescription.map((para, i) => (
                  <p
                    key={i}
                    style={{
                      fontSize:   "15px",
                      color:      "rgba(237,236,234,0.65)",
                      lineHeight: 1.82,
                      textWrap:   "pretty" as "pretty",
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Note expert */}
              <div
                style={{
                  marginTop:  "40px",
                  padding:    "24px 28px",
                  background: "rgba(232,80,10,0.06)",
                  border:     "1px solid rgba(232,80,10,0.2)",
                  borderLeft: "3px solid #E8500A",
                }}
              >
                <div className="font-mono-label" style={{ color: "#E8500A", marginBottom: "12px" }}>
                  [ Note technique ]
                </div>
                <p style={{ fontSize: "13px", color: "rgba(237,236,234,0.62)", lineHeight: 1.75 }}>
                  {service.expertNote}
                </p>
              </div>
            </motion.div>

            {/* Ce qui est inclus */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ ...SPRING, delay: 0.1 }}
            >
              <span className="tag-orange" style={{ marginBottom: "28px", display: "inline-flex" }}>
                Ce qui est inclus
              </span>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
                {service.includes.map((item, i) => (
                  <li
                    key={i}
                    style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}
                  >
                    <CheckSquare
                      size={13}
                      color="#E8500A"
                      style={{ flexShrink: 0, marginTop: "3px" }}
                      aria-hidden="true"
                    />
                    <span style={{ fontSize: "14px", color: "rgba(237,236,234,0.68)", lineHeight: 1.6 }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "32px" }}>
                {service.tags.map((tag) => (
                  <span key={tag} className="tag-white">{tag}</span>
                ))}
              </div>

              {/* CTA rapide */}
              <div style={{ marginTop: "40px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <a href="/#contact" className="btn-primary">
                  Devis gratuit
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
                <a href="tel:+3200000000" className="btn-secondary">
                  <Phone size={13} aria-hidden="true" />
                  Appel direct
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Normes & réglementations belges ── */}
      <section
        className="construction-grid"
        style={{
          paddingTop:    "96px",
          paddingBottom: "96px",
          position:      "relative",
          overflow:      "hidden",
        }}
      >
        <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={SPRING}
            style={{ marginBottom: "56px" }}
          >
            <span className="tag-orange" style={{ marginBottom: "24px", display: "inline-flex" }}>
              Cadre normatif
            </span>
            <h2
              className="font-industrial"
              style={{ fontSize: "clamp(32px, 5vw, 68px)", color: "#EDECEA" }}
            >
              Normes &
              <br />
              <span style={{ color: "#E8500A" }}>réglementations belges</span>
            </h2>
            <div className="tech-divider" style={{ marginTop: "32px", maxWidth: "400px" }} />
          </motion.div>

          <div
            style={{
              display:             "grid",
              gridTemplateColumns: "repeat(1, 1fr)",
              gap:                 "2px",
              background:          "rgba(255,255,255,0.04)",
            }}
            className="md:grid-cols-2"
          >
            {service.norms.map((norm, i) => (
              <motion.div
                key={norm.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ ...SPRING_FAST, delay: i * 0.08 }}
                style={{
                  background: "var(--zinc-mid)",
                  padding:    "32px 36px",
                  position:   "relative",
                  overflow:   "hidden",
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position:   "absolute",
                    top:        0, left: 0, right: 0,
                    height:     "2px",
                    background: "linear-gradient(90deg, #E8500A 0%, rgba(232,80,10,0.2) 70%, transparent 100%)",
                  }}
                />
                <div
                  className="font-mono-label"
                  style={{ color: "#E8500A", marginBottom: "12px" }}
                >
                  {norm.code}
                </div>
                <p style={{ fontSize: "13px", color: "rgba(237,236,234,0.55)", lineHeight: 1.65 }}>
                  {norm.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Liens officiels */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={SPRING_FAST}
            style={{ marginTop: "32px" }}
          >
            <div className="font-mono-label" style={{ color: "rgba(237,236,234,0.3)", marginBottom: "16px" }}>
              Sources officielles
            </div>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {service.officialLinks.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display:        "inline-flex",
                    alignItems:     "center",
                    gap:            "6px",
                    fontFamily:     "var(--font-mono), monospace",
                    fontSize:       "10px",
                    letterSpacing:  "0.08em",
                    textTransform:  "uppercase",
                    color:          "rgba(237,236,234,0.45)",
                    padding:        "8px 14px",
                    border:         "1px solid rgba(255,255,255,0.08)",
                    textDecoration: "none",
                    transition:     "color 0.2s, border-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color       = "#EDECEA";
                    el.style.borderColor = "rgba(232,80,10,0.35)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color       = "rgba(237,236,234,0.45)";
                    el.style.borderColor = "rgba(255,255,255,0.08)";
                  }}
                >
                  <ExternalLink size={10} aria-hidden="true" />
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Primes régionales ── */}
      <section
        style={{
          paddingTop:    "96px",
          paddingBottom: "96px",
          background:    "#0F0F0F",
          borderTop:     "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "0 24px" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={SPRING}
            style={{ marginBottom: "56px" }}
          >
            <span className="tag-orange" style={{ marginBottom: "24px", display: "inline-flex" }}>
              Aides financières
            </span>
            <h2
              className="font-industrial"
              style={{ fontSize: "clamp(32px, 5vw, 68px)", color: "#EDECEA" }}
            >
              Primes
              <br />
              <span style={{ color: "#E8500A" }}>par région</span>
            </h2>
            <div className="tech-divider" style={{ marginTop: "32px", maxWidth: "360px" }} />
          </motion.div>

          <div
            style={{
              display:             "grid",
              gridTemplateColumns: "repeat(1, 1fr)",
              gap:                 "2px",
              background:          "rgba(255,255,255,0.04)",
            }}
            className="lg:grid-cols-3"
          >
            {service.primes.map((prime, i) => (
              <motion.div
                key={prime.region}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ ...SPRING, delay: i * 0.1 }}
                style={{
                  background:    "var(--zinc-mid)",
                  padding:       "40px 32px",
                  display:       "flex",
                  flexDirection: "column",
                  gap:           "0",
                  position:      "relative",
                }}
              >
                {/* Indicateur région */}
                <div className="font-mono-label" style={{ color: "#E8500A", marginBottom: "16px" }}>
                  {prime.region}
                </div>

                {/* Montant */}
                <div
                  className="font-industrial-md"
                  style={{ fontSize: "clamp(18px, 2.2vw, 26px)", color: "#EDECEA", marginBottom: "18px", lineHeight: 1.2 }}
                >
                  {prime.montant}
                </div>

                <div style={{ height: "1px", background: "rgba(255,255,255,0.07)", marginBottom: "18px" }} />

                {/* Conditions */}
                <p style={{ fontSize: "13px", color: "rgba(237,236,234,0.52)", lineHeight: 1.72, flex: 1 }}>
                  {prime.conditions}
                </p>

                {/* Lien officiel */}
                <a
                  href={prime.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display:        "inline-flex",
                    alignItems:     "center",
                    gap:            "6px",
                    marginTop:      "24px",
                    fontFamily:     "var(--font-mono), monospace",
                    fontSize:       "9px",
                    letterSpacing:  "0.12em",
                    textTransform:  "uppercase",
                    color:          "rgba(232,80,10,0.6)",
                    textDecoration: "none",
                    transition:     "color 0.2s",
                    alignSelf:      "flex-start",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#E8500A"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(232,80,10,0.6)"; }}
                >
                  <ExternalLink size={9} aria-hidden="true" />
                  Site officiel {prime.region}
                </a>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{
              marginTop:  "20px",
              fontSize:   "11px",
              color:      "rgba(237,236,234,0.28)",
              fontFamily: "var(--font-mono), monospace",
              letterSpacing: "0.04em",
            }}
          >
            * Montants et conditions valables en 2025. Les montants peuvent évoluer — vérifiez toujours auprès des organismes officiels cités.
          </motion.p>
        </div>
      </section>

      {/* ── Portfolio ── */}
      <section
        className="construction-grid"
        style={{
          paddingTop:    "96px",
          paddingBottom: "96px",
          position:      "relative",
          overflow:      "hidden",
        }}
      >
        <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={SPRING}
            style={{ marginBottom: "56px" }}
          >
            <span className="tag-orange" style={{ marginBottom: "24px", display: "inline-flex" }}>
              Réalisations récentes
            </span>
            <h2
              className="font-industrial"
              style={{ fontSize: "clamp(32px, 5vw, 68px)", color: "#EDECEA" }}
            >
              Portfolio
            </h2>
            <div className="tech-divider" style={{ marginTop: "32px", maxWidth: "300px" }} />
          </motion.div>

          <div
            style={{
              display:             "grid",
              gridTemplateColumns: "repeat(1, 1fr)",
              gap:                 "2px",
              background:          "rgba(255,255,255,0.04)",
            }}
            className="md:grid-cols-3"
          >
            {service.portfolio.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ ...SPRING, delay: i * 0.1 }}
                style={{ position: "relative", overflow: "hidden" }}
              >
                {/* Image */}
                <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{
                      objectFit:  "cover",
                      filter:     "grayscale(18%) contrast(1.06) brightness(0.82)",
                      transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1)",
                    }}
                    className="service-card-img"
                  />
                  {/* Overlay au hover */}
                  <div
                    aria-hidden="true"
                    style={{
                      position:   "absolute",
                      inset:      0,
                      background: "linear-gradient(to top, rgba(15,15,15,0.82) 0%, rgba(15,15,15,0.1) 55%)",
                    }}
                  />
                </div>

                {/* Légende */}
                <div
                  style={{
                    background: "var(--zinc-mid)",
                    padding:    "18px 22px",
                    borderTop:  "1px solid rgba(255,255,255,0.04)",
                  }}
                >
                  <p style={{ fontSize: "12px", color: "rgba(237,236,234,0.52)", lineHeight: 1.5 }}>
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section
        style={{
          paddingTop:    "96px",
          paddingBottom: "112px",
          background:    "#1A1A1A",
          borderTop:     "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          style={{
            maxWidth:  "1160px",
            margin:    "0 auto",
            padding:   "0 24px",
            textAlign: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={SPRING}
          >
            <span className="tag-orange" style={{ marginBottom: "32px", display: "inline-flex" }}>
              Démarrer votre projet
            </span>
            <h2
              className="font-industrial"
              style={{ fontSize: "clamp(36px, 6.5vw, 88px)", color: "#EDECEA", marginBottom: "24px" }}
            >
              Devis gratuit
              <br />
              <span style={{ color: "#E8500A" }}>sous 48 heures</span>
            </h2>
            <p
              style={{
                fontSize:   "15px",
                color:      "rgba(237,236,234,0.5)",
                lineHeight: 1.75,
                maxWidth:   "460px",
                margin:     "0 auto 44px",
                textWrap:   "pretty" as "pretty",
              }}
            >
              Diagnostic complet inclus. Aucune surprise sur la facture finale.
              Garantie décennale sur tous les travaux structurels.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="/#contact" className="btn-primary">
                Demander un devis
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
              <a href="/services" className="btn-secondary">
                Tous les services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
