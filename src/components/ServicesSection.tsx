"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";
import { servicesData } from "@/data/services-data";

const SPRING = { type: "spring" as const, stiffness: 100, damping: 22 };

function serviceSpanClass(index: number): string {
  if (index === 0 || index === 3) return "md:col-span-7";
  return "md:col-span-5";
}

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="construction-grid relative overflow-hidden"
      style={{ paddingTop: "140px", paddingBottom: "140px" }}
    >
      <span className="bg-number" style={{ left: "-2%", top: "0" }} aria-hidden>
        02
      </span>

      <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={SPRING}
          style={{ marginBottom: "88px" }}
        >
          <span className="tag-orange" style={{ marginBottom: "24px", display: "inline-flex" }}>
            Services de maçonnerie
          </span>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <h2
              className="font-industrial max-w-[min(100%,640px)] text-[clamp(2rem,5vw,4rem)] leading-[0.98] tracking-tighter text-[var(--white)] md:text-[clamp(2.25rem,5vw,4.5rem)]"
            >
              Ce que nous
              <br />
              <span style={{ color: "var(--orange)" }}>construisons</span>
            </h2>
            <p
              className="max-w-[340px] text-sm leading-relaxed text-[rgba(242,232,212,0.48)]"
              style={{ textWrap: "pretty" }}
            >
              Chaque chantier est suivi par notre chef maçon certifié. Matériaux sourcés auprès de fournisseurs
              belges et européens labellisés.
            </p>
          </div>
          <div className="tech-divider mt-11" />
        </motion.div>

        <div
          className="grid grid-cols-1 gap-[2px] bg-[rgba(255,255,255,0.04)] md:grid-cols-12"
        >
          {servicesData.map((s, i) => (
            <motion.a
              key={s.id}
              href={`/services/${s.slug}`}
              className={`service-card ${serviceSpanClass(i)}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ ...SPRING, delay: i * 0.07 }}
              style={{
                position: "relative",
                minHeight: "420px",
                display: "flex",
                alignItems: "flex-end",
                textDecoration: "none",
                color: "inherit",
                overflow: "hidden",
                border: i === 0 ? "1px solid rgba(184,146,42,0.2)" : "none",
              }}
            >
              <Image
                src={s.image}
                alt={s.imageAlt}
                fill
                quality={80}
                sizes="(max-width: 768px) 100vw, 58vw"
                style={{
                  objectFit: "cover",
                  objectPosition: "center left",
                  filter: "grayscale(18%) contrast(1.06) brightness(0.78)",
                  transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1)",
                }}
                className="service-card-img"
              />

              <div
                aria-hidden
                className="absolute inset-0 z-[1]"
                style={{
                  background:
                    "linear-gradient(to right, rgba(14,16,17,0.05) 0%, rgba(14,16,17,0.4) 38%, rgba(14,16,17,0.88) 62%, rgba(14,16,17,0.98) 80%, var(--zinc) 100%)",
                }}
              />
              <div
                aria-hidden
                className="absolute inset-0 z-[1]"
                style={{
                  background: "linear-gradient(to top, rgba(14,16,17,0.65) 0%, transparent 50%)",
                }}
              />

              {i === 0 && (
                <div
                  aria-hidden
                  className="absolute left-0 right-0 top-0 z-[3] h-[2px]"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(184,146,42,0.35) 45%, var(--orange) 100%)",
                  }}
                />
              )}

              <div className="service-card-content">
                <div className="font-mono-label mb-3.5" style={{ color: "var(--orange)" }}>
                  {s.id} — {s.subtitle}
                </div>
                <div className="mb-4 flex items-start justify-between gap-3">
                  <h3 className="font-industrial-md text-[clamp(1.35rem,2.4vw,2rem)] leading-[1.1] text-[var(--white)]">
                    {s.title}
                  </h3>
                  <div
                    className="card-arrow flex h-[38px] w-[38px] shrink-0 items-center justify-center border border-[rgba(255,255,255,0.12)]"
                    aria-hidden
                  >
                    <ArrowUpRight size={16} weight="bold" color="rgba(242,232,212,0.5)" />
                  </div>
                </div>
                <div className="mb-3.5 h-px bg-[rgba(255,255,255,0.08)]" />
                <p
                  className="mb-5 text-[13px] leading-relaxed text-[rgba(242,232,212,0.62)]"
                  style={{ textWrap: "pretty" }}
                >
                  {s.shortDescription}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map((tag) => (
                    <span key={tag} className="tag-white">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={SPRING}
          className="mt-[3px] flex flex-wrap items-center justify-between gap-8 border border-[rgba(184,146,42,0.18)] bg-[rgba(184,146,42,0.06)] px-11 py-[52px]"
        >
          <div>
            <div className="font-industrial-md mb-2 text-[clamp(1.1rem,2.5vw,1.85rem)] text-[var(--white)]">
              Votre projet ne rentre pas dans une case ?
            </div>
            <p className="text-[13px] text-[rgba(242,232,212,0.48)]">
              Nous analysons chaque chantier sur mesure. Contactez-nous pour un diagnostic gratuit.
            </p>
          </div>
          <a href="#contact" className="btn-primary shrink-0">
            Diagnostic gratuit
            <ArrowUpRight size={16} weight="bold" aria-hidden />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
