import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mentions légales — Toiture Expert Belgique",
  description: "Mentions légales du site Toiture Expert Belgique : éditeur, hébergeur, responsabilité éditoriale et propriété intellectuelle.",
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: "Éditeur du site",
    content: [
      "Raison sociale : Toiture Expert Belgique SRL",
      "Forme juridique : Société à Responsabilité Limitée (SRL)",
      "Siège social : Bruxelles, Belgique",
      "Numéro de TVA : BE 0000.000.000",
      "Numéro d'entreprise BCE : 0000.000.000",
      "Téléphone : +32 (0)2 000 00 00",
      "E-mail : info@toiture-expert.be",
      "Responsable de la publication : Le gérant",
    ],
  },
  {
    title: "Hébergement",
    content: [
      "Le site est hébergé par :",
      "Vercel Inc.",
      "440 N Barranca Ave #4133, Covina, CA 91723, USA",
      "Site web : vercel.com",
    ],
  },
  {
    title: "Propriété intellectuelle",
    content: [
      "L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes) est protégé par le droit d'auteur et les droits de propriété intellectuelle applicables en Belgique.",
      "Toute reproduction, représentation, modification ou exploitation, partielle ou totale, du contenu de ce site est interdite sans l'accord écrit préalable de Toiture Expert Belgique SRL.",
    ],
  },
  {
    title: "Responsabilité",
    content: [
      "Toiture Expert Belgique SRL s'efforce de maintenir les informations publiées sur ce site à jour et exactes. Cependant, la société ne peut garantir l'exactitude, l'exhaustivité ou l'actualité des informations diffusées.",
      "Toiture Expert Belgique SRL décline toute responsabilité pour tout dommage direct ou indirect résultant de l'utilisation de ce site ou de l'impossibilité d'y accéder.",
      "Des liens hypertextes peuvent renvoyer vers des sites tiers. Toiture Expert Belgique SRL n'est pas responsable du contenu de ces sites externes.",
    ],
  },
  {
    title: "Droit applicable",
    content: [
      "Le présent site est soumis au droit belge. Tout litige relatif à son utilisation sera soumis à la compétence exclusive des tribunaux de Bruxelles, Belgique.",
    ],
  },
];

export default function MentionsLegalesPage() {
  return (
    <>
      <Navbar />
      <main
        style={{
          background:    "#0F0F0F",
          minHeight:     "100dvh",
          paddingTop:    "120px",
          paddingBottom: "100px",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px" }}>

          {/* En-tête */}
          <div style={{ marginBottom: "56px" }}>
            <span
              className="tag-orange"
              style={{ marginBottom: "20px", display: "inline-flex" }}
            >
              Légal
            </span>
            <h1
              className="font-industrial"
              style={{ fontSize: "clamp(36px, 6vw, 72px)", color: "#EDECEA" }}
            >
              Mentions
              <br />
              <span style={{ color: "#E8500A" }}>légales</span>
            </h1>
            <div className="tech-divider" style={{ marginTop: "32px" }} />
          </div>

          {/* Sections */}
          <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
            {sections.map((s) => (
              <div key={s.title}>
                <h2
                  className="font-industrial-md"
                  style={{ fontSize: "18px", color: "#E8500A", marginBottom: "20px" }}
                >
                  {s.title}
                </h2>
                <div
                  style={{
                    padding:      "24px 28px",
                    background:   "rgba(255,255,255,0.025)",
                    border:       "1px solid rgba(255,255,255,0.065)",
                    borderLeft:   "3px solid rgba(232,80,10,0.4)",
                    display:      "flex",
                    flexDirection: "column",
                    gap:          "10px",
                  }}
                >
                  {s.content.map((line, i) => (
                    <p
                      key={i}
                      style={{
                        fontSize:   "14px",
                        color:      "rgba(237,236,234,0.62)",
                        lineHeight: 1.72,
                        fontFamily: "var(--font-display), sans-serif",
                      }}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Date de mise à jour */}
          <p
            style={{
              marginTop:     "56px",
              fontFamily:    "var(--font-mono), monospace",
              fontSize:      "10px",
              color:         "rgba(237,236,234,0.28)",
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
