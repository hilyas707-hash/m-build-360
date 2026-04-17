"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "@phosphor-icons/react";

const SPRING_UI = { type: "spring" as const, stiffness: 100, damping: 22 };

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    };

    const isMobile = window.innerWidth < 768;
    const particles: Particle[] = Array.from({ length: isMobile ? 12 : 38 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.22,
      vy: -Math.random() * 0.32 - 0.06,
      size: Math.random() * 1.4 + 0.35,
      opacity: Math.random() * 0.22 + 0.03,
    }));

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(184,146,42,${p.opacity})`;
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    window.addEventListener("resize", resize, { passive: true });
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="accueil"
      className="construction-grid scanlines relative min-h-[100dvh] overflow-hidden"
      style={{ background: "var(--zinc)" }}
    >
      <canvas
        ref={canvasRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.55]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 72% 18%, rgba(184,146,42,0.07) 0%, transparent 55%), radial-gradient(ellipse 50% 45% at 12% 88%, rgba(14,16,17,0.5) 0%, transparent 50%)",
        }}
      />

      <div
        className="relative z-10 mx-auto flex min-h-[100dvh] w-full max-w-[1400px] flex-col px-6 pb-20 pt-[calc(74px+env(safe-area-inset-top)+1.75rem)] lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-14 lg:pb-24 lg:pt-[calc(74px+env(safe-area-inset-top)+2rem)]"
      >
        <div className="order-2 flex flex-col justify-center lg:order-1 lg:col-span-6 lg:pr-2">
          <motion.h1
            className="font-industrial text-[clamp(2rem,5.2vw,3.65rem)] leading-[0.98] tracking-[-0.035em] text-[var(--white)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={SPRING_UI}
          >
            Bâtir solide,
            <br />
            <span style={{ color: "var(--orange)" }}>construire juste,</span>
            <br />
            livrer complet.
          </motion.h1>

          <motion.div
            className="tech-divider mt-8 mb-7 w-full max-w-[min(100%,420px)] origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 26, delay: 0.12 }}
          />

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...SPRING_UI, delay: 0.14 }}
            className="mb-10 max-w-[54ch] text-base leading-relaxed text-[rgba(242,232,212,0.62)]"
            style={{ textWrap: "pretty" }}
          >
            Maçon certifié à Bruxelles et en Belgique. Maçonnerie neuve, rénovation de façades, terrasses
            et dallage réalisés avec des matériaux durables. Garantie décennale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...SPRING_UI, delay: 0.22 }}
            className="flex flex-wrap gap-3"
          >
            <a href="#contact" className="btn-primary">
              Devis gratuit en 48h
              <ArrowRight size={17} weight="bold" aria-hidden />
            </a>
            <a href="tel:+3200000000" className="btn-secondary">
              <Phone size={15} weight="bold" aria-hidden />
              Appeler maintenant
            </a>
          </motion.div>
        </div>

        <motion.div
          className="order-1 mb-12 w-full lg:order-2 lg:col-span-6 lg:mb-0"
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...SPRING_UI, delay: 0.08 }}
        >
          <div
            className="relative mx-auto aspect-[16/11] w-full max-w-xl overflow-hidden rounded-2xl border border-white/[0.09] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] lg:aspect-[5/6] lg:max-h-[min(72dvh,680px)] lg:max-w-none"
          >
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="https://picsum.photos/seed/m360-landing-hero/1600/1000"
              aria-hidden
              className="absolute inset-0 z-0 h-full w-full object-cover"
              style={{ objectPosition: "center 38%" }}
            >
              <source src="/video/hero-bg.mp4" type="video/mp4" />
            </video>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 z-[1]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(14,16,17,0.15) 0%, rgba(14,16,17,0.55) 48%, rgba(14,16,17,0.82) 100%)",
              }}
            />
          </div>
        </motion.div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 top-0 z-[5] w-[3px]"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, var(--orange) 18%, var(--orange) 82%, transparent 100%)",
        }}
      />
    </section>
  );
}
