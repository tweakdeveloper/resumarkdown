import { expect, test } from '@playwright/test';

test('desktop page has nav tree', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('nav')).toBeVisible();
});

test('desktop page does not have nav toggle', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('nav button')).toBeHidden();
});

test('desktop page has two-column layout', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#pane-preview')).toBeVisible();
});
