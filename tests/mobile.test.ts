import { expect, test } from '@playwright/test';

test.use({ viewport: { height: 2556, width: 1179 } });

test('mobile page has nav tree hidden by default', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('nav ul')).toBeHidden();
});

test('mobile page has nav toggle', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('nav button')).toBeVisible();
});

test('nav toggle works', async ({ page }) => {
  await page.goto('/');
  await page.locator('nav button').click();
  await expect(page.locator('nav ul')).toBeVisible();
  await page.locator('nav button').click();
  await expect(page.locator('nav ul')).toBeHidden();
});
