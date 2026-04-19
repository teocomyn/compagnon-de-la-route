import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import type { ArticleFrontmatter } from "@/lib/articles";

type ArticleHeaderProps = {
  meta: ArticleFrontmatter;
  slug: string;
};

export function ArticleHeader({ meta, slug }: ArticleHeaderProps) {
  return (
    <header className="relative overflow-hidden border-b border-white/10">
      <div className="relative aspect-[21/9] min-h-[320px]">
        <Image
          src={meta.thumbnail}
          alt={`Visuel d’en-tête : ${meta.title}`}
          priority
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/70 to-night/20" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1100px] px-6 pb-12 md:px-8">
          <nav
            aria-label="Fil d’Ariane"
            className="mb-3 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-white/[0.18] sm:mb-4"
          >
            <ol className="flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5">
              <li>
                <Link
                  href="/journal"
                  className="text-white/[0.22] no-underline transition-colors duration-200 hover:text-white/[0.35] focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500/80"
                >
                  Journal
                </Link>
              </li>
              <li className="select-none text-white/[0.06]" aria-hidden>
                /
              </li>
              <li className="text-white/[0.22]">{meta.category}</li>
              <li className="select-none text-white/[0.06]" aria-hidden>
                /
              </li>
              <li className="max-w-[min(100%,52ch)] truncate text-white/[0.26]">
                {meta.title}
              </li>
            </ol>
          </nav>
          <div className="mb-4">
            <Badge variant={meta.categoryColor === "mint" ? "success" : "orange"}>
              {meta.category}
            </Badge>
          </div>
          <h1 className="max-w-4xl text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.03em]">
            {meta.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-white-75">
            {meta.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-3 font-mono text-[12px] text-white-45">
            <span>{meta.author}</span>
            <span aria-hidden>·</span>
            <time dateTime={meta.date}>{meta.date}</time>
            <span aria-hidden>·</span>
            <span>{meta.readingTime}</span>
            <span aria-hidden>·</span>
            <span className="text-white-25">/{slug}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
