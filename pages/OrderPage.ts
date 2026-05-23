import { Page, expect } from '@playwright/test';

type OrderDetails = {
  name: string;
  country: string;
  city: string;
  card: string;
  month: string;
  year: string;
};

export class OrderPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async fillOrderDetails(order: OrderDetails) {
    await this.page.fill('#name', order.name);
    await this.page.fill('#country', order.country);
    await this.page.fill('#city', order.city);
    await this.page.fill('#card', order.card);
    await this.page.fill('#month', order.month);
    await this.page.fill('#year', order.year);
  }

  async purchaseOrder() {
    await this.page.click('text=Purchase');

    await expect(this.page.locator('.sweet-alert')).toContainText('Thank you for your purchase!');
  }

  async confirmOrder() {
    await this.page.click('text=OK');
  }
}