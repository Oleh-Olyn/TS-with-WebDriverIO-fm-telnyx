import { browser, expect } from "@wdio/globals";
import MainPage from "../pageobjects/main.page.js";

describe("Checking footer links in Legal section", () => {
  beforeEach(async () => {
    await browser.url("/");
  });

  it("test-case 12", async () => {
    await expect(MainPage.legalSectionTitle).toBeDisplayed();
    await expect(MainPage.dataPrivacyLink).toBeDisplayed();
    await expect(MainPage.reportAbuseLink).toBeDisplayed();
    await expect(MainPage.privacyPolicyLink).toBeDisplayed();
    await expect(MainPage.cookiePolicyLink).toBeDisplayed();
    await expect(MainPage.lawEnforcementLink).toBeDisplayed();
    await expect(MainPage.acceptableUseLink).toBeDisplayed();
    await expect(MainPage.trustCenterLink).toBeDisplayed();
    await expect(MainPage.countryRequirementsLink).toBeDisplayed();
    await expect(MainPage.websiteTermsLink).toBeDisplayed();
    await expect(MainPage.serviceTermsLink).toBeDisplayed();

    await expect(MainPage.dataPrivacyLink).toHaveAttribute(
      "href",
      expect.stringContaining("/data-privacy"),
    );

    await expect(MainPage.reportAbuseLink).toHaveAttribute(
      "href",
      expect.stringContaining("/report-abuse"),
    );

    await expect(MainPage.privacyPolicyLink).toHaveAttribute(
      "href",
      expect.stringContaining("/privacy-policy"),
    );

    await expect(MainPage.cookiePolicyLink).toHaveAttribute(
      "href",
      expect.stringContaining("/cookie-policy"),
    );

    await expect(MainPage.lawEnforcementLink).toHaveAttribute(
      "href",
      expect.stringContaining("/law-enforcement"),
    );

    await expect(MainPage.acceptableUseLink).toHaveAttribute(
      "href",
      expect.stringContaining("/acceptable-use"),
    );

    await expect(MainPage.trustCenterLink).toHaveAttribute(
      "href",
      "https://trust.telnyx.com",
    );

    await expect(MainPage.countryRequirementsLink).toHaveAttribute(
      "href",
      expect.stringContaining("/country-specific-requirements"),
    );

    await expect(MainPage.websiteTermsLink).toHaveAttribute(
      "href",
      expect.stringContaining("/terms-and-conditions"),
    );

    await expect(MainPage.serviceTermsLink).toHaveAttribute(
      "href",
      expect.stringContaining("/terms-and-conditions-of-service"),
    );
  });
});
