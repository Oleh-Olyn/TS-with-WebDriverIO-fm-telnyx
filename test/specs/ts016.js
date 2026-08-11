import { browser, expect } from "@wdio/globals";
import MainPage from "../pageobjects/main.page.js";
import ContactUsPage from "../pageobjects/contactus.page.js";

describe("Checking checkbox on Contact Us form", () => {
  beforeEach(async () => {
    await browser.setWindowSize(1920, 1080);
    await browser.url("/");
  });

  it("test-case 16", async () => {
    await MainPage.clickContactUsBtn();
    await expect(browser).toHaveUrl("https://telnyx.com/contact-us");

    await expect(ContactUsPage.subscriptionChckbx).toBeDisplayed();
  });
});
