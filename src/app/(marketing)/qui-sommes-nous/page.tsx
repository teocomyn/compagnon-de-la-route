import Image from "next/image";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { brandInfo, organizationInfo, siteName, siteUrl } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BOAZ, organisme porteur",
  description:
    "BOAZ porte le label Compagnon de la Route. Consultez l’identité de l’organisme de formation, son rôle et sa méthode de travail.",
  alternates: { canonical: "/qui-sommes-nous" },
};

const workingPrinciples = [
  {
    title: "Partir de votre situation",
    text: "Les prérequis, l’expérience et le projet professionnel sont examinés avant de définir le parcours.",
  },
  {
    title: "Formaliser les modalités",
    text: "Le programme, la durée, le calendrier, les évaluations et le prix sont transmis avant l’inscription.",
  },
  {
    title: "Préparer les responsabilités du poste",
    text: "La conduite, la sécurité et le service aux voyageurs structurent le travail pédagogique.",
  },
  {
    title: "Rester précis sur la suite",
    text: "Les pistes de financement et d’emploi sont étudiées sans être présentées comme acquises.",
  },
] as const;

function AboutJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `BOAZ, organisme porteur de ${siteName}`,
    url: `${siteUrl}/qui-sommes-nous`,
    mainEntity: {
      "@type": "EducationalOrganization",
      "@id": `${siteUrl}/#organization`,
      name: brandInfo.ownerName,
      legalName: organizationInfo.legalName,
      identifier: organizationInfo.siren,
      brand: { "@id": `${siteUrl}/#brand` },
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
              { label: "BOAZ", href: "/qui-sommes-nous" },
            ]}
          />
        </BreadcrumbBar>
      </div>

      <section className="section-shell pb-20 pt-8 md:pb-28 md:pt-14">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-orange-300">
            BOAZ / organisme porteur
          </p>
          <h1 className="mt-6 max-w-5xl text-balance text-[clamp(3.25rem,7vw,7.5rem)] font-semibold leading-[0.88] tracking-[-0.06em] text-white-90">
            Le label a un nom. L’organisme a des responsabilités.
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-9 text-white-60">
            {brandInfo.ownerName} est l’organisme de formation qui porte {siteName}.
            BOAZ conçoit les actions, contractualise le parcours et répond des
            informations administratives publiées sur ce site.
          </p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-orange-100 text-night-deep">
        <div className="mx-auto grid max-w-screen-2xl lg:grid-cols-2">
          <figure className="relative min-h-[420px] border-b border-night-deep/20 lg:min-h-[680px] lg:border-b-0 lg:border-r">
            <Image
              src="/images/journal/conductrice-autocar.webp"
              alt="Conductrice à son poste dans un autocar"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </figure>

          <div className="px-6 py-14 md:px-10 md:py-20 lg:px-16">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-orange-700">
              Identité publique
            </p>
            <h2 className="mt-5 text-[clamp(2.3rem,4vw,4.25rem)] font-semibold leading-none tracking-[-0.045em]">
              Les informations qui engagent BOAZ
            </h2>

            <dl className="mt-10 border-t border-night-deep/25">
              <IdentityRow label="Raison sociale" value={organizationInfo.legalName} />
              <IdentityRow label="SIRET" value={organizationInfo.siret} />
              <IdentityRow
                label="Déclaration d’activité"
                value={`${organizationInfo.trainingDeclarationNumber}, région ${organizationInfo.trainingDeclarationRegion}`}
              />
              <IdentityRow
                label="Certification qualité"
                value={`Qualiopi, ${organizationInfo.qualiopiScope.toLowerCase()}`}
              />
              <IdentityRow
                label="Adresse déclarée"
                value={`${organizationInfo.address}, ${organizationInfo.postalCode} ${organizationInfo.city}`}
              />
            </dl>
          </div>
        </div>
      </section>

      <section className="section-shell section-y">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-orange-300">
              La méthode BOAZ
            </p>
            <h2 className="mt-5 text-[clamp(2.2rem,4vw,4rem)] font-semibold leading-none tracking-[-0.045em] text-white-90">
              La clarté avant la promesse.
            </h2>
          </div>

          <ol className="border-t border-white/15">
            {workingPrinciples.map((principle, index) => (
              <li
                key={principle.title}
                className="grid grid-cols-[2.75rem_1fr] gap-4 border-b border-white/15 py-6 sm:grid-cols-[3rem_minmax(12rem,0.8fr)_minmax(0,1fr)] sm:gap-6"
              >
                <span className="font-mono text-xs text-orange-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-semibold text-white-90">{principle.title}</h3>
                <p className="col-start-2 text-sm leading-6 text-white-60 sm:col-start-3">
                  {principle.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-white/10 bg-night-deep">
        <div className="section-shell mx-auto max-w-6xl py-16 md:py-24">
          <p className="max-w-5xl text-balance text-[clamp(2rem,4.6vw,4.75rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-white-90">
            Financement, certification et embauche restent soumis à des décisions
            extérieures. Nous vous indiquons ce qui est confirmé, ce qui dépend encore
            d’un accord et ce qui doit être vérifié.
          </p>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

function IdentityRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-2 border-b border-night-deep/25 py-5 sm:grid-cols-[11rem_1fr] sm:gap-6">
      <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-night-deep/55">
        {label}
      </dt>
      <dd className="font-semibold">{value}</dd>
    </div>
  );
}
