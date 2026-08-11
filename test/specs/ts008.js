import { browser, expect } from "@wdio/globals";
import MainPage from "../pageobjects/main.page.js";
import SignUpPage from "../pageobjects/signup.page.js";

describe("Checking checkboxes on Sign Up form", () => {
  beforeEach(async () => {
    await browser.url("/");
  });

  it("test-case 8", async () => {
    await MainPage.clickSignUpBtn();
    await expect(browser).toHaveUrl("https://telnyx.com/sign-up");
    await expect(SignUpPage.checkboxSignUpTerms).toBeDisplayed();
    await expect(SignUpPage.signUpTermsLabel).toHaveText(
      /I agree to Telnyx's\s+Terms & Conditions/,
    );
    await expect(SignUpPage.checkboxSignUpMarketing).toBeDisplayed();
    await expect(SignUpPage.signUpMarketingLabel).toHaveText(
      /I\s+want\s+to\s+receive\s+marketing\s+emails\s+from\s+Telnyx\./,
    );
  });
});
