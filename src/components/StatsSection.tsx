"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: 15,   suffix: "+",    label: "Années d'expérience",   sublabel: "Maçon certifié depuis 2009"          },
  { value: 850,  suffix: "+",    label: "Chantiers réalisés",    sublabel: "En Belgique et grand-duché"           },
  { value: 97,   suffix: "%",    label: "Clients satisfaits",    sublabel: "Score moyen sur 4 plateformes"        },
  { value: 10,   suffix: " ans", label: "Garantie décennale",    sublabel: "Sur tous les travaux structurels"     },
];

function useCountUp(target: number, duration = 1600, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, active]);
  return count;
}

function StatItem({
  value, suffix, label, sublabel, active, index,
}: (typeof stats)[0] & { active: boolean; index: number }) {
  const count = useCountUp(value, 1600, active);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{
        padding:     "44px 32px",
        borderRight: "1px solid rgba(255,255,255,0.065)",
        display:     "flex", flexDirection: "column", gap: "6px",
        position:    "relative", overflow: "hidden",
      }}
    >
      <div aria-hidden="true" style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        height:   "1px",
        background: "linear-gradient(90deg, var(--orange) 0%, transparent 60%)",
        opacity:  0.25,
      }} />

      <div style={{ display: "flex", alignItems: "flex-end", gap: "2px" }}>
        <span className="stat-number">{count}</span>
        <span style={{
          fontFamily:         "var(--font-mono), monospace",
          fontSize:           "clamp(22px, 3.5vw, 44px)",
          fontWeight:         700,
          color:              "#E8500A",
          letterSpacing:      "-0.03em",
          lineHeight:         1.15,
          marginBottom:       "7px",
          fontVariantNumeric: "tabular-nums",
        }}>
          {suffix}
        </span>
      </div>

      <div style={{
        fontFamily:    "var(--font-display), 'Arial Black', sans-serif",
        fontSize:      "13px", fontWeight: 400,
        textTransform: "uppercase", letterSpacing: "0.04em",
        color:         "#EDECEA", marginTop: "4px",
      }}>
        {label}
      </div>

      <div className="font-mono-label" style={{ color: "rgba(237,236,234,0.38)", marginTop: "2px" }}>
        {sublabel}
      </div>
    </motion.div>
  );
}

export default function StatsSection() {
  const ref    = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="stats"
      ref={ref}
      style={{
        background:   "#1A1A1A",
        borderTop:    "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        position:     "relative",
        overflow:     "hidden",
      }}
    >
      <div aria-hidden="true" style={{
        position:      "absolute", top: "16px", right: "24px",
        fontFamily:    "var(--font-mono), monospace",
        fontSize:      "9px", fontWeight: 700,
        color:         "rgba(232,80,10,0.22)",
        letterSpacing: "0.12em", textTransform: "uppercase",
      }}>
        [ DONNÉES / SYS-02 ]
      </div>

      <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}
          className="md:grid-cols-4"
        >
          {stats.map((s, i) => (
            <StatItem key={s.label} {...s} active={active} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
