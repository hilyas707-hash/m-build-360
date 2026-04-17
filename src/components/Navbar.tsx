"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X, CaretDown } from "@phosphor-icons/react";

const serviceLinks = [
  { id: "01", slug: "maconnerie-neuve", label: "Maçonnerie neuve",        sub: "Briques · Parpaings · Béton"     },
  { id: "02", slug: "renovation",       label: "Rénovation & restauration", sub: "Ravalement · Rejointoiement"    },
  { id: "03", slug: "facades",          label: "Façades & isolation",      sub: "ITE · Crépis · Enduits"          },
  { id: "04", slug: "terrasses",        label: "Terrasses & dallage",      sub: "Carrelage · Pavés · Béton désactivé" },
];

const navLinks = [
  { label: "Actualités", href: "/#actualites" },
  { label: "FAQ",        href: "/#faq"        },
  { label: "Contact",    href: "/#contact"    },
];

const EASE = [0.32, 0.72, 0, 1] as const;

export default function Navbar() {
  const [open,     setOpen]     = useState(false);
  const [drop,     setDrop]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const servicesActive = pathname.startsWith("/services");

  return (
    <>
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        paddingTop: "env(safe-area-inset-top, 0px)",
        transition: "background 0.3s, border-color 0.3s",
        background:           scrolled ? "rgba(10,10,10,0.95)" : "transparent",
        borderBottom:         `1px solid ${scrolled ? "rgba(255,255,255,0.06)" : "transparent"}`,
        backdropFilter:       scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
      }}>
        <div aria-hidden="true" style={{ height: "2px", background: "linear-gradient(90deg, var(--orange) 0%, rgba(200,160,32,0.4) 60%, transparent 100%)" }} />

        <nav role="navigation" aria-label="Navigation principale" style={{
          maxWidth: "1160px", margin: "0 auto", padding: "0 24px",
          height: "62px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "32px",
        }}>

          {/* Logo */}
          <a href="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none", flexShrink: 0 }}>
            <div style={{
              width: "32px", height: "32px", background: "var(--orange)",
              clipPath: "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }} aria-hidden="true">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 19V10L12 3L20 10V19H15V14H9V19H4Z" fill="#F2E8D4" />
              </svg>
            </div>
            <div>
              <div style={{
                fontFamily: "var(--font-display), 'Arial Black', sans-serif",
                fontSize: "13px", fontWeight: 400,
                letterSpacing: "0.06em", textTransform: "uppercase",
                color: "#F2E8D4", lineHeight: 1,
              }}>
                M Build 360
              </div>
              <div style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: "8px", letterSpacing: "0.2em",
                textTransform: "uppercase", color: "var(--orange)", marginTop: "2px",
              }}>
                Maçonnerie
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex" style={{ alignItems: "center", gap: "4px", flex: 1, justifyContent: "center" }}>

            {/* Dropdown services */}
            <div style={{ position: "relative" }} onMouseLeave={() => setDrop(false)}>
              <button
                onMouseEnter={() => setDrop(true)}
                onClick={() => setDrop((v) => !v)}
                aria-haspopup="true"
                aria-expanded={drop}
                style={{
                  display:       "flex", alignItems: "center", gap: "5px",
                  padding:       "8px 14px",
                  background:    servicesActive ? "rgba(200,160,32,0.1)" : "transparent",
                  border:        `1px solid ${servicesActive ? "rgba(200,160,32,0.3)" : "transparent"}`,
                  cursor:        "pointer",
                  fontFamily:    "var(--font-mono), monospace",
                  fontSize:      "10px", fontWeight: 700,
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  color:         servicesActive ? "var(--orange)" : "rgba(242,232,212,0.65)",
                  transition:    "all 0.18s",
                  touchAction:   "manipulation",
                }}
              >
                Services
                <motion.span animate={{ rotate: drop ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <CaretDown size={11} weight="bold" aria-hidden />
                </motion.span>
              </button>

              <AnimatePresence>
                {drop && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.18, ease: EASE }}
                    style={{
                      position:   "absolute",
                      top:        "calc(100% + 8px)",
                      left:       "-8px",
                      width:      "310px",
                      background: "#0F0B08",
                      border:     "1px solid rgba(255,255,255,0.08)",
                      borderTop:  "2px solid var(--orange)",
                      zIndex:     300,
                    }}
                  >
                    {serviceLinks.map((s, i) => (
                      <a
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        onClick={() => setDrop(false)}
                        style={{
                          display:        "flex", alignItems: "center", gap: "14px",
                          padding:        "14px 18px",
                          textDecoration: "none",
                          borderBottom:   i < serviceLinks.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                          borderLeft:     pathname === `/services/${s.slug}` ? "2px solid var(--orange)" : "2px solid transparent",
                          transition:     "background 0.15s",
                        }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(200,160,32,0.07)"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                      >
                        <span style={{
                          fontFamily:    "var(--font-mono), monospace",
                          fontSize:      "9px", fontWeight: 700,
                          color:         "var(--orange)", letterSpacing: "0.1em",
                          flexShrink:    0,
                        }}>
                          {s.id}
                        </span>
                        <div>
                          <div style={{ fontFamily: "var(--font-display), sans-serif", fontSize: "12px", color: "#F2E8D4", letterSpacing: "0.02em" }}>
                            {s.label}
                          </div>
                          <div style={{ fontFamily: "var(--font-mono), monospace", fontSize: "9px", color: "rgba(242,232,212,0.38)", letterSpacing: "0.08em", marginTop: "2px" }}>
                            {s.sub}
                          </div>
                        </div>
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  padding:       "8px 14px",
                  fontFamily:    "var(--font-mono), monospace",
                  fontSize:      "10px", fontWeight: 700,
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  color:         "rgba(242,232,212,0.65)",
                  textDecoration: "none",
                  transition:    "color 0.18s",
                  border:        "1px solid transparent",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#F2E8D4"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(242,232,212,0.65)"; }}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex" style={{ alignItems: "center", gap: "10px", flexShrink: 0 }}>
            <a
              href="tel:+3200000000"
              style={{
                display:       "flex", alignItems: "center", gap: "7px",
                fontFamily:    "var(--font-mono), monospace",
                fontSize:      "11px", fontWeight: 700,
                letterSpacing: "0.06em",
                color:         "rgba(242,232,212,0.6)",
                textDecoration: "none",
                transition:    "color 0.18s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#F2E8D4"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(242,232,212,0.6)"; }}
            >
              <Phone size={12} weight="bold" color="var(--orange)" aria-hidden />
              +32 (0)2 000 00 00
            </a>
            <a href="#contact" className="btn-primary" style={{ fontSize: "11px", padding: "9px 18px" }}>
              Devis gratuit
            </a>
          </div>

          {/* Mobile controls */}
          <div
            className="flex md:hidden"
            style={{
              alignItems:  "center", gap: "6px",
              opacity:     open ? 0 : 1,
              pointerEvents: open ? "none" : "auto",
              transition:  "opacity 0.18s",
            }}
          >
            <a
              href="tel:+3200000000"
              aria-label="Appeler M Build 360"
              style={{
                width:          "44px", height: "44px",
                display:        "flex", alignItems: "center", justifyContent: "center",
                background:     "rgba(200,160,32,0.1)",
                border:         "1px solid rgba(200,160,32,0.25)",
                touchAction:    "manipulation",
              }}
            >
              <Phone size={16} weight="bold" color="var(--orange)" aria-hidden />
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Ouvrir le menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              style={{
                width:       "44px", height: "44px",
                background:  "transparent",
                border:      "1px solid rgba(255,255,255,0.1)",
                cursor:      "pointer",
                display:     "flex", flexDirection: "column",
                alignItems:  "center", justifyContent: "center", gap: "5px",
                touchAction: "manipulation",
              }}
            >
              <span style={{ width: "18px", height: "1.5px", background: "#F2E8D4", display: "block" }} aria-hidden="true" />
              <span style={{ width: "12px", height: "1.5px", background: "var(--orange)",  display: "block" }} aria-hidden="true" />
              <span style={{ width: "18px", height: "1.5px", background: "#F2E8D4", display: "block" }} aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      {/* Overlay mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => setOpen(false)}
            aria-hidden="true"
            style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.55)", zIndex: 195 }}
          />
        )}
      </AnimatePresence>

      {/* Panel mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navigation"
            key="panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.32, ease: EASE }}
            drag="x"
            dragConstraints={{ left: 0, right: 400 }}
            dragElastic={{ left: 0, right: 0.18 }}
            onDragEnd={(_, info) => { if (info.offset.x > 72) setOpen(false); }}
            style={{
              position:   "fixed", top: 0, right: 0, bottom: 0, zIndex: 200,
              width:      "min(88vw, 360px)",
              background: "#0F0B08",
              border:     "1px solid rgba(255,255,255,0.07)",
              borderRight: "none",
              display:    "flex", flexDirection: "column",
              paddingTop: "env(safe-area-inset-top, 0px)",
              overflowY:  "auto",
            }}
          >
            <div aria-hidden="true" style={{ height: "2px", background: "var(--orange)", flexShrink: 0 }} />

            {/* Header panel */}
            <div style={{
              display:        "flex", alignItems: "center", justifyContent: "space-between",
              padding:        "18px 20px",
              borderBottom:   "1px solid rgba(255,255,255,0.06)",
              flexShrink:     0,
            }}>
              <span style={{
                fontFamily:    "var(--font-mono), monospace",
                fontSize:      "9px", fontWeight: 700,
                letterSpacing: "0.14em", textTransform: "uppercase",
                color:         "rgba(242,232,212,0.4)",
              }}>
                Menu
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Fermer le menu"
                style={{
                  width:       "44px", height: "44px",
                  background:  "transparent",
                  border:      "none", cursor: "pointer",
                  display:     "flex", alignItems: "center", justifyContent: "center",
                  color:       "rgba(242,232,212,0.5)",
                  touchAction: "manipulation",
                }}
              >
                <X size={18} weight="bold" />
              </button>
            </div>

            {/* Nav links */}
            <nav style={{ flex: 1, padding: "12px 0" }}>
              {serviceLinks.map((s) => (
                <a
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  onClick={() => setOpen(false)}
                  style={{
                    display:        "flex", alignItems: "center", gap: "16px",
                    minHeight:      "64px", padding: "0 20px",
                    textDecoration: "none",
                    borderLeft:     pathname === `/services/${s.slug}` ? "3px solid var(--orange)" : "3px solid transparent",
                    borderBottom:   "1px solid rgba(255,255,255,0.04)",
                    transition:     "background 0.15s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(200,160,32,0.06)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                >
                  <span style={{
                    fontFamily:    "var(--font-mono), monospace",
                    fontSize:      "10px", fontWeight: 700,
                    color:         "var(--orange)", flexShrink: 0,
                  }}>
                    {s.id}
                  </span>
                  <div>
                    <div style={{ fontFamily: "var(--font-display), sans-serif", fontSize: "13px", color: "#F2E8D4" }}>
                      {s.label}
                    </div>
                    <div style={{ fontFamily: "var(--font-mono), monospace", fontSize: "9px", color: "rgba(242,232,212,0.35)", marginTop: "2px" }}>
                      {s.sub}
                    </div>
                  </div>
                </a>
              ))}

              <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", margin: "8px 20px" }} />

              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{
                    display:        "flex", alignItems: "center",
                    minHeight:      "56px", padding: "0 20px",
                    fontFamily:     "var(--font-mono), monospace",
                    fontSize:       "10px", fontWeight: 700,
                    letterSpacing:  "0.12em", textTransform: "uppercase",
                    color:          "rgba(242,232,212,0.62)",
                    textDecoration: "none",
                    borderBottom:   "1px solid rgba(255,255,255,0.04)",
                    transition:     "color 0.15s",
                  }}
                >
                  {l.label}
                </a>
              ))}
            </nav>

            {/* CTA bas */}
            <div style={{
              padding:      "16px 20px",
              paddingBottom: "calc(16px + env(safe-area-inset-bottom, 0px))",
              borderTop:    "1px solid rgba(255,255,255,0.06)",
              flexShrink:   0,
            }}>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center", minHeight: "52px", textDecoration: "none" }}
              >
                Devis gratuit en 48h
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
