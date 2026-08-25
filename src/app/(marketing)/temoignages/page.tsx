import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Témoignages",
  description:
    "Méthode de publication des témoignages de stagiaires de Compagnon de la Route.",
  alternates: { canonical: "/temoignages" },
  robots: { index: false, follow: true },
};

export default function TemoignagesPage() {
  return (
    <>
      <div className="pt-16 md:pt-[72px]">
        <BreadcrumbBar>
          <PageBreadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Témoignages", href: "/temoignages" },
            ]}
          />
        </BreadcrumbBar>
      </div>
      <section className="section-shell pb-16 pt-3 md:pb-20 md:pt-8">
        <div className="mx-auto max-w-5xl">
          <Eyebrow>Témoignages vérifiés</Eyebrow>
          <h1 className="mt-4 text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em]">
            Des retours publiés avec leur contexte.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white-60">
            Cette page accueillera uniquement des retours recueillis auprès de personnes
            identifiées, avec leur accord de publication et sans réécriture trompeuse.
          </p>
        </div>
      </section>

      <section className="section-shell section-y">
        <div className="mx-auto max-w-5xl border-l-2 border-orange-400 py-2 pl-6 sm:pl-8">
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-[-0.02em]">
            Publication en cours de constitution
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-white-60">
            Les anciens témoignages génériques et la note agrégée non documentée ont été
            retirés. Chaque futur témoignage indiquera le contexte, la période et le
            statut de vérification, dans le respect du consentement de la personne.
          </p>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
