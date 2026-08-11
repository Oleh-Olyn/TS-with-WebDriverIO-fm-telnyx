import { browser, expect } from "@wdio/globals";
import MainPage from "../pageobjects/main.page.js";
import LogInPage from "../pageobjects/login.page.js";
import userData from "../data/user.json";

describe("Name: Checking populate Log In form with valid data", () => {
  beforeEach(async () => {
    await browser.setWindowSize(1920, 1080);
    await browser.url("/");
  });

  it("test-case 20", async () => {
    await MainPage.clickLogInBtn();

    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[1]);
    await expect(browser).toHaveUrl(
      "https://portal.telnyx.com/#/login/sign-in",
    );

    await LogInPage.clickSignInWithPasswordBtn();

    await LogInPage.populateForm(userData);
    await expect(LogInPage.emailFld).toHaveValue(userData.email);
    await expect(LogInPage.passwordFld).toHaveValue(userData.password);
    await expect(LogInPage.passwordFld).toHaveAttribute("type", "password");
  });
});
