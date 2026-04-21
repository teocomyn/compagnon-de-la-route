"use client";

import * as React from "react";
import {
  ArrowRight,
  Award,
  Briefcase,
  Check,
  Clock,
  GraduationCap,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users,
  Wallet,
} from "lucide-react";
import DottedMap from "dotted-map";
import Link from "next/link";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { cn } from "@/lib/utils";

const BENTO_STYLES = `
@keyframes cdr-bento-pulse {
  0%, 100% { opacity: 1; box-shadow: 0 0 16px rgba(242, 107, 42, 0.6); }
  50% { opacity: 0.4; box-shadow: 0 0 4px rgba(242, 107, 42, 0.3); }
}

@keyframes cdr-scale-up {
  from { transform: scaleX(0.94); opacity: 0; }
  to { transform: scaleX(1); opacity: 1; }
}

@keyframes cdr-slide-in {
  from { transform: translateY(12px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.cdr-pulse-dot {
  animation: cdr-bento-pulse 2.4s ease-in-out infinite;
}

.cdr-scale-up {
  animation: cdr-scale-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.cdr-slide-in {
  animation: cdr-slide-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .cdr-pulse-dot,
  .cdr-scale-up,
  .cdr-slide-in {
    animation: none !important;
  }
  .cdr-slide-in {
    opacity: 1;
  }
}

.cdr-bento-card {
  background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));
  border: 1px solid rgba(255,255,255,0.10);
  border-radius: 24px;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
}

.cdr-bento-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(242, 107, 42, 0.08), transparent 40%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.cdr-bento-card:hover {
  border-color: rgba(242, 107, 42, 0.40);
  transform: translateY(-4px);
}

.cdr-bento-card:hover::before {
  opacity: 1;
}

@media (prefers-reduced-motion: reduce) {
  .cdr-bento-card:hover {
    transform: none;
  }
}

.cdr-bento-accent {
  background: linear-gradient(135deg, rgba(242, 107, 42, 0.12), rgba(242, 107, 42, 0.04));
  border: 1px solid rgba(242, 107, 42, 0.30);
}

.cdr-bento-accent:hover {
  border-color: rgba(242, 107, 42, 0.60);
  background: linear-gradient(135deg, rgba(242, 107, 42, 0.18), rgba(242, 107, 42, 0.06));
}

.cdr-icon-box {
  background: rgba(74, 222, 128, 0.10);
  border: 1px solid rgba(74, 222, 128, 0.25);
  color: #4ade80;
}

.cdr-icon-box-accent {
  background: rgba(242, 107, 42, 0.12);
  border: 1px solid rgba(242, 107, 42, 0.30);
  color: #fda172;
}

.cdr-bento-number {
  background: linear-gradient(180deg, #fda172 0%, #f26b2a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-variant-numeric: tabular-nums;
}

.cdr-grid-bg {
  background-size: 32px 32px;
  background-image:
    linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
  mask-image: radial-gradient(ellipse at center, black 40%, transparent 80%);
}

.cdr-chart-gradient-primary {
  stop-color: #f26b2a;
}

.cdr-chart-gradient-secondary {
  stop-color: #4ade80;
}
`;

function useFranceCoverageMap() {
  return React.useMemo(() => {
    const m = new DottedMap({
      height: 52,
      grid: "diagonal",
      countries: ["FRA"],
    });
    m.addPin({
      lat: 50.4329,
      lng: 2.8348,
      svgOptions: { radius: 1.15, color: "#f26b2a" },
    });
    m.addPin({
      lat: 50.52,
      lng: 2.78,
      svgOptions: { radius: 0.65, color: "#fda172" },
    });
    return m;
  }, []);
}

function CoverageMap() {
  const map = useFranceCoverageMap();
  const points = React.useMemo(() => map.getPoints(), [map]);
  const { vbW, vbH } = React.useMemo(() => {
    if (!points.length) return { vbW: 100, vbH: 52 };
    const maxX = Math.max(...points.map((p) => p.x));
    const maxY = Math.max(...points.map((p) => p.y));
    return { vbW: Math.ceil(maxX) + 1, vbH: Math.ceil(maxY) + 1 };
  }, [points]);

  return (
    <svg
      viewBox={`0 0 ${vbW} ${vbH}`}
      className="h-auto w-full text-white/28"
      aria-hidden
    >
      {points.map((point, i) => (
        <circle
          key={`${point.x}-${point.y}-${i}`}
          cx={point.x}
          cy={point.y}
          r={point.svgOptions?.radius ?? 0.32}
          fill={point.svgOptions?.color ?? "currentColor"}
        />
      ))}
    </svg>
  );
}

