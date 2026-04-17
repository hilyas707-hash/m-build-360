import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Politique de cookies — M Build 360",
  description: "Politique de cookies de M Build 360 : types de cookies utilisés, durée de conservation et gestion de vos préférences.",
  robots: { index: true, follow: true },
};

const cookieTypes = [
  {
    name: "Cookies strictement nécessaires",
    required: true,
    description: "Ces cookies sont indispensables au fonctionnement du site. Ils permettent la navigation et l'utilisation des fonctionnalités essentielles. Ils ne peuvent pas être désactivés.",
    examples: [
      { name: "session", purpose: "Maintien de la session utilisateur", duration: "Session" },
      { name: "__csrf", purpose: "Protection contre les attaques CSRF", duration: "Session" },
    ],
  },
  {
    name: "Cookies de performance et d'analyse",
    required: false,
    description: "Ces cookies nous permettent de mesurer le trafic et d'analyser le comportement des visiteurs afin d'améliorer notre site. Ils collectent des données anonymisées.",
    examples: [
      { name: "_ga", purpose: "Analyse d'audience (Google Analytics)", duration: "2 ans" },
      { name: "_gid", purpose: "Distinction des utilisateurs", duration: "24 heures" },
    ],
  },
  {
    name: "Cookies fonctionnels",
    required: false,
    description: "Ces cookies permettent de mémoriser vos préférences (langue, région) pour personnaliser votre expérience lors de vos prochaines visites.",
    examples: [
      { name: "prefs", purpose: "Mémorisation des préférences d'affichage", duration: "1 an" },
    ],
  },
];

