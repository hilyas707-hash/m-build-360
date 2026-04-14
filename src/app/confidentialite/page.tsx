import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Politique de confidentialité & RGPD — M Build 360",
  description: "Politique de confidentialité de M Build 360 : traitement des données personnelles, droits RGPD, durée de conservation et contact DPO.",
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: "Responsable du traitement",
    items: [
      "M Build 360 SRL est le responsable du traitement de vos données personnelles au sens du Règlement (UE) 2016/679 (RGPD).",
      "Contact : info@m-build-360.be — +32 (0)2 000 00 00",
    ],
  },
  {
    title: "Données collectées",
    items: [
      "Formulaire de contact : nom, prénom, adresse e-mail, numéro de téléphone, commune, type de service demandé et description du projet.",
      "Navigation : données techniques anonymisées (adresse IP, type de navigateur, pages visitées) via des outils d'analyse d'audience.",
      "Aucune donnée sensible (santé, opinions politiques, etc.) n'est collectée.",
    ],
  },
  {
    title: "Finalités et bases légales",
    items: [
      "Traitement des demandes de devis et de contact (base légale : intérêt légitime et consentement).",
      "Envoi de réponses à vos demandes d'information (base légale : exécution d'un contrat précontractuel).",
      "Amélioration de notre site et de nos services (base légale : intérêt légitime).",
      "Respect des obligations légales et comptables (base légale : obligation légale).",
    ],
  },
  {
    title: "Durée de conservation",
    items: [
      "Données de contact et demandes de devis : 3 ans à compter du dernier contact.",
      "Données de facturation et comptables : 7 ans (obligation légale belge).",
      "Données de navigation anonymisées : 13 mois maximum.",
    ],
  },
  {
    title: "Destinataires des données",
    items: [
      "Vos données ne sont ni vendues, ni louées, ni transmises à des tiers à des fins commerciales.",
      "Elles peuvent être partagées avec nos prestataires techniques (hébergement, messagerie) dans le cadre strict de l'exécution de leurs services et sous contrat de traitement des données.",
      "Ces prestataires sont établis au sein de l'UE ou offrent des garanties équivalentes.",
    ],
  },
  {
    title: "Vos droits RGPD",
    items: [
      "Droit d'accès : obtenir une copie des données vous concernant.",
      "Droit de rectification : corriger des données inexactes ou incomplètes.",
      "Droit à l'effacement : demander la suppression de vos données dans les cas prévus par le RGPD.",
      "Droit à la limitation : restreindre le traitement dans certaines circonstances.",
      "Droit à la portabilité : recevoir vos données dans un format structuré et lisible.",
      "Droit d'opposition : vous opposer au traitement fondé sur l'intérêt légitime.",
      "Pour exercer ces droits : info@m-build-360.be — Réponse sous 30 jours.",
      "Vous pouvez également introduire une réclamation auprès de l'Autorité de protection des données (APD) belge : www.autoriteprotectiondonnees.be",
    ],
  },
  {
    title: "Transferts hors UE",
    items: [
      "En cas de transfert de données vers des pays tiers (ex. : hébergement Vercel aux États-Unis), nous nous assurons que des garanties appropriées sont en place (clauses contractuelles types de la Commission européenne, décision d'adéquation, etc.).",
    ],
  },
  {
    title: "Sécurité",
    items: [
      "Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte, destruction ou divulgation accidentelle : chiffrement HTTPS, accès restreints, sauvegrades régulières.",
    ],
  },
];

export default function ConfidentialitePage() {
  return (
    <>
      <Navbar />
      <main
        style={{
          background:    "#18130E",
          minHeight:     "100dvh",
          paddingTop:    "120px",
          paddingBottom: "100px",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px" }}>

          {/* En-tête */}
          <div style={{ marginBottom: "56px" }}>
            <span className="tag-orange" style={{ marginBottom: "20px", display: "inline-flex" }}>
              RGPD
            </span>
            <h1
              className="font-industrial"
              style={{ fontSize: "clamp(32px, 5.5vw, 68px)", color: "#F2E8D4" }}
            >
              Politique de
              <br />
              <span style={{ color: "#8C3518" }}>confidentialité</span>
            </h1>
            <div className="tech-divider" style={{ marginTop: "32px" }} />
          </div>

          {/* Sections */}
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            {sections.map((s) => (
              <div key={s.title}>
                <h2
                  className="font-industrial-md"
                  style={{ fontSize: "16px", color: "#8C3518", marginBottom: "16px" }}
                >
                  {s.title}
                </h2>
                <ul
                  style={{
                    padding:       "20px 24px",
                    background:    "rgba(255,255,255,0.025)",
                    border:        "1px solid rgba(255,255,255,0.065)",
                    borderLeft:    "3px solid rgba(140,53,24,0.4)",
                    display:       "flex",
                    flexDirection: "column",
                    gap:           "10px",
                    listStyle:     "none",
                  }}
                >
                  {s.items.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        fontSize:   "13px",
                        color:      "rgba(242,232,212,0.62)",
                        lineHeight: 1.72,
                        display:    "flex",
                        gap:        "10px",
                        alignItems: "flex-start",
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          width:      "4px",
                          height:     "4px",
                          borderRadius: "50%",
                          background: "rgba(140,53,24,0.5)",
                          flexShrink: 0,
                          marginTop:  "7px",
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p
            style={{
              marginTop:     "56px",
              fontFamily:    "var(--font-mono), monospace",
              fontSize:      "10px",
              color:         "rgba(242,232,212,0.28)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Dernière mise à jour : avril 2026
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
