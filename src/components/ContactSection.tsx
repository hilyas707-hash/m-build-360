"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, CheckCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Téléphone",
    value: "+32 (0)2 000 00 00",
    sub: "Lun – Ven : 8h – 18h",
    href: "tel:+3200000000",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "info@m-build-360.be",
    sub: "Réponse sous 24h ouvrables",
    href: "mailto:info@m-build-360.be",
  },
  {
    icon: MapPin,
    label: "Zone d'intervention",
    value: "Bruxelles & périphérie",
    sub: "Brabant wallon · Brabant flamand",
    href: undefined,
  },
];

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    nom: "",
    email: "",
    telephone: "",
    commune: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation d'envoi
    setTimeout(() => setSent(true), 600);
  };

  return (
    <section
      id="contact"
      className="construction-grid-dense"
      style={{
        paddingTop: "140px",
        paddingBottom: "140px",
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(ellipse at 80% 50%, rgba(200,160,32,0.08) 0%, transparent 60%), #18130E",
      }}
    >
      {/* Numéro de fond */}
      <span className="bg-number" style={{ left: "-2%", top: "0" }}>
        04
      </span>

      {/* Ligne verticale orange — droite */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "4px",
          background:
            "linear-gradient(180deg, transparent 0%, #C8A020 20%, #C8A020 80%, transparent 100%)",
        }}
      />

      <div
        style={{
          maxWidth: "1160px",
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: "80px" }}
        >
          <span className="tag-orange" style={{ marginBottom: "24px", display: "inline-flex" }}>
            Devis & Contact
          </span>
          <h2
            className="font-industrial"
            style={{
              fontSize: "clamp(36px, 6vw, 80px)",
              color: "#F2E8D4",
              maxWidth: "700px",
            }}
          >
            Parlons de
            <br />
            <span style={{ color: "#C8A020" }}>votre projet</span>
          </h2>
          <div className="tech-divider" style={{ marginTop: "40px" }} />
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "64px",
            alignItems: "start",
          }}
          className="lg:grid-cols-[1fr_400px]"
        >
          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {sent ? (
              <div
                style={{
                  padding: "64px 48px",
                  background: "rgba(200,160,32,0.06)",
                  border: "1px solid rgba(200,160,32,0.25)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  gap: "24px",
                }}
              >
                <CheckCircle size={56} color="#C8A020" />
                <div>
                  <div
                    className="font-industrial-md"
                    style={{ fontSize: "28px", color: "#F2E8D4", marginBottom: "12px" }}
                  >
                    Demande envoyée !
                  </div>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "rgba(240,239,233,0.6)",
                      lineHeight: 1.7,
                      maxWidth: "400px",
                    }}
                  >
                    Votre demande a bien été transmise. Notre équipe vous
                    contacte sous 48 heures ouvrables pour fixer la visite
                    de diagnostic.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div
                  className="contact-form-grid"
                  style={{ marginBottom: "16px" }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "10px",
                        fontWeight: 700,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "rgba(240,239,233,0.5)",
                        marginBottom: "8px",
                      }}
                    >
                      Nom complet *
                    </label>
                    <input
                      className="input-industrial"
                      type="text"
                      name="nom"
                      value={form.nom}
                      onChange={handleChange}
                      placeholder="Jean Dupont"
                      required
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "10px",
                        fontWeight: 700,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "rgba(240,239,233,0.5)",
                        marginBottom: "8px",
                      }}
                    >
                      E-mail *
                    </label>
                    <input
                      className="input-industrial"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jean@exemple.be"
                      required
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "10px",
                        fontWeight: 700,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "rgba(240,239,233,0.5)",
                        marginBottom: "8px",
                      }}
                    >
                      Téléphone
                    </label>
                    <input
                      className="input-industrial"
                      type="tel"
                      name="telephone"
                      value={form.telephone}
                      onChange={handleChange}
                      placeholder="+32 4XX XX XX XX"
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "10px",
                        fontWeight: 700,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "rgba(240,239,233,0.5)",
                        marginBottom: "8px",
                      }}
                    >
                      Commune
                    </label>
                    <input
                      className="input-industrial"
                      type="text"
                      name="commune"
                      value={form.commune}
                      onChange={handleChange}
                      placeholder="Bruxelles, Waterloo…"
                    />
                  </div>
                </div>

                <div style={{ marginBottom: "16px" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "rgba(240,239,233,0.5)",
                      marginBottom: "8px",
                    }}
                  >
                    Type de service *
                  </label>
                  <select
                    className="input-industrial"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    style={{ appearance: "none", cursor: "pointer" }}
                  >
                    <option value="" style={{ background: "#211710" }}>
                      Sélectionnez un service
                    </option>
                    <option value="maconnerie-neuve" style={{ background: "#211710" }}>
                      Maçonnerie neuve
                    </option>
                    <option value="renovation" style={{ background: "#211710" }}>
                      Rénovation & restauration
                    </option>
                    <option value="facades" style={{ background: "#211710" }}>
                      Façades & isolation (ITE)
                    </option>
                    <option value="terrasses" style={{ background: "#211710" }}>
                      Terrasses & dallage
                    </option>
                    <option value="urgence" style={{ background: "#211710" }}>
                      Urgence / Fissure structurelle
                    </option>
                    <option value="autre" style={{ background: "#211710" }}>
                      Autre / Diagnostic
                    </option>
                  </select>
                </div>

                <div style={{ marginBottom: "32px" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "rgba(240,239,233,0.5)",
                      marginBottom: "8px",
                    }}
                  >
                    Description de votre projet
                  </label>
                  <textarea
                    className="input-industrial"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Décrivez brièvement votre chantier, l'état actuel, et vos besoins…"
                    rows={5}
                    style={{ resize: "vertical" }}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "24px",
                    flexWrap: "wrap",
                  }}
                >
                  <p
                    style={{
                      fontSize: "11px",
                      color: "rgba(240,239,233,0.35)",
                      lineHeight: 1.6,
                      maxWidth: "320px",
                    }}
                  >
                    Vos données sont traitées conformément au RGPD. Aucun
                    démarchage commercial ne sera effectué.
                  </p>
                  <button type="submit" className="btn-primary">
                    Envoyer la demande
                    <Send size={15} />
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: "flex", flexDirection: "column", gap: "2px" }}
          >
            {contactInfo.map((info, i) => (
              <div
                key={i}
                style={{
                  padding: "28px 24px",
                  background: "rgba(30,30,30,0.7)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  display: "flex",
                  gap: "20px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    background: "rgba(200,160,32,0.1)",
                    border: "1px solid rgba(200,160,32,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <info.icon size={18} color="#C8A020" />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "rgba(240,239,233,0.4)",
                      marginBottom: "6px",
                    }}
                  >
                    {info.label}
                  </div>
                  {info.href ? (
                    <a
                      href={info.href}
                      style={{
                        fontSize: "15px",
                        fontWeight: 700,
                        color: "#F2E8D4",
                        textDecoration: "none",
                        display: "block",
                        marginBottom: "4px",
                        transition: "color 0.15s",
                      }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLAnchorElement).style.color = "#C8A020")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLAnchorElement).style.color = "#F2E8D4")
                      }
                    >
                      {info.value}
                    </a>
                  ) : (
                    <div
                      style={{
                        fontSize: "15px",
                        fontWeight: 700,
                        color: "#F2E8D4",
                        marginBottom: "4px",
                      }}
                    >
                      {info.value}
                    </div>
                  )}
                  <div
                    style={{
                      fontSize: "12px",
                      color: "rgba(240,239,233,0.4)",
                    }}
                  >
                    {info.sub}
                  </div>
                </div>
              </div>
            ))}

            {/* Panneau urgence mobile */}
            <div
              style={{
                marginTop: "16px",
                padding: "32px 24px",
                background: "rgba(200,160,32,0.08)",
                border: "1px solid rgba(200,160,32,0.25)",
              }}
            >
              <div
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#C8A020",
                  marginBottom: "8px",
                }}
              >
                Intervention d'urgence
              </div>
              <div
                className="font-industrial-md"
                style={{
                  fontSize: "22px",
                  color: "#F2E8D4",
                  marginBottom: "12px",
                }}
              >
                Fissure ? Dégât visible ?
              </div>
              <p
                style={{
                  fontSize: "13px",
                  color: "rgba(240,239,233,0.55)",
                  lineHeight: 1.6,
                  marginBottom: "24px",
                }}
              >
                Notre équipe intervient rapidement. Diagnostic gratuit sur place,
                7j/7, week-end inclus.
              </p>
              <a
                href="tel:+3200000000"
                className="btn-urgent"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  textDecoration: "none",
                }}
              >
                <Phone size={16} />
                Appel direct 24h/24
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
