import { test, expect } from '@playwright/test';

test('Basic page', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByText('Edit src/App.tsx and save to reload.Learn React').click();
  await page.getByText('Edit src/App.tsx and save to reload.').click();
});

test('Navigation on page', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Learn React' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('heading', { name: 'React' }).click();
});