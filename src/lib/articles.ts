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
};

const articlesDir = path.join(process.cwd(), "content/articles");

export function getArticleSlugs(): string[] {
  if (!fs.existsSync(articlesDir)) return [];
  return fs
    .readdirSync(articlesDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getArticleBySlug(slug: string): {
  meta: ArticleFrontmatter;
  content: string;
} | null {
  const file = path.join(articlesDir, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  return { meta: data as ArticleFrontmatter, content };
}

export type ArticleListItem = ArticleFrontmatter & { slug: string };

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
