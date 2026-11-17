import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/constants";

// Tous les robots, y compris ceux des assistants IA, peuvent lire le site public.
// La directive « Host » est supprimée : elle n'est lue que par Yandex.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
