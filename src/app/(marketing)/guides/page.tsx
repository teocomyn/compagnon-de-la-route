import Link from "next/link";
import { ArrowUpRight, BookOpenCheck } from "lucide-react";
import type { Metadata } from "next";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { guideDirectoryList } from "@/lib/guide-directory";
import { siteUrl } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Guides conducteur de voyageurs",
  description:
    "Guides vérifiés sur le métier, le permis D, la FIMO/FCO, la reconversion, le recrutement et le financement d’une formation de conducteur de voyageurs.",
  alternates: { canonical: "/guides" },
};

function GuidesJsonLd() {
  const baseUrl = siteUrl.replace(/\/$/, "");
  const json = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Guides conducteur de voyageurs",
    description: metadata.description,
    url: `${baseUrl}/guides`,
    inLanguage: "fr-FR",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: guideDirectoryList.length,
      itemListElement: guideDirectoryList.map((guide, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${baseUrl}/${guide.slug}`,
        name: guide.title,
      })),
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}

export default function GuidesPage() {
  return (
    <>
      <GuidesJsonLd />
      <div className="pt-16 md:pt-[72px]">
        <BreadcrumbBar>
          <PageBreadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Guides", href: "/guides" },
            ]}
          />
        </BreadcrumbBar>
      </div>

      <main>
        <section className="section-shell pb-14 pt-5 md:pb-20 md:pt-10">
          <div className="mx-auto max-w-5xl">
            <Eyebrow>{guideDirectoryList.length} ressources vérifiées</Eyebrow>
            <h1 className="mt-4 max-w-4xl text-[clamp(2.5rem,6vw,4.75rem)] font-bold leading-[0.98] tracking-[-0.045em] text-white-90">
              Comprendre le parcours avant de s’engager
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white-60 md:text-xl">
              Permis, qualification, métier et financement : chaque guide distingue les
              règles officielles des modalités qui doivent être confirmées pour une
              session précise.
            </p>
            <p className="mt-5 flex items-center gap-2 text-sm text-white-40">
              <BookOpenCheck className="h-4 w-4 text-orange-300" aria-hidden />
              Sources publiques contrôlées le 26 août 2026
            </p>
          </div>
        </section>

        <section className="section-shell pb-20 md:pb-28" aria-label="Tous les guides">
          <div className="mx-auto grid max-w-5xl gap-x-8 gap-y-10 md:grid-cols-2">
            {guideDirectoryList.map((guide) => (
              <Link
                key={guide.slug}
                href={`/${guide.slug}`}
                className="group border-t border-white/15 pt-5 transition-colors hover:border-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
              >
                <div className="flex h-full flex-col">
                  <div className="flex items-start justify-between gap-5">
                    <Eyebrow>{guide.eyebrow}</Eyebrow>
                    <ArrowUpRight
                      className="h-5 w-5 shrink-0 text-white-30 transition-colors group-hover:text-orange-300"
                      aria-hidden
                    />
                  </div>
                  <h2 className="mt-5 text-2xl font-bold leading-tight tracking-[-0.025em] text-white-90">
                    {guide.title}
                  </h2>
                  <p className="mt-4 text-[15px] leading-relaxed text-white-60">
                    {guide.description}
                  </p>
                  <span className="mt-7 text-sm font-semibold text-orange-300">
                    Lire le guide
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <FinalCTA />
    </>
  );
}
