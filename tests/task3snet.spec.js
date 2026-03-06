import { test, expect } from '@playwright/test';

test('generate widget preview', async ({ page }) => {
  await page.goto('https://dev.3snet.info/eventswidget/', {
  waitUntil: 'domcontentloaded',
  timeout: 60000
});
  await page.locator(".checkselect-over").first().click()
  await page.getByText('Affiliate').click();

  await page.locator('.input-item .checkselect-over').nth(1).waitFor();
  await page.waitForSelector('.checkselect-dropdown');
  await page.locator('.checkselect-dropdown').getByText('Выбрать все').click();
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Сгенерировать превью' }).click();

  await expect(page.locator('iframe')).toBeVisible();
});