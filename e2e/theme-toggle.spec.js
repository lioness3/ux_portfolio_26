import { test, expect } from "@playwright/test";

test.describe("Theme Toggle", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("theme toggle switches between light and dark mode", async ({
    page,
  }) => {
    // Get the initial theme
    const initialTheme = await page.locator("html").getAttribute("data-theme");

    // Find and click the theme toggle button
    const themeToggle = page.locator(".theme-toggle-btn");
    await expect(themeToggle).toBeVisible();
    await themeToggle.click();

    // Wait a moment for the theme to update
    await page.waitForTimeout(300);

    // Get the new theme
    const newTheme = await page.locator("html").getAttribute("data-theme");

    // Verify the theme changed
    expect(newTheme).not.toBe(initialTheme);
    expect(["light", "dark"]).toContain(newTheme);
  });

  test("theme preference is persisted in localStorage", async ({ page }) => {
    // Click theme toggle
    const themeToggle = page.locator(".theme-toggle-btn");
    await themeToggle.click();
    await page.waitForTimeout(300);

    // Get the theme from localStorage
    const storedTheme = await page.evaluate(() =>
      localStorage.getItem("theme"),
    );

    // Get current theme from HTML
    const currentTheme = await page.locator("html").getAttribute("data-theme");

    // Verify they match
    expect(storedTheme).toBe(currentTheme);
  });

  test("theme persists on page reload", async ({ page }) => {
    // Set theme to a specific value and reload
    const themeToggle = page.locator(".theme-toggle-btn");
    await themeToggle.click();
    await page.waitForTimeout(300);

    const themeBeforeReload = await page
      .locator("html")
      .getAttribute("data-theme");

    // Reload the page
    await page.reload();

    // Check theme after reload
    const themeAfterReload = await page
      .locator("html")
      .getAttribute("data-theme");

    // They should be the same
    expect(themeAfterReload).toBe(themeBeforeReload);
  });
});
