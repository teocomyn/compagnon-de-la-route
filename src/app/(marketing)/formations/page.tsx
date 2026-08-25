import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { programmeInfo } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formations",
  description:
    "Parcours de préparation aux métiers du transport de voyageurs : positionnement, apprentissages et accompagnement professionnel.",
  alternates: { canonical: "/formations" },
};

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
      <section className="section-shell pb-16 pt-3 md:pb-24 md:pt-8">
        <div className="mx-auto max-w-5xl">
          <Eyebrow>Catalogue</Eyebrow>
          <h1 className="mt-5 text-[clamp(3rem,6vw,6rem)] font-semibold leading-[0.92] tracking-[-0.055em]">
            Une formation publiée. Des modalités vérifiées.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white-60">
            Le parcours conducteur de voyageurs est présenté avec les informations
            disponibles. La fiche programme complète reste la référence avant
            l&apos;inscription.
          </p>
        </div>
      </section>

      <section className="section-shell pb-20">
        <div className="mx-auto grid max-w-6xl gap-8">
          <Card className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <Badge variant="orange">Programme phare</Badge>
                <Badge variant="neutral">{programmeInfo.duration}</Badge>
              </div>
              <h2 className="text-[26px] font-bold tracking-[-0.02em]">
                Conducteur de voyageurs
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-white-60">
                Positionnement, apprentissages métier et accompagnement vers
                l&apos;emploi. La certification éventuellement visée est précisée avant
                inscription.
              </p>
            </div>
            <Link
              href="/formations/conducteur-voyageurs"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-3 font-semibold text-white-90 transition-colors hover:border-orange-400 hover:text-orange-200"
            >
              Découvrir
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Card>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
