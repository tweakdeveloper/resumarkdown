import { expect, test } from '@playwright/test';

test('page has headline', async ({ page }) => {
  await page.goto('/');
  const headline = page.locator('header h1');
  await expect(headline).toBeVisible();
  await expect(headline).toHaveText('resumarkdown');
});

test('nav items work', async ({ page }) => {
  await page.goto('/');
  let lastPane = '#pane-preview';
  for (const pane of ['content', 'style', 'preview']) {
    const currentPaneId = `pane-${pane}`;
    await page.locator(`nav li[aria-controls="${currentPaneId}"]`).click();
    await expect(page.locator(`#${currentPaneId}`)).toBeVisible();
    if (lastPane !== '#pane-preview') {
      await expect(page.locator(lastPane)).toBeHidden();
    }
    lastPane = `#${currentPaneId}`;
  }
});
