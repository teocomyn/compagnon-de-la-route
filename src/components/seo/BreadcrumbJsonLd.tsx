import { siteUrl } from "@/lib/constants";

export type BreadcrumbPathItem = {
  label: string;
  /** Chemin relatif, ex. "/" ou "/journal" */
  href: string;
};

function toAbsolute(path: string) {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl.replace(/\/$/, "")}${p}`;
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbPathItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.label,
      item: toAbsolute(crumb.href),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
