"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "@phosphor-icons/react";

const WA_NUMBER = "3200000000";

const OPTIONS = [
  { id: "devis",    label: "Demander un devis",   text: "Bonjour, je souhaite obtenir un devis pour des travaux de maçonnerie." },
  { id: "urgence",  label: "Signaler une urgence", text: "Bonjour, j'ai un problème urgent de maçonnerie (fissure, chute de pierres). Pouvez-vous intervenir ?" },
  { id: "info",     label: "Poser une question",   text: "Bonjour, j'aurais quelques questions sur vos services de maçonnerie." },
];

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`
        @keyframes wa-pulse {
          0%   { box-shadow: 0 0 0 0 rgba(29,185,84,0.55); }
          65%  { box-shadow: 0 0 0 14px rgba(29,185,84,0); }
          100% { box-shadow: 0 0 0 0 rgba(29,185,84,0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .wa-fab { animation: none !important; }
        }
      `}</style>

      {/* Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="ov"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.16 }}
            onClick={() => setOpen(false)}
            style={{ position: "fixed", inset: 0, zIndex: 148, background: "rgba(0,0,0,0.3)" }}
          />
        )}
      </AnimatePresence>

      {/* Popup */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="popup"
            initial={{ opacity: 0, scale: 0.88, y: 12 }}
            animate={{ opacity: 1, scale: 1,    y: 0  }}
            exit={{   opacity: 0, scale: 0.9,   y: 8  }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position:      "fixed",
              bottom:        "calc(90px + env(safe-area-inset-bottom, 0px))",
              right:         "18px",
              zIndex:        149,
              width:         "min(272px, calc(100vw - 36px))",
              background:    "#0f0f0f",
              border:        "1px solid rgba(255,255,255,0.08)",
              borderTop:     "2px solid #1DB954",
              transformOrigin: "bottom right",
              overflow:      "hidden",
            }}
          >
            {/* Label source */}
            <div
              style={{
                padding:        "11px 14px 10px",
                display:        "flex",
                alignItems:     "center",
                justifyContent: "space-between",
                borderBottom:   "1px solid rgba(255,255,255,0.055)",
              }}
            >
              <span
                style={{
                  fontFamily:    "var(--font-mono), monospace",
                  fontSize:      "9px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color:         "#1DB954",
                }}
              >
                M Build 360 — WhatsApp
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Fermer"
                style={{
                  width:          "24px",
                  height:         "24px",
                  background:     "none",
                  border:         "none",
                  cursor:         "pointer",
                  display:        "flex",
                  alignItems:     "center",
                  justifyContent: "center",
                  color:          "rgba(242,232,212,0.35)",
                  touchAction:    "manipulation",
                  padding:        0,
                }}
              >
                <X size={12} weight="bold" />
              </button>
            </div>

            {/* Options */}
            {OPTIONS.map((opt, i) => (
              <a
                key={opt.id}
                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(opt.text)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                style={{
                  display:        "flex",
                  alignItems:     "center",
                  justifyContent: "space-between",
                  minHeight:      "48px",
                  padding:        "0 14px",
                  borderBottom:   i < OPTIONS.length - 1 ? "1px solid rgba(255,255,255,0.045)" : "none",
                  textDecoration: "none",
                  gap:            "8px",
                  touchAction:    "manipulation",
                  transition:     "background 0.12s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(29,185,84,0.07)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
              >
                <span
                  style={{
                    fontFamily:    "var(--font-display), sans-serif",
                    fontSize:      "12px",
                    color:         "rgba(242,232,212,0.78)",
                    letterSpacing: "0.01em",
                  }}
                >
                  {opt.label}
                </span>
                <ArrowUpRight size={13} weight="bold" color="rgba(29,185,84,0.7)" style={{ flexShrink: 0 }} />
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <motion.button
        aria-label={open ? "Fermer" : "Contacter sur WhatsApp"}
        className="wa-fab"
        onClick={() => setOpen((v) => !v)}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.2, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        whileTap={{ scale: 0.9 }}
        style={{
          position:       "fixed",
          bottom:         "calc(24px + env(safe-area-inset-bottom, 0px))",
          right:          "20px",
          zIndex:         150,
          width:          "52px",
          height:         "52px",
          borderRadius:   "50%",
          background:     "#1DB954",
          border:         "none",
          display:        "flex",
          alignItems:     "center",
          justifyContent: "center",
          cursor:         "pointer",
          touchAction:    "manipulation",
          animation:      open ? "none" : "wa-pulse 2.4s ease-out infinite",
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="x"
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0,   opacity: 1 }}
              exit={{   rotate:  45,  opacity: 0 }}
              transition={{ duration: 0.15 }}
              style={{ display: "flex" }}
            >
              <X size={20} weight="bold" color="#fff" />
            </motion.span>
          ) : (
            <motion.span key="wa"
              initial={{ rotate: 45, opacity: 0 }}
              animate={{ rotate: 0,  opacity: 1 }}
              exit={{   rotate: -45, opacity: 0 }}
              transition={{ duration: 0.15 }}
              style={{ display: "flex" }}
            >
              <svg viewBox="0 0 24 24" fill="#fff" width="24" height="24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
