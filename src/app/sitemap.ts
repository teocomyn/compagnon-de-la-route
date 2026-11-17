import type { MetadataRoute } from "next";
import { getAllArticlesMeta } from "@/lib/articles";
import { siteUrl } from "@/lib/constants";
import { guideDirectoryList } from "@/lib/guide-directory";
import { verifiedGuidesReviewedAtIso } from "@/lib/verified-guides";

type CoreRoute = {
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
  /** Renseignée uniquement quand une date réelle de mise à jour est connue. */
  lastModified?: string;
};

function latest(dates: readonly string[]): string | undefined {
  return dates.length ? [...dates].sort().at(-1) : undefined;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const guides = guideDirectoryList.map((guide) => ({
    ...guide,
    reviewedAtIso: guide.reviewedAtIso ?? verifiedGuidesReviewedAtIso,
  }));
  const articles = getAllArticlesMeta().filter((article) => !article.canonicalPath);

  // Pas de date inventée pour les pages de marque : un lastmod faux est ignoré par
  // les moteurs. Les index /guides et /journal changent avec leur contenu le plus récent.
  const coreRoutes: CoreRoute[] = [
    { path: "", changeFrequency: "weekly", priority: 1 },
    { path: "/le-label", changeFrequency: "monthly", priority: 0.8 },
    { path: "/qui-sommes-nous", changeFrequency: "monthly", priority: 0.8 },
    { path: "/formations", changeFrequency: "weekly", priority: 0.9 },
    { path: "/formations/conducteur-voyageurs", changeFrequency: "weekly", priority: 0.9 },
    { path: "/formations/exploitant-regulateur", changeFrequency: "weekly", priority: 0.8 },
    {
      path: "/guides",
      changeFrequency: "monthly",
      priority: 0.8,
      lastModified: latest(guides.map((guide) => guide.reviewedAtIso)),
    },
    {
      path: "/journal",
      changeFrequency: "weekly",
      priority: 0.8,
      lastModified: latest(articles.map((article) => article.updated ?? article.reviewedAt ?? article.date)),
    },
    { path: "/contact", changeFrequency: "yearly", priority: 0.8 },
  ];

  const publishedRoutes: MetadataRoute.Sitemap = coreRoutes.map(({ path, ...entry }) => ({
    url: `${siteUrl}${path}`,
    ...entry,
  }));

  const guideRoutes: MetadataRoute.Sitemap = guides.map((guide) => ({
    url: `${siteUrl}/${guide.slug}`,
    lastModified: guide.reviewedAtIso,
    changeFrequency: "monthly",
    priority: guide.slug === "devenir-conducteur-de-voyageurs" ? 0.9 : 0.7,
  }));

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${siteUrl}/journal/${article.slug}`,
    lastModified: article.updated ?? article.reviewedAt ?? article.date,
    changeFrequency: "monthly",
    priority: article.featured ? 0.75 : 0.65,
  }));

  return [...publishedRoutes, ...guideRoutes, ...articleRoutes];
}
