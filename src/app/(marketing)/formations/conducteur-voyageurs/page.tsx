import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Clock,
  Compass,
  FileText,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";
import { ProgramAccordion } from "@/components/formations/ProgramAccordion";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { ScrollReveal } from "@/components/magicui/ScrollReveal";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { MethodTimeline } from "@/components/sections/MethodTimeline";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { buttonVariants } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import {
  brandInfo,
  organizationInfo,
  programmeInfo,
  siteName,
  siteUrl,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Formation conducteur de voyageurs",
  description:
    "Découvrez le parcours conducteur de voyageurs : métier, programme, positionnement, financement et prochaines étapes.",
  alternates: { canonical: "/formations/conducteur-voyageurs" },
  openGraph: {
    title: `Formation conducteur de voyageurs · ${siteName}`,
    description:
      "Un parcours de préparation au métier, avec des modalités confirmées avant l’inscription.",
    url: "/formations/conducteur-voyageurs",
    type: "website",
  },
};

const anchorLinks = [
  { href: "#metier", label: "Le métier" },
  { href: "#parcours", label: "Le parcours" },
  { href: "#programme", label: "Le programme" },
  { href: "#modalites", label: "Les modalités" },
  { href: "#financement", label: "Le financement" },
];

const professionPillars = [
  {
    icon: ShieldCheck,
    title: "Protéger",
    text: "Placer la sécurité, l’anticipation et le respect du cadre professionnel au centre de chaque trajet.",
  },
  {
    icon: Users,
    title: "Accueillir",
    text: "Informer, rassurer et rendre le déplacement accessible à des voyageurs aux besoins différents.",
  },
  {
    icon: MapPin,
    title: "Relier",
    text: "Participer concrètement à la mobilité quotidienne et à la continuité des territoires.",
  },
];

const practicalSkills = [
  "Préparer le véhicule et effectuer les contrôles",
  "Adopter une conduite sûre et professionnelle",
  "Accueillir et informer les voyageurs",
  "Réagir avec méthode aux situations sensibles",
];

const keyInformation = [
  {
    icon: Compass,
    label: "Positionnement",
    value: "Le parcours est défini à partir de votre situation et de votre projet.",
  },
  {
    icon: Clock,
    label: "Durée",
    value: programmeInfo.duration,
  },
  {
    icon: FileText,
    label: "Programme",
    value: "Objectifs, évaluations et certification visée sont confirmés par écrit.",
  },
  {
    icon: MapPin,
    label: "Sessions",
    value: programmeInfo.schedule,
  },
];

const fundingOptions = [
  {
    title: "CPF",
    text: "Mobilisable si l’action proposée et votre situation sont éligibles.",
  },
  {
    title: "France Travail",
    text: "Une prise en charge peut être étudiée et reste soumise à un accord préalable.",
  },
  {
    title: "Employeur ou OPCO",
    text: "Les possibilités dépendent de l’entreprise, de la branche et du financeur concerné.",
  },
];

const jobs = [
  "Transport urbain",
  "Lignes interurbaines",
  "Transport scolaire",
  "Autocar et tourisme",
];

function CourseJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: programmeInfo.title,
    description:
      "Parcours de préparation au métier de conducteur de voyageurs. Les modalités exactes sont confirmées après positionnement et avant inscription.",
    provider: {
      "@type": "EducationalOrganization",
      "@id": `${siteUrl}/#organization`,
      name: brandInfo.ownerName,
      legalName: organizationInfo.legalName,
      url: siteUrl,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default function FormationConducteurPage() {
  return (
    <>
      <CourseJsonLd />

      <div className="pt-16 md:pt-[72px]">
        <BreadcrumbBar>
          <PageBreadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Formations", href: "/formations" },
              {
                label: "Conducteur de voyageurs",
                href: "/formations/conducteur-voyageurs",
              },
            ]}
          />
        </BreadcrumbBar>
      </div>

      <main>
        <section className="relative overflow-hidden pb-20 pt-8 md:pb-28 md:pt-14">
          <div className="section-shell relative z-10">
            <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-7">
                <Eyebrow>Formation · Conducteur de voyageurs</Eyebrow>
                <h1 className="mt-6 max-w-5xl text-balance text-[clamp(3rem,6vw,5.75rem)] font-semibold leading-[0.93] tracking-[-0.055em] text-white-90">
                  Devenir conducteur.
                  <span className="mt-2 block text-orange-300">
                    Être prêt au premier départ.
                  </span>
                </h1>
                <p className="mt-8 max-w-2xl text-lg leading-8 text-white-60 md:text-xl">
                  Préparez les compétences attendues au poste, de la sécurité à l’accueil des
                  voyageurs. Les prérequis, la durée et le financement sont confirmés avant toute
                  inscription.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  <Badge variant="success">Qualiopi · actions de formation</Badge>
                  <Badge variant="neutral">Parcours défini après positionnement</Badge>
                </div>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link
                    href="/contact"
                    className={buttonVariants({ variant: "primary", size: "lg" })}
                  >
                    Recevoir la fiche programme
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link
                    href="#parcours"
                    className={buttonVariants({ variant: "secondary", size: "lg" })}
                  >
                    Comprendre le parcours
                    <ArrowDown className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-xl lg:col-span-5 lg:ml-auto">
                <figure className="border border-white/15 bg-forest-surface">
                  <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src="/images/journal/conductrice-bus-poste.jpg"
                    alt="Conductrice de voyageurs installée au poste de conduite"
                    fill
                    loading="eager"
                    sizes="(max-width: 1023px) 100vw, 42vw"
                    className="object-cover"
                  />
                  </div>
                  <figcaption className="border-t border-white/15 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.14em] text-white-60">
                    Au poste / transport de voyageurs
                  </figcaption>
                </figure>

                <p className="mt-4 border-l-2 border-orange-400 pl-4 text-xs font-semibold uppercase tracking-[0.14em] text-white-75">
                  Information claire avant inscription
                </p>
              </div>
            </div>
          </div>
        </section>

        <nav
          className="border-y border-white/[0.07] bg-night-deep/55"
          aria-label="Sommaire de la formation"
        >
          <div className="section-shell overflow-x-auto [scrollbar-width:none]">
            <ul className="mx-auto flex min-w-max max-w-7xl items-center">
              {anchorLinks.map((link, index) => (
                <li key={link.href} className="flex items-center">
                  {index > 0 ? (
                    <span className="h-1 w-1 rounded-full bg-white/20" aria-hidden="true" />
                  ) : null}
                  <a
                    href={link.href}
                    className="inline-flex min-h-16 items-center px-5 text-sm font-medium text-white-60 transition-colors hover:text-orange-300 md:px-7"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <section id="metier" className="section-shell section-y scroll-mt-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <Eyebrow>La réalité du métier</Eyebrow>
                <h2 className="mt-5 text-balance text-[clamp(2.25rem,4.5vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-white-90">
                  Le volant n’est qu’une partie du métier.
                </h2>
              </div>
              <div className="flex items-end lg:col-span-7">
                <p className="max-w-2xl text-lg leading-8 text-white-60">
                  Le conducteur tient ensemble trois exigences : la sécurité du déplacement, la
                  qualité de l’accueil et la continuité du service. La formation prépare à cette
                  responsabilité complète.
                </p>
              </div>
            </div>

            <div className="mt-14 grid border-y border-white/10 md:grid-cols-3">
              {professionPillars.map((pillar, index) => {
                const Icon = pillar.icon;

                return (
                  <ScrollReveal key={pillar.title} delay={index * 0.06}>
                    <article className="relative h-full py-8 md:px-8 md:py-10 first:md:pl-0 last:md:pr-0">
                      {index > 0 ? (
                        <span
                          className="absolute bottom-8 left-0 top-8 hidden w-px bg-white/10 md:block"
                          aria-hidden="true"
                        />
                      ) : null}
                      <div className="flex items-center justify-between">
                        <Icon className="h-6 w-6 text-orange-300" aria-hidden="true" />
                        <span className="font-mono text-xs text-white-25">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="mt-10 text-2xl font-semibold text-white-90">
                        {pillar.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-white-60">{pillar.text}</p>
                    </article>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-shell pb-12 pt-6 md:pb-20">
          <div className="mx-auto grid max-w-6xl overflow-hidden border border-orange-100/15 bg-orange-100 text-night-deep lg:grid-cols-12">
            <div className="relative min-h-[310px] lg:col-span-7 lg:min-h-[520px]">
              <Image
                src="/images/journal/conductrice-autocar.webp"
                alt="Conductrice installée au poste de conduite d’un bus"
                fill
                sizes="(max-width: 1023px) 100vw, 58vw"
                className="object-cover"
              />
              <p className="absolute bottom-0 left-0 bg-night-deep px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-orange-300">
                Au poste de conduite
              </p>
            </div>

            <div className="flex flex-col justify-center p-7 sm:p-10 lg:col-span-5 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-700">
                Apprendre en situation
              </p>
              <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-[-0.035em] md:text-4xl">
                La pratique donne du relief à chaque compétence.
              </h2>
              <p className="mt-5 text-base leading-7 text-night-deep/70">
                La fiche programme précise les exercices, mises en situation et évaluations du
                parcours proposé.
              </p>
              <ul className="mt-7 border-t border-night-deep/20">
                {practicalSkills.map((skill) => (
                  <li key={skill} className="border-b border-night-deep/20 py-3 text-sm leading-6">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="parcours" className="scroll-mt-28 border-y border-white/[0.07] bg-night-deep py-20 md:py-28">
          <div className="section-shell">
            <div className="mx-auto max-w-6xl">
              <div className="mb-14 max-w-3xl">
                <Eyebrow>Votre trajectoire</Eyebrow>
                <h2 className="mt-5 text-balance text-[clamp(2.25rem,4.5vw,4.25rem)] font-semibold leading-[1.03] tracking-[-0.04em] text-white-90">
                  Un parcours lisible, du premier échange à la suite professionnelle.
                </h2>
              </div>
              <MethodTimeline />
            </div>
          </div>
        </section>

        <section id="programme" className="section-shell section-y scroll-mt-28">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <Eyebrow>Le programme</Eyebrow>
                <h2 className="mt-5 text-balance text-[clamp(2.25rem,4vw,3.75rem)] font-semibold leading-[1.03] tracking-[-0.04em] text-white-90">
                  Construire des réflexes professionnels.
                </h2>
                <p className="mt-6 text-base leading-7 text-white-60">
                  Les contenus ci-contre présentent les grands axes du parcours. La fiche remise
                  avant l’inscription reste le document de référence.
                </p>
                <div className="mt-8 border-l border-orange-400 pl-5">
                  <p className="text-sm leading-6 text-white-75">
                    Objectifs, volume horaire, modalités d’évaluation et certification visée sont
                    confirmés après positionnement.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8">
              <ProgramAccordion />
            </div>
          </div>
        </section>

        <section id="modalites" className="scroll-mt-28 border-y border-white/[0.07] bg-white/[0.018] py-20 md:py-28">
          <div className="section-shell">
            <div className="mx-auto max-w-6xl">
              <div className="max-w-3xl">
                <Eyebrow>Avant de commencer</Eyebrow>
                <h2 className="mt-5 text-balance text-[clamp(2.25rem,4.5vw,4.25rem)] font-semibold leading-[1.03] tracking-[-0.04em] text-white-90">
                  Les informations qui doivent être claires avant votre décision.
                </h2>
              </div>

              <div className="mt-14 grid overflow-hidden border border-white/10 md:grid-cols-2">
                {keyInformation.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.label}
                      className={cn(
                        "min-h-56 p-7 md:p-9",
                        index % 2 === 1 && "md:border-l md:border-white/10",
                        index > 1 && "border-t border-white/10",
                      )}
                    >
                      <div className="flex items-center justify-between gap-5 text-orange-300">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                        <span className="font-mono text-xs text-white-25">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <p className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-white-45">
                        {item.label}
                      </p>
                      <p className="mt-3 max-w-md text-lg font-medium leading-7 text-white-90">
                        {item.value}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="financement" className="section-shell section-y scroll-mt-28">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <h2 className="text-balance text-[clamp(2.25rem,4vw,3.75rem)] font-semibold leading-[1.03] tracking-[-0.04em] text-white-90">
                Étudier le financement, sans fausse promesse.
              </h2>
              <p className="mt-6 text-base leading-7 text-white-60">
                Aucun financement n’est automatique. L’éligibilité, le montant pris en charge, le
                reste éventuel et les délais sont confirmés par le financeur avant votre engagement.
              </p>
              <Link
                href="/financement-formation-conducteur-voyageurs"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-orange-300 transition-colors hover:text-orange-200"
              >
                Consulter le guide financement
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="border-t border-white/10 lg:col-span-7">
              {fundingOptions.map((option, index) => (
                <div
                  key={option.title}
                  className="grid gap-3 border-b border-white/10 py-7 sm:grid-cols-[3rem_10rem_1fr] sm:items-start sm:gap-5"
                >
                  <span className="font-mono text-xs font-semibold text-orange-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-semibold text-white-90">{option.title}</h3>
                  <p className="text-sm leading-6 text-white-60">{option.text}</p>
                </div>
              ))}
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "secondary", size: "lg" }),
                  "mt-8",
                )}
              >
                Étudier ma situation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section className="section-shell pb-8 pt-4 md:pb-14">
          <div className="mx-auto max-w-6xl border-y border-white/15 py-8 md:py-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-300">
                  Perspectives métier
                </div>
                <h2 className="mt-5 text-3xl font-semibold tracking-[-0.035em] text-white-90 md:text-4xl">
                  Plusieurs environnements, une même exigence de service.
                </h2>
                <p className="mt-4 text-sm leading-7 text-white-60">
                  L’accompagnement prépare l’accès à l’emploi et la présentation du projet, sans
                  garantir une embauche ni un type de contrat.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 lg:max-w-md lg:justify-end">
                {jobs.map((job) => (
                  <span key={job} className="border-b border-white/20 py-2 text-sm text-white-75">
                    {job}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <FinalCTA />

        <section className="section-shell pb-20 text-center text-xs leading-6 text-white-45">
          <p>
            Organisme : {organizationInfo.legalName} / Qualiopi, {organizationInfo.qualiopiScope.toLowerCase()}.
          </p>
        </section>
      </main>
    </>
  );
}
