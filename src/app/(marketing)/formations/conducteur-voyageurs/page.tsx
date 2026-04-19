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
import { siteName, siteUrl } from "@/lib/constants";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Formation Conducteur de voyageurs · Titre Pro",
  description:
    "Formation certifiante de 30 jours (210h) pour devenir conducteur de bus et cars. Financée OPCO, CPF, France Travail. 98% de réussite, 2000+ stagiaires formés.",
  alternates: { canonical: "/formations/conducteur-voyageurs" },
  openGraph: {
    title: `Formation Conducteur de voyageurs · ${siteName}`,
    description:
      "Formation certifiante de 30 jours (210h) pour devenir conducteur de bus et cars.",
    url: "/formations/conducteur-voyageurs",
    type: "website",
  },
};

const finance = [
  {
    title: "CPF",
    text: "Mobilisez votre Compte Personnel de Formation",
  },
  {
    title: "France Travail",
    text: "AIF (Aide Individuelle à la Formation)",
  },
  {
    title: "OPCO",
    text: "Financement entreprise via les OPérateurs de COmpétences",
  },
];

const sessions = [
  { date: "12 mai 2026", place: "Lille", seats: 6 },
  { date: "2 juin 2026", place: "Lens", seats: 8 },
  { date: "23 juin 2026", place: "Amiens", seats: 5 },
];

const jobs = [
  "Conducteur urbain (RATP, Transdev, Keolis)",
  "Conducteur interurbain",
  "Conducteur car scolaire",
  "Conducteur tourisme",
];

function CourseJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Conducteur de voyageurs · Titre professionnel",
    description:
      "Formation certifiante (210h) pour conduire des véhicules de transport de voyageurs avec exigence sécurité et service.",
    provider: { "@type": "Organization", name: siteName, url: siteUrl },
    educationalCredentialAwarded: "Titre professionnel",
    timeRequired: "P30D",
    numberOfCredits: { "@type": "StructuredValue", value: 210, unitText: "hours" },
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
      <section className="section-shell pb-16 pt-8 md:pb-20 md:pt-12">
        <div className="mx-auto max-w-[1100px]">
          <Eyebrow>Programme phare</Eyebrow>
          <h1 className="mt-4 text-[clamp(2.25rem,5vw,3.75rem)] font-extrabold leading-[0.95] tracking-[-0.04em]">
            Conducteur de voyageurs · Titre Pro
          </h1>
          <div className="mt-6 flex flex-wrap gap-2">
            <Badge variant="orange">30 jours</Badge>
            <Badge variant="neutral">210 heures</Badge>
            <Badge variant="success">Certifié Qualiopi</Badge>
            <Badge variant="neutral">Finançable</Badge>
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className={buttonVariants({ variant: "primary", size: "lg" })}
            >
              Candidater à la prochaine session
            </Link>
            <Link href="/journal" className={buttonVariants({ variant: "ghost", size: "lg" })}>
              Lire le guide financement
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
        </div>
      </section>

      <section className="section-shell section-y">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="mb-8 text-[clamp(1.75rem,3.5vw,2.25rem)] font-bold tracking-[-0.025em]">
            Calendrier des sessions
          </h2>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[520px] text-left text-[15px]">
              <thead className="bg-white/[0.03] font-mono text-[11px] uppercase tracking-[0.14em] text-white-45">
                <tr>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Lieu</th>
                  <th className="px-6 py-4">Places</th>
                  <th className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {sessions.map((s) => (
                  <tr key={s.date} className="border-t border-white/5">
                    <td className="px-6 py-5 text-white-90">{s.date}</td>
                    <td className="px-6 py-5 text-white-75">{s.place}</td>
                    <td className="px-6 py-5 text-white-60">{s.seats} restantes</td>
                    <td className="px-6 py-5 text-right">
                      <Link
                        href="/contact"
                        className="font-semibold text-orange-300 hover:text-orange-200"
                      >
                        Candidater
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
