import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async verifyProductInCart(productName: string) {
    await expect(
      this.page.locator('[data-test="inventory-item-name"]')
    ).toContainText(productName);
  }
}