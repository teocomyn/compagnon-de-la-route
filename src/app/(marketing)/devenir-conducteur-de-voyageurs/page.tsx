import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ArticleBody } from "@/components/blog/ArticleBody";
import { ArticleHeader } from "@/components/blog/ArticleHeader";
import { ArticleToc } from "@/components/blog/ArticleToc";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { JsonLd } from "@/components/seo/JsonLd";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { getArticleBySlug } from "@/lib/articles";
import { extractFaqEntries } from "@/lib/mdx-faq";
import { articleGraph } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const sourceSlug = "devenir-conducteur-bus-guide-complet";
const canonical = "/devenir-conducteur-de-voyageurs";

const clusterLinks = [
  { href: "/permis-d-conducteur-professionnel", label: "Permis D", description: "Véhicules, âge, aptitude médicale et validité." },
  { href: "/fimo-passage-a-la-route", label: "FIMO et FCO", description: "Qualification initiale, continue et passerelle." },
  { href: "/financement-formation-conducteur-voyageurs", label: "Financement", description: "CPF, France Travail, employeur et OPCO." },
  { href: "/reconversion-conducteur-voyageurs", label: "Reconversion", description: "Tester le métier et sécuriser chaque étape." },
  { href: "/reussir-embauche-conducteur-car", label: "Recrutement", description: "Candidature, entretien et conditions du poste." },
  { href: "/formations/exploitant-regulateur", label: "Évoluer vers l’exploitation", description: "Découvrir le métier d’exploitant-régulateur." },
  { href: "/faq-conducteur-de-voyageurs", label: "Questions fréquentes", description: "Permis D, FIMO, titre professionnel, financement et emploi." },
  { href: "/formation-conducteur-autocar-tourisme", label: "Conduire en autocar de tourisme", description: "Services occasionnels, groupes et conditions de déplacement." },
  { href: "/formation-transport-scolaire-conducteur", label: "Conduire en transport scolaire", description: "Sécurité, prise en charge des élèves et organisation du service." },
] as const;

export function generateMetadata(): Metadata {
  const article = getArticleBySlug(sourceSlug);
  if (!article) return {};
  const { meta } = article;
  return buildMetadata({
    title: "Devenir conducteur de bus ou de car : le guide complet",
    description: meta.description,
    path: canonical,
    keywords: meta.keywords,
    image: {
      url: meta.thumbnail,
      alt: meta.thumbnailAlt ?? meta.title,
    },
    article: {
      publishedTime: meta.date,
      modifiedTime: meta.updated ?? meta.date,
      section: "Guide pilier",
      tags: meta.keywords,
    },
  });
}

function PillarJsonLd() {
  const article = getArticleBySlug(sourceSlug);
  if (!article) return null;
  const { meta, content } = article;
  return (
    <JsonLd
      data={articleGraph({
        path: canonical,
        headline: "Devenir conducteur de voyageurs : le guide complet",
        description: meta.description,
        datePublished: meta.date,
        dateModified: meta.updated ?? meta.date,
        image: meta.thumbnail,
        section: "Guide pilier",
        keywords: meta.keywords,
        citations: meta.sources?.map((source) => source.url),
        faqs: extractFaqEntries(content),
      })}
    />
  );
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
