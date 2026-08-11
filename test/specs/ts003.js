import { browser, expect } from "@wdio/globals";
import MainPage from "../pageobjects/main.page";

describe("Checking social media icons", () => {
  beforeEach(async () => {
    await browser.url("/");
  });

  it("test-case 3", async () => {
    await expect(MainPage.linkedinIcon).toBeDisplayed();
    await expect(MainPage.twitterIcon).toBeDisplayed();
    await expect(MainPage.facebookIcon).toBeDisplayed();

    await expect(MainPage.linkedinIcon).toHaveAttribute(
      "href",
      "https://www.linkedin.com/company/telnyx",
    );

    await expect(MainPage.twitterIcon).toHaveAttribute(
      "href",
      "https://x.com/telnyx",
    );

    await expect(MainPage.facebookIcon).toHaveAttribute(
      "href",
      "https://www.facebook.com/Telnyx/",
    );
  });
});
