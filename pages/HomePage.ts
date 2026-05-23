import { Page, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async addProductToCart(productName: string) {
    await this.page.locator('a.hrefch', { hasText: productName }).click();

    await expect(this.page.locator('a.btn-success')).toBeVisible({ timeout: 10000 });

    const dialogPromise = this.page.waitForEvent('dialog');

    await this.page.locator('a.btn-success').click();

    const dialog = await dialogPromise;
    expect(dialog.message()).toContain('Product added');
    await dialog.accept();

    await this.page.goto('https://www.demoblaze.com/');
    await this.page.waitForLoadState('domcontentloaded');
  }

  async goToCart() {
    await this.page.locator('#cartur').click();
    await this.page.waitForLoadState('domcontentloaded');
  }
}