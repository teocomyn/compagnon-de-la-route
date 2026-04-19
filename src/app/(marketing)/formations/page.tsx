import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FinalCTA } from "@/components/sections/FinalCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formations",
  description:
    "Parcours certifiants pour conducteurs de voyageurs : titre professionnel, accompagnement terrain, insertion.",
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
      <section className="section-shell pb-16 pt-8 md:pb-24 md:pt-12">
        <div className="mx-auto max-w-[980px]">
          <Eyebrow>Catalogue</Eyebrow>
          <h1 className="mt-4 text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em]">
            Formations
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white-60">
            Des parcours conçus pour l&apos;emploi : exigence technique, relation
            voyageurs, et culture de la sécurité.
          </p>
        </div>
      </section>

      <section className="section-shell pb-20">
        <div className="mx-auto grid max-w-[1100px] gap-8">
          <Card className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <Badge variant="orange">Programme phare</Badge>
                <Badge variant="neutral">210h</Badge>
                <Badge variant="neutral">30 jours</Badge>
              </div>
              <h2 className="text-[26px] font-bold tracking-[-0.02em]">
                Conducteur de voyageurs
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-white-60">
                Titre professionnel, pratique majoritaire, accompagnement jusqu&apos;à
                l&apos;embauche.
              </p>
            </div>
            <Link
              href="/formations/conducteur-voyageurs"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 font-semibold text-white-90 transition-colors hover:border-orange-500/40 hover:text-orange-200"
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
