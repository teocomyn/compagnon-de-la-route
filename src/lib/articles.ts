import fs from "fs";
import matter from "gray-matter";
import path from "path";

export type ArticleFrontmatter = {
  title: string;
  description: string;
  category: string;
  author: string;
  date: string;
  readingTime: string;
  thumbnail: string;
  thumbnailAlt?: string;
  /** Variante badge Journal : orange (défaut) ou mint */
  categoryColor?: "orange" | "mint";
  updated?: string;
  keywords?: string[];
  featured?: boolean;
  status?: "draft" | "verified";
  reviewedAt?: string;
  sources?: {
    label: string;
    url: string;
  }[];
  canonicalPath?: string;
};

const articlesDir = path.join(process.cwd(), "content/articles");

function isVerifiedArticle(meta: ArticleFrontmatter): boolean {
  return (
    meta.status === "verified" &&
    typeof meta.reviewedAt === "string" &&
    Array.isArray(meta.sources) &&
    meta.sources.length > 0
  );
}

function readArticleFile(slug: string): {
  meta: ArticleFrontmatter;
  content: string;
} | null {
  if (!/^[a-z0-9-]+$/.test(slug)) return null;

  const file = path.join(articlesDir, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;

  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  return { meta: data as ArticleFrontmatter, content };
}

export function getArticleSlugs(): string[] {
  if (!fs.existsSync(articlesDir)) return [];
  return fs
    .readdirSync(articlesDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""))
    .filter((slug) => {
      const article = readArticleFile(slug);
      return article ? isVerifiedArticle(article.meta) : false;
    });
}

export function getArticleBySlug(slug: string): {
  meta: ArticleFrontmatter;
  content: string;
} | null {
  const article = readArticleFile(slug);
  if (!article || !isVerifiedArticle(article.meta)) return null;
  return article;
}

export type ArticleListItem = ArticleFrontmatter & { slug: string };

export function getArticleHref(article: Pick<ArticleListItem, "slug" | "canonicalPath">): string {
  return article.canonicalPath ?? `/journal/${article.slug}`;
}

export function formatArticleDate(date: string): string {
  return new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export function getAllArticlesMeta(): ArticleListItem[] {
  return getArticleSlugs()
    .map((slug) => {
      const a = getArticleBySlug(slug);
      if (!a) return null;
      return { slug, ...a.meta };
    })
    .filter((x): x is ArticleListItem => x !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
