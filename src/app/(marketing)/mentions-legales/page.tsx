import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegalesPage() {
  return (
    <div>
      <div className="pt-16 md:pt-[72px]">
        <BreadcrumbBar>
          <PageBreadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Mentions légales", href: "/mentions-legales" },
            ]}
          />
        </BreadcrumbBar>
      </div>
      <div className="section-shell mx-auto max-w-[900px] py-12 md:py-16">
      <h1 className="text-4xl font-bold tracking-tight">Mentions légales</h1>
      <p className="mt-6 text-white-60">
        Page en cours de mise à jour : informations légales, éditeur, hébergeur et
        coordonnées.
      </p>
      </div>
    </div>
  );
}
