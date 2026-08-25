import { expect, test } from "@playwright/test";

test.describe("Parcours critiques", () => {
  test("accueil : titre principal et lien formation", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByRole("heading", { level: 1, name: /Conducteur de voyageurs/i }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: /Découvrir le parcours/i }).first(),
    ).toBeVisible();
  });

  test("contact : formulaire accessible", async ({ page }) => {
    await page.goto("/contact");
    await expect(
      page.getByRole("heading", { level: 1, name: /Restons en contact/i }),
    ).toBeVisible();
    await expect(page.getByLabel(/Nom complet/i)).toBeVisible();
    await expect(page.getByRole("button", { name: /Envoyer ma demande/i })).toBeVisible();
  });

  test("contact : validation serveur et livraison désactivée explicite", async ({ page }) => {
    await page.goto("/contact");
    await page.getByRole("button", { name: /Envoyer ma demande/i }).click();
    await expect(page.getByText(/Le nom est requis/i)).toBeVisible();
    await expect(page.getByText(/L’e-mail est requis/i)).toBeVisible();

    await page.getByLabel(/Nom complet/i).fill("Camille Test");
    await page.getByLabel(/Adresse e-mail/i).fill("camille@example.com");
    await page.getByLabel(/Quel est votre projet/i).fill("Je souhaite recevoir la fiche programme à jour.");
    await page.getByRole("checkbox").check();
    await page.getByRole("button", { name: /Envoyer ma demande/i }).click();

    await expect(page.getByText(/Le formulaire n’est pas encore relié à la messagerie/i)).toBeVisible();
  });

  test("formation : calendrier transparent sur petit viewport", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/formations/conducteur-voyageurs");
    await expect(
      page.getByRole("heading", { level: 1, name: /Conducteur de voyageurs/i }),
    ).toBeVisible();
    await expect(page.getByText(/Calendrier communiqué avant inscription/i)).toBeVisible();
  });

  test("sécurité : les en-têtes de production sont présents", async ({ request }) => {
    const response = await request.get("/");
    const headers = response.headers();

    expect(headers["x-powered-by"]).toBeUndefined();
    expect(headers["x-content-type-options"]).toBe("nosniff");
    expect(headers["x-frame-options"]).toBe("DENY");
    expect(headers["referrer-policy"]).toBe("strict-origin-when-cross-origin");
    expect(headers["content-security-policy"]).toContain("frame-ancestors 'none'");
    expect(headers["permissions-policy"]).toContain("camera=()");
  });

  test("publication : seuls les guides et articles vérifiés sont ouverts", async ({ request }) => {
    const financing = await request.get("/financement-formation-conducteur-voyageurs");
    const career = await request.get("/metier-conducteur-de-car-debouches");
    const certification = await request.get("/certification-formation-conducteur-voyageurs");
    const license = await request.get("/permis-d-conducteur-professionnel");
    const fimo = await request.get("/fimo-passage-a-la-route");
    const faq = await request.get("/faq-conducteur-de-voyageurs");
    const tourism = await request.get("/formation-conducteur-autocar-tourisme");
    const school = await request.get("/formation-transport-scolaire-conducteur");
    const hiring = await request.get("/reussir-embauche-conducteur-car");
    const guides = await request.get("/guides");
    const suspendedGuide = await request.get(
      "/formation-conducteur-voyageurs-hauts-de-france",
    );
    const journal = await request.get("/journal");
    const serviceArticle = await request.get(
      "/journal/preparer-prise-service-conducteur",
    );
    const trainingArticle = await request.get(
      "/journal/choisir-formation-conducteur-voyageurs",
    );
    const interviewArticle = await request.get("/journal/reussir-entretien");
    const suspendedArticle = await request.get("/journal/devenir-conducteur-30-jours");

    expect(financing.ok()).toBe(true);
    expect(career.ok()).toBe(true);
    expect(certification.ok()).toBe(true);
    expect(license.ok()).toBe(true);
    expect(fimo.ok()).toBe(true);
    expect(faq.ok()).toBe(true);
    expect(tourism.ok()).toBe(true);
    expect(school.ok()).toBe(true);
    expect(hiring.ok()).toBe(true);
    expect(guides.ok()).toBe(true);
    expect(await financing.text()).toContain("France Travail");
    expect(await certification.text()).toContain("RNCP37878");
    expect(await fimo.text()).toContain("140 heures");
    expect(await school.text()).toContain("montée et la descente");
    expect(await hiring.text()).toContain("code ROME N4103");
    expect(suspendedGuide.status()).toBe(404);
    expect(journal.ok()).toBe(true);
    expect(serviceArticle.ok()).toBe(true);
    expect(trainingArticle.ok()).toBe(true);
    expect(interviewArticle.ok()).toBe(true);
    expect(await serviceArticle.text()).toContain("Sources vérifiées");
    expect(await trainingArticle.text()).toContain("RNCP37878");
    expect(await interviewArticle.text()).toContain("France Travail");
    expect(suspendedArticle.status()).toBe(404);
  });

  test("SEO : le sitemap et llms.txt ne republient pas les contenus suspendus", async ({ request }) => {
    const sitemap = await (await request.get("/sitemap.xml")).text();
    const llms = await (await request.get("/llms.txt")).text();

    expect(sitemap).toContain("/journal/preparer-prise-service-conducteur");
    expect(sitemap).toContain("/journal/choisir-formation-conducteur-voyageurs");
    expect(sitemap).toContain("/journal/reussir-entretien");
    expect(sitemap).not.toContain("/journal/devenir-conducteur-30-jours");
    expect(sitemap).not.toContain("/temoignages");
    expect(sitemap).toContain("/financement-formation-conducteur-voyageurs");
    expect(sitemap).toContain("/metier-conducteur-de-car-debouches");
    expect(sitemap).toContain("/certification-formation-conducteur-voyageurs");
    expect(sitemap).toContain("/permis-d-conducteur-professionnel");
    expect(sitemap).toContain("/fimo-passage-a-la-route");
    expect(sitemap).toContain("/faq-conducteur-de-voyageurs");
    expect(sitemap).toContain("/formation-conducteur-autocar-tourisme");
    expect(sitemap).toContain("/formation-transport-scolaire-conducteur");
    expect(sitemap).toContain("/reussir-embauche-conducteur-car");
    expect(llms).not.toMatch(/210h|30 jours|85 % de CDIsation/i);
    expect(llms).toContain("BOAZ (LES COMPAGNONS DE LA ROUTE)");
  });

  test("navigation : toutes les routes publiées dans le sitemap répondent", async ({ request }) => {
    const sitemap = await (await request.get("/sitemap.xml")).text();
    const locations = Array.from(sitemap.matchAll(/<loc>(.*?)<\/loc>/g), (match) => match[1]);

    expect(locations.length).toBeGreaterThan(5);
    for (const location of locations) {
      const response = await request.get(new URL(location).pathname);
      expect(response.ok(), `${location} devrait répondre en succès`).toBe(true);
    }
  });
});
