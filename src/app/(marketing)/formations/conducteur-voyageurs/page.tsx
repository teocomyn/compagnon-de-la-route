import Link from "next/link";
import { ProgramAccordion } from "@/components/formations/ProgramAccordion";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Badge } from "@/components/ui/Badge";
import { buttonVariants } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ScrollReveal } from "@/components/magicui/ScrollReveal";
import { programmeInfo, siteName, siteUrl } from "@/lib/constants";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Parcours conducteur de voyageurs",
  description:
    "Objectifs, contenu, positionnement, financement et calendrier du parcours conducteur de voyageurs.",
  alternates: { canonical: "/formations/conducteur-voyageurs" },
  openGraph: {
    title: `Formation Conducteur de voyageurs · ${siteName}`,
    description:
      "Découvrez le cadre du parcours et demandez les modalités à jour avant de vous inscrire.",
    url: "/formations/conducteur-voyageurs",
    type: "website",
  },
};

const finance = [
  {
    title: "CPF",
    text: "Mobilisable si l’action proposée et votre situation sont éligibles",
  },
  {
    title: "France Travail",
    text: "Prise en charge éventuelle soumise à l’accord préalable de France Travail",
  },
  {
    title: "OPCO",
    text: "Financement éventuel selon l’entreprise, la branche et l’accord de l’OPCO",
  },
];

const jobs = [
  "Conducteur urbain",
  "Conducteur interurbain",
  "Conducteur car scolaire",
  "Conducteur tourisme",
];

function CourseJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: programmeInfo.title,
    description:
      "Parcours de préparation au métier de conducteur de voyageurs. Les modalités exactes sont confirmées après positionnement et avant inscription.",
    provider: { "@type": "Organization", name: siteName, url: siteUrl },
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
      <section className="section-shell pb-16 pt-3 md:pb-20 md:pt-8">
        <div className="mx-auto max-w-[1100px]">
          <Eyebrow>Programme phare</Eyebrow>
          <h1 className="mt-4 text-[clamp(2.25rem,5vw,3.75rem)] font-extrabold leading-[0.95] tracking-[-0.04em]">
            Parcours conducteur de voyageurs
          </h1>
          <div className="mt-6 flex flex-wrap gap-2">
            <Badge variant="orange">{programmeInfo.duration}</Badge>
            <Badge variant="success">Qualiopi · actions de formation</Badge>
            <Badge variant="neutral">Financement étudié individuellement</Badge>
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className={buttonVariants({ variant: "primary", size: "lg" })}
            >
              Demander la fiche programme à jour
            </Link>
            <Link href="/contact" className={buttonVariants({ variant: "ghost", size: "lg" })}>
              Vérifier mon éligibilité
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell section-y">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="mb-8 text-[clamp(1.75rem,3.5vw,2.25rem)] font-bold tracking-[-0.025em]">
            Programme détaillé
          </h2>
          <ProgramAccordion />
        </div>
      </section>

      <section className="section-shell section-y">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="mb-8 text-[clamp(1.75rem,3.5vw,2.25rem)] font-bold tracking-[-0.025em]">
            Financement
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {finance.map((f) => (
              <ScrollReveal key={f.title}>
                <Card className="h-full">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-orange-300">
                    Dispositif
                  </p>
                  <h3 className="mt-3 text-[20px] font-semibold">{f.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-white-60">{f.text}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-white-45">
            Aucun financement n&apos;est automatique. Le montant pris en charge, le
            reste éventuel et les délais sont confirmés par le financeur avant votre
            engagement.
          </p>
        </div>
      </section>

      <section className="section-shell section-y">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="mb-8 text-[clamp(1.75rem,3.5vw,2.25rem)] font-bold tracking-[-0.025em]">
            Calendrier des sessions
          </h2>
          <div className="rounded-xl border border-orange-500/25 bg-orange-500/10 p-6 md:p-8">
            <p className="text-lg font-semibold text-white-90">
              {programmeInfo.schedule}
            </p>
            <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-white-60">
              Les dates, lieux, horaires, capacité d&apos;accueil et délai d&apos;accès sont
              transmis dans la fiche programme à jour. Aucune place n&apos;est annoncée
              sur le site sans calendrier confirmé.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex font-semibold text-orange-200 hover:text-orange-100"
            >
              Recevoir les prochaines dates
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell section-y">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="mb-6 text-[clamp(1.75rem,3.5vw,2.25rem)] font-bold tracking-[-0.025em]">
            Débouchés
          </h2>
          <ul className="space-y-3 text-[16px] leading-relaxed text-white-75">
            {jobs.map((j) => (
              <li key={j} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500" aria-hidden />
                {j}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
