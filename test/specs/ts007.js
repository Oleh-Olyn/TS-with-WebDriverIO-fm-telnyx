import { browser, expect } from "@wdio/globals";
import MainPage from "../pageobjects/main.page.js";
import SignUpPage from "../pageobjects/signup.page.js";

describe("Checking fields on Sign Up form", () => {
  beforeEach(async () => {
    await browser.url("/");
  });

  it("test-case 7", async () => {
    await MainPage.clickSignUpBtn();
    await expect(browser).toHaveUrl("https://telnyx.com/sign-up");
    await expect(SignUpPage.inputCompanyEmail).toBeDisplayed();
    await expect(SignUpPage.companyEmailLabel).toHaveText(
      expect.stringContaining("Company email"),
    );
    await expect(SignUpPage.inputFirstName).toBeDisplayed();
    await expect(SignUpPage.firstNameLabel).toHaveText(
      expect.stringContaining("First name"),
    );
    await expect(SignUpPage.inputLastName).toBeDisplayed();
    await expect(SignUpPage.lastNameLabel).toHaveText(
      expect.stringContaining("Last name"),
    );
    await expect(SignUpPage.inputPassword).toBeDisplayed();
    await expect(SignUpPage.passwordLabel).toHaveText(
      expect.stringContaining("Password"),
    );
  });
});
