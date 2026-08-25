import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "Formations transport de voyageurs",
  description:
    "Découvrez les parcours Compagnon de la Route pour la conduite et l’exploitation-régulation du transport de voyageurs.",
  alternates: { canonical: "/formations" },
};

const paths = [
  {
    index: "01",
    status: "Parcours présenté",
    eyebrow: "À bord",
    title: "Conducteur de voyageurs",
    statement: "Conduire, accueillir, protéger.",
    description:
      "Un parcours consacré à la sécurité, à la conduite professionnelle et à la relation avec les passagers.",
    image: "/images/journal/conductrice-transport-voyageurs.jpeg",
    imageAlt: "Conductrice de voyageurs à proximité d’un bus",
    href: "/formations/conducteur-voyageurs",
    action: "Découvrir le parcours",
  },
  {
    index: "02",
    status: "Programme en préparation",
    eyebrow: "À l’exploitation",
    title: "Exploitant-régulateur",
    statement: "Planifier, coordonner, réagir.",
    description:
      "Le métier et son référentiel public sont documentés. Les modalités exactes du parcours BOAZ restent à confirmer avant toute inscription.",
    image: "/images/hero/route-nuit.jpg",
    imageAlt: "Route nocturne dont les trajectoires évoquent la coordination d’un réseau",
    href: "/formations/exploitant-regulateur",
    action: "Comprendre le métier",
  },
] as const;

export default function FormationsPage() {
  return (
    <>
      <div className="pt-16 md:pt-[72px]">
        <BreadcrumbBar>
          <PageBreadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Formations", href: "/formations" },
            ]}
          />
        </BreadcrumbBar>
      </div>

      <section className="section-shell pb-16 pt-8 md:pb-24 md:pt-14">
        <div className="mx-auto grid max-w-screen-2xl gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <Eyebrow>Les parcours du label</Eyebrow>
            <h1 className="mt-6 max-w-5xl text-balance text-[clamp(3.1rem,6.5vw,7rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-white-90">
              Deux métiers.
              <span className="block text-orange-300">Une même chaîne de service.</span>
            </h1>
          </div>
          <div className="self-end border-l border-orange-400 pl-6 lg:col-span-4">
            <p className="text-base leading-8 text-white-60">
              Le conducteur agit au contact des voyageurs. L’exploitant-régulateur
              organise et suit le service. Chaque fiche indique clairement ce qui est
              disponible et ce qui doit encore être confirmé par BOAZ.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-night-deep">
        <div className="mx-auto grid max-w-screen-2xl lg:grid-cols-2">
          {paths.map((path, index) => (
            <article
              key={path.href}
              className={index === 1 ? "border-t border-white/10 lg:border-l lg:border-t-0" : ""}
            >
              <figure className="relative aspect-[4/3] overflow-hidden border-b border-white/10 sm:aspect-[16/10]">
                <Image
                  src={path.image}
                  alt={path.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 top-0 flex items-center justify-between border-b border-white/15 bg-night-deep/95 px-5 py-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-orange-300">
                    {path.eyebrow}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-white-60">
                    {path.status}
                  </span>
                </div>
              </figure>

              <div className="flex min-h-[28rem] flex-col p-6 sm:p-10 lg:p-12">
                <div className="flex items-start justify-between gap-6">
                  <h2 className="max-w-lg text-[clamp(2.2rem,4vw,4.2rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-white-90">
                    {path.title}
                  </h2>
                  <span className="font-mono text-[10px] text-orange-300">{path.index}</span>
                </div>

                <p className="mt-7 text-xl font-semibold tracking-[-0.025em] text-orange-300">
                  {path.statement}
                </p>
                <p className="mt-5 max-w-xl text-sm leading-7 text-white-60 sm:text-base">
                  {path.description}
                </p>

                <Link
                  href={path.href}
                  className="group mt-auto flex min-h-14 items-center justify-between border-t border-white/15 pt-8 font-semibold text-white-90 transition-colors hover:text-orange-200"
                >
                  {path.action}
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell py-14 md:py-20">
        <div className="mx-auto grid max-w-screen-2xl gap-8 border-y border-white/15 py-8 md:grid-cols-[minmax(0,1fr)_minmax(18rem,0.6fr)] md:items-center md:py-10">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-orange-300">
              Un repère commun
            </p>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3.8rem)] font-semibold leading-none tracking-[-0.045em] text-white-90">
              Le label relie la route et l’exploitation.
            </h2>
          </div>
          <div className="md:border-l md:border-white/15 md:pl-8">
            <p className="text-sm leading-7 text-white-60">
              Compagnon de la Route porte un même niveau d’attention à la sécurité, à
              la coordination et au service, sans confondre les métiers ni leurs
              certifications.
            </p>
            <Link
              href="/le-label"
              className="mt-5 inline-flex items-center gap-2 font-semibold text-orange-300 transition-colors hover:text-orange-200"
            >
              Comprendre le label
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
