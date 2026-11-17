import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/blog/ArticleBody";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { ArticleHeader } from "@/components/blog/ArticleHeader";
import { ArticleToc } from "@/components/blog/ArticleToc";
import { FinalCTA } from "@/components/sections/FinalCTA";
import {
  getAllArticlesMeta,
  getArticleBySlug,
  getArticleSlugs,
  type ArticleFrontmatter,
} from "@/lib/articles";
import { guideDirectoryList } from "@/lib/guide-directory";
import { extractFaqEntries } from "@/lib/mdx-faq";
import { articleGraph } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";

type PageProps = { params: Promise<{ slug: string }> };

/** Guides de référence à proposer sous chaque dossier du journal, pour relier les deux contenus. */
const guidesBySlug: Record<string, readonly string[]> = {
  "financer-formation-conducteur-bus": [
    "financement-formation-conducteur-voyageurs",
    "aif-france-travail-formation-conducteur",
    "financement-opco-mobilites-formation-transport",
  ],
  "metier-avenir-recrute": [
    "metier-conducteur-de-car-debouches",
    "permis-d-conducteur-professionnel",
    "faq-conducteur-de-voyageurs",
  ],
  "choisir-formation-conducteur-voyageurs": [
    "certification-formation-conducteur-voyageurs",
    "financement-formation-conducteur-voyageurs",
    "devenir-conducteur-de-voyageurs",
  ],
  "reussir-entretien": [
    "reussir-embauche-conducteur-car",
    "reconversion-conducteur-voyageurs",
    "metier-conducteur-de-car-debouches",
  ],
  "preparer-prise-service-conducteur": [
    "metier-conducteur-de-car-debouches",
    "fimo-passage-a-la-route",
    "reussir-embauche-conducteur-car",
  ],
};

export const revalidate = 3600;
export const dynamicParams = false;

export async function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  const { meta } = article;
  return buildMetadata({
    title: meta.metaTitle ?? meta.title,
    description: meta.description,
    path: `/journal/${slug}`,
    keywords: meta.keywords,
    robots: { index: true, follow: true },
    image: {
      url: meta.thumbnail,
      alt: meta.thumbnailAlt ?? meta.title,
    },
    article: {
      publishedTime: meta.date,
      modifiedTime: meta.updated ?? meta.date,
      section: meta.category,
      tags: meta.keywords,
    },
  });
}

function ArticleJsonLd({
  slug,
  meta,
  content,
}: {
  slug: string;
  meta: ArticleFrontmatter;
  content: string;
}) {
  return (
    <JsonLd
      data={articleGraph({
        path: `/journal/${slug}`,
        headline: meta.title,
        description: meta.description,
        datePublished: meta.date,
        dateModified: meta.updated ?? meta.date,
        image: meta.thumbnail,
        section: meta.category,
        keywords: meta.keywords,
        citations: meta.sources?.map((source) => source.url),
        faqs: extractFaqEntries(content),
      })}
    />
  );
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const all = getAllArticlesMeta();
  const related = all
    .filter((candidate) => candidate.slug !== slug)
    .sort(
      (a, b) =>
        Number(b.category === article.meta.category) -
        Number(a.category === article.meta.category),
    )
    .slice(0, 3);

  const guides = (guidesBySlug[slug] ?? [])
    .map((guideSlug) => guideDirectoryList.find((guide) => guide.slug === guideSlug))
    .filter((guide): guide is NonNullable<typeof guide> => Boolean(guide));

  return (
    <article>
      <ArticleJsonLd slug={slug} meta={article.meta} content={article.content} />
      <BreadcrumbJsonLd
        items={[
          { label: "Accueil", href: "/" },
          { label: "Journal", href: "/journal" },
          { label: article.meta.title, href: `/journal/${slug}` },
        ]}
      />
      <ArticleHeader meta={article.meta} />

      <div className="section-shell mx-auto grid max-w-6xl gap-10 py-14 md:grid-cols-[minmax(0,2fr)_minmax(16rem,1fr)] md:py-16">
        <div className="min-w-0">
          <ArticleBody content={article.content} />
        </div>
        <ArticleToc content={article.content} />
      </div>

      {guides.length > 0 ? (
        <section
          className="border-t border-white/10 section-shell py-14 md:py-16"
          aria-labelledby="journal-guides"
        >
          <div className="mx-auto max-w-6xl">
            <h2 id="journal-guides" className="text-[22px] font-bold tracking-[-0.02em]">
              Guides pour aller plus loin
            </h2>
            <div className="mt-8 grid border-l border-t border-white/15 md:grid-cols-3">
              {guides.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/${guide.slug}`}
                  className="group border-b border-r border-white/15 p-6 transition-colors hover:bg-white/[0.035] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
                >
                  <span className="flex items-start justify-between gap-4 text-base font-semibold text-white-90 group-hover:text-orange-200">
                    {guide.title}
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  </span>
                  <span className="mt-3 block text-sm leading-6 text-white-50">
                    {guide.description}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {related.length > 0 ? (
        <section className="border-t border-white/10 bg-white/[0.02] section-shell section-y">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-[22px] font-bold tracking-[-0.02em]">À lire ensuite</h2>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              {related.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <FinalCTA />
    </article>
  );
}
