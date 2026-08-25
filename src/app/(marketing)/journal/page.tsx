import { ArticleCard } from "@/components/blog/ArticleCard";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { getAllArticlesMeta } from "@/lib/articles";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Notes pratiques relues et sourcées sur la formation, le métier et l'emploi de conducteur de voyageurs.",
  alternates: { canonical: "/journal" },
  robots: { index: true, follow: true },
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
      <div className="section-shell pt-3 pb-20 md:pt-8">
        <div className="mx-auto max-w-[1100px]">
        <Eyebrow>Journal vérifié</Eyebrow>
        <h1 className="mt-4 text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em]">
          Le Journal Compagnon de la Route
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white-60">
          Des notes pratiques pour préparer une formation, une prise de service ou une
          candidature, avec une date de relecture et des sources officielles.
        </p>
        <p className="mt-6 rounded-xl border border-mint-400/25 bg-mint-500/10 p-5 text-sm leading-relaxed text-white-75">
          Publication sélective : seuls les contenus relus et reliés à leurs sources sont
          accessibles. Les anciens brouillons restent hors ligne.
        </p>

        {articles.length > 0 ? (
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {articles.map((article, index) => (
              <ArticleCard
                key={article.slug}
                article={article}
                headingLevel={2}
                priority={index === 0}
              />
            ))}
          </div>
        ) : (
          <div className="mt-14 rounded-xl border border-white/10 bg-white/[0.02] p-6 text-white-60">
            Aucun article vérifié n&apos;est publié pour le moment.
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
