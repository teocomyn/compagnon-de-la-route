import type { FaqEntry } from "@/lib/schema";

const FAQ_ITEM = /<FAQItem\s+question="([^"]+)"\s*>([\s\S]*?)<\/FAQItem>/g;

/** Texte brut d'une réponse MDX : liens, emphases et balises retirés. */
function toPlainText(markdown: string): string {
  return markdown
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_`]{1,3}/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Extrait les questions de l'article telles qu'elles sont affichées, pour que le
 * FAQPage reprenne exactement le contenu visible de la page.
 */
export function extractFaqEntries(mdx: string): FaqEntry[] {
  return Array.from(mdx.matchAll(FAQ_ITEM), (match) => ({
    question: toPlainText(match[1]),
    answer: toPlainText(match[2]),
  })).filter((entry) => entry.question && entry.answer);
}
