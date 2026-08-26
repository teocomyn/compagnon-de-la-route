import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const maxAgeDays = 190;
const files = [
  "src/lib/verified-guides.ts",
  "src/lib/seo-cluster-guides.ts",
  "content/articles/devenir-conducteur-bus-guide-complet.mdx",
];

const dates = files.flatMap((relativePath) => {
  const content = fs.readFileSync(path.join(root, relativePath), "utf8");
  return [...content.matchAll(/(?:reviewedAtIso|verifiedGuidesReviewedAtIso|reviewedAt)\s*[:=]\s*["'](\d{4}-\d{2}-\d{2})["']/g)]
    .map((match) => ({ date: match[1], file: relativePath }));
});

if (dates.length < 3) {
  console.error("SEO: dates de relecture réglementaire absentes ou incomplètes.");
  process.exit(1);
}

const now = new Date();
const stale = dates.filter(({ date }) => {
  const age = (now.getTime() - new Date(`${date}T00:00:00Z`).getTime()) / 86_400_000;
  return age > maxAgeDays;
});

if (stale.length > 0) {
  console.error(`SEO: relecture réglementaire dépassée (${maxAgeDays} jours maximum).`);
  for (const item of stale) console.error(`- ${item.file}: ${item.date}`);
  process.exit(1);
}

console.log(`SEO: ${dates.length} repères de relecture contrôlés, aucun ne dépasse ${maxAgeDays} jours.`);
