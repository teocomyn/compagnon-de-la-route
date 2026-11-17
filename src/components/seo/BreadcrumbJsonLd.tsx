import { JsonLd } from "@/components/seo/JsonLd";
import { absoluteUrl } from "@/lib/seo";

export type BreadcrumbPathItem = {
  label: string;
  /** Chemin relatif, ex. "/" ou "/journal" */
  href: string;
};

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbPathItem[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((crumb, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: crumb.label,
          item: absoluteUrl(crumb.href),
        })),
      }}
    />
  );
}
