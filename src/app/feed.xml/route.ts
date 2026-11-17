import { getAllArticlesMeta, getArticleHref } from "@/lib/articles";
import { siteName } from "@/lib/constants";
import { guideDirectoryList } from "@/lib/guide-directory";
import { absoluteUrl, feedPath, feedTitle } from "@/lib/seo";
import { verifiedGuidesReviewedAtIso } from "@/lib/verified-guides";

export const dynamic = "force-static";

type FeedItem = { title: string; path: string; description: string; isoDate: string };

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

const toRfc822 = (isoDate: string) => new Date(`${isoDate}T00:00:00Z`).toUTCString();

export function GET() {
  const items: FeedItem[] = [
    ...guideDirectoryList.map((guide) => ({
      title: guide.title,
      path: `/${guide.slug}`,
      description: guide.description,
      isoDate: guide.reviewedAtIso ?? verifiedGuidesReviewedAtIso,
    })),
    ...getAllArticlesMeta()
      .filter((article) => !article.canonicalPath)
      .map((article) => ({
        title: article.title,
        path: getArticleHref(article),
        description: article.description,
        isoDate: article.updated ?? article.reviewedAt ?? article.date,
      })),
  ].sort((a, b) => (a.isoDate < b.isoDate ? 1 : -1));

  const lastBuild = items[0]?.isoDate ?? verifiedGuidesReviewedAtIso;

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    "<channel>",
    `<title>${escapeXml(feedTitle)}</title>`,
    `<link>${absoluteUrl("/")}</link>`,
    `<description>${escapeXml(`Guides vérifiés et dossiers du journal ${siteName}, relus et sourcés.`)}</description>`,
    "<language>fr-FR</language>",
    `<lastBuildDate>${toRfc822(lastBuild)}</lastBuildDate>`,
    `<atom:link href="${absoluteUrl(feedPath)}" rel="self" type="application/rss+xml" />`,
    ...items.flatMap((item) => [
      "<item>",
      `<title>${escapeXml(item.title)}</title>`,
      `<link>${absoluteUrl(item.path)}</link>`,
      `<guid isPermaLink="true">${absoluteUrl(item.path)}</guid>`,
      `<pubDate>${toRfc822(item.isoDate)}</pubDate>`,
      `<description>${escapeXml(item.description)}</description>`,
      "</item>",
    ]),
    "</channel>",
    "</rss>",
  ].join("\n");

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