export default function CookiesPage() {
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
              Cookies
            </span>
            <h1
              className="font-industrial"
              style={{ fontSize: "clamp(36px, 6vw, 72px)", color: "#F2E8D4" }}
            >
              Politique
              <br />
              <span style={{ color: "var(--orange)" }}>cookies</span>
            </h1>
            <div className="tech-divider" style={{ marginTop: "32px" }} />
          </div>

          {/* Intro */}
          <p
            style={{
              fontSize:      "14px",
              color:         "rgba(242,232,212,0.58)",
              lineHeight:    1.75,
              marginBottom:  "48px",
              padding:       "20px 24px",
              background:    "rgba(200,160,32,0.05)",
              border:        "1px solid rgba(200,160,32,0.18)",
              borderLeft:    "3px solid var(--orange)",
              textWrap:      "pretty" as "pretty",
            }}
          >
            Un cookie est un petit fichier texte déposé sur votre terminal lors de votre visite.
            Conformément à la loi belge du 13 juin 2005 relative aux communications électroniques
            et au RGPD, nous vous informons de l'utilisation de cookies sur ce site et vous donnons
            le choix de les accepter ou de les refuser.
          </p>

          {/* Types de cookies */}
          <div style={{ display: "flex", flexDirection: "column", gap: "40px", marginBottom: "48px" }}>
            {cookieTypes.map((type) => (
              <div key={type.name}>
                {/* Titre + badge */}
                <div
                  style={{
                    display:       "flex",
                    alignItems:    "center",
                    gap:           "12px",
                    marginBottom:  "16px",
                    flexWrap:      "wrap",
                  }}
                >
                  <h2
                    className="font-industrial-md"
                    style={{ fontSize: "15px", color: "var(--orange)" }}
                  >
                    {type.name}
                  </h2>
                  <span
                    style={{
                      fontFamily:    "var(--font-mono), monospace",
                      fontSize:      "9px",
                      fontWeight:    700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      padding:       "3px 8px",
                      background:    type.required ? "rgba(200,160,32,0.12)" : "rgba(255,255,255,0.05)",
                      border:        `1px solid ${type.required ? "rgba(200,160,32,0.35)" : "rgba(255,255,255,0.1)"}`,
                      color:         type.required ? "var(--orange)" : "rgba(242,232,212,0.45)",
                    }}
                  >
                    {type.required ? "Obligatoire" : "Optionnel"}
                  </span>
                </div>

                <div
                  style={{
                    background:  "rgba(255,255,255,0.025)",
                    border:      "1px solid rgba(255,255,255,0.065)",
                    borderLeft:  "3px solid rgba(200,160,32,0.4)",
                  }}
                >
                  <p
                    style={{
                      fontSize:   "13px",
                      color:      "rgba(242,232,212,0.58)",
                      lineHeight: 1.72,
                      padding:    "20px 24px",
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    {type.description}
                  </p>

                  {/* Tableau cookies */}
                  <div style={{ overflowX: "auto" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                      <thead>
                        <tr style={{ background: "rgba(255,255,255,0.03)" }}>
                          {["Nom", "Finalité", "Durée"].map((h) => (
                            <th
                              key={h}
                              style={{
                                padding:       "10px 20px",
                                textAlign:     "left",
                                fontFamily:    "var(--font-mono), monospace",
                                fontSize:      "9px",
                                fontWeight:    700,
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                color:         "rgba(200,160,32,0.6)",
                                borderBottom:  "1px solid rgba(255,255,255,0.06)",
                              }}
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {type.examples.map((ex, i) => (
                          <tr
                            key={ex.name}
                            style={{ background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.015)" }}
                          >
                            <td
                              style={{
                                padding:    "12px 20px",
                                fontFamily: "var(--font-mono), monospace",
                                fontSize:   "11px",
                                color:      "#F2E8D4",
                              }}
                            >
                              {ex.name}
                            </td>
                            <td
                              style={{
                                padding:    "12px 20px",
                                fontSize:   "12px",
                                color:      "rgba(242,232,212,0.55)",
                              }}
                            >
                              {ex.purpose}
                            </td>
                            <td
                              style={{
                                padding:    "12px 20px",
                                fontFamily: "var(--font-mono), monospace",
                                fontSize:   "11px",
                                color:      "rgba(242,232,212,0.45)",
                                whiteSpace: "nowrap",
                              }}
                            >
                              {ex.duration}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gestion */}
          <div>
            <h2
              className="font-industrial-md"
              style={{ fontSize: "16px", color: "var(--orange)", marginBottom: "16px" }}
            >
              Gérer vos préférences
            </h2>
            <div
              style={{
                padding:    "24px",
                background: "rgba(255,255,255,0.025)",
                border:     "1px solid rgba(255,255,255,0.065)",
                borderLeft: "3px solid rgba(200,160,32,0.4)",
                display:    "flex",
                flexDirection: "column",
                gap:        "12px",
              }}
            >
              {[
                "Vous pouvez à tout moment modifier vos préférences cookies via les paramètres de votre navigateur.",
                "Chrome : Paramètres → Confidentialité et sécurité → Cookies et autres données des sites",
                "Firefox : Paramètres → Vie privée et sécurité → Cookies et données de sites",
                "Safari : Préférences → Confidentialité → Gérer les données des sites web",
                "Edge : Paramètres → Cookies et autorisations de site",
                "La désactivation des cookies strictement nécessaires peut affecter le fonctionnement du site.",
              ].map((line, i) => (
                <p
                  key={i}
                  style={{
                    fontSize:   "13px",
                    color:      "rgba(242,232,212,0.58)",
                    lineHeight: 1.7,
                  }}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div
            style={{
              marginTop:  "48px",
              padding:    "24px",
              background: "rgba(200,160,32,0.05)",
              border:     "1px solid rgba(200,160,32,0.2)",
            }}
          >
            <div className="font-mono-label" style={{ color: "var(--orange)", marginBottom: "10px" }}>
              Questions ?
            </div>
            <p style={{ fontSize: "13px", color: "rgba(242,232,212,0.58)", lineHeight: 1.7 }}>
              Pour toute question relative à notre utilisation des cookies ou pour exercer vos droits,
              contactez-nous à{" "}
              <a
                href="mailto:info@m-build-360.be"
                style={{ color: "var(--orange)", textDecoration: "underline" }}
              >
                info@m-build-360.be
              </a>
            </p>
          </div>

          <p
            style={{
              marginTop:     "48px",
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
