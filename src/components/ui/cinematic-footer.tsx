"use client";

import { ChevronRight, Play } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
import { BrandLogo } from "@/components/brand/BrandLogo";
import { MagneticButton } from "@/components/magicui/MagneticButton";
import { Badge } from "@/components/ui/Badge";
import {
  footerAbout,
  footerFormations,
  footerGuides,
  footerLegal,
  siteName,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

const FOOTER_STYLES = `
.cdr-footer-wrapper {
  font-family: var(--font-sans), system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  --cdr-night: #0a2a24;
  --cdr-night-deep: #061a16;
  --cdr-orange-500: #f26b2a;
  --cdr-orange-300: #fda172;
  --cdr-mint-400: #4ade80;
  --cdr-pill-bg-1: color-mix(in oklch, white 4%, transparent);
  --cdr-pill-bg-2: color-mix(in oklch, white 1%, transparent);
  --cdr-pill-border: color-mix(in oklch, white 10%, transparent);
  --cdr-pill-shadow: color-mix(in oklch, var(--cdr-night-deep) 50%, transparent);
  --cdr-pill-bg-1-hover: color-mix(in oklch, var(--cdr-orange-500) 10%, transparent);
  --cdr-pill-border-hover: color-mix(in oklch, var(--cdr-orange-500) 40%, transparent);
}

@keyframes cdr-footer-breathe {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.35; }
  100% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.65; }
}

@keyframes cdr-footer-marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@keyframes cdr-footer-pulse-dot {
  0%, 100% { opacity: 1; box-shadow: 0 0 12px var(--cdr-orange-500); }
  50% { opacity: 0.35; box-shadow: 0 0 3px var(--cdr-orange-500); }
}

.cdr-footer-animate-breathe {
  animation: cdr-footer-breathe 12s ease-in-out infinite alternate;
}

.cdr-footer-animate-marquee {
  animation: cdr-footer-marquee 55s linear infinite;
}

.cdr-footer-animate-pulse-dot {
  animation: cdr-footer-pulse-dot 2.4s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .cdr-footer-animate-breathe,
  .cdr-footer-animate-marquee,
  .cdr-footer-animate-pulse-dot {
    animation: none !important;
  }
}

.cdr-footer-bg-grid {
  background-size: 64px 64px;
  background-image:
    linear-gradient(to right, color-mix(in oklch, white 2%, transparent) 1px, transparent 1px),
    linear-gradient(to bottom, color-mix(in oklch, white 2%, transparent) 1px, transparent 1px);
  mask-image: radial-gradient(ellipse at center, black 35%, transparent 80%);
  -webkit-mask-image: radial-gradient(ellipse at center, black 35%, transparent 80%);
}

.cdr-footer-aurora {
  background: radial-gradient(
    ellipse at center,
    color-mix(in oklch, var(--cdr-orange-500) 14%, transparent) 0%,
    color-mix(in oklch, var(--cdr-orange-500) 5%, transparent) 45%,
    transparent 72%
  );
  filter: blur(48px);
}

.cdr-footer-glass-pill {
  background: linear-gradient(145deg, var(--cdr-pill-bg-1) 0%, var(--cdr-pill-bg-2) 100%);
  box-shadow:
      0 10px 30px -10px var(--cdr-pill-shadow),
      inset 0 1px 1px color-mix(in oklch, white 10%, transparent);
  border: 1px solid var(--cdr-pill-border);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.cdr-footer-glass-pill:hover {
  background: linear-gradient(145deg, var(--cdr-pill-bg-1-hover) 0%, var(--cdr-pill-bg-2) 100%);
  border-color: var(--cdr-pill-border-hover);
}

.cdr-footer-cta-primary {
  background: var(--cdr-orange-500);
  color: var(--cdr-night);
  box-shadow: 0 4px 16px color-mix(in oklch, var(--cdr-orange-500) 40%, transparent);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.cdr-footer-cta-primary:hover {
  box-shadow: 0 10px 28px color-mix(in oklch, var(--cdr-orange-500) 55%, transparent);
}

.cdr-footer-giant-text {
  font-size: clamp(2.75rem, 12vw, 9rem);
  line-height: 0.82;
  font-weight: 900;
  letter-spacing: -0.06em;
  color: transparent;
  -webkit-text-stroke: 1px color-mix(in oklch, white 3%, transparent);
  background: linear-gradient(180deg, color-mix(in oklch, white 6%, transparent) 0%, transparent 75%);
  -webkit-background-clip: text;
  background-clip: text;
}
`;

function MarqueeStrip() {
  const item = (
    <>
      <span>Certifié Qualiopi</span>
      <span className="text-(--cdr-orange-500) opacity-70">✦</span>
      <span>Financement France Travail</span>
      <span className="text-(--cdr-mint-400) opacity-70">✦</span>
      <span>Partenaire OPCO Mobilités</span>
      <span className="text-(--cdr-orange-500) opacity-70">✦</span>
      <span>Membre Fédération GEIQ</span>
      <span className="text-(--cdr-mint-400) opacity-70">✦</span>
      <span>Région Hauts-de-France</span>
      <span className="text-(--cdr-orange-500) opacity-70">✦</span>
      <span>Titre RNCP reconnu</span>
    </>
  );
  return (
    <div className="flex w-max cdr-footer-animate-marquee text-[10px] font-semibold uppercase tracking-[0.25em] text-white/55 md:text-[11px]">
      <div className="flex items-center gap-10 px-5 md:gap-12 md:px-6">{item}</div>
      <div className="flex items-center gap-10 px-5 md:gap-12 md:px-6">{item}</div>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1 text-[15px] text-white/65 transition-colors hover:text-orange-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--cdr-night)]"
    >
      {children}
      <ChevronRight className="h-4 w-4 translate-x-0 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100" />
    </Link>
  );
}

