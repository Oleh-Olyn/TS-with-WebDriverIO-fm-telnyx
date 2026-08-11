import { browser, expect } from "@wdio/globals";
import MainPage from "../pageobjects/main.page";

describe("Checking AI chat bots icons", () => {
  beforeEach(async () => {
    await browser.url("/");
  });

  it("test-case 4", async () => {
    await expect(MainPage.chatGPTIcon).toBeDisplayed();
    await expect(MainPage.claudeIcon).toBeDisplayed();
    await expect(MainPage.perplexityIcon).toBeDisplayed();
    await expect(MainPage.geminiIcon).toBeDisplayed();
    await expect(MainPage.grokIcon).toBeDisplayed();

    await expect(MainPage.chatGPTIcon).toHaveAttribute(
      "href",
      "https://chat.openai.com/?q=What makes Telnyx's global network different, breakdown call quality for normal phone calls and voice AI calls.",
    );

    await expect(MainPage.claudeIcon).toHaveAttribute(
      "href",
      "https://claude.ai/new?q=What makes Telnyx's global network different, breakdown call quality for normal phone calls and voice AI calls.",
    );

    await expect(MainPage.perplexityIcon).toHaveAttribute(
      "href",
      "https://www.perplexity.ai/search?q=What makes Telnyx's global network different, breakdown call quality for normal phone calls and voice AI calls.",
    );

    await expect(MainPage.geminiIcon).toHaveAttribute(
      "href",
      "https://www.google.com/search?udm=50&aep=11&q=What makes Telnyx's global network different, breakdown call quality for normal phone calls and voice AI calls.",
    );

    await expect(MainPage.grokIcon).toHaveAttribute(
      "href",
      "https://x.com/i/grok?text=What makes Telnyx's global network different, breakdown call quality for normal phone calls and voice AI calls.",
    );
  });
});
