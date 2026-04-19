import Link from "next/link";
import { Check } from "lucide-react";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { MethodTimeline } from "@/components/sections/MethodTimeline";
import { Team } from "@/components/sections/Team";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/magicui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteName, siteUrl } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qui sommes-nous ?",
  description:
    "Compagnon de la Route : formation artisanale et humaine portée par le cabinet BOAZ, partenaire des GEIQ Transport & Mobilité. Label d'exigence, double compétence technique et relationnelle.",
  alternates: { canonical: "/qui-sommes-nous" },
};

const approachPillars = [
  {
    title: "L'exigence",
    body:
      "Parce que conduire des voyageurs, c'est porter une responsabilité humaine, nous refusons la complaisance. Nos parcours sont exigeants, structurés, et alignés sur les réalités opérationnelles des entreprises.",
  },
  {
    title: "L'excellence",
    body:
      "L'excellence, pour nous, ce n'est pas la perfection théorique. C'est la capacité à bien faire, régulièrement, en sécurité, à respecter les procédures, les horaires, les personnes. C'est ce niveau d'excellence opérationnelle que nous construisons avec chaque apprenant.",
  },
  {
    title: "L'engagement",
    body:
      "Nous croyons à la force de l'engagement individuel et collectif. Un Compagnon de la Route s'engage envers ses passagers, son entreprise, son territoire, et lui-même.",
  },
] as const;

const labelCriteria = [
  "Maîtriser les fondamentaux du métier de conducteur sur le plan technique et sécuritaire",
  "Développer des compétences relationnelles et comportementales de haut niveau",
  "Adopter un état d'esprit tourné vers le progrès, pour soi, pour les usagers et pour la profession",
] as const;

const values = [
  {
    title: "Humilité",
    text: "Rester conscient de sa responsabilité, apprendre en continu.",
  },
  {
    title: "Bienveillance",
    text: "Considérer chaque passager, chaque collègue, chaque apprenant avec respect.",
  },
  {
    title: "Civisme",
    text: "Agir en professionnel exemplaire, au service du collectif.",
  },
  {
    title: "Tolérance",
    text: "Accueillir la diversité des publics, des histoires, des parcours de vie.",
  },
] as const;

const concreteActions = [
  "Construire des parcours de formation et d'intégration sur mesure",
  "Accompagner les demandeurs d'emploi vers un métier stable et porteur de sens",
  "Co-animer nos parcours avec les entreprises de transport",
  "Collaborer en proximité avec les GEIQ Mobilité, France Travail, OPCO et les branches professionnelles",
  "Suivre nos apprenants après la formation pour sécuriser leurs intégrations",
] as const;

const audiences = [
  {
    title: "Demandeur d'emploi",
    text: "En quête de reconversion et d'un métier stable.",
  },
  {
    title: "Salarié",
    text: "En recherche de sens et de nouvelles perspectives.",
  },
  {
    title: "Entreprise de transport",
    text: "Confrontée à des besoins de recrutement et à la fidélisation de talents.",
  },
  {
    title: "Acteur institutionnel",
    text: "Engagé sur les sujets mobilité et insertion.",
  },
] as const;

function AboutJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `Qui sommes-nous · ${siteName}`,
    url: `${siteUrl}/qui-sommes-nous`,
    description:
      "Compagnon de la Route, porté par le cabinet BOAZ : formation conducteur de voyageurs, partenariat GEIQ, label d'exigence.",
    mainEntity: {
      "@type": "Organization",
      name: siteName,
      description:
        "Former un conducteur de voyageurs, c'est accompagner une personne dans un projet de vie. Approche artisanale, exigeante et humaine.",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default function AboutPage() {
  return (
    <>
      <AboutJsonLd />
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

      <section className="section-shell pb-16 pt-3 md:pb-20 md:pt-8">
        <div className="mx-auto max-w-[980px]">
          <Eyebrow>Qui sommes-nous ?</Eyebrow>
          <h1 className="mt-4 text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em]">
            Compagnon de la Route, une autre façon de voir la formation
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white-60">
            {siteName} est né d&apos;une conviction simple : former un conducteur de
            voyageurs, ce n&apos;est pas seulement transmettre un métier, c&apos;est
            accompagner une personne dans un{" "}
            <span className="text-white-90">projet de vie</span>.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-white-60">
            Porté à l&apos;origine par le cabinet <strong className="text-white-90">BOAZ</strong>, le
            projet s&apos;est construit volontairement en marge du marché traditionnel de la
            formation, avec une approche plus artisanale, exigeante et profondément
            humaine.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-white-60">
            Depuis plusieurs années, nous travaillons main dans la main avec les{" "}
            <strong className="text-white-90">GEIQ Transport &amp; Mobilité</strong> et les
            entreprises du secteur pour imaginer des parcours qui répondent à une vraie
            réalité de terrain : des besoins massifs de recrutement, des publics en
            recherche de sens, et des territoires qui ont besoin de mobilité.
          </p>
        </div>
      </section>

      <section className="section-shell section-y border-t border-white/5">
        <div className="mx-auto max-w-[980px]">
          <Eyebrow>Notre histoire</Eyebrow>
          <h2 className="mt-4 text-[clamp(1.75rem,3.5vw,2.625rem)] font-bold tracking-[-0.025em]">
            Une histoire construite sur le terrain
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white-60">
            Il y a huit ans, un partenariat fort s&apos;est noué avec les GEIQ Transport
            &amp; Mobilité. Objectif : créer un programme d&apos;intégration sur mesure,
            co-construit avec les entreprises, pour des demandeurs d&apos;emploi souhaitant
            investir un nouvel avenir professionnel dans le transport.
          </p>
          <p className="mt-4 text-lg font-medium text-white-90">
            Année après année, ce parcours a été :
          </p>
          <ul className="mt-6 space-y-3 text-white-75">
            <li className="flex gap-3">
              <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
              testé et approuvé sur le terrain ;
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
              ajusté avec les équipes RH et les managers des entreprises partenaires ;
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
              enrichi par les retours des apprenants ;
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
              revisité régulièrement pour satisfaire notre exigence constante de qualité.
            </li>
          </ul>

          <div className="mt-10 rounded-2xl border border-orange-500/25 bg-orange-500/10 p-8 sm:p-10">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-300">
              Résultat
            </p>
            <p className="mt-4 text-[clamp(1.75rem,3vw,2.25rem)] font-bold leading-tight text-white-90">
              Plus de 85&nbsp;% de taux de CDIsation
            </p>
            <p className="mt-3 text-lg text-white-60">
              pour les personnes accompagnées dans ce programme d&apos;intégration
              professionnelle. C&apos;est sur cette base solide qu&apos;est né{" "}
              {siteName}.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell section-y">
        <div className="mx-auto max-w-[980px] rounded-2xl border border-white/10 bg-forest-surface/60 p-6 sm:p-10 md:p-14">
          <p className="text-[clamp(1.35rem,2.8vw,1.85rem)] font-medium leading-[1.4] text-white-90">
            <span className="text-orange-300">“</span>
            Nous croyons que la formation ne doit pas être une usine, mais un atelier où
            l&apos;on façonne des compétences solides et durables, et des parcours de vie.
            <span className="text-orange-300">”</span>
          </p>
        </div>
      </section>

      <section className="section-shell section-y">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeader
            eyebrow="Le label"
            title="De la formation au label : devenir un Compagnon de la Route"
            lead="Aujourd'hui, le cabinet BOAZ valorise ce parcours en permettant aux apprenants ayant atteint un haut niveau de maîtrise de leur métier de devenir Compagnon de la Route."
          />
          <p className="mx-auto mt-6 max-w-[720px] text-center text-lg leading-relaxed text-white-60">
            Plus qu&apos;un logo ou une mention sur un CV, {siteName} est un véritable{" "}
            <span className="text-white-90">label d&apos;exigence et de confiance</span>,
            reconnu par les entreprises partenaires.
          </p>
          <p className="mx-auto mt-6 max-w-[720px] text-center font-medium text-white-90">
            Être Compagnon de la Route, c&apos;est :
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-1">
            {labelCriteria.map((line) => (
              <ScrollReveal key={line}>
                <div className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-5 md:p-6">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-500/15 text-orange-400">
                    <Check className="h-4 w-4" aria-hidden />
                  </span>
                  <p className="text-[15px] leading-relaxed text-white-75 md:text-[16px]">{line}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-y">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeader
            eyebrow="Notre ADN"
            title="Notre approche : l'exigence, l'excellence, l'engagement"
            lead="Nous résumons notre approche en trois mots-clés."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {approachPillars.map((pillar) => (
              <ScrollReveal key={pillar.title}>
                <Card className="h-full">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-orange-300">
                    {pillar.title}
                  </p>
                  <p className="mt-4 text-[15px] leading-relaxed text-white-70">{pillar.body}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-y">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeader
            eyebrow="Double compétence"
            title="La double compétence du Compagnon de la Route"
            lead="Un Compagnon de la Route, c'est bien plus qu'un « simple conducteur »."
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <ScrollReveal>
              <Card className="h-full">
                <h3 className="text-xl font-semibold text-white-90">
                  1. La maîtrise technique et sécuritaire
                </h3>
                <ul className="mt-6 space-y-3 text-[15px] leading-relaxed text-white-75">
                  <li className="flex gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" aria-hidden />
                    Conduite maîtrisée en toutes circonstances
                  </li>
                  <li className="flex gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" aria-hidden />
                    Connaissance et respect des réglementations transport
                  </li>
                  <li className="flex gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" aria-hidden />
                    Gestion des aléas, de la sécurité et des procédures
                  </li>
                  <li className="flex gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" aria-hidden />
                    Rigueur, vigilance, réflexes professionnels
                  </li>
                </ul>
              </Card>
            </ScrollReveal>
            <ScrollReveal>
              <Card className="h-full">
                <h3 className="text-xl font-semibold text-white-90">
                  2. La compétence relationnelle et comportementale
                </h3>
                <ul className="mt-6 space-y-3 text-[15px] leading-relaxed text-white-75">
                  <li className="flex gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" aria-hidden />
                    Sens du service et de l&apos;accueil
                  </li>
                  <li className="flex gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" aria-hidden />
                    Gestion des situations difficiles et des conflits
                  </li>
                  <li className="flex gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" aria-hidden />
                    Posture professionnelle avec les clients, collègues, encadrement
                  </li>
                  <li className="flex gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" aria-hidden />
                    Capacité à rassurer, écouter, expliquer
                  </li>
                </ul>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-shell section-y">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeader
            eyebrow="Valeurs"
            title="Un état d'esprit avant tout"
            lead="Au-delà des compétences, être Compagnon de la Route, c'est porter un état d'esprit. Les valeurs qui nous guident au quotidien :"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <ScrollReveal key={v.title}>
                <Card className="h-full">
                  <h3 className="text-lg font-semibold text-orange-300">{v.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-white-75">{v.text}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-[720px] text-center text-[15px] leading-relaxed text-white-50">
            Ces valeurs ne sont pas des slogans. Elles se vivent dans le bus, au dépôt, en
            formation, sur le terrain. Elles sont au cœur du quotidien d&apos;un Compagnon
            de la Route.
          </p>
        </div>
      </section>

      <section className="section-shell section-y">
        <div className="mx-auto max-w-[980px]">
          <Eyebrow>Concrètement</Eyebrow>
          <h2 className="mt-4 text-[clamp(1.75rem,3.5vw,2.625rem)] font-bold tracking-[-0.025em]">
            Ce que nous faisons au sein du cabinet BOAZ
          </h2>
          <ul className="mt-8 space-y-4">
            {concreteActions.map((action) => (
              <li key={action} className="flex gap-3 text-[15px] leading-relaxed text-white-75 md:text-[16px]">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-500/15 text-orange-400">
                  <Check className="h-4 w-4" aria-hidden />
                </span>
                {action}
              </li>
            ))}
          </ul>
          <p className="mt-10 text-lg leading-relaxed text-white-60">
            Notre ambition est simple :{" "}
            <span className="text-white-90">
              faire de chaque Compagnon de la Route un professionnel fiable, reconnu et
              fier de son métier.
            </span>
          </p>
        </div>
      </section>

      <section className="section-shell section-y">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeader
            eyebrow="Pourquoi pas vous ?"
            title="Un partenaire qui ne se contente pas de former"
            lead="Que vous soyez :"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {audiences.map((a) => (
              <ScrollReveal key={a.title}>
                <Card className="h-full">
                  <h3 className="font-semibold text-white-90">{a.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-white-60">{a.text}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-[720px] text-center text-lg leading-relaxed text-white-60">
            {siteName} est un partenaire qui ne se contente pas de « former ». Nous
            co-construisons des solutions d&apos;avenir, au service des personnes et des
            territoires.
          </p>
          <p className="mx-auto mt-6 max-w-[720px] text-center">
            <Link
              href="/contact"
              className="font-semibold text-orange-300 hover:text-orange-200"
            >
              Parlons de votre projet
            </Link>
            {" · "}
            <Link
              href="/formations/conducteur-voyageurs"
              className="font-semibold text-orange-300 hover:text-orange-200"
            >
              Découvrir la formation
            </Link>
          </p>
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
