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

test('desktop page has no "preview" nav item', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('tab').filter({ hasText: 'preview' })).toBeHidden();
});

test('desktop page has equal width for both columns', async ({ page }) => {
  await page.goto('/');
  const { width: contentWidth } = (await page.getByTestId('content-pane').boundingBox()) ?? {
    width: -1,
  };
  const { width: previewWidth } = (await page.getByTestId('preview-pane').boundingBox()) ?? {
    width: -2,
  };
  expect(contentWidth).toEqual(previewWidth);
});