const insertionData = [
  { month: "J+7", placed: 22 },
  { month: "J+14", placed: 54 },
  { month: "J+21", placed: 78 },
  { month: "J+30", placed: 92 },
  { month: "J+45", placed: 96 },
  { month: "J+60", placed: 98 },
];

function InsertionChart() {
  return (
    <ResponsiveContainer width="100%" height={140}>
      <AreaChart data={insertionData} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="cdr-insertion-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f26b2a" stopOpacity={0.5} />
            <stop offset="100%" stopColor="#f26b2a" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="month" hide />
        <YAxis hide domain={[0, 100]} />
        <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.06)" horizontal />
        <Area
          strokeWidth={2.5}
          dataKey="placed"
          type="monotone"
          stroke="#f26b2a"
          fill="url(#cdr-insertion-fill)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  initial: string;
  gradient: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Jacob",
    role: "Conducteur urbain · CDI chez Ilévia",
    quote: "J'ai compris le métier sur le terrain, pas dans un livre.",
    initial: "J",
    gradient: "from-orange-400 to-orange-600",
  },
  {
    name: "Marie",
    role: "Conductrice scolaire · Pas-de-Calais",
    quote: "Le suivi humain m'a permis de gagner en confiance.",
    initial: "M",
    gradient: "from-green-400 to-emerald-600",
  },
  {
    name: "David",
    role: "Ex-militaire · Interurbain Aisne",
    quote: "En 2 mois j'étais opérationnel, en CDI dès la sortie.",
    initial: "D",
    gradient: "from-amber-400 to-orange-600",
  },
];

