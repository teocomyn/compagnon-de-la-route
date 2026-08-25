import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { formatArticleDate, type ArticleListItem } from "@/lib/articles";

export function ArticleCard({
  article,
  headingLevel = 3,
  priority = false,
}: {
  article: ArticleListItem;
  headingLevel?: 2 | 3;
  priority?: boolean;
}) {
  const Heading = headingLevel === 2 ? "h2" : "h3";

  return (
    <Link
      href={`/journal/${article.slug}`}
      className="group block overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-orange-500/35"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={article.thumbnail}
          alt={article.thumbnailAlt ?? `Illustration : ${article.title}`}
          loading={priority ? "eager" : "lazy"}
          fill
          sizes="(max-width: 768px) calc(100vw - 2rem), 50vw"
          className="object-cover transition-[filter] duration-500 group-hover:brightness-110"
        />
        <div className="absolute left-4 top-4">
          <Badge variant={article.categoryColor === "mint" ? "success" : "orange"}>
            {article.category}
          </Badge>
        </div>
      </div>
      <div className="space-y-3 p-6">
        <Heading className="text-[22px] font-bold leading-snug tracking-[-0.02em] transition-colors group-hover:text-orange-300">
          {article.title}
        </Heading>
        <p className="line-clamp-3 text-[15px] leading-relaxed text-white-60">
          {article.description}
        </p>
        <div className="flex flex-wrap gap-3 font-mono text-[12px] text-white-60">
          <span>{article.author}</span>
          <span aria-hidden>·</span>
          <time dateTime={article.date}>{formatArticleDate(article.date)}</time>
          <span aria-hidden>·</span>
          <span>{article.readingTime}</span>
        </div>
      </div>
    </Link>
  );
}
