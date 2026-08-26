import type { MetadataRoute } from "next";
import { getAllArticlesMeta } from "@/lib/articles";
import { siteUrl } from "@/lib/constants";
import { guideDirectoryList } from "@/lib/guide-directory";

export default function sitemap(): MetadataRoute.Sitemap {
  const coreRoutes = [
    { path: "", changeFrequency: "weekly", priority: 1 },
    { path: "/le-label", changeFrequency: "monthly", priority: 0.8 },
    { path: "/qui-sommes-nous", changeFrequency: "monthly", priority: 0.8 },
    { path: "/formations", changeFrequency: "weekly", priority: 0.9 },
    {
      path: "/formations/conducteur-voyageurs",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      path: "/formations/exploitant-regulateur",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    { path: "/guides", changeFrequency: "monthly", priority: 0.8 },
    { path: "/journal", changeFrequency: "weekly", priority: 0.8 },
    { path: "/contact", changeFrequency: "yearly", priority: 0.8 },
  ] satisfies Array<{
    path: string;
    changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
    priority: number;
  }>;

  const publishedRoutes: MetadataRoute.Sitemap = coreRoutes.map(({ path, ...entry }) => ({
    url: `${siteUrl}${path}`,
    ...entry,
  }));

  const guideRoutes: MetadataRoute.Sitemap = guideDirectoryList.map((guide) => ({
    url: `${siteUrl}/${guide.slug}`,
    lastModified: guide.reviewedAtIso ?? "2026-08-25",
    changeFrequency: "monthly",
    priority: guide.slug === "devenir-conducteur-de-voyageurs" ? 0.9 : 0.7,
  }));

  const articleRoutes: MetadataRoute.Sitemap = getAllArticlesMeta()
    .filter((article) => !article.canonicalPath)
    .map((article) => ({
      url: `${siteUrl}/journal/${article.slug}`,
      lastModified: article.updated ?? article.reviewedAt ?? article.date,
      changeFrequency: "monthly",
      priority: article.featured ? 0.75 : 0.65,
    }));

  return [...publishedRoutes, ...guideRoutes, ...articleRoutes];
}
