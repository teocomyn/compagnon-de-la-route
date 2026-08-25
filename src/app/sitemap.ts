import type { MetadataRoute } from "next";
import { getArticleSlugs } from "@/lib/articles";
import { siteUrl } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const articleRoutes = getArticleSlugs().map((slug) => `/journal/${slug}`);
  const routes = [
    "",
    "/le-label",
    "/qui-sommes-nous",
    "/formations",
    "/formations/conducteur-voyageurs",
    "/guides",
    "/journal",
    ...articleRoutes,
    "/financement-formation-conducteur-voyageurs",
    "/metier-conducteur-de-car-debouches",
    "/certification-formation-conducteur-voyageurs",
    "/permis-d-conducteur-professionnel",
    "/fimo-passage-a-la-route",
    "/faq-conducteur-de-voyageurs",
    "/formation-conducteur-autocar-tourisme",
    "/formation-transport-scolaire-conducteur",
    "/reussir-embauche-conducteur-car",
    "/contact",
    "/mentions-legales",
    "/cgv",
    "/confidentialite",
    "/rgpd",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified,
  }));

  return routes;
}
