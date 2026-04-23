import { test, expect } from "@playwright/test";

// Regression test for the side-menu scroll-sync bug:
// clicking an item should leave *that* item highlighted after the
// smooth scroll settles, not an intermediate section the scroll passed over.

test.describe("case study side menu", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/case-study/0");
    await expect(page.locator(".side-menu")).toBeVisible();
    await expect(page.locator(".case-study-scrolling-container")).toBeVisible();
  });

  test("clicking a far-down item pins its highlight through the scroll", async ({ page }) => {
    const menuItems = page.locator(".side-menu-item");
    const count = await menuItems.count();
    expect(count).toBeGreaterThan(3);

    // Pick an item near the bottom — this is where the desync was most visible,
    // because the smooth scroll passes through many intermediate sections.
    const target = menuItems.nth(count - 2);
    const targetText = (await target.locator(".side-menu-text").innerText()).trim();

    await target.click();

    // Immediately after click: the clicked item is active, even before scroll settles.
    await expect(target).toHaveClass(/\bactive\b/);

    // Only one item should be active at a time.
    await expect(page.locator(".side-menu-item.active")).toHaveCount(1);

    // Let the smooth scroll finish and any debounced observer callbacks run.
    await page.waitForTimeout(1500);

    // After settling, the clicked item must still be the active one — this is
    // the exact regression: previously an intermediate section would "win".
    await expect(page.locator(".side-menu-item.active")).toHaveCount(1);
    const activeText = (
      await page.locator(".side-menu-item.active .side-menu-text").innerText()
    ).trim();
    expect(activeText).toBe(targetText);
  });

  test("scrolling the container drives the active highlight", async ({ page }) => {
    const container = page.locator(".case-study-scrolling-container");

    // Scroll to near the bottom of the content to exercise the IntersectionObserver
    // against the scrollRef root (not the viewport).
    await container.evaluate((el) => {
      el.scrollTo({ top: el.scrollHeight * 0.9, behavior: "instant" });
    });

    await page.waitForTimeout(400);
    await expect(page.locator(".side-menu-item.active")).toHaveCount(1);
  });

  test("each side-menu item can be clicked and ends up active", async ({ page }) => {
    const menuItems = page.locator(".side-menu-item");
    const count = await menuItems.count();

    for (let i = 0; i < count; i++) {
      const item = menuItems.nth(i);
      const text = (await item.locator(".side-menu-text").innerText()).trim();
      await item.click();
      await page.waitForTimeout(900);

      const activeText = (
        await page.locator(".side-menu-item.active .side-menu-text").innerText()
      ).trim();
      expect(activeText, `item "${text}" should be active after clicking it`).toBe(text);
    }
  });
});
