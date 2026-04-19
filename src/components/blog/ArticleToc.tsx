import Link from "next/link";
import { slugifyHeading } from "@/lib/utils";

function extractH2(md: string) {
  const matches = [...md.matchAll(/^## (.+)$/gm)];
  return matches.map((m) => String(m[1]).trim());
}

export function ArticleToc({ content }: { content: string }) {
  const items = extractH2(content);
  if (items.length === 0) return null;

  return (
    <aside className="hidden lg:block">
      <div className="sticky top-28 rounded-xl border border-white/10 bg-white/[0.02] p-6">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-orange-300">
          Sommaire
        </p>
        <ul className="mt-4 space-y-3 text-sm text-white-60">
          {items.map((t) => {
            const id = slugifyHeading(t);
            return (
              <li key={id}>
                <Link href={`#${id}`} className="transition-colors hover:text-orange-300">
                  {t}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
