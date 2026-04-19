import Link from "next/link";
import {
  BreadcrumbJsonLd,
  type BreadcrumbPathItem,
} from "@/components/seo/BreadcrumbJsonLd";
import { cn } from "@/lib/utils";

export type { BreadcrumbPathItem };

type PageBreadcrumbsProps = {
  items: BreadcrumbPathItem[];
  className?: string;
};

export function PageBreadcrumbs({ items, className }: PageBreadcrumbsProps) {
  const last = items.length - 1;

  return (
    <>
      <BreadcrumbJsonLd items={items} />
      <nav
        aria-label="Fil d’Ariane"
        className={cn(
          "text-sm text-white-60 [&_a]:min-h-[44px] [&_a]:inline-flex [&_a]:items-center [&_a]:rounded-sm [&_a]:text-orange-200/90 [&_a]:underline-offset-4 [&_a]:hover:text-orange-300 [&_a]:focus-visible:outline [&_a]:focus-visible:outline-2 [&_a]:focus-visible:outline-offset-2 [&_a]:focus-visible:outline-orange-500",
          className,
        )}
      >
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {items.map((crumb, i) => (
            <li key={`${crumb.href}-${crumb.label}`} className="flex items-center gap-2">
              {i > 0 ? (
                <span className="text-white-25" aria-hidden>
                  /
                </span>
              ) : null}
              {i === last ? (
                <span className="font-medium text-white-90">{crumb.label}</span>
              ) : (
                <Link href={crumb.href}>{crumb.label}</Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
