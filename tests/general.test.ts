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

test('preview accepts content', async ({ page }) => {
  await page.goto('/');
  await page.getByText('content').click();
  await page.getByRole('textbox').fill('# résumé');

  const previewFrame = page.getByTitle('résumé preview').contentFrame();
  await expect(previewFrame.getByRole('heading')).toHaveText('résumé');
});

test('preview accepts styles', async ({ page }) => {
  await page.goto('/');
  await page.getByText('content').click();
  await page.getByRole('textbox').fill('# blah');
  await page.getByText('style', { exact: true }).click();
  await page.getByRole('textbox').fill('h1 { color: red; }');

  const previewFrame = page.getByTitle('résumé preview').contentFrame();
  await expect(previewFrame.getByRole('heading')).toHaveCSS('color', 'rgb(255, 0, 0)');
});
