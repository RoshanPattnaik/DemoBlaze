import { test, expect } from '@playwright/test';
import userData from '../test-data/userData.json';

test('Create login storage state', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');

  await page.click('#login2');

  await page.fill('#loginusername', userData.username);
  await page.fill('#loginpassword', userData.password);

  await page.click('button[onclick="logIn()"]');

  await expect(page.locator('#nameofuser')).toContainText(userData.username);

  await page.context().storageState({ path: 'auth/storageState.json' });
});