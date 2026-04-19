import type { MetadataRoute } from "next";
import { getArticleSlugs } from "@/lib/articles";
import { siteUrl } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const articles = getArticleSlugs().map((slug) => ({
    url: `${siteUrl}/journal/${slug}`,
    lastModified,
  }));

  const routes = [
    "",
    "/qui-sommes-nous",
    "/formations",
    "/formations/conducteur-voyageurs",
    "/temoignages",
    "/journal",
    "/contact",
    "/mentions-legales",
    "/cgv",
    "/confidentialite",
    "/rgpd",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified,
  }));

  return [...routes, ...articles];
}
