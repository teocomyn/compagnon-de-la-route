import type { MetadataRoute } from "next";
import { getAllArticlesMeta } from "@/lib/articles";
import { siteUrl } from "@/lib/constants";

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
    {
      path: "/financement-formation-conducteur-voyageurs",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      path: "/metier-conducteur-de-car-debouches",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      path: "/certification-formation-conducteur-voyageurs",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    { path: "/permis-d-conducteur-professionnel", changeFrequency: "monthly", priority: 0.7 },
    { path: "/fimo-passage-a-la-route", changeFrequency: "monthly", priority: 0.7 },
    { path: "/faq-conducteur-de-voyageurs", changeFrequency: "monthly", priority: 0.7 },
    {
      path: "/formation-conducteur-autocar-tourisme",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      path: "/formation-transport-scolaire-conducteur",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    { path: "/reussir-embauche-conducteur-car", changeFrequency: "monthly", priority: 0.7 },
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

  const articleRoutes: MetadataRoute.Sitemap = getAllArticlesMeta().map((article) => ({
    url: `${siteUrl}/journal/${article.slug}`,
    lastModified: article.updated ?? article.reviewedAt ?? article.date,
    changeFrequency: "monthly",
    priority: article.featured ? 0.75 : 0.65,
  }));

  return [...publishedRoutes, ...articleRoutes];
}
