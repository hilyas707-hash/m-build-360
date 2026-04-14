"use client";

import { Phone, Mail } from "lucide-react";

const navLinks = [
  { label: "Actualités", href: "/#actualites" },
  { label: "FAQ",        href: "/#faq"        },
  { label: "Contact",    href: "/#contact"    },
];

const legalLinks = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Confidentialité",  href: "/confidentialite"  },
  { label: "Cookies",          href: "/cookies"          },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#0F0C08", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div aria-hidden="true" style={{
        height:     "3px",
        background: "repeating-linear-gradient(90deg,#8C3518 0px,#8C3518 12px,#C46030 12px,#C46030 16px,#0F0C08 16px,#0F0C08 34px)",
        opacity:    0.55,
      }} />

      <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "32px 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "28px" }}>

          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
            <div style={{
              width: "28px", height: "28px", background: "#8C3518",
              clipPath: "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }} aria-hidden="true">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 19V10L12 3L20 10V19H15V14H9V19H4Z" fill="#F2E8D4" />
              </svg>
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-display), sans-serif", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#F2E8D4", lineHeight: 1 }}>
                M Build 360
              </div>
              <div style={{ fontFamily: "var(--font-mono), monospace", fontSize: "8px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#8C3518", marginTop: "2px" }}>
                Maçonnerie
              </div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "6px 0" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px", paddingRight: "24px", marginRight: "24px", borderRight: "1px solid rgba(255,255,255,0.07)" }}>
              <a href="tel:+3200000000" className="footer-link" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Phone size={10} color="#8C3518" />
                <span>+32 (0)2 000 00 00</span>
              </a>
              <a href="mailto:info@m-build-360.be" className="footer-link" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Mail size={10} color="#8C3518" />
                <span>info@m-build-360.be</span>
              </a>
            </div>
            <nav style={{ display: "flex", alignItems: "center", gap: "20px", paddingRight: "24px", marginRight: "24px", borderRight: "1px solid rgba(255,255,255,0.07)" }}>
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className="footer-link">{l.label}</a>
              ))}
            </nav>
            <nav style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              {legalLinks.map((l) => (
                <a key={l.href} href={l.href} className="footer-link-sm">{l.label}</a>
              ))}
            </nav>
          </div>
        </div>

        <div style={{ marginTop: "24px", paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
          <p style={{ fontFamily: "var(--font-mono), monospace", fontSize: "9px", color: "rgba(240,239,233,0.2)", letterSpacing: "0.06em" }}>
            © {year} M Build 360 SRL — TVA BE 0000.000.000
          </p>
          <p style={{ fontFamily: "var(--font-mono), monospace", fontSize: "9px", color: "rgba(140,53,24,0.22)", letterSpacing: "0.06em" }}>
            [ REV 1.0 — BRUXELLES ]
          </p>
        </div>
      </div>
    </footer>
  );
}
