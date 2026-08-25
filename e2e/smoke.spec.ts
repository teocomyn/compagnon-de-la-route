import { expect, test } from "@playwright/test";

test.describe("Parcours critiques", () => {
  test("accueil : titre principal et lien formation", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByRole("heading", {
        level: 1,
        name: /Compagnon de la route, plus qu'un métier, une mission/i,
      }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: /Découvrir le parcours/i }).first(),
    ).toBeVisible();
    const heroSlider = page.getByTestId("hero-slider");
    await expect(heroSlider).toBeVisible();
    await expect(heroSlider.getByRole("img", { name: /Route de montagne de nuit/i })).toBeVisible();
    await heroSlider.getByRole("button", { name: /Mettre le diaporama en pause/i }).click();
    await heroSlider.getByRole("button", { name: /Photographie suivante/i }).click();
    await expect(
      heroSlider.getByRole("img", { name: /Autocar stationné au pied de montagnes/i }),
    ).toBeVisible();
    await heroSlider.focus();
    await page.keyboard.press("ArrowRight");
    await expect(
      heroSlider.getByRole("img", { name: /Conducteur de bus souriant au poste/i }),
    ).toBeVisible();

    const partnerMarquee = page.getByTestId("partner-marquee");
    await expect(partnerMarquee).toBeVisible();
    await expect(
      partnerMarquee.getByRole("img", { name: /Fédération Française des Geiq/i }),
    ).toBeVisible();
    await expect(partnerMarquee.getByRole("img", { name: /BPV Objectifs/i })).toBeVisible();
    await expect(partnerMarquee.getByRole("img", { name: /Geiq Mobilité/i })).toBeVisible();

    await expect(page.getByText("L'exigence", { exact: true })).toHaveCount(0);
    await expect(page.locator('[data-cdr-border-beam="true"]')).toHaveCount(2);

    const statement = page.getByRole("heading", {
      level: 2,
      name: /Chaque personne à bord/i,
    });
    await statement.scrollIntoViewIfNeeded();
    await expect(statement).toContainText("compte sur le conducteur");
    await expect(
      page.getByText("Chaque personne à bord", {
        exact: true,
      }),
    ).toHaveCSS("opacity", "1");
    await expect(
      page.getByText("compte sur le conducteur.", { exact: true }),
    ).toHaveCSS("opacity", "1");

    const bentoHeading = page.getByRole("heading", {
      level: 3,
      name: /Un parcours visible dès le premier échange/i,
    });
    await bentoHeading.scrollIntoViewIfNeeded();
    await expect(bentoHeading).toBeVisible();
    await expect(page.getByText(/Les conditions sont écrites avant l'inscription/i)).toBeVisible();

    const pedagogyHeading = page.getByRole("heading", {
      level: 2,
      name: /Faire, observer, recommencer/i,
    });
    await pedagogyHeading.scrollIntoViewIfNeeded();
    await expect(
      page.getByRole("img", { name: /Conductrice installée au poste de conduite/i }),
    ).toBeVisible();
  });

  test("accueil : le Bento reste contenu sur mobile", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    await page
      .getByRole("heading", { level: 3, name: /Un parcours visible dès le premier échange/i })
      .scrollIntoViewIfNeeded();

    const hasHorizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth,
    );
    expect(hasHorizontalOverflow).toBe(false);
  });

  test("accueil : le hero mobile présente le message et l'action dès le premier écran", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    const heading = page.getByRole("heading", {
      level: 1,
      name: /Compagnon de la route, plus qu'un métier, une mission/i,
    });
    const primaryAction = page.getByRole("link", {
      name: /Découvrir le parcours/i,
    }).first();
    const heroSlider = page.getByTestId("hero-slider");

    await expect(heading).toBeVisible();
    await expect(primaryAction).toBeVisible();
    await expect(heroSlider).toBeVisible();

    const [headingBox, actionBox, sliderBox] = await Promise.all([
      heading.boundingBox(),
      primaryAction.boundingBox(),
      heroSlider.boundingBox(),
    ]);

    expect(headingBox).not.toBeNull();
    expect(actionBox).not.toBeNull();
    expect(sliderBox).not.toBeNull();
    expect(headingBox!.y).toBeGreaterThanOrEqual(sliderBox!.y);
    expect(actionBox!.y + actionBox!.height).toBeLessThanOrEqual(844);
    expect(sliderBox!.y + sliderBox!.height).toBeGreaterThan(headingBox!.y + headingBox!.height);

    const hasHorizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth,
    );
    expect(hasHorizontalOverflow).toBe(false);
  });

  test("header : navigation active, fonte variable et menu mobile accessible", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/formations/conducteur-voyageurs");

    const desktopNavigation = page.getByRole("navigation", {
      name: "Navigation principale",
    });
    await expect(
      desktopNavigation.getByRole("link", { name: "Formations" }),
    ).toHaveAttribute("aria-current", "page");

    const guidesLink = desktopNavigation.getByRole("link", { name: "Guides" });
    const firstAnimatedLetter = guidesLink.locator('[aria-hidden="true"]').first();
    await guidesLink.hover();
    await expect
      .poll(() =>
        firstAnimatedLetter.evaluate(
          (element) => getComputedStyle(element).fontVariationSettings,
        ),
      )
      .toContain("720");

    await page.setViewportSize({ width: 390, height: 844 });
    await page.getByRole("button", { name: "Ouvrir le menu" }).click();
    await expect(page.getByRole("dialog", { name: "Menu de navigation" })).toBeVisible();
    await expect(
      page.getByRole("navigation", { name: "Navigation mobile" }).getByRole("link", {
        name: "Formations",
      }),
    ).toBeFocused();

    await page.keyboard.press("Escape");
    await expect(page.getByRole("dialog", { name: "Menu de navigation" })).toBeHidden();
    await expect(page.getByRole("button", { name: "Ouvrir le menu" })).toBeVisible();
  });

  test("footer : CTA, navigation réelle et mise en page mobile", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    const footer = page.getByRole("contentinfo");
    await footer.scrollIntoViewIfNeeded();
    await expect(footer.getByText(/Un projet de formation à vérifier/i)).toBeVisible();
    await expect(
      footer.getByRole("heading", { level: 2, name: /Passez du projet aux réponses concrètes/i }),
    ).toBeVisible();
    await expect(footer.getByText("Préparer le premier service", { exact: true })).toBeVisible();
    await expect(
      footer.getByRole("link", { name: /Parler à l.?équipe/i }),
    ).toHaveAttribute("href", "/contact");
    await expect(
      footer.getByRole("navigation", { name: "Navigation de pied de page" }),
    ).toContainText("Vérifier une certification");

    const hasHorizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth,
    );
    expect(hasHorizontalOverflow).toBe(false);
  });

  test("journal : les six dossiers vérifiés sont visibles", async ({ page }) => {
    await page.goto("/journal");

    await expect(page.getByText("6 dossiers vérifiés", { exact: true })).toBeVisible();
    await expect(page.locator('main a[href^="/journal/"]:has(h2)')).toHaveCount(6);
  });

  test("contact : formulaire accessible", async ({ page }) => {
    await page.goto("/contact");
    await expect(page.locator('[data-cdr-border-beam="true"]')).toBeVisible();
    await expect(
      page.getByRole("heading", { level: 1, name: /Parlez-nous de votre projet/i }),
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
      page.getByRole("heading", { level: 1, name: /Devenir conducteur/i }),
    ).toBeVisible();
    await expect(
      page.getByRole("img", { name: /Conductrice de voyageurs installée au poste/i }),
    ).toBeVisible();
    await expect(
      page.getByRole("img", { name: /poste de conduite d’un bus/i }),
    ).toBeVisible();

    await page
      .getByRole("button", { name: /Anticiper, prévenir et agir/i })
      .click();
    await expect(page.getByText(/gestion des risques/i)).toBeVisible();
    await expect(page.getByText(/Calendrier communiqué avant inscription/i)).toBeVisible();

    const hasHorizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth,
    );
    expect(hasHorizontalOverflow).toBe(false);
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
    const careerArticle = await request.get(
      "/journal/devenir-conducteur-bus-guide-complet",
    );
    const fundingArticle = await request.get(
      "/journal/financer-formation-conducteur-bus",
    );
    const jobArticle = await request.get("/journal/metier-avenir-recrute");
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
    expect(careerArticle.ok()).toBe(true);
    expect(fundingArticle.ok()).toBe(true);
    expect(jobArticle.ok()).toBe(true);
    expect(serviceArticle.ok()).toBe(true);
    expect(trainingArticle.ok()).toBe(true);
    expect(interviewArticle.ok()).toBe(true);
    expect(await serviceArticle.text()).toContain("Sources vérifiées");
    expect(await trainingArticle.text()).toContain("RNCP37878");
    expect(await interviewArticle.text()).toContain("France Travail");
    expect(await careerArticle.text()).toContain("RNCP37878");
    expect(await fundingArticle.text()).toContain("150 euros");
    expect(await jobArticle.text()).toContain("ROME N4103");
    expect(suspendedArticle.status()).toBe(404);
  });

  test("SEO : le sitemap et llms.txt ne republient pas les contenus suspendus", async ({ request }) => {
    const sitemap = await (await request.get("/sitemap.xml")).text();
    const llms = await (await request.get("/llms.txt")).text();

    expect(sitemap).toContain("/journal/preparer-prise-service-conducteur");
    expect(sitemap).toContain("/journal/choisir-formation-conducteur-voyageurs");
    expect(sitemap).toContain("/journal/reussir-entretien");
    expect(sitemap).toContain("/journal/devenir-conducteur-bus-guide-complet");
    expect(sitemap).toContain("/journal/financer-formation-conducteur-bus");
    expect(sitemap).toContain("/journal/metier-avenir-recrute");
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
