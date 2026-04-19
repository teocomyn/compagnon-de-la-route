import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CGV",
  alternates: { canonical: "/cgv" },
};

export default function CgvPage() {
  return (
    <div>
      <div className="pt-16 md:pt-[72px]">
        <BreadcrumbBar>
          <PageBreadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "CGV", href: "/cgv" },
            ]}
          />
        </BreadcrumbBar>
      </div>
      <div className="section-shell mx-auto max-w-[900px] py-12 md:py-16">
      <h1 className="text-4xl font-bold tracking-tight">Conditions générales de vente</h1>
      <p className="mt-6 text-white-60">
        Document disponible sur demande et lors de l&apos;inscription.
      </p>
      </div>
    </div>
  );
}
