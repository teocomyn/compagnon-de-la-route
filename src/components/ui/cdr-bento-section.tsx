"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Check,
  ClipboardCheck,
  Compass,
  FileCheck,
  Route,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type BentoCardProps = {
  children: ReactNode;
  className?: string;
  index: number;
  reducedMotion: boolean;
};

const cardClassName =
  "relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6 shadow-2xl backdrop-blur-sm md:p-7";

function BentoCard({ children, className, index, reducedMotion }: BentoCardProps) {
  return (
    <motion.article
      className={cn(cardClassName, className)}
      initial={reducedMotion ? false : { opacity: 0, y: 28, scale: 0.985 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      whileHover={reducedMotion ? undefined : { y: -4 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.58, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.article>
  );
}

const routeSteps = [
  { number: "01", label: "Positionnement" },
  { number: "02", label: "Parcours" },
  { number: "03", label: "Évaluation" },
  { number: "04", label: "Candidature" },
];

const trainingTopics = [
  "Sécurité et réglementation",
  "Conduite et contrôles",
  "Accueil et qualité de service",
  "Gestion des situations difficiles",
];

const fundingOptions = ["CPF", "France Travail", "Employeur", "OPCO"];

export function CdrBentoSection() {
  const reducedMotion = Boolean(useReducedMotion());

  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-night-deep py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(var(--color-white-05)_1px,transparent_1px),linear-gradient(90deg,var(--color-white-05)_1px,transparent_1px)] [background-size:48px_48px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-40 top-12 h-[480px] w-[480px] rounded-full bg-orange-500/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="container-shell relative z-10">
        <div className="mb-10 max-w-3xl md:mb-14">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-orange-300">
            Le parcours, concrètement
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-[-0.035em] text-cream md:text-5xl">
            Un cadre clair pour avancer avec confiance.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-cream/65 md:text-lg">
            Des étapes lisibles, des informations écrites et un accompagnement qui relie la
            formation au projet professionnel.
          </p>
        </div>

        <div className="grid gap-4 lg:auto-rows-[minmax(220px,auto)] lg:grid-cols-12">
          <BentoCard
            className="flex min-h-[430px] flex-col bg-gradient-to-br from-forest-elevated to-night-deep lg:col-span-7 lg:row-span-2"
            index={0}
            reducedMotion={reducedMotion}
          >
            <div className="absolute right-6 top-6 text-[6rem] font-semibold leading-none text-white/[0.035] md:text-[9rem]">
              04
            </div>
            <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-400 text-night-deep">
              <Route className="h-5 w-5" aria-hidden="true" />
            </div>
            <div className="relative mt-7 max-w-xl">
              <h3 className="text-2xl font-semibold tracking-[-0.025em] text-cream md:text-3xl">
                De l’intention au projet professionnel
              </h3>
              <p className="mt-3 leading-7 text-cream/65">
                Le parcours se construit à partir de votre situation. Les conditions, les étapes
                et les évaluations sont précisées avant l’inscription.
              </p>
            </div>

            <div className="relative mt-auto grid grid-cols-2 gap-3 pt-10 sm:grid-cols-4">
              <div className="absolute left-[8%] right-[8%] top-[3.65rem] hidden h-px bg-gradient-to-r from-orange-400/0 via-orange-400/45 to-orange-400/0 sm:block" />
              {routeSteps.map((step) => (
                <div
                  key={step.number}
                  className="relative rounded-2xl border border-white/10 bg-night-deep/45 p-4"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-orange-300/45 bg-night-deep text-[0.65rem] font-bold text-orange-300">
                    {step.number}
                  </span>
                  <p className="mt-4 text-sm font-medium text-cream">{step.label}</p>
                </div>
              ))}
            </div>
          </BentoCard>

          <BentoCard className="lg:col-span-5" index={1} reducedMotion={reducedMotion}>
            <div className="flex items-start justify-between gap-5">
              <div>
                <h3 className="text-xl font-semibold text-cream">Un cadre écrit avant de commencer</h3>
                <p className="mt-2 text-sm leading-6 text-cream/60">
                  Les éléments essentiels du parcours sont partagés pour vous permettre de décider
                  en connaissance de cause.
                </p>
              </div>
              <FileCheck className="h-6 w-6 shrink-0 text-orange-300" aria-hidden="true" />
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Objectifs", "Durée", "Calendrier", "Évaluations", "Prix"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-xs font-medium text-cream/75"
                >
                  {item}
                </span>
              ))}
            </div>
          </BentoCard>

          <BentoCard className="bg-cream text-night-deep lg:col-span-5" index={2} reducedMotion={reducedMotion}>
            <div className="flex items-start justify-between gap-5">
              <div>
                <h3 className="text-xl font-semibold">Apprendre le métier, pas seulement conduire</h3>
                <p className="mt-2 text-sm leading-6 text-night-deep/65">
                  Les compétences visées couvrent la conduite, la sécurité et la relation avec les
                  voyageurs.
                </p>
              </div>
              <ShieldCheck className="h-6 w-6 shrink-0 text-orange-600" aria-hidden="true" />
            </div>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {trainingTopics.map((topic) => (
                <li key={topic} className="flex items-start gap-2 text-sm text-night-deep/75">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange-600" aria-hidden="true" />
                  {topic}
                </li>
              ))}
            </ul>
          </BentoCard>

          <BentoCard className="lg:col-span-4" index={3} reducedMotion={reducedMotion}>
            <Wallet className="h-6 w-6 text-orange-300" aria-hidden="true" />
            <h3 className="mt-5 text-xl font-semibold text-cream">Financement étudié au cas par cas</h3>
            <p className="mt-2 text-sm leading-6 text-cream/60">
              Plusieurs dispositifs peuvent être examinés. Seul l’organisme financeur confirme
              l’éligibilité et la prise en charge.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {fundingOptions.map((option) => (
                <span key={option} className="rounded-lg bg-mint/10 px-2.5 py-1.5 text-xs text-mint/80">
                  {option}
                </span>
              ))}
            </div>
          </BentoCard>

          <BentoCard className="lg:col-span-4" index={4} reducedMotion={reducedMotion}>
            <BadgeCheck className="h-6 w-6 text-orange-300" aria-hidden="true" />
            <h3 className="mt-5 text-xl font-semibold text-cream">Des repères vérifiables</h3>
            <div className="mt-5 space-y-3 text-sm text-cream/65">
              <p className="flex items-start gap-3">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-mint" aria-hidden="true" />
                BOAZ est certifié Qualiopi pour les actions de formation.
              </p>
              <p className="flex items-start gap-3">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-mint" aria-hidden="true" />
                SIRET 929 379 758 00022 · NDA 94 20 21469 20.
              </p>
            </div>
          </BentoCard>

          <BentoCard className="lg:col-span-4" index={5} reducedMotion={reducedMotion}>
            <Briefcase className="h-6 w-6 text-orange-300" aria-hidden="true" />
            <h3 className="mt-5 text-xl font-semibold text-cream">Cap vers l’emploi</h3>
            <p className="mt-2 text-sm leading-6 text-cream/60">
              Le projet professionnel peut être travaillé avec des outils concrets, sans promesse
              d’embauche automatique.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-2 text-xs text-cream/75">
              {["CV", "Entretien", "Offres", "Mobilité"].map((item) => (
                <span key={item} className="flex items-center gap-2 rounded-lg bg-white/[0.04] p-2.5">
                  <ClipboardCheck className="h-3.5 w-3.5 text-orange-300" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </BentoCard>

          <BentoCard
            className="flex flex-col items-start justify-between gap-7 bg-orange-400 text-night-deep sm:flex-row sm:items-center lg:col-span-12"
            index={6}
            reducedMotion={reducedMotion}
          >
            <div className="flex max-w-2xl items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-night-deep text-orange-300">
                <Compass className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.025em]">
                  Votre projet mérite des réponses précises.
                </h3>
                <p className="mt-2 text-sm leading-6 text-night-deep/70">
                  Consultez le parcours, puis échangez avec l’équipe sur votre situation.
                </p>
              </div>
            </div>
            <Link
              href="/formations/conducteur-voyageurs"
              className={cn(
                buttonVariants({ size: "lg" }),
                "shrink-0 bg-night-deep text-cream hover:bg-night-deep/90",
              )}
            >
              Découvrir le parcours
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
