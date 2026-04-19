import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/blog/ArticleBody";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { ArticleHeader } from "@/components/blog/ArticleHeader";
import { ArticleToc } from "@/components/blog/ArticleToc";
import { buttonVariants } from "@/components/ui/Button";
import {
  getAllArticlesMeta,
  getArticleBySlug,
  getArticleSlugs,
  type ArticleFrontmatter,
} from "@/lib/articles";
import { siteName, siteUrl } from "@/lib/constants";
import type { Metadata } from "next";

type PageProps = { params: Promise<{ slug: string }> };

export const revalidate = 3600;

export async function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.meta.title,
    description: article.meta.description,
    alternates: { canonical: `/journal/${slug}` },
    openGraph: {
      title: `${article.meta.title} · ${siteName}`,
      description: article.meta.description,
      type: "article",
      url: `/journal/${slug}`,
      images: [{ url: article.meta.thumbnail, alt: article.meta.title }],
    },
  };
}

function ArticleJsonLd({ slug, meta }: { slug: string; meta: ArticleFrontmatter }) {
  const json = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    datePublished: meta.date,
    author: { "@type": "Person", name: meta.author },
    image: `${siteUrl}${meta.thumbnail}`,
    publisher: { "@type": "Organization", name: siteName, url: siteUrl },
    mainEntityOfPage: `${siteUrl}/journal/${slug}`,
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
  const related = all.filter((a) => a.slug !== slug).slice(0, 3);

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
      <ArticleHeader meta={article.meta} slug={slug} />

      <div className="section-shell mx-auto grid max-w-[1200px] gap-10 py-14 md:grid-cols-[minmax(0,1fr)_320px] md:py-16">
        <div className="min-w-0">
          <ArticleBody content={article.content} />
        </div>
        <ArticleToc content={article.content} />
      </div>

      <section className="border-t border-white/10 bg-white/[0.02] section-shell section-y">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-[22px] font-bold tracking-[-0.02em]">Articles liés</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {related.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-y">
        <div className="mx-auto max-w-[980px] rounded-2xl border border-white/10 bg-gradient-to-b from-orange-500/[0.08] to-transparent p-6 text-center sm:p-10">
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-[-0.02em]">
            Envie de vous lancer ?
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-white-60">Candidatez</p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/formations/conducteur-voyageurs"
              className={buttonVariants({ variant: "primary", size: "lg" })}
            >
              Candidater
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
