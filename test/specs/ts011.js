import { browser, expect } from "@wdio/globals";
import MainPage from "../pageobjects/main.page.js";

describe("Checking footer links in Company section", () => {
  beforeEach(async () => {
    await browser.url("/");
  });

  it("test-case 11", async () => {
    await expect(MainPage.companySectionTitle).toBeDisplayed();
    await expect(MainPage.ourNetworkLink).toBeDisplayed();
    await expect(MainPage.globalCoverageLink).toBeDisplayed();
    await expect(MainPage.releaseNotesLink).toBeDisplayed();
    await expect(MainPage.careersLink).toBeDisplayed();
    await expect(MainPage.voiceAILink).toBeDisplayed();
    await expect(MainPage.aiGlossaryLink).toBeDisplayed();
    await expect(MainPage.shopLink).toBeDisplayed();

    await MainPage.clickOurNetwork();
    await expect(browser).toHaveUrl(expect.stringContaining("/our-network"));
    await browser.url("/");
    await MainPage.clickGlobalCoverage();
    await expect(browser).toHaveUrl(
      expect.stringContaining("/global-communications"),
    );
    await browser.url("/");
    await MainPage.clickReleaseNotes();
    await expect(browser).toHaveUrl(expect.stringContaining("/release-notes"));
    await browser.url("/");
    await MainPage.clickCareers();
    await expect(browser).toHaveUrl(expect.stringContaining("/careers"));
    await browser.url("/");
    await MainPage.clickVoiceAI();
    await expect(browser).toHaveUrl(expect.stringContaining("/voice-ai"));
    await browser.url("/");
    await MainPage.clickAIGlossary();
    await expect(browser).toHaveUrl(expect.stringContaining("/learn-ai"));
    await browser.url("/");
    await expect(MainPage.shopLink).toHaveAttribute(
      "href",
      "https://shop.telnyx.com/",
    );
  });
});
