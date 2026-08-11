import { browser, expect } from "@wdio/globals";
import MainPage from "../pageobjects/main.page";

describe("Checking header buttons", () => {
  beforeEach(async () => {
    await browser.setWindowSize(1920, 1080);
    await browser.url("/");
  });

  it("test-case 5", async () => {
    await expect(MainPage.btnContactUs).toBeDisplayed();
    await expect(MainPage.btnLogIn).toBeDisplayed();
    await expect(MainPage.btnSignUp).toBeDisplayed();

    await expect(MainPage.btnLogIn).toHaveAttribute(
      "href",
      "https://portal.telnyx.com",
    );

    await MainPage.clickContactUsBtn();
    await expect(browser).toHaveUrl("https://telnyx.com/contact-us");

    await browser.url("/");

    await MainPage.clickSignUpBtn();
    await expect(browser).toHaveUrl("https://telnyx.com/sign-up");
  });
});
