"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BusFront,
  ChevronDown,
  Circle,
  type LucideIcon,
  MapPin,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Wallet,
  GraduationCap,
  FileCheck,
  Users,
  Route,
  HelpCircle,
  Briefcase,
  BadgeCheck,
} from "lucide-react";
import { useId, useState } from "react";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { OrangeGlow } from "@/components/magicui/OrangeGlow";
import { ScrollReveal } from "@/components/magicui/ScrollReveal";
import { buttonVariants } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/magicui/MagneticButton";
import type { SeoLandingPageData } from "@/lib/seo-landings";
import { siteName, siteUrl } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Wallet,
  BusFront,
  MapPin,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  GraduationCap,
  FileCheck,
  Users,
  Route,
  HelpCircle,
  Briefcase,
  BadgeCheck,
  Circle,
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const },
  },
};

function WebPageJsonLd({ data }: { data: SeoLandingPageData }) {
  const json = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: data.metaTitle,
    description: data.metaDescription,
    url: `${siteUrl.replace(/\/$/, "")}/${data.slug}`,
    isPartOf: { "@type": "WebSite", name: siteName, url: siteUrl },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

function FaqJsonLd({ items }: { items: { q: string; a: string }[] }) {
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((x) => ({
      "@type": "Question",
      name: x.q,
      acceptedAnswer: { "@type": "Answer", text: x.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

function FeatureIcon({ name }: { name: string }) {
  const I = iconMap[name] ?? Circle;
  return (
    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-orange-500/25 bg-orange-500/[0.08]">
      <I className="h-6 w-6 text-orange-300" aria-hidden />
    </span>
  );
}

function SeoFaqBlock({ items }: { items: { q: string; a: string }[] }) {
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-y border-t border-white/5 bg-forest-surface/25">
      <div className="section-shell">
        <ScrollReveal className="mx-auto max-w-[900px]">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-orange-300">
            Questions fréquentes
          </p>
          <h2 className="mt-3 text-[clamp(1.75rem,4vw,2.25rem)] font-bold tracking-[-0.03em] text-white-90">
            Ce qu’il faut savoir
          </h2>
          <div className="mt-10 space-y-3">
            {items.map((f, idx) => {
              const id = `${baseId}-faq-${idx}`;
              const isOpen = open === idx;
              return (
                <div
                  key={f.q}
                  className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]"
                >
                  <button
                    type="button"
                    id={`${id}-button`}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`${id}-panel`}
                    onClick={() => setOpen(isOpen ? null : idx)}
                  >
                    <span className="text-[16px] font-semibold text-white-90">
                      {f.q}
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 text-white-45 transition-transform duration-300",
                        isOpen && "rotate-180",
                      )}
                      aria-hidden
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        id={`${id}-panel`}
                        role="region"
                        aria-labelledby={`${id}-button`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="border-t border-white/5 px-6 pb-5 pt-0 text-[15px] leading-relaxed text-white-60">
                          {f.a}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function SeoLandingPage({ data }: { data: SeoLandingPageData }) {
  const reduce = useReducedMotion();
  const crumbs = data.breadcrumbs;

  return (
    <>
      <WebPageJsonLd data={data} />
      {data.faq?.length ? <FaqJsonLd items={data.faq} /> : null}

      <div className="pt-16 md:pt-[72px]">
        <BreadcrumbBar>
          <PageBreadcrumbs items={crumbs} />
        </BreadcrumbBar>
      </div>

      <section className="relative overflow-hidden pb-12 pt-3 md:pb-20 md:pt-8">
        <OrangeGlow className="right-[-8%] top-[-12%] md:right-[2%]" />

        <div className="section-shell relative z-10 grid max-w-[1440px] grid-cols-1 items-center gap-10 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:gap-14">
          <motion.div
            className="max-w-2xl space-y-7 text-center md:text-left"
            variants={reduce ? undefined : container}
            initial={reduce ? false : "hidden"}
            animate={reduce ? undefined : "visible"}
          >
            <motion.div variants={reduce ? undefined : item}>
              <Eyebrow className="text-orange-300">{data.eyebrow}</Eyebrow>
            </motion.div>
            <motion.h1
              variants={reduce ? undefined : item}
              className="text-[clamp(2.25rem,5.5vw,4.25rem)] font-extrabold leading-[0.95] tracking-[-0.04em] text-white-90"
            >
              {data.h1}
            </motion.h1>
            <motion.p
              variants={reduce ? undefined : item}
              className="text-lg leading-relaxed text-white-60 md:text-[18px]"
            >
              {data.intro}
            </motion.p>
            <motion.div
              variants={reduce ? undefined : item}
              className="flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <MagneticButton>
                <Link
                  href="/formations/conducteur-voyageurs"
                  className={cn(
                    buttonVariants({ variant: "primary", size: "lg" }),
                    "group relative overflow-hidden",
                  )}
                >
                  Découvrir la formation
                </Link>
              </MagneticButton>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "secondary", size: "lg" }),
                  "justify-center",
                )}
              >
                Parler à un conseiller
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative mx-auto w-full max-w-xl md:max-w-none"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl md:aspect-[4/5]">
              <Image
                src="/images/hero-bus.jpg"
                alt="Conductrice au volant d’un car, contexte formation transport de voyageurs"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_100%)]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/50 via-transparent to-night/25" />
              <div className="absolute bottom-6 left-4 right-4 space-y-3 md:left-6">
                <GlassCard className="px-5 py-4">
                  <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-orange-300">
                    {siteName}
                  </p>
                  <p className="mt-1 text-[15px] leading-snug text-white-75">
                    Exigence terrain · insertion · accompagnement humain
                  </p>
                </GlassCard>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {data.stats?.length ? (
        <section className="border-y border-white/5 bg-forest-surface/35 py-14 md:py-20">
          <div className="section-shell">
            <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-10 md:grid-cols-3 md:gap-0">
              {data.stats.map((s, idx) => (
                <ScrollReveal
                  key={s.label}
                  delay={idx * 0.06}
                  className={cn(
                    "flex flex-col items-center px-4 text-center",
                    idx > 0 && "md:border-l md:border-white/10",
                  )}
                >
                  <div className="text-[clamp(2.5rem,6vw,3.75rem)] font-extrabold tracking-[-0.04em] text-orange-500">
                    {s.value}
                  </div>
                  <p className="mt-3 max-w-[14rem] text-[15px] leading-relaxed text-white-60">
                    {s.label}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section-y">
        <div className="section-shell">
          <ScrollReveal className="mx-auto max-w-[1100px]">
            <p className="text-center font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-orange-300">
              Points clés
            </p>
            <h2 className="mx-auto mt-3 max-w-3xl text-center text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-[-0.03em] text-white-90">
              Une approche pensée pour votre réussite
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {data.features.map((f) => (
                <Card key={f.title} className="p-7">
                  <FeatureIcon name={f.icon} />
                  <h3 className="mt-5 text-lg font-bold tracking-[-0.02em] text-white-90">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-white-60">
                    {f.text}
                  </p>
                </Card>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-t border-white/5 bg-gradient-to-b from-forest-surface/40 to-transparent section-y">
        <div className="section-shell">
          <div className="mx-auto max-w-[820px] article-prose">
            {data.sections.map((sec) => (
              <div key={sec.heading}>
                <h2>{sec.heading}</h2>
                {sec.paragraphs.map((p, i) => (
                  <p key={`${sec.heading}-${i}`}>{p}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {data.faq?.length ? <SeoFaqBlock items={data.faq} /> : null}

      {data.relatedLinks?.length ? (
        <section className="section-y pb-4">
          <div className="section-shell">
            <ScrollReveal className="mx-auto max-w-[900px]">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-orange-300">
                Pour aller plus loin
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-[-0.02em] text-white-90">
                Guides complémentaires
              </h2>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {data.relatedLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="group flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 text-[15px] font-medium text-white-80 transition-colors hover:border-orange-500/35 hover:text-orange-200"
                    >
                      {l.label}
                      <ArrowRight className="h-4 w-4 shrink-0 text-white-45 transition-transform group-hover:translate-x-0.5 group-hover:text-orange-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </section>
      ) : null}

      <FinalCTA />
    </>
  );
}
