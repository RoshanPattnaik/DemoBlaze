import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';
import { OrderPage } from '../pages/OrderPage';
import userData from '../test-data/userData.json';

test.use({ storageState: 'auth/storageState.json' });

test('Add products, delete item and place order using saved login', async ({ page }) => {
  const homePage = new HomePage(page);
  const cartPage = new CartPage(page);
  const orderPage = new OrderPage(page);

  await page.goto('https://www.demoblaze.com/');

  await homePage.addProductToCart(userData.products[0]);
  await homePage.addProductToCart(userData.products[1]);
  await homePage.addProductToCart(userData.products[2]);

  await homePage.goToCart();

  await cartPage.verifyProductInCart(userData.products[0]);
  await cartPage.verifyProductInCart(userData.products[1]);
  await cartPage.verifyProductInCart(userData.products[2]);

  await cartPage.deleteProduct(userData.products[1]);

  await cartPage.clickPlaceOrder();

  await orderPage.fillOrderDetails(userData.order);
  await orderPage.purchaseOrder();
  await orderPage.confirmOrder();
});