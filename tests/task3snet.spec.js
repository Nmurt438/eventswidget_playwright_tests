import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dev.3snet.info/eventswidget/');
  await page.locator('.checkselect-over').first().click();
  await page.getByText('Affiliate').click();
  await page.locator('div').filter({ hasText: 'Шаг 2' }).nth(4).click();
  await page.locator('div:nth-child(2) > .input-item > .checkselect > .checkselect-control > .checkselect-over').click();
  await page.getByText('Бразилия').click();
  await page.getByText('Шаг 2 Выберите страны Выбрано: 1').click();
  await page.locator('.radio__square').first().click();
  await page.getByRole('button', { name: 'Сгенерировать превью' }).click();
  await page.getByRole('button', { name: 'Скопировать код' }).click();
});