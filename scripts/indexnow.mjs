// Notifie Bing, Yandex et les autres moteurs compatibles IndexNow des URL publiques du sitemap.
// Google n'utilise pas IndexNow : sa découverte passe par Search Console.
// Usage : npm run seo:indexnow [-- --dry-run]
// La clé n'est pas un secret : elle doit être servie publiquement à la racine du site.
import fs from "node:fs";
import path from "node:path";

const dryRun = process.argv.includes("--dry-run");
const site = (process.env.INDEXNOW_SITE ?? "https://compagnondelaroute.com").replace(/\/$/, "");
const publicDir = path.join(process.cwd(), "public");

const keyFile = fs.readdirSync(publicDir).find((name) => /^[0-9a-f]{32}\.txt$/.test(name));
if (!keyFile) {
  console.error("IndexNow : aucun fichier de clé « <clé de 32 caractères>.txt » dans public/.");
  process.exit(1);
}
const key = keyFile.replace(/\.txt$/, "");
if (fs.readFileSync(path.join(publicDir, keyFile), "utf8").trim() !== key) {
  console.error("IndexNow : le contenu du fichier de clé doit être identique à son nom.");
  process.exit(1);
}

const keyLocation = `${site}/${keyFile}`;
const served = await fetch(keyLocation, { signal: AbortSignal.timeout(10_000) }).catch(() => null);
if (!served?.ok || (await served.text()).trim() !== key) {
  console.error(`IndexNow : la clé n'est pas encore servie sur ${keyLocation}. Déployer d'abord.`);
  process.exit(1);
}

const sitemap = await (await fetch(`${site}/sitemap.xml`, { signal: AbortSignal.timeout(10_000) })).text();
const urlList = Array.from(sitemap.matchAll(/<loc>(.*?)<\/loc>/g), (match) => match[1]);
if (!urlList.length) {
  console.error("IndexNow : le sitemap ne contient aucune URL.");
  process.exit(1);
}

const payload = { host: new URL(site).hostname, key, keyLocation, urlList };
if (dryRun) {
  console.log(`IndexNow (essai) : ${urlList.length} URL seraient envoyées pour ${payload.host}.`);
  process.exit(0);
}

const response = await fetch("https://api.indexnow.org/IndexNow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(payload),
  signal: AbortSignal.timeout(15_000),
});

if (response.status === 200 || response.status === 202) {
  console.log(`IndexNow : ${urlList.length} URL transmises (HTTP ${response.status}).`);
} else {
  console.error(`IndexNow : refus (HTTP ${response.status}) ${await response.text()}`);
  process.exit(1);
}
