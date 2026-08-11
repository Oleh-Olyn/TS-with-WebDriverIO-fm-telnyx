import { browser, expect } from "@wdio/globals";
import MainPage from "../pageobjects/main.page.js";
import LogInPage from "../pageobjects/login.page.js";

describe("Checking fields on Log In form", () => {
  beforeEach(async () => {
    await browser.setWindowSize(1920, 1080);
    await browser.url("/");
  });

  it("test-case 18", async () => {
    await MainPage.clickLogInBtn();

    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[1]);
    await expect(browser).toHaveUrl(
      "https://portal.telnyx.com/#/login/sign-in",
    );

    await LogInPage.clickSignInWithPasswordBtn();

    await expect(LogInPage.emailFld).toBeDisplayed();
    await expect(LogInPage.passwordFld).toBeDisplayed();
  });
});
