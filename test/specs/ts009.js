import { browser, expect } from "@wdio/globals";
import MainPage from "../pageobjects/main.page.js";
import SignUpPage from "../pageobjects/signup.page.js";

describe("Checking button on Sign Up form", () => {
  beforeEach(async () => {
    await browser.url("/");
  });

  it("test-case 9", async () => {
    await MainPage.clickSignUpBtn();
    await expect(browser).toHaveUrl("https://telnyx.com/sign-up");
    await expect(SignUpPage.btnSubmit).toBeDisplayed();
  });
});
