import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { loginData } from '../test-data/loginData';

test.describe('로그인 테스트', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('로그인 성공 테스트', async ({ page }) => {
    await loginPage.login(
      loginData.validUser.username,
      loginData.validUser.password
    );

    await expect(page).toHaveURL(/inventory/);
  });

  test('로그인 실패 테스트', async ({ page }) => {
    await loginPage.login(
      loginData.invalidUser.username,
      loginData.invalidUser.password
    );

    await expect(
      page.locator('[data-test="error"]')
    ).toContainText('Username and password do not match');
  });

  test('장바구니 추가 테스트', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await loginPage.login(
      loginData.validUser.username,
      loginData.validUser.password
    );

    await inventoryPage.addBackpackToCart();
    await inventoryPage.goToCart();

    await cartPage.verifyProductInCart('Sauce Labs Backpack');
  });
});