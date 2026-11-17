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
import { extractFaqEntries } from "@/lib/mdx-faq";
import { articleGraph } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";

type PageProps = { params: Promise<{ slug: string }> };

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
