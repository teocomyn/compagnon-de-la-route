import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ArticleBody } from "@/components/blog/ArticleBody";
import { ArticleHeader } from "@/components/blog/ArticleHeader";
import { ArticleToc } from "@/components/blog/ArticleToc";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { getArticleBySlug } from "@/lib/articles";
import { brandInfo, organizationInfo, siteName, siteUrl } from "@/lib/constants";

const sourceSlug = "devenir-conducteur-bus-guide-complet";
const canonical = "/devenir-conducteur-de-voyageurs";

const clusterLinks = [
  { href: "/permis-d-conducteur-professionnel", label: "Permis D", description: "Véhicules, âge, aptitude médicale et validité." },
  { href: "/fimo-passage-a-la-route", label: "FIMO et FCO", description: "Qualification initiale, continue et passerelle." },
  { href: "/financement-formation-conducteur-voyageurs", label: "Financement", description: "CPF, France Travail, employeur et OPCO." },
  { href: "/reconversion-conducteur-voyageurs", label: "Reconversion", description: "Tester le métier et sécuriser chaque étape." },
  { href: "/reussir-embauche-conducteur-car", label: "Recrutement", description: "Candidature, entretien et conditions du poste." },
  { href: "/formations/exploitant-regulateur", label: "Évoluer vers l’exploitation", description: "Découvrir le métier d’exploitant-régulateur." },
] as const;

export function generateMetadata(): Metadata {
  const article = getArticleBySlug(sourceSlug);
  if (!article) return {};
  const imageUrl = `${siteUrl.replace(/\/$/, "")}${article.meta.thumbnail}`;
  return {
    title: "Devenir conducteur de voyageurs",
    description: article.meta.description,
    keywords: article.meta.keywords,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title: `Devenir conducteur de voyageurs · ${siteName}`,
      description: article.meta.description,
      url: canonical,
      publishedTime: article.meta.date,
      modifiedTime: article.meta.updated,
      images: [{ url: imageUrl, alt: article.meta.thumbnailAlt ?? article.meta.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Devenir conducteur de voyageurs",
      description: article.meta.description,
      images: [imageUrl],
    },
  };
}

function PillarJsonLd() {
  const article = getArticleBySlug(sourceSlug);
  if (!article) return null;
  const baseUrl = siteUrl.replace(/\/$/, "");
  const json = {
    "@context": "https://schema.org",
    "@type": "Article",
    inLanguage: "fr-FR",
    headline: "Devenir conducteur de voyageurs : le guide complet",
    description: article.meta.description,
    datePublished: article.meta.date,
    dateModified: article.meta.updated,
    mainEntityOfPage: `${baseUrl}${canonical}`,
    citation: article.meta.sources?.map((source) => source.url),
    author: {
      "@type": "EducationalOrganization",
      "@id": `${baseUrl}/#organization`,
      name: brandInfo.ownerName,
      legalName: organizationInfo.legalName,
    },
    publisher: { "@id": `${baseUrl}/#organization` },
    image: `${baseUrl}${article.meta.thumbnail}`,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}

export default function DevenirConducteurVoyageursPage() {
  const article = getArticleBySlug(sourceSlug);
  if (!article) return null;
  const pillarMeta = {
    ...article.meta,
    title: "Devenir conducteur de voyageurs : le guide complet",
    category: "Guide pilier",
  };

  return (
    <article>
      <PillarJsonLd />
      <BreadcrumbJsonLd
        items={[
          { label: "Accueil", href: "/" },
          { label: "Guides", href: "/guides" },
          { label: "Devenir conducteur de voyageurs", href: canonical },
        ]}
      />
      <ArticleHeader meta={pillarMeta} breadcrumb={{ label: "Guides", href: "/guides" }} />

      <div className="section-shell mx-auto grid max-w-6xl gap-10 py-14 md:grid-cols-[minmax(0,2fr)_minmax(16rem,1fr)] md:py-16">
        <div className="min-w-0"><ArticleBody content={article.content} /></div>
        <ArticleToc content={article.content} />
      </div>

      <section className="border-t border-white/10 bg-white/[0.02] section-shell section-y" aria-labelledby="pillar-cluster">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>Approfondir</Eyebrow>
          <h2 id="pillar-cluster" className="mt-4 max-w-3xl text-3xl font-bold tracking-[-0.035em] md:text-4xl">
            Une question, une page de référence
          </h2>
          <div className="mt-9 grid border-l border-t border-white/15 sm:grid-cols-2 lg:grid-cols-3">
            {clusterLinks.map((link) => (
              <Link key={link.href} href={link.href} className="group border-b border-r border-white/15 p-6 transition-colors hover:bg-white/[0.035]">
                <span className="flex items-start justify-between gap-4 font-semibold text-white-90 group-hover:text-orange-200">
                  {link.label}<ArrowRight className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                </span>
                <span className="mt-3 block text-sm leading-6 text-white-50">{link.description}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA />
    </article>
  );
}
