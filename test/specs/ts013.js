import { browser, expect } from "@wdio/globals";
import MainPage from "../pageobjects/main.page.js";

describe("Checking footer links in Compare section", () => {
  beforeEach(async () => {
    await browser.url("/");
  });

  it("test-case 13", async () => {
    await expect(MainPage.compareSectionTitle).toBeDisplayed();
    await expect(MainPage.elevenLabsLink).toBeDisplayed();
    await expect(MainPage.vapiLink).toBeDisplayed();
    await expect(MainPage.basetenLink).toBeDisplayed();
    await expect(MainPage.togetherAiLink).toBeDisplayed();
    await expect(MainPage.twilioLink).toBeDisplayed();
    await expect(MainPage.bandwidthLink).toBeDisplayed();
    await expect(MainPage.vonageLink).toBeDisplayed();
    await expect(MainPage.amazonConnectLink).toBeDisplayed();

    await expect(MainPage.elevenLabsLink).toHaveAttribute(
      "href",
      expect.stringContaining("/the-best-elevenlabs-alternative"),
    );
    await expect(MainPage.vapiLink).toHaveAttribute(
      "href",
      expect.stringContaining("/the-best-vapi-alternative"),
    );
    await expect(MainPage.basetenLink).toHaveAttribute(
      "href",
      expect.stringContaining("/the-best-baseten-alternative"),
    );
    await expect(MainPage.togetherAiLink).toHaveAttribute(
      "href",
      expect.stringContaining("/the-best-together-alternative"),
    );
    await expect(MainPage.twilioLink).toHaveAttribute(
      "href",
      expect.stringContaining("/the-better-twilio-alternative"),
    );
    await expect(MainPage.bandwidthLink).toHaveAttribute(
      "href",
      expect.stringContaining("/the-better-bandwidth-alternative"),
    );
    await expect(MainPage.vonageLink).toHaveAttribute(
      "href",
      expect.stringContaining("/the-better-vonage-voice-api-alternative"),
    );
    await expect(MainPage.amazonConnectLink).toHaveAttribute(
      "href",
      expect.stringContaining(
        "/amazon-connect-alternative-why-telnyx-is-a-smarter-choice",
      ),
    );
  });
});
