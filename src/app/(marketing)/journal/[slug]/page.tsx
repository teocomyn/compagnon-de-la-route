import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/blog/ArticleBody";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
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
import { brandInfo, organizationInfo, siteName, siteUrl } from "@/lib/constants";
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
  const imageUrl = article.meta.thumbnail.startsWith("http")
    ? article.meta.thumbnail
    : `${siteUrl.replace(/\/$/, "")}${article.meta.thumbnail}`;
  return {
    title: article.meta.title,
    description: article.meta.description,
    keywords: article.meta.keywords,
    alternates: { canonical: `/journal/${slug}` },
    robots: { index: true, follow: true },
    openGraph: {
      title: `${article.meta.title} · ${siteName}`,
      description: article.meta.description,
      type: "article",
      url: `/journal/${slug}`,
      publishedTime: article.meta.date,
      modifiedTime: article.meta.updated ?? article.meta.date,
      authors: [siteName],
      section: article.meta.category,
      tags: article.meta.keywords,
      images: [
        {
          url: imageUrl,
          alt: article.meta.thumbnailAlt ?? article.meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.meta.title,
      description: article.meta.description,
      images: [imageUrl],
    },
  };
}

function ArticleJsonLd({ slug, meta }: { slug: string; meta: ArticleFrontmatter }) {
  const baseUrl = siteUrl.replace(/\/$/, "");
  const thumb = meta.thumbnail.startsWith("http")
    ? meta.thumbnail
    : `${baseUrl}${meta.thumbnail}`;
  const json = {
    "@context": "https://schema.org",
    "@type": "Article",
    inLanguage: "fr-FR",
    headline: meta.title,
    description: meta.description,
    articleSection: meta.category,
    keywords: meta.keywords?.join(", "),
    isAccessibleForFree: true,
    datePublished: meta.date,
    dateModified: meta.updated ?? meta.date,
    author: {
      "@type": "EducationalOrganization",
      "@id": `${baseUrl}/#organization`,
      name: brandInfo.ownerName,
      legalName: organizationInfo.legalName,
      url: siteUrl,
    },
    image: thumb,
    publisher: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: brandInfo.ownerName,
      legalName: organizationInfo.legalName,
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl.replace(/\/$/, "")}/brand-logo-car.png`,
      },
    },
    mainEntityOfPage: `${baseUrl}/journal/${slug}`,
    citation: meta.sources?.map((source) => source.url),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
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
      <ArticleJsonLd slug={slug} meta={article.meta} />
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
