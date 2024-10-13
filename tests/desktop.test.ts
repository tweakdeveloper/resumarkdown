import { expect, test } from '@playwright/test';

test('desktop page has nav tree', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('navigation')).toBeVisible();
});

test('desktop page does not have nav toggle', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('navigation').getByRole('button')).toBeHidden();
});

test('desktop page has two-column layout', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByTestId('content-pane')).toBeVisible();
  await expect(page.getByTestId('preview-pane')).toBeVisible();
});

test('desktop page has no "preview" nav item', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('tab').filter({ hasText: 'preview' })).toBeHidden();
});
