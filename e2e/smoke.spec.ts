import { expect, test } from "@playwright/test";

test.describe("Parcours critiques", () => {
  test("accueil : titre principal et lien formation", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByRole("heading", { level: 1, name: /Conducteur de voyageurs/i }),
    ).toBeVisible();
    await expect(page.getByRole("link", { name: /Je m'inscris/i }).first()).toBeVisible();
  });

  test("contact : formulaire accessible", async ({ page }) => {
    await page.goto("/contact");
    await expect(
      page.getByRole("heading", { level: 1, name: /Restons en contact/i }),
    ).toBeVisible();
    await expect(page.getByLabel(/Nom complet/i)).toBeVisible();
    await expect(page.getByRole("button", { name: /Envoyer ma demande/i })).toBeVisible();
  });

  test("formation : tableau sessions scrollable sur petit viewport", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/formations/conducteur-voyageurs");
    await expect(
      page.getByRole("heading", { level: 1, name: /Conducteur de voyageurs/i }),
    ).toBeVisible();
    const table = page.locator("table").first();
    await expect(table).toBeVisible();
  });
});
