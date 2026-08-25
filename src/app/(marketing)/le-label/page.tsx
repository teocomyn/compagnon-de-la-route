import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { buttonVariants } from "@/components/ui/Button";
import {
  brandInfo,
  organizationInfo,
  siteName,
  siteUrl,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Le label transport",
  description:
    "Compagnon de la Route est le label transport porté par BOAZ. Découvrez son rôle, son périmètre et les responsabilités de l’organisme de formation.",
  alternates: { canonical: "/le-label" },
  openGraph: {
    title: `Le label ${siteName}`,
    description:
      "Un repère commun pour préparer les responsabilités des métiers du transport de voyageurs.",
    url: "/le-label",
    type: "website",
  },
};

const commitments = [
  {
    index: "01",
    title: "Sécurité",
    text: "Relier les gestes, les décisions et l’organisation du service à la sécurité des voyageurs.",
  },
  {
    index: "02",
    title: "Service",
    text: "Préparer la relation avec les passagers, les équipes et les réalités du territoire.",
  },
  {
    index: "03",
    title: "Maîtrise",
    text: "Faire progresser les savoir-faire par l’observation, la mise en situation et la correction.",
  },
  {
    index: "04",
    title: "Clarté",
    text: "Distinguer les informations confirmées de celles qui dépendent encore d’un programme, d’un financeur ou d’un employeur.",
  },
] as const;

const definitions = [
  {
    term: siteName,
    role: "Le label transport",
    text: "Il donne un nom et un cadre commun aux parcours consacrés aux métiers du transport de voyageurs.",
  },
  {
    term: brandInfo.ownerName,
    role: "L’organisme porteur",
    text: "BOAZ conçoit et organise les actions de formation, contractualise avec les apprenants et porte les informations administratives publiées sur ce site.",
  },
  {
    term: "Qualiopi",
    role: "La certification qualité",
    text: "Elle concerne le processus mis en œuvre par BOAZ pour ses actions de formation. Elle ne garantit à elle seule ni financement, ni diplôme, ni emploi.",
  },
] as const;

function LabelJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${siteUrl}/le-label/#page`,
        name: `Le label ${siteName}`,
        url: `${siteUrl}/le-label`,
        mainEntity: { "@id": `${siteUrl}/#brand` },
      },
      {
        "@type": "Brand",
        "@id": `${siteUrl}/#brand`,
        name: siteName,
        description: brandInfo.description,
        url: `${siteUrl}/le-label`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default function LabelPage() {
  return (
    <>
      <LabelJsonLd />

      <div className="pt-16 md:pt-[72px]">
        <BreadcrumbBar>
          <PageBreadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Le label", href: "/le-label" },
            ]}
          />
        </BreadcrumbBar>
      </div>

      <section className="border-b border-white/10">
        <div className="section-shell grid min-h-[calc(100svh-6rem)] max-w-screen-2xl lg:grid-cols-12">
          <div className="flex flex-col justify-between py-12 lg:col-span-7 lg:min-h-[46rem] lg:border-r lg:border-white/10 lg:py-16 lg:pr-14">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-300">
                Identité / périmètre / responsabilité
              </p>
              <h1 className="mt-7 max-w-4xl text-balance text-[clamp(3.1rem,6.2vw,6.8rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-white-90">
                Un label transport.
                <span className="block text-orange-300">Un organisme qui le porte.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-white-60 md:text-xl md:leading-9">
                {siteName} est le label transport porté par {brandInfo.ownerName}. Il
                réunit une même exigence de préparation autour des métiers qui font
                circuler, accueillent et organisent le voyage.
              </p>
            </div>

            <div className="mt-12 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/formations"
                className={cn(buttonVariants({ size: "lg" }), "justify-between")}
              >
                Voir les parcours
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/qui-sommes-nous"
                className={buttonVariants({ variant: "secondary", size: "lg" })}
              >
                Découvrir BOAZ
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-center py-12 lg:col-span-5 lg:py-16 lg:pl-14">
            <div className="border border-white/15 bg-night-deep">
              <div className="flex min-h-52 flex-col justify-between border-b border-white/15 p-7 sm:p-9">
                <div className="flex items-start justify-between gap-6">
                  <BrandLogo size="footer" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-orange-300">
                    Le repère public
                  </span>
                </div>
                <div className="mt-12">
                  <p className="text-2xl font-semibold tracking-[-0.035em] text-white-90 sm:text-3xl">
                    {siteName}
                  </p>
                  <p className="mt-2 text-sm text-white-45">{brandInfo.type}</p>
                </div>
              </div>

              <div className="grid grid-cols-[5rem_1fr] border-b border-white/15">
                <div className="flex items-center justify-center border-r border-white/15 py-7 font-mono text-[10px] text-orange-300">
                  ↓
                </div>
                <div className="px-6 py-7">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white-45">
                    Porté juridiquement par
                  </p>
                </div>
              </div>

              <div className="p-7 sm:p-9">
                <p className="text-3xl font-semibold tracking-[-0.04em] text-orange-300">
                  {brandInfo.ownerName}
                </p>
                <p className="mt-3 max-w-sm text-sm leading-6 text-white-60">
                  Organisme de formation identifié par le SIRET {organizationInfo.siret}.
                </p>
              </div>
            </div>

            <p className="mt-5 border-l border-orange-400 pl-4 text-xs leading-5 text-white-45">
              Le label, l’organisme et la certification qualité ont chacun un rôle
              distinct. Cette page les sépare volontairement.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-night-deep/20 bg-orange-100 text-night-deep">
        <div className="section-shell max-w-screen-2xl py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-700">
                La fonction du label
              </p>
              <h2 className="mt-5 max-w-xl text-[clamp(2.6rem,5vw,5.5rem)] font-semibold leading-[0.94] tracking-[-0.055em]">
                Rendre visible un niveau d’exigence commun.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-8">
              <p className="max-w-3xl text-xl leading-9 text-night-deep/75">
                Le label ne remplace pas le programme contractuel d’une formation. Il
                exprime ce qui relie les parcours : comprendre les responsabilités du
                poste, s’exercer dans des situations concrètes et savoir ce qui sera
                attendu en service.
              </p>
              <p className="mt-8 max-w-3xl border-l border-orange-700 pl-6 text-base leading-7 text-night-deep/65">
                Pour chaque inscription, la durée, les prérequis, la certification
                visée, les évaluations, le calendrier, le prix et le financement sont
                confirmés séparément par écrit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell section-y max-w-screen-2xl">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-300">
              Le socle commun
            </p>
            <h2 className="mt-5 text-[clamp(2.5rem,4.6vw,4.8rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-white-90">
              Ce que le nom engage.
            </h2>
          </div>

          <ol className="border-t border-white/15 lg:col-span-8">
            {commitments.map((commitment) => (
              <li
                key={commitment.index}
                className="grid gap-3 border-b border-white/15 py-7 sm:grid-cols-[3rem_minmax(9rem,0.55fr)_minmax(0,1fr)] sm:gap-7"
              >
                <span className="font-mono text-[10px] text-orange-300">
                  {commitment.index}
                </span>
                <h3 className="text-xl font-semibold tracking-[-0.025em] text-white-90">
                  {commitment.title}
                </h3>
                <p className="text-sm leading-7 text-white-60 sm:text-base">
                  {commitment.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-white/10 bg-night-deep">
        <div className="mx-auto grid max-w-screen-2xl lg:grid-cols-2">
          <figure className="relative min-h-[28rem] border-b border-white/10 lg:min-h-[44rem] lg:border-b-0 lg:border-r">
            <Image
              src="/images/hero/bus-mouvement.jpeg"
              alt="Bus urbain en mouvement pendant son service"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <figcaption className="absolute inset-x-0 bottom-0 border-t border-white/15 bg-night-deep/95 px-6 py-4 font-mono text-[10px] uppercase tracking-[0.15em] text-orange-300">
              Le mouvement visible / l’organisation derrière
            </figcaption>
          </figure>

          <div className="flex flex-col justify-between px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-300">
              Une même chaîne de responsabilité
            </p>
            <blockquote className="mt-16 max-w-2xl text-balance text-[clamp(2.7rem,5vw,5.4rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-white-90 lg:mt-24">
              À bord comme dans l’exploitation,
              <span className="block text-orange-300">le service se prépare.</span>
            </blockquote>
            <p className="mt-10 max-w-xl text-base leading-8 text-white-60">
              La conduite rend le trajet possible. L’organisation du service le rend
              fiable. Le label relie ces deux réalités autour de la sécurité, de la
              coordination et de l’attention portée aux voyageurs.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell section-y max-w-screen-2xl">
        <div className="max-w-4xl">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-300">
            Trois termes, trois fonctions
          </p>
          <h2 className="mt-5 text-[clamp(2.6rem,5vw,5.4rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-white-90">
            Savoir exactement qui fait quoi.
          </h2>
        </div>

        <dl className="mt-12 grid border-l border-t border-white/15 lg:grid-cols-3">
          {definitions.map((definition, index) => (
            <div
              key={definition.term}
              className="flex min-h-72 flex-col border-b border-r border-white/15 p-7 sm:p-9"
            >
              <div className="flex items-start justify-between gap-6">
                <dt className="text-2xl font-semibold tracking-[-0.035em] text-white-90">
                  {definition.term}
                </dt>
                <span className="font-mono text-[10px] text-orange-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <dd className="mt-auto pt-12">
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-orange-300">
                  {definition.role}
                </p>
                <p className="mt-4 text-sm leading-7 text-white-60">
                  {definition.text}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <FinalCTA />
    </>
  );
}