export function CinematicFooter() {
  const rootRef = useRef<HTMLElement>(null);
  const giantRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!rootRef.current || !giantRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        giantRef.current,
        { opacity: 0.35, y: 24 },
        {
          opacity: 0.85,
          y: 0,
          duration: 1.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 92%",
            toggleActions: "play none none none",
          },
        }
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: FOOTER_STYLES }} />
      <footer
        ref={rootRef}
        className="cdr-footer-wrapper relative overflow-hidden border-t border-white/10 bg-[var(--cdr-night-deep)] text-white"
      >
        <div
          className="cdr-footer-aurora cdr-footer-animate-breathe pointer-events-none absolute left-[72%] top-[8%] z-0 h-[min(42vh,360px)] w-[min(58vw,520px)] -translate-x-1/2 -translate-y-1/2 rounded-[50%]"
          aria-hidden
        />
        <div className="cdr-footer-bg-grid pointer-events-none absolute inset-0 z-0 opacity-90" aria-hidden />

        <div
          ref={giantRef}
          className="cdr-footer-giant-text pointer-events-none absolute bottom-[-0.06em] left-1/2 z-0 -translate-x-1/2 select-none whitespace-nowrap"
          aria-hidden
        >
          COMPAGNON
        </div>

        <div className="relative z-10">
          <div className="overflow-hidden border-y border-white/10 bg-[var(--cdr-night-deep)]/75 py-3 shadow-lg backdrop-blur-md">
            <MarqueeStrip />
          </div>

          <div className="relative mx-auto max-w-[1440px] px-6 py-14 md:px-8 md:py-16">
            <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="cdr-footer-glass-pill inline-flex w-fit max-w-full items-center gap-2 rounded-full px-4 py-2">
                <span className="cdr-footer-animate-pulse-dot h-1.5 w-1.5 shrink-0 rounded-full bg-(--cdr-orange-500)" />
                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-(--cdr-orange-300) md:text-[11px]">
                  Formation certifiante · 210h · 30 jours · label Qualiopi
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <MagneticButton>
                  <Link
                    href="/formations/conducteur-voyageurs"
                    className="cdr-footer-cta-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold md:px-7 md:text-[15px]"
                  >
                    <Play className="h-4 w-4 shrink-0" aria-hidden />
                    Candidater
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <Link
                    href="/contact"
                    className="cdr-footer-glass-pill inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold text-white md:px-7 md:text-[15px]"
                  >
                    Nous contacter
                  </Link>
                </MagneticButton>
              </div>
            </div>

            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              <div className="relative space-y-6 xl:col-span-1">
                <div className="flex flex-wrap items-center gap-3">
                  <BrandLogo size="footer" />
                  <span className="text-[16px] font-medium">{siteName}</span>
                </div>
                <p className="text-[15px] leading-relaxed text-white/60">
                  Porté par BOAZ · Formation artisanale, exigeante et humaine · Label Compagnon de la Route
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="success">Qualiopi</Badge>
                  <Badge variant="neutral">GEIQ Mobilité</Badge>
                  <Badge variant="neutral">OPCO</Badge>
                  <Badge variant="neutral">France Travail</Badge>
                </div>
              </div>

              <div>
                <p className="mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-orange-300">
                  Formations
                </p>
                <ul className="flex flex-col gap-3">
                  {footerFormations.map((l) => (
                    <li key={l.href}>
                      <FooterLink href={l.href}>{l.label}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-orange-300">
                  Guides
                </p>
                <ul className="flex flex-col gap-3">
                  {footerGuides.map((l) => (
                    <li key={l.href}>
                      <FooterLink href={l.href}>{l.label}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-orange-300">
                  À propos
                </p>
                <ul className="flex flex-col gap-3">
                  {footerAbout.map((l) => (
                    <li key={l.href}>
                      <FooterLink href={l.href}>{l.label}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-orange-300">
                  Informations
                </p>
                <ul className="flex flex-col gap-3">
                  {footerLegal.map((l) => (
                    <li key={l.href}>
                      <FooterLink href={l.href}>{l.label}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 bg-[var(--cdr-night)]/35 backdrop-blur-sm">
            <div className="mx-auto max-w-[1440px] px-6 py-8 md:px-8">
              <div className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row">
                <p className="order-2 text-center font-mono text-[10px] font-medium uppercase tracking-widest text-white/40 md:order-1 md:text-left">
                  98% de réussite · 2000+ stagiaires formés · 30 jours pour l&apos;emploi
                </p>
                <div className="cdr-footer-glass-pill order-1 flex cursor-default items-center gap-2 rounded-full px-4 py-2 md:order-2">
                  <span className="cdr-footer-animate-pulse-dot h-1.5 w-1.5 rounded-full bg-(--cdr-mint-400)" />
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-white/70">
                    Sessions ouvertes
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
                <p>
                  © {new Date().getFullYear()} {siteName}. Tous droits réservés.
                </p>
                <p className="text-white/60">
                  Créé par{" "}
                  <a
                    href="https://teocomyn.com/"
                    className="text-white/75 underline decoration-white/25 underline-offset-2 transition-colors hover:text-orange-300 hover:decoration-orange-300/50"
                  >
                    teocomyn.com
                  </a>
                  {" & "}
                  <a
                    href="https://experaise.com/"
                    className="text-white/75 underline decoration-white/25 underline-offset-2 transition-colors hover:text-orange-300 hover:decoration-orange-300/50"
                  >
                    experaise.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
