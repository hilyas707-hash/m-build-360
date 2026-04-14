"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

const SPRING      = { duration: 0.7,  ease: [0.32, 0.72, 0, 1] as const };
const SPRING_FAST = { duration: 0.55, ease: [0.16, 1,    0.3, 1] as const };

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef  = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    type Particle = { x: number; y: number; vx: number; vy: number; size: number; opacity: number; };

    const isMobile = window.innerWidth < 768;
    const particles: Particle[] = Array.from({ length: isMobile ? 15 : 45 }, () => ({
      x:       Math.random() * canvas.width,
      y:       Math.random() * canvas.height,
      vx:      (Math.random() - 0.5) * 0.25,
      vy:      -Math.random() * 0.35 - 0.08,
      size:    Math.random() * 1.5 + 0.4,
      opacity: Math.random() * 0.25 + 0.04,
    }));

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,160,32,${p.opacity})`;
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -10)               p.y = canvas.height + 10;
        if (p.x < -10)               p.x = canvas.width  + 10;
        if (p.x > canvas.width + 10) p.x = -10;
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    window.addEventListener("resize", resize, { passive: true });
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section
      id="accueil"
      className="construction-grid scanlines"
      style={{
        position:      "relative",
        minHeight:     "100dvh",
        display:       "flex",
        alignItems:    "center",
        overflow:      "hidden",
        paddingTop:    "108px",
        paddingBottom: "96px",
        background:    "#18130E",
      }}
    >
      <video
        ref={videoRef}
        autoPlay muted loop playsInline preload="metadata"
        poster="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80"
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%", zIndex: 0 }}
      >
        <source src="/video/Hero-bg.mp4" type="video/mp4" />
      </video>

      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "rgba(15,15,15,0.74)", zIndex: 1 }} />
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0, zIndex: 2,
        background: [
          "radial-gradient(ellipse at 15% 55%, rgba(200,160,32,0.11) 0%, transparent 52%)",
          "radial-gradient(ellipse at 82% 8%,  rgba(15,15,15,0.55) 0%, transparent 52%)",
          "radial-gradient(ellipse at 50% 100%, rgba(15,15,15,0.45) 0%, transparent 55%)",
        ].join(", "),
      }} />

      <canvas ref={canvasRef} aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.7, zIndex: 4 }} />

      <div aria-hidden="true" style={{
        position: "absolute", left: 0, top: 0, bottom: 0, width: "3px",
        background: "linear-gradient(180deg, transparent 0%, #C8A020 18%, #C8A020 82%, transparent 100%)",
        zIndex: 5,
      }} />

      <div style={{ maxWidth: "1160px", width: "100%", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 10 }}>

        <motion.h1
          className="font-industrial"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={SPRING}
          style={{ fontSize: "clamp(52px, 9.5vw, 136px)", color: "#F2E8D4" }}
        >
          Bâtir solide,
          <br />
          <span style={{ color: "#C8A020" }}>construire juste,</span>
          <br />
          livrer complet.
        </motion.h1>

        <motion.div
          className="tech-divider"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginTop: "40px", marginBottom: "28px" }}
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING_FAST, delay: 0.4 }}
          style={{
            fontSize: "clamp(15px, 1.8vw, 18px)",
            color: "rgba(242,232,212,0.62)",
            lineHeight: 1.72,
            maxWidth: "560px",
            marginBottom: "44px",
            textWrap: "pretty" as "pretty",
          }}
        >
          Maçon certifié à Bruxelles et en Belgique. Maçonnerie neuve,
          rénovation de façades, terrasses et dallage réalisés avec les
          matériaux les plus durables du marché. Garantie décennale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING_FAST, delay: 0.54 }}
          style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}
        >
          <a href="#contact" className="btn-primary">
            Devis gratuit en 48h
            <ArrowRight size={15} aria-hidden="true" />
          </a>
          <a href="tel:+3200000000" className="btn-secondary">
            <Phone size={14} aria-hidden="true" />
            Appeler maintenant
          </a>
        </motion.div>
      </div>
    </section>
  );
}
