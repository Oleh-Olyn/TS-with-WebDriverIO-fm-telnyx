import { browser, expect } from "@wdio/globals";
import MainPage from "../pageobjects/main.page.js";
import ContactUsPage from "../pageobjects/contactus.page.js";

describe("Checking fields on Contact Us form", () => {
  beforeEach(async () => {
    await browser.setWindowSize(1920, 1080);
    await browser.url("/");
  });

  it("test-case 14", async () => {
    await MainPage.clickContactUsBtn();
    await expect(browser).toHaveUrl("https://telnyx.com/contact-us");

    await expect(ContactUsPage.firstNameFld).toBeDisplayed();
    await expect(ContactUsPage.lastNameFld).toBeDisplayed();
    await expect(ContactUsPage.emailFld).toBeDisplayed();
    await expect(ContactUsPage.phoneNumberFld).toBeDisplayed();
    await expect(ContactUsPage.websiteFld).toBeDisplayed();
    await expect(ContactUsPage.telnyxAboutFld).toBeDisplayed();
  });
});
