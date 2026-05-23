import { Page, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyProductInCart(productName: string) {
    const productRows = this.page.locator('tr.success', { hasText: productName });
    await expect(productRows.first()).toBeVisible({ timeout: 15000 });
  }

  async deleteProduct(productName: string) {
    const productRow = this.page.locator('tr.success', { hasText: productName }).first();
    await productRow.locator('text=Delete').click();
    await expect(productRow).toHaveCount(0, { timeout: 15000 });
  }

  async clickPlaceOrder() {
  await this.page.locator('button.btn-success', { hasText: 'Place Order' }).click();
  await expect(this.page.locator('#orderModal')).toBeVisible({ timeout: 10000 });
}
}