
import { test, expect } from "@playwright/test";

test("homepage loads successfully", async ({ page }) => {
  const response = await page.goto("/");

  expect(response?.status()).toBe(200);

  await expect(page.locator("body")).toBeVisible();
  await expect(page.locator("nav")).toBeVisible();
});

test("main portfolio pages load", async ({ page }) => {
  const routes = [
    "/",
    "/about",
    "/skills",
    "/experience",
    "/projects",
    "/contact",
  ];

  for (const route of routes) {
    const response = await page.goto(route);

    expect(
      response?.status(),
      `Unexpected response for ${route}`
    ).toBe(200);
  }
});
