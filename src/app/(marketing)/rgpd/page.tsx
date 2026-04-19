import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
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
      <div className="section-shell mx-auto max-w-[900px] py-12 md:py-16">
      <h1 className="text-4xl font-bold tracking-tight">RGPD</h1>
      <p className="mt-6 text-white-60">
        Vous pouvez exercer vos droits (accès, rectification, suppression) en nous
        contactant à l&apos;adresse indiquée sur la page Contact.
      </p>
      </div>
    </div>
  );
}
