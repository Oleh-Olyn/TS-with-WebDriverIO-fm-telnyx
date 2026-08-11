import { browser, expect } from "@wdio/globals";
import MainPage from "../pageobjects/main.page.js";

describe("Checking header links", () => {
  beforeEach(async () => {
    await browser.setWindowSize(1920, 1080);
    await browser.url("/");
  });

  it("test-case 6", async () => {
    await expect(MainPage.productsLink).toBeDisplayed();
    await expect(MainPage.solutionsLink).toBeDisplayed();
    await expect(MainPage.pricingLink).toBeDisplayed();
    await expect(MainPage.whyTelnexLink).toBeDisplayed();
    await expect(MainPage.resourcesLink).toBeDisplayed();
    await expect(MainPage.developersLink).toBeDisplayed();

    await MainPage.clickProductsLink();
    await expect(MainPage.productsLink).toHaveAttribute(
      "aria-expanded",
      "true",
    );

    await MainPage.clickSolutionsLink();
    await expect(MainPage.solutionsLink).toHaveAttribute(
      "aria-expanded",
      "true",
    );

    await MainPage.clickPricingLink();
    await expect(MainPage.pricingLink).toHaveAttribute("aria-expanded", "true");

    await MainPage.clickWhyTelnexLink();
    await expect(MainPage.whyTelnexLink).toHaveAttribute(
      "aria-expanded",
      "true",
    );

    await MainPage.clickResourcesLink();
    await expect(MainPage.resourcesLink).toHaveAttribute(
      "aria-expanded",
      "true",
    );

    await MainPage.clickDevelopersLink();
    await expect(MainPage.developersLink).toHaveAttribute(
      "aria-expanded",
      "true",
    );
  });
});
