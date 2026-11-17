import { ArticleCard } from "@/components/blog/ArticleCard";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { getAllArticlesMeta, getArticleHref } from "@/lib/articles";
import { webPageNode } from "@/lib/schema";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = buildMetadata({
  title: "Journal conducteur de voyageurs",
  description:
    "Notes pratiques relues et sourcées : financement, choix d’une formation, entretien et prise de service pour devenir conducteur de voyageurs.",
  ogDescription:
    "Six dossiers détaillés, relus et sourcés sur le métier, la formation, le financement et l'emploi de conducteur de voyageurs.",
  keywords: [
    "devenir conducteur de bus",
    "formation conducteur de voyageurs",
    "métier conducteur de car",
    "financement permis D",
    "emploi conducteur de bus",
  ],
  path: "/journal",
  robots: { index: true, follow: true },
  image: {
    url: "/images/journal/conductrice-bus-poste.jpg",
    alt: "Conductrice de bus souriante à son poste de conduite",
  },
});

function JournalJsonLd({ articles }: { articles: ReturnType<typeof getAllArticlesMeta> }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          webPageNode({
            path: "/journal",
            name: "Le Journal Compagnon de la Route",
            description:
              "Dossiers vérifiés sur la formation et le métier de conducteur de voyageurs.",
            type: "CollectionPage",
            extra: {
              mainEntity: {
                "@type": "ItemList",
                numberOfItems: articles.length,
                itemListElement: articles.map((article, index) => ({
                  "@type": "ListItem",
                  position: index + 1,
                  url: absoluteUrl(getArticleHref(article)),
                  name: article.title,
                })),
              },
            },
          }),
        ],
      }}
    />
  );
}

export default function JournalPage() {
  const articles = getAllArticlesMeta();

  return (
    <div className="pb-20 md:pb-28">
      <JournalJsonLd articles={articles} />
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
        <div className="mx-auto max-w-6xl">
          <Eyebrow>{articles.length} dossiers vérifiés</Eyebrow>
          <h1 className="mt-4 text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em]">
            Le Journal Compagnon de la Route
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white-60">
            Des dossiers détaillés pour comprendre le métier, choisir et financer une
            formation, préparer une candidature et sécuriser sa prise de service.
          </p>
          <p className="mt-7 max-w-3xl border-l-2 border-mint-400 pl-5 text-sm leading-7 text-white-60">
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
                  priority={index < 2}
                />
              ))}
            </div>
          ) : (
            <div className="mt-14 border-y border-white/10 py-6 text-white-60">
              Aucun article vérifié n&apos;est publié pour le moment.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
