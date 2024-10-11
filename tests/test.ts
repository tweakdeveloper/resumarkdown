import { expect, test } from '@playwright/test';

test('page has headline', async ({ page }) => {
  await page.goto('/');
  const headline = page.locator('header h1');
  await expect(headline).toBeVisible();
  await expect(headline).toHaveText('resumarkdown');
});
