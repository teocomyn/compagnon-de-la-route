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
          "font-mono text-[10px] font-medium uppercase tracking-[0.14em]",
          "text-white/[0.16]",
          "[&_a]:text-white/[0.22] [&_a]:no-underline [&_a]:transition-colors [&_a]:duration-200",
          "[&_a]:min-h-[40px] [&_a]:items-center [&_a]:inline-flex [&_a]:-translate-y-px [&_a]:rounded-sm",
          "[&_a]:hover:text-white/[0.35]",
          "[&_a]:focus-visible:outline [&_a]:focus-visible:outline-2 [&_a]:focus-visible:outline-offset-2 [&_a]:focus-visible:outline-orange-500/80",
          className,
        )}
      >
        <ol className="flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5">
          {items.map((crumb, i) => (
            <li
              key={`${crumb.href}-${crumb.label}`}
              className="flex items-baseline gap-1.5"
            >
              {i > 0 ? (
                <span className="select-none text-white/[0.06]" aria-hidden>
                  /
                </span>
              ) : null}
              {i === last ? (
                <span className="text-white/[0.26]">{crumb.label}</span>
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
