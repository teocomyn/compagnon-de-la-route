import { JournalExplorer } from "@/components/blog/JournalExplorer";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { getAllArticlesMeta } from "@/lib/articles";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Conseils, guides pratiques et regards d’experts sur le métier de conducteur de voyageurs.",
  alternates: { canonical: "/journal" },
};

export default function JournalPage() {
  const articles = getAllArticlesMeta();

  return (
    <div className="pb-20 md:pb-28">
      <div className="pt-16 md:pt-[72px]">
        <BreadcrumbBar>
          <PageBreadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Journal", href: "/journal" },
            ]}
          />
        </BreadcrumbBar>
      </div>
      <div className="section-shell pt-8 pb-20 md:pt-12">
        <div className="mx-auto max-w-[1100px]">
        <Eyebrow>Notre journal</Eyebrow>
        <h1 className="mt-4 text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em]">
          Le Journal Compagnon de la Route
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white-60">
          Conseils, guides pratiques et regards d&apos;experts sur le métier de
          conducteur.
        </p>

        <div className="mt-14">
          <JournalExplorer articles={articles} />
        </div>
        </div>
      </div>
    </div>
  );
}
