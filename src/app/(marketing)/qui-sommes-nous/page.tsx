import Link from "next/link";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { MethodTimeline } from "@/components/sections/MethodTimeline";
import { Team } from "@/components/sections/Team";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/magicui/ScrollReveal";
import { siteName } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qui sommes-nous ?",
  description:
    "BOAZ et Compagnon de la Route : une formation artisanale, exigeante et humaine pour conducteurs de voyageurs.",
  alternates: { canonical: "/qui-sommes-nous" },
};

const pillars = [
  "Exigence",
  "Excellence",
  "Engagement",
  "Inclusion",
  "Humanité",
  "Progrès",
];

export default function AboutPage() {
  return (
    <>
      <div className="pt-16 md:pt-[72px]">
        <BreadcrumbBar>
          <PageBreadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Qui sommes-nous", href: "/qui-sommes-nous" },
            ]}
          />
        </BreadcrumbBar>
      </div>
      <section className="section-shell pb-16 pt-3 md:pb-24 md:pt-8">
        <div className="mx-auto max-w-[980px]">
          <Eyebrow>Notre histoire</Eyebrow>
          <h1 className="mt-4 text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em]">
            Une approche cousu main de la formation
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white-60">
            La société BOAZ a fait le choix délibéré de se placer en marge du marché
            traditionnel de la formation. Notre ambition n&apos;est pas de faire du
            volume, mais de développer une approche artisanale et originale de notre
            métier.
          </p>
        </div>
      </section>

      <section className="section-shell section-y">
        <div className="mx-auto max-w-[980px] rounded-2xl border border-white/10 bg-forest-surface/60 p-6 sm:p-10 md:p-14">
          <p className="text-[clamp(1.5rem,3.2vw,2.25rem)] font-medium leading-[1.35] text-white-90">
            <span className="text-orange-300">“</span>
            Nous croyons que la formation ne doit pas être une usine, mais un atelier
            où l&apos;on façonne des compétences solides et durables.
            <span className="text-orange-300">”</span>
          </p>
        </div>
      </section>

      <section className="section-shell section-y">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-10 flex flex-col gap-4">
            <Eyebrow>Fondations</Eyebrow>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.625rem)] font-bold tracking-[-0.025em]">
              Les 6 piliers
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => (
              <ScrollReveal key={p}>
                <Card className="h-full">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-orange-300">
                    Pilier
                  </p>
                  <h3 className="mt-3 text-[22px] font-semibold text-white-90">{p}</h3>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Team />

      <section className="section-shell section-y">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-10 flex flex-col gap-4">
            <Eyebrow>Méthode</Eyebrow>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.625rem)] font-bold tracking-[-0.025em]">
              Notre méthode
            </h2>
            <p className="max-w-2xl text-lg text-white-60">
              Quatre étapes pour transformer un projet en compétence, puis en emploi.
            </p>
          </div>
          <MethodTimeline />
        </div>
      </section>

      <section className="section-shell section-y">
        <div className="mx-auto max-w-[980px] rounded-2xl border border-white/10 bg-forest-surface/40 p-6 text-center sm:p-10">
          <p className="text-[15px] text-white-60">
            Envie d&apos;échanger avec {siteName} ?{" "}
            <Link href="/contact" className="font-semibold text-orange-300 hover:text-orange-200">
              Écrivez-nous
            </Link>
            .
          </p>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
