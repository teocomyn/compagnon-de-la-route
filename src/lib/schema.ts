import {
  brandInfo,
  contactInfo,
  organizationInfo,
  orgPostalAddress,
  siteName,
  siteUrl,
  socialProfiles,
} from "@/lib/constants";
import { absoluteUrl } from "@/lib/seo";

type JsonObject = Record<string, unknown>;

const base = siteUrl.replace(/\/$/, "");
const logoUrl = `${base}/brand-logo-car.png`;

/** Identifiants stables : toutes les pages référencent ces entités par @id. */
export const schemaIds = {
  organization: `${base}/#organization`,
  brand: `${base}/#brand`,
  website: `${base}/#website`,
  logo: `${base}/#logo`,
} as const;

/**
 * Référence compacte à BOAZ pour `author` et `publisher`. Elle porte le nom et
 * l'URL afin de rester lisible par un lecteur qui n'a pas fusionné les blocs
 * JSON-LD de la page, et renvoie à la fiche complète par @id.
 */
export function organizationRef(options: { withLogo?: boolean } = {}): JsonObject {
  return {
    "@type": "EducationalOrganization",
    "@id": schemaIds.organization,
    name: brandInfo.ownerName,
    url: base,
    ...(options.withLogo
      ? { logo: { "@type": "ImageObject", "@id": schemaIds.logo, url: logoUrl } }
      : {}),
  };
}

function organizationNode(): JsonObject {
  const email = contactInfo.email?.trim();
  const phone = contactInfo.phone?.trim();

  return {
    "@type": "EducationalOrganization",
    "@id": schemaIds.organization,
    name: brandInfo.ownerName,
    legalName: organizationInfo.legalName,
    url: base,
    description:
      "BOAZ porte le label Compagnon de la Route et accompagne des projets de formation aux métiers du transport de voyageurs.",
    logo: {
      "@type": "ImageObject",
      "@id": schemaIds.logo,
      url: logoUrl,
      width: 1024,
      height: 1024,
    },
    brand: { "@id": schemaIds.brand },
    address: {
      "@type": "PostalAddress",
      streetAddress: orgPostalAddress.streetAddress,
      postalCode: orgPostalAddress.postalCode,
      addressLocality: orgPostalAddress.addressLocality,
      addressRegion: orgPostalAddress.addressRegion,
      addressCountry: orgPostalAddress.addressCountry,
    },
    identifier: [
      { "@type": "PropertyValue", name: "SIREN", value: organizationInfo.siren },
      { "@type": "PropertyValue", name: "SIRET", value: organizationInfo.siret },
      {
        "@type": "PropertyValue",
        name: "Numéro de déclaration d’activité",
        value: organizationInfo.trainingDeclarationNumber,
      },
    ],
    areaServed: { "@type": "AdministrativeArea", name: "France" },
    ...(email ? { email } : {}),
    ...(phone ? { telephone: phone } : {}),
    ...(email || phone
      ? {
          contactPoint: [
            {
              "@type": "ContactPoint",
              contactType: "customer service",
              areaServed: "FR",
              availableLanguage: "fr",
              ...(email ? { email } : {}),
              ...(phone ? { telephone: phone } : {}),
            },
          ],
        }
      : {}),
    ...(socialProfiles.length ? { sameAs: socialProfiles } : {}),
  };
}

function brandNode(): JsonObject {
  return {
    "@type": "Brand",
    "@id": schemaIds.brand,
    name: siteName,
    description: brandInfo.description,
    url: `${base}/le-label`,
    logo: { "@id": schemaIds.logo },
  };
}

function websiteNode(): JsonObject {
  return {
    "@type": "WebSite",
    "@id": schemaIds.website,
    url: `${base}/`,
    name: siteName,
    inLanguage: "fr-FR",
    publisher: { "@id": schemaIds.organization },
  };
}

/** Graphe commun à toutes les pages : organisme, marque et site. */
export function siteGraph(): JsonObject {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationNode(), brandNode(), websiteNode()],
  };
}

type WebPageType = "WebPage" | "AboutPage" | "CollectionPage" | "ContactPage";

export function webPageId(path: string): string {
  return `${absoluteUrl(path)}#webpage`;
}

export function webPageNode(input: {
  path: string;
  name: string;
  description?: string;
  type?: WebPageType;
  extra?: JsonObject;
}): JsonObject {
  return {
    "@type": input.type ?? "WebPage",
    "@id": webPageId(input.path),
    url: absoluteUrl(input.path),
    name: input.name,
    ...(input.description ? { description: input.description } : {}),
    inLanguage: "fr-FR",
    isPartOf: { "@id": schemaIds.website },
    publisher: { "@id": schemaIds.organization },
    ...input.extra,
  };
}

export type FaqEntry = { question: string; answer: string };

export function faqNode(path: string, entries: readonly FaqEntry[]): JsonObject {
  return {
    "@type": "FAQPage",
    "@id": `${absoluteUrl(path)}#faq`,
    isPartOf: { "@id": webPageId(path) },
    mainEntity: entries.map((entry) => ({
      "@type": "Question",
      name: entry.question,
      acceptedAnswer: { "@type": "Answer", text: entry.answer },
    })),
  };
}

export type ArticleSchemaInput = {
  path: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  image?: string;
  section?: string;
  keywords?: readonly string[];
  citations?: readonly string[];
  faqs?: readonly FaqEntry[];
};

/** Page + article (+ FAQ visible) d'un guide ou d'un dossier du journal. */
export function articleGraph(input: ArticleSchemaInput): JsonObject {
  const url = absoluteUrl(input.path);
  const imageUrl = input.image
    ? input.image.startsWith("http")
      ? input.image
      : `${base}${input.image}`
    : undefined;

  const nodes: JsonObject[] = [
    webPageNode({
      path: input.path,
      name: input.headline,
      description: input.description,
      extra: imageUrl
        ? { primaryImageOfPage: { "@type": "ImageObject", url: imageUrl } }
        : undefined,
    }),
    {
      "@type": "Article",
      "@id": `${url}#article`,
      inLanguage: "fr-FR",
      headline: input.headline,
      description: input.description,
      datePublished: input.datePublished,
      dateModified: input.dateModified,
      isAccessibleForFree: true,
      mainEntityOfPage: { "@id": webPageId(input.path) },
      isPartOf: { "@id": schemaIds.website },
      author: organizationRef(),
      publisher: organizationRef({ withLogo: true }),
      ...(imageUrl ? { image: imageUrl } : {}),
      ...(input.section ? { articleSection: input.section } : {}),
      ...(input.keywords?.length ? { keywords: input.keywords.join(", ") } : {}),
      ...(input.citations?.length ? { citation: [...input.citations] } : {}),
    },
  ];

  if (input.faqs?.length) nodes.push(faqNode(input.path, input.faqs));

  return { "@context": "https://schema.org", "@graph": nodes };
}
