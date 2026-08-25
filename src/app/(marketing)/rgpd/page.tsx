import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RGPD",
  alternates: { canonical: "/rgpd" },
};

export default function RgpdPage() {
  return (
    <div>
      <div className="pt-16 md:pt-[72px]">
        <BreadcrumbBar>
          <PageBreadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "RGPD", href: "/rgpd" },
            ]}
          />
        </BreadcrumbBar>
      </div>
      <div className="section-shell mx-auto max-w-4xl pb-16 pt-3 md:pt-5">
        <h1 className="text-4xl font-bold tracking-tight">Vos droits RGPD</h1>
        <p className="mt-6 leading-relaxed text-white-60">
          La politique de confidentialité détaille les données collectées, leur usage,
          leur durée de conservation et la manière d&apos;exercer vos droits.
        </p>
        <Link
          href="/confidentialite"
          className="mt-6 inline-flex font-semibold text-orange-300 hover:text-orange-200"
        >
          Consulter la politique de confidentialité
        </Link>
      </div>
    </div>
  );
}