function TestimonialsList() {
  return (
    <div className="relative w-full space-y-3">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-[#0a2a24] to-transparent" />
      {testimonials.map((t, i) => (
        <div
          key={t.name}
          className="cdr-slide-in flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm"
          style={{ animationDelay: `${i * 180}ms` }}
        >
          <div
            className={cn(
              "flex h-9 min-w-[2.25rem] w-9 items-center justify-center rounded-lg bg-gradient-to-br text-sm font-bold text-white",
              t.gradient
            )}
          >
            {t.initial}
          </div>
          <div className="flex min-w-0 flex-1 flex-col">
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="text-sm font-semibold text-white">{t.name}</span>
              <span className="truncate text-[11px] text-white/45">{t.role}</span>
            </div>
            <p className="mt-0.5 line-clamp-2 text-[13px] italic text-white/70">
              <span className="text-white/35">«&nbsp;</span>
              {t.quote}
              <span className="text-white/35">&nbsp;»</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function CompagnonBentoSection() {
  const cardsRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const handleMove = (e: MouseEvent) => {
      const cards = cardsRef.current?.querySelectorAll<HTMLElement>(".cdr-bento-card");
      cards?.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty("--mouse-x", `${x}%`);
        card.style.setProperty("--mouse-y", `${y}%`);
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: BENTO_STYLES }} />

      <section className="relative overflow-hidden bg-[#0a2a24] py-24 text-white md:py-32">
        <div className="cdr-grid-bg pointer-events-none absolute inset-0" aria-hidden />

        <div className="relative mx-auto mb-16 max-w-7xl px-6">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1.5">
            <span className="cdr-pulse-dot h-1.5 w-1.5 rounded-full bg-orange-500" />
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-orange-300">
              Preuves concrètes
            </span>
          </div>
          <h2 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-[-0.03em] md:text-6xl">
            Une formation qui tient{" "}
            <span className="font-medium italic text-orange-300">ses promesses</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
            Chiffres vérifiés, méthode éprouvée, territoire connu. Voici ce que Compagnon de la Route délivre
            concrètement à chaque promotion.
          </p>
        </div>

        <div ref={cardsRef} className="relative mx-auto max-w-7xl space-y-4 px-6">
          {/* Bloc 1 · deux colonnes alignées : gauche = réussite, droite = stats + carte */}
          <div className="grid gap-4 md:grid-cols-2 md:items-stretch">
            <article className="cdr-bento-card cdr-bento-accent flex min-h-0 flex-col p-6 sm:p-7">
              <div className="min-h-0 flex-1">
                <div className="mb-4 flex items-center gap-2 text-sm text-orange-300">
                  <Award className="h-4 w-4 shrink-0" aria-hidden />
                  <span className="font-mono text-xs uppercase tracking-[0.15em]">Taux de réussite</span>
                </div>
                <h3 className="text-3xl font-bold leading-tight text-white md:text-4xl">
                  98% de nos stagiaires{" "}
                  <span className="font-normal text-white/50">
                    décrochent leur titre professionnel CTCR du premier coup.
                  </span>
                </h3>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-6 border-t border-white/10 pt-6 sm:grid-cols-[minmax(0,1fr)_minmax(200px,280px)] sm:items-end">
                <div className="min-w-0">
                  <div className="cdr-bento-number text-7xl font-black leading-none tracking-[-0.04em] md:text-8xl">
                    98%
                  </div>
                  <p className="mt-2 text-sm text-white/50">
                    Moyenne sur 2000+ candidats formés depuis 2020
                  </p>
                </div>
                <div className="h-[140px] w-full sm:justify-self-end">
                  <InsertionChart />
                </div>
              </div>
            </article>

            <div className="grid min-h-0 grid-cols-2 gap-4">
              <article className="cdr-bento-card flex min-h-[168px] flex-col justify-between p-6 sm:p-7">
                <div className="flex items-center gap-2 text-sm text-white/50">
                  <Users className="h-4 w-4 shrink-0" aria-hidden />
                  <span className="font-mono text-[11px] uppercase tracking-[0.15em]">Depuis 2020</span>
                </div>
                <div>
                  <div className="cdr-bento-number text-5xl font-black leading-none tracking-[-0.04em] md:text-6xl">
                    2000+
                  </div>
                  <p className="mt-2 text-sm text-white/60">Stagiaires formés, placés, accompagnés</p>
                </div>
              </article>

              <article className="cdr-bento-card flex min-h-[168px] flex-col justify-between p-6 sm:p-7">
                <div className="flex items-center gap-2 text-sm text-white/50">
                  <Clock className="h-4 w-4 shrink-0" aria-hidden />
                  <span className="font-mono text-[11px] uppercase tracking-[0.15em]">Format intensif</span>
                </div>
                <div>
                  <div className="cdr-bento-number text-5xl font-black leading-none tracking-[-0.04em] md:text-6xl">
                    30j
                  </div>
                  <p className="mt-2 text-sm text-white/60">210 heures · Permis D, FIMO, Titre Pro inclus</p>
                </div>
              </article>

              <article className="cdr-bento-card col-span-2 flex min-h-[280px] flex-col p-6 sm:p-7">
                <div className="mb-3 flex items-center gap-2 text-sm text-white/50">
                  <MapPin className="h-4 w-4 shrink-0" aria-hidden />
                  <span className="font-mono text-[11px] uppercase tracking-[0.15em]">Zone de formation</span>
                </div>
                <h3 className="mb-1 text-xl font-bold leading-tight text-white">
                  Hauts-de-France{" "}
                  <span className="font-normal text-white/50">et départements limitrophes.</span>
                </h3>
                <p className="mb-4 text-sm text-white/50">
                  Partenariats actifs avec Ilévia, Transdev, Keolis, Artis, Tadao, et les GEIQ du bassin.
                </p>
                <div className="relative flex min-h-[148px] flex-1 items-center justify-center">
                  <div className="pointer-events-none absolute left-1/2 top-4 z-10 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-orange-500 px-3 py-1.5 text-[11px] font-bold text-[#0a2a24] shadow-lg">
                    <span className="cdr-pulse-dot h-1.5 w-1.5 rounded-full bg-[#0a2a24]" />
                    Centre de formation · Lens
                  </div>
                  <CoverageMap />
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3 border-t border-white/10 pt-4">
                  <div>
                    <div className="text-base font-bold text-white md:text-lg">Nord</div>
                    <div className="text-[11px] text-white/40">Lille, Roubaix</div>
                  </div>
                  <div>
                    <div className="text-base font-bold text-white md:text-lg">Pas-de-Calais</div>
                    <div className="text-[11px] text-white/40">Lens, Arras, Béthune</div>
                  </div>
                  <div>
                    <div className="text-base font-bold text-white md:text-lg">Somme</div>
                    <div className="text-[11px] text-white/40">Amiens, Abbeville</div>
                  </div>
                </div>
              </article>
            </div>
          </div>

          {/* Bloc 2 · trois colonnes égales */}
          <div className="grid gap-4 md:grid-cols-3">
            <article className="cdr-bento-card flex min-h-full flex-col justify-between p-6 sm:p-7">
              <div>
                <div className="mb-4 flex items-center gap-2 text-sm text-white/50">
                  <Wallet className="h-4 w-4 shrink-0" aria-hidden />
                  <span className="font-mono text-[11px] uppercase tracking-[0.15em]">Financement</span>
                </div>
                <h3 className="text-xl font-bold leading-tight text-white">
                  0 € de reste à charge <span className="font-normal text-white/50">dans 90% des cas.</span>
                </h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {["CPF", "OPCO Mobilités", "France Travail", "Transition Pro", "Région"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>

            <article className="cdr-bento-card flex min-h-full flex-col justify-between p-6 sm:p-7">
              <div>
                <div className="mb-4 flex items-center gap-2 text-sm text-white/50">
                  <Briefcase className="h-4 w-4 shrink-0" aria-hidden />
                  <span className="font-mono text-[11px] uppercase tracking-[0.15em]">
                    Insertion professionnelle
                  </span>
                </div>
                <h3 className="text-xl font-bold leading-tight text-white">
                  90% en CDI <span className="font-normal text-white/50">à 6 mois après la sortie.</span>
                </h3>
              </div>
              <div className="mt-4 space-y-2">
                {[
                  { label: "CDI", value: 78 },
                  { label: "CDD long + alternance", value: 15 },
                  { label: "Autre", value: 7 },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="mb-1 flex justify-between text-xs text-white/60">
                      <span>{item.label}</span>
                      <span className="font-mono font-semibold text-white">{item.value}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                      <div
                        className="cdr-scale-up h-full rounded-full bg-gradient-to-r from-orange-500 to-orange-300"
                        style={{ width: `${item.value}%`, transformOrigin: "left" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="cdr-bento-card flex min-h-full flex-col justify-between p-6 sm:p-7">
              <div>
                <div className="mb-4 flex items-center gap-2 text-sm text-white/50">
                  <GraduationCap className="h-4 w-4 shrink-0" aria-hidden />
                  <span className="font-mono text-[11px] uppercase tracking-[0.15em]">Méthode</span>
                </div>
                <h3 className="text-xl font-bold leading-tight text-white">
                  70% de pratique <span className="font-normal text-white/50">en conditions réelles.</span>
                </h3>
              </div>
              <ul className="mt-4 space-y-2">
                {[
                  "Conduite terrain dès J+3",
                  "Coaching individuel chaque semaine",
                  "Mises en situation voyageurs réelles",
                  "Simulateur incidents et urgences",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[13px] text-white/70">
                    <span className="cdr-icon-box mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-md">
                      <Check className="h-2.5 w-2.5" strokeWidth={3} aria-hidden />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          {/* Bloc 3 · témoignages + certifications même hauteur */}
          <div className="grid gap-4 md:grid-cols-2 md:items-stretch">
            <article className="cdr-bento-card flex min-h-[360px] flex-col p-6 sm:p-7">
              <div className="mb-3 flex items-center gap-2 text-sm text-white/50">
                <Sparkles className="h-4 w-4 shrink-0" aria-hidden />
                <span className="font-mono text-[11px] uppercase tracking-[0.15em]">Ils témoignent</span>
              </div>
              <h3 className="mb-4 text-xl font-bold leading-tight text-white">
                Des parcours réels <span className="font-normal text-white/50">qui prouvent que ça marche.</span>
              </h3>
              <div className="min-h-0 flex-1 overflow-hidden">
                <TestimonialsList />
              </div>
            </article>

            <article className="cdr-bento-card flex flex-col justify-between p-6 sm:p-7">
              <div>
                <div className="mb-4 flex items-center gap-2 text-sm text-white/50">
                  <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden />
                  <span className="font-mono text-[11px] uppercase tracking-[0.15em]">Certifications</span>
                </div>
                <h3 className="text-xl font-bold leading-tight text-white">
                  Reconnue par l&apos;État, <span className="font-normal text-white/50">exigée par les employeurs.</span>
                </h3>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Qualiopi", "RNCP 33873", "CPF éligible", "Datadock"].map((cert) => (
                  <div key={cert} className="cdr-icon-box-accent rounded-lg px-3 py-2 text-[11px] font-bold tracking-wide">
                    {cert}
                  </div>
                ))}
              </div>
            </article>
          </div>

          {/* Bloc 4 · CTA pleine largeur */}
          <article className="cdr-bento-card flex flex-col items-start justify-between gap-6 border-orange-500/30 bg-gradient-to-br from-orange-500/15 to-orange-500/5 p-6 sm:p-8 md:flex-row md:items-center">
            <div>
              <h3 className="mb-2 text-2xl font-black leading-tight text-white md:text-3xl">
                Prochaine session : places limitées.
              </h3>
              <p className="max-w-md text-sm text-white/60">
                12 places par promo. Positionnement sous 48h. Financement construit avec vous.
              </p>
            </div>
            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-orange-500 px-6 py-4 text-sm font-bold text-[#0a2a24] shadow-lg shadow-orange-500/30 transition-all hover:-translate-y-0.5 hover:bg-orange-400 hover:shadow-orange-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a2a24]"
            >
              Je candidate maintenant
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}
