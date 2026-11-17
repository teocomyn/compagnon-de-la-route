import type { Metadata } from "next";
import { siteName, siteUrl, socialShareImage } from "@/lib/constants";

const BRAND_SUFFIX = ` · ${siteName}`;

/** Au-delà, Google tronque en général le titre affiché (environ 600 px). */
export const TITLE_MAX_LENGTH = 60;

export const feedPath = "/feed.xml";
export const feedTitle = `${siteName} · Guides et journal`;

/** URL absolue d'un chemin du site ; l'accueil conserve sa barre finale. */
export function absoluteUrl(path = "/"): string {
  if (/^https?:\/\//.test(path)) return path;
  const base = siteUrl.replace(/\/$/, "");
  if (path === "/" || path === "") return `${base}/`;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Le gabarit racine ajoute « · Compagnon de la Route ». Quand le titre complet
 * dépasse la limite d'affichage, on retire le suffixe de marque plutôt que de
 * laisser Google couper le mot-clé en fin de titre.
 */
export function fitTitle(title: string): {
  metadataTitle: NonNullable<Metadata["title"]>;
  displayTitle: string;
} {
  const withBrand = `${title}${BRAND_SUFFIX}`;
  if (withBrand.length <= TITLE_MAX_LENGTH) {
    return { metadataTitle: title, displayTitle: withBrand };
  }
  return { metadataTitle: { absolute: title }, displayTitle: title };
}

export type ShareImage = {
  url: string;
  width?: number;
  height?: number;
  alt: string;
};

export type PageMetadataInput = {
  /** Titre de la page, sans suffixe de marque. */
  title: string;
  description: string;
  /** Chemin canonique, par exemple « /formations ». */
  path: string;
  /** Titre unique qui ne reçoit jamais le suffixe de marque (accueil). */
  absoluteTitle?: boolean;
  ogDescription?: string;
  image?: ShareImage;
  keywords?: readonly string[];
  robots?: Metadata["robots"];
  /** Fournir cet objet fait de la page un article pour Open Graph. */
  article?: {
    publishedTime: string;
    modifiedTime?: string;
    section?: string;
    tags?: readonly string[];
  };
};

/**
 * Next.js fusionne les métadonnées de façon superficielle : dès qu'une page
 * définit `openGraph`, celui du layout est remplacé en entier. Toutes les pages
 * passent donc par cette fonction pour garder image, langue, nom du site et URL.
 */
export function buildMetadata(input: PageMetadataInput): Metadata {
  const { metadataTitle, displayTitle } = input.absoluteTitle
    ? { metadataTitle: { absolute: input.title }, displayTitle: input.title }
    : fitTitle(input.title);
  const image: ShareImage = input.image ?? socialShareImage;
  const description = input.description;
  const ogDescription = input.ogDescription ?? description;

  const openGraphBase = {
    siteName,
    locale: "fr_FR",
    url: input.path,
    title: displayTitle,
    description: ogDescription,
    images: [image],
  };

  const openGraph: NonNullable<Metadata["openGraph"]> = input.article
    ? {
        ...openGraphBase,
        type: "article",
        publishedTime: input.article.publishedTime,
        modifiedTime: input.article.modifiedTime ?? input.article.publishedTime,
        authors: [siteName],
        ...(input.article.section ? { section: input.article.section } : {}),
        ...(input.article.tags?.length ? { tags: [...input.article.tags] } : {}),
      }
    : { ...openGraphBase, type: "website" };

  return {
    title: metadataTitle,
    description,
    ...(input.keywords?.length ? { keywords: [...input.keywords] } : {}),
    alternates: {
      canonical: input.path,
      types: { "application/rss+xml": [{ url: feedPath, title: feedTitle }] },
    },
    ...(input.robots ? { robots: input.robots } : {}),
    openGraph,
    twitter: {
      card: "summary_large_image",
      title: displayTitle,
      description: ogDescription,
      images: [image.url],
    },
  };
}
