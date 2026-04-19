import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import type { ArticleListItem } from "@/lib/articles";

export function ArticleCard({ article }: { article: ArticleListItem }) {
  return (
    <Link
      href={`/journal/${article.slug}`}
      className="group block overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/35"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={article.thumbnail}
          alt={`Illustration : ${article.title}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4">
          <Badge variant="orange">{article.category}</Badge>
        </div>
      </div>
      <div className="space-y-3 p-6">
        <h3 className="text-[22px] font-bold leading-snug tracking-[-0.02em] transition-colors group-hover:text-orange-300">
          {article.title}
        </h3>
        <p className="line-clamp-3 text-[15px] leading-relaxed text-white-60">
          {article.description}
        </p>
        <div className="flex flex-wrap gap-3 font-mono text-[12px] text-white-45">
          <span>{article.author}</span>
          <span aria-hidden>·</span>
          <time dateTime={article.date}>{article.date}</time>
          <span aria-hidden>·</span>
          <span>{article.readingTime}</span>
        </div>
      </div>
    </Link>
  );
}
