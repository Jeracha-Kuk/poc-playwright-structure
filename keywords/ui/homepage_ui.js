
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  });
  
test('get started link', async ({ page }) => {
    await page.goto('https://playwright.dev/');
  
    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();
  
    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/.*intro/);
  });
  

test('forgot password', async ({ page }) => {
  await page.goto('https://www.sanook.com/');
  await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByRole('link', { name: 'ลืมรหัสผ่าน?' }).click();
  await page.getByRole('button', { name: 'ขอรหัสผ่านใหม่' }).click();
});