import { browser, expect } from "@wdio/globals";
import MainPage from "../pageobjects/main.page";
import SignUpPage from "../pageobjects/signup.page";
import userData from "../data/user.json";

describe("Checking populate Sign Up form with valid data", () => {
  beforeEach(async () => {
    await browser.url("/");
  });

  it("test-case 1", async () => {
    await MainPage.clickSignUpBtn();
    await expect(browser).toHaveUrl("https://telnyx.com/sign-up");

    await SignUpPage.populateForm(userData);
    await expect(SignUpPage.inputCompanyEmail).toHaveValue(userData.email);
    await expect(SignUpPage.inputFirstName).toHaveValue(userData.firstName);
    await expect(SignUpPage.inputLastName).toHaveValue(userData.lastName);
    await expect(SignUpPage.inputPassword).toHaveValue(userData.password);
    await expect(SignUpPage.inputPassword).toHaveAttribute("type", "password");
    await expect(SignUpPage.checkboxSignUpTerms).toBeSelected();
    await expect(SignUpPage.checkboxSignUpMarketing).toBeSelected();
  });
});
