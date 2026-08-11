import { browser, expect } from "@wdio/globals";
import MainPage from "../pageobjects/main.page.js";
import ContactUsPage from "../pageobjects/contactus.page.js";

describe("Checking functionality icon logo", () => {
  beforeEach(async () => {
    await browser.setWindowSize(1920, 1080);
    await browser.url("/");
  });

  it("test-case 10", async () => {
    await MainPage.clickContactUsBtn();
    await expect(browser).toHaveUrl("https://telnyx.com/contact-us");
    await ContactUsPage.clickTelnyxIcon();
    await expect(browser).toHaveUrl("https://telnyx.com/");
  });
});
