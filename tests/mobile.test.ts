import { expect, test } from '@playwright/test';

import UserAgent from 'user-agents';

test.use({
  viewport: { height: 2556, width: 1179 },
  userAgent: new UserAgent({ deviceCategory: 'mobile' }).toString(),
});

test('mobile page has nav tree hidden by default', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('navigation').getByRole('tablist')).toBeHidden();
});

test('mobile page has nav toggle', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('navigation').getByRole('button')).toBeVisible();
});

test('nav toggle works', async ({ page }) => {
  await page.goto('/');
  await page.getByText('show navigation').click();
  await expect(page.getByRole('navigation').getByRole('tablist')).toBeVisible();
  await page.getByText('hide navigation').click();
  await expect(page.getByRole('navigation').getByRole('tablist')).toBeHidden();
});

test('mobile page has single-column layout', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByTestId('content-pane')).toBeVisible();
  await expect(page.getByTestId('preview-pane')).toBeHidden();
});

test('mobile page has preview nav item', async ({ page }) => {
  await page.goto('/');
  await page.getByText('show navigation').click();
  await expect(page.getByRole('tab').filter({ hasText: 'preview' })).toBeVisible();
});
