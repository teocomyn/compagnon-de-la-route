"use client";

import { useMemo, useState } from "react";
import { ArticleCard } from "@/components/blog/ArticleCard";
import type { ArticleListItem } from "@/lib/articles";
import { cn } from "@/lib/utils";

const filters = ["Tous", "Formation", "OPCO", "Entretien", "Actualités"] as const;

export function JournalExplorer({ articles }: { articles: ArticleListItem[] }) {
  const [active, setActive] = useState<(typeof filters)[number]>("Tous");

  const filtered = useMemo(() => {
    if (active === "Tous") return articles;
    return articles.filter((a) => a.category === active);
  }, [active, articles]);

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActive(f)}
            className={cn(
              "rounded-full border px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors",
              active === f
                ? "border-orange-500/40 bg-orange-500/15 text-orange-200"
                : "border-white/10 bg-white/[0.03] text-white-60 hover:border-white/20 hover:text-white-90",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {filtered.map((a) => (
          <ArticleCard key={a.slug} article={a} />
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 text-center text-white-60">
          Aucun article pour ce filtre pour le moment.
        </p>
      ) : null}
    </div>
  );
}
