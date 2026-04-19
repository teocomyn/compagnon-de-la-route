import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  alternates: { canonical: "/confidentialite" },
};

export default function ConfidentialitePage() {
  return (
    <div>
      <div className="pt-16 md:pt-[72px]">
        <BreadcrumbBar>
          <PageBreadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Politique de confidentialité", href: "/confidentialite" },
            ]}
          />
        </BreadcrumbBar>
      </div>
      <div className="section-shell mx-auto max-w-[900px] pt-3 pb-12 md:pt-5 md:pb-16">
      <h1 className="text-4xl font-bold tracking-tight">Politique de confidentialité</h1>
      <p className="mt-6 text-white-60">
        Nous traitons vos données uniquement pour répondre à votre demande et
        accompagner votre projet de formation.
      </p>
      </div>
    </div>
  );
}
