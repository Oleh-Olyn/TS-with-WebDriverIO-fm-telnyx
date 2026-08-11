import { browser, expect } from "@wdio/globals";
import MainPage from "../pageobjects/main.page";
import SignUpPage from "../pageobjects/signup.page";
import userData from "../data/user.json";

describe("Checking populate Sign Up form with invalid email", () => {
  beforeEach(async () => {
    await browser.url("/");
  });

  it("test-case 2", async () => {
    await MainPage.clickSignUpBtn();
    await expect(browser).toHaveUrl("https://telnyx.com/sign-up");

    for (const email of userData.invalidEmails) {
      await SignUpPage.populateInvalidEmail(email);

      await expect(SignUpPage.inputCompanyEmail).toHaveValue(email);
      await expect(SignUpPage.signUpEmailMessage).toBeDisplayed();
      await expect(SignUpPage.signUpEmailMessage).toHaveText(
        expect.stringContaining("Please enter a valid email address."),
      );
    }
  });
});
