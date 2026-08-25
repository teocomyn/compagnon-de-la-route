import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = [
    "",
    "/qui-sommes-nous",
    "/formations",
    "/formations/conducteur-voyageurs",
    "/guides",
    "/journal",
    "/journal/preparer-prise-service-conducteur",
    "/journal/choisir-formation-conducteur-voyageurs",
    "/journal/reussir-entretien",
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
