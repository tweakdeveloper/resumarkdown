import { expect, test } from '@playwright/test';

test('page has headline', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('banner')).toHaveText('resumarkdown');
});

test('nav items work', async ({ page }) => {
  await page.goto('/');

  for (const tab of await page.getByRole('tab').all()) {
    await tab.click();
    await expect(page.getByTestId(`${await tab.textContent()}-pane`)).toBeVisible();
  }
});
