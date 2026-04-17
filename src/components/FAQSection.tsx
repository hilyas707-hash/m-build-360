"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "@phosphor-icons/react";

const faqs = [
  {
    category: "Primes & Financement",
    items: [
      {
        q: "Quelles primes puis-je obtenir pour l'isolation de ma façade en Wallonie ?",
        a: "En Wallonie, le programme MaPrimeRénov' Wallonie couvre l'isolation des murs (ITE et ITI) avec une prime pouvant atteindre 25 à 50 €/m² selon votre niveau de revenus. Pour une façade de 80 m², cela représente jusqu'à 4 000 € de prime. La demande doit être soumise avant le début des travaux via le guichet unique communal. Nous vous accompagnons dans la constitution du dossier.",
      },
      {
        q: "Et pour Bruxelles-Capitale ?",
        a: "Bruxelles Environnement propose les primes RENOLUTION pour l'isolation des murs extérieurs (ITE). La prime peut atteindre 60 €/m² selon la catégorie de revenus. Attention : la demande doit impérativement être introduite AVANT le début des travaux. Le dossier doit inclure un devis signé par un entrepreneur enregistré. Nous sommes enregistrés et pouvons produire tous les documents nécessaires.",
      },
      {
        q: "Comment financer l'avance des travaux en attendant les primes ?",
        a: "Les primes sont versées a posteriori sur présentation des factures. Le Fonds du Logement propose des prêts à taux réduit pour les ménages à revenus modestes afin de couvrir l'avance. Certaines banques proposent également des crédits verts à taux préférentiel pour les travaux d'isolation. Nous pouvons vous orienter vers les organismes adaptés à votre situation.",
      },
    ],
  },
  {
    category: "Garanties & Assurances",
    items: [
      {
        q: "La garantie décennale couvre-t-elle les travaux de maçonnerie ?",
        a: "Oui. La garantie décennale (article 1792 du Code civil belge) s'applique à tous les travaux de maçonnerie affectant la solidité ou l'habitabilité du bâtiment : fondations, murs porteurs, dallages structurels, réparations de fissures actives. Elle court 10 ans à compter de la réception des travaux. Les finitions de surface (enduits, peintures) sont couvertes par la garantie biennale (2 ans).",
      },
      {
        q: "Comment est couverte une fissure qui réapparaît après réparation ?",
        a: "Les fissures structurelles réparées sont couvertes par notre garantie décennale. Si une fissure réapparaît dans les 10 ans, une expertise détermine si elle relève d'un vice de réparation (couvert) ou d'un mouvement de terrain extérieur (couvert par l'assurance habitation). Nous fournissons à la livraison un rapport photographié avant/après et une attestation de garantie.",
      },
    ],
  },
  {
    category: "Chantier & Délais",
    items: [
      {
        q: "Comment obtenir un devis pour des travaux de maçonnerie ?",
        a: "Le devis est entièrement gratuit et sans engagement. Notre technicien se déplace chez vous pour une inspection visuelle complète, généralement sous 2 jours ouvrables. Le devis détaillé (matériaux, quantités, délais, accès au chantier) vous est remis par écrit dans les 48h suivant la visite. Aucune décision ne vous est demandée sur place.",
      },
      {
        q: "Combien de temps durent les travaux de façade ?",
        a: "La durée dépend de la surface et du type d'intervention. Un ravalement simple de façade (100 m²) prend en moyenne 3 à 5 jours. Une ITE complète avec crépis sur une maison mitoyenne standard nécessite 7 à 14 jours. Les délais incluent les temps de séchage obligatoires entre couches. Nous établissons un planning précis dans le devis et vous tenons informé de chaque étape.",
      },
      {
        q: "Intervenez-vous en urgence pour des fissures ou dégâts structurels ?",
        a: "Oui. Notre équipe intervient sous 24 à 48h pour les situations urgentes : fissures actives en progression rapide, effondrements partiels, murs en danger de chute. Une astreinte téléphonique est disponible en semaine. L'intervention d'urgence comprend une mise en sécurité immédiate et un diagnostic avec photos avant/après. Un devis de réparation définitive vous est remis dans les 48h.",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button className="faq-trigger" onClick={() => setOpen(!open)} data-open={open} aria-expanded={open}>
        <span style={{
          fontFamily:    "var(--font-display), 'Arial Black', sans-serif",
          fontSize:      "clamp(14px, 1.8vw, 16px)",
          fontWeight:    400,
          color:         open ? "#F2E8D4" : "rgba(242,232,212,0.82)",
          letterSpacing: "-0.015em",
          lineHeight:    1.4,
          textAlign:     "left",
          transition:    "color 0.25s cubic-bezier(0.16,1,0.3,1)",
          textWrap:      "balance",
        } as React.CSSProperties}>
          {q}
        </span>
        <div style={{
          width:      "30px", height: "30px",
          background: open ? "rgba(200,160,32,0.14)" : "rgba(255,255,255,0.04)",
          border:     `1px solid ${open ? "rgba(200,160,32,0.38)" : "rgba(255,255,255,0.09)"}`,
          display:    "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
          transition: "all 0.25s cubic-bezier(0.16,1,0.3,1)",
        }}>
          {open ? <Minus size={13} weight="bold" color="var(--orange)" aria-hidden /> : <Plus size={13} weight="bold" color="rgba(242,232,212,0.45)" aria-hidden />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="faq-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.32, 0.72, 0, 1] }}
          >
            <p style={{
              padding:  "0 0 28px 0",
              fontSize: "14px",
              color:    "rgba(242,232,212,0.58)",
              lineHeight: 1.82,
              maxWidth:   "720px",
              textWrap:   "pretty",
            } as React.CSSProperties}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" style={{ paddingTop: "140px", paddingBottom: "140px", background: "#211710", position: "relative", overflow: "hidden" }}>
      <span className="bg-number" style={{ right: "-2%", top: "0" }}>03</span>

      <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: "88px" }}
        >
          <span className="tag-orange" style={{ marginBottom: "24px", display: "inline-flex" }}>FAQ & Réassurance</span>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "40px", flexWrap: "wrap" }}>
            <h2 className="font-industrial" style={{ fontSize: "clamp(36px, 6vw, 80px)", color: "#F2E8D4", maxWidth: "600px" }}>
              Vos questions,
              <br />
              <span style={{ color: "var(--orange)" }}>nos réponses</span>
            </h2>
            <p style={{ fontSize: "14px", color: "rgba(240,239,233,0.5)", lineHeight: 1.7, maxWidth: "340px" }}>
              Primes, garanties, délais, urgences. Tout ce que vous devez
              savoir avant de nous confier votre chantier.
            </p>
          </div>
          <div className="tech-divider" style={{ marginTop: "40px" }} />
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "64px" }} className="lg:grid-cols-[280px_1fr]">
          <div className="hidden lg:block">
            <div style={{ position: "sticky", top: "100px" }}>
              <div className="font-mono-label" style={{ color: "rgba(242,232,212,0.28)", marginBottom: "24px" }}>[ Catégories ]</div>
              {faqs.map((cat) => (
                <a
                  key={cat.category}
                  href={`#faq-${cat.category.toLowerCase().replace(/\s/g, "-").replace(/&/g, "")}`}
                  style={{
                    display:       "block",
                    padding:       "11px 0 11px 18px",
                    borderLeft:    "2px solid rgba(255,255,255,0.07)",
                    color:         "rgba(242,232,212,0.5)",
                    fontFamily:    "var(--font-mono), monospace",
                    fontSize:      "11px", fontWeight: 700,
                    letterSpacing: "0.08em", textTransform: "uppercase",
                    textDecoration: "none",
                    transition:    "all 0.25s cubic-bezier(0.16,1,0.3,1)",
                    marginBottom:  "4px",
                  }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.color = "#F2E8D4"; el.style.borderLeftColor = "var(--orange)"; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.color = "rgba(242,232,212,0.5)"; el.style.borderLeftColor = "rgba(255,255,255,0.07)"; }}
                >
                  {cat.category}
                </a>
              ))}

              <div style={{ marginTop: "48px", padding: "24px", background: "rgba(200,160,32,0.08)", border: "1px solid rgba(200,160,32,0.25)" }}>
                <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--orange)", marginBottom: "12px" }}>
                  Urgence 24h/24
                </div>
                <p style={{ fontSize: "12px", color: "rgba(240,239,233,0.55)", lineHeight: 1.6, marginBottom: "20px" }}>
                  Fissure active ? Mur en danger ? Appelez notre équipe d'urgence immédiatement.
                </p>
                <a href="tel:+3200000000" className="btn-urgent" style={{ width: "100%", justifyContent: "center", textDecoration: "none", fontSize: "12px", padding: "14px 20px" }}>
                  Appel d'urgence
                </a>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "56px" }}>
            {faqs.map((cat, i) => (
              <motion.div
                key={cat.category}
                id={`faq-${cat.category.toLowerCase().replace(/\s/g, "-").replace(/&/g, "")}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
                  <span className="font-mono-label" style={{ color: "var(--orange)", whiteSpace: "nowrap" }}>{cat.category}</span>
                  <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
                </div>
                {cat.items.map((item) => <FAQItem key={item.q} {...item} />)}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
