import { $ } from "@wdio/globals";

class MainPage {
  get btnSignUp() {
    return $('header a[href="/sign-up"]');
  }

  get btnContactUs() {
    return $(
      'a[href="https://telnyx.com/contact-us"]:not(.header-md\\:hidden)',
    );
  }

  get btnLogIn() {
    return $('a[href="https://portal.telnyx.com"]:not(.header-md\\:hidden)');
  }

  get linkedinIcon() {
    return $('a[href*="linkedin.com/company/telnyx"]');
  }

  get twitterIcon() {
    return $('a[href*="x.com/telnyx"]');
  }

  get facebookIcon() {
    return $('a[href*="facebook.com/Telnyx"]');
  }

  get chatGPTIcon() {
    return $('a[href*="chat.openai.com"]');
  }

  get claudeIcon() {
    return $('a[href*="claude.ai"]');
  }

  get perplexityIcon() {
    return $('a[href*="perplexity.ai"]');
  }

  get geminiIcon() {
    return $('a[href*="google.com/search"]');
  }

  get grokIcon() {
    return $('a[href*="x.com/i/grok"]');
  }

  get productsLink() {
    return $("button=Products");
  }

  get solutionsLink() {
    return $("button=Solutions");
  }

  get pricingLink() {
    return $("button=Pricing");
  }

  get whyTelnexLink() {
    return $("button=Why Telnyx");
  }

  get resourcesLink() {
    return $("button=Resources");
  }

  get developersLink() {
    return $("button=Developers");
  }

  get companySectionTitle() {
    return $('//footer//p[normalize-space()="Company"]');
  }

  get ourNetworkLink() {
    return $('//footer//a[normalize-space()="Our Network"]');
  }

  get globalCoverageLink() {
    return $('//footer//a[normalize-space()="Global Coverage"]');
  }

  get releaseNotesLink() {
    return $('//footer//a[normalize-space()="Release Notes"]');
  }

  get careersLink() {
    return $('//footer//a[normalize-space()="Careers"]');
  }

  get voiceAILink() {
    return $('//footer//a[normalize-space()="Voice AI"]');
  }

  get aiGlossaryLink() {
    return $('//footer//a[normalize-space()="AI Glossary"]');
  }

  get shopLink() {
    return $('//footer//a[normalize-space()="Shop"]');
  }

  get legalSectionTitle() {
    return $('//footer//*[normalize-space()="Legal"]');
  }

  get dataPrivacyLink() {
    return $('//footer//a[contains(normalize-space(), "Data and Privacy")]');
  }

  get reportAbuseLink() {
    return $('//footer//a[contains(normalize-space(), "Report Abuse")]');
  }

  get privacyPolicyLink() {
    return $('//footer//a[contains(normalize-space(), "Privacy Policy")]');
  }

  get cookiePolicyLink() {
    return $('//footer//a[contains(normalize-space(), "Cookie Policy")]');
  }

  get lawEnforcementLink() {
    return $('//footer//a[contains(normalize-space(), "Law Enforcement")]');
  }

  get acceptableUseLink() {
    return $('//footer//a[contains(normalize-space(), "Acceptable Use")]');
  }

  get trustCenterLink() {
    return $('//footer//a[contains(normalize-space(), "Trust Center")]');
  }

  get countryRequirementsLink() {
    return $(
      '//footer//a[contains(normalize-space(), "Country Specific Requirements")]',
    );
  }

  get websiteTermsLink() {
    return $(
      '//footer//a[contains(normalize-space(), "Website Terms and Conditions")]',
    );
  }

  get serviceTermsLink() {
    return $(
      '//footer//a[contains(normalize-space(), "Terms and Conditions of Service")]',
    );
  }

  get compareSectionTitle() {
    return $('//footer//*[normalize-space()="Compare"]');
  }

  get elevenLabsLink() {
    return $('//footer//a[normalize-space()="ElevenLabs"]');
  }

  get vapiLink() {
    return $('//footer//a[normalize-space()="Vapi"]');
  }

  get basetenLink() {
    return $('//footer//a[normalize-space()="Baseten"]');
  }

  get togetherAiLink() {
    return $('//footer//a[normalize-space()="Together.ai"]');
  }

  get twilioLink() {
    return $('//footer//a[normalize-space()="Twilio"]');
  }

  get bandwidthLink() {
    return $('//footer//a[normalize-space()="Bandwidth"]');
  }

  get vonageLink() {
    return $('//footer//a[normalize-space()="Vonage"]');
  }

  get amazonConnectLink() {
    return $('//footer//a[normalize-space()="Amazon Connect"]');
  }

  async clickProductsLink() {
    await this.productsLink.click();
  }

  async clickSolutionsLink() {
    await this.solutionsLink.click();
  }

  async clickPricingLink() {
    await this.pricingLink.click();
  }

  async clickWhyTelnexLink() {
    await this.whyTelnexLink.click();
  }

  async clickResourcesLink() {
    await this.resourcesLink.click();
  }

  async clickDevelopersLink() {
    await this.developersLink.click();
  }

  async clickContactUsBtn() {
    await this.btnContactUs.click();
  }

  async clickLogInBtn() {
    await this.btnLogIn.click();
  }

  async clickSignUpBtn() {
    await this.btnSignUp.click();
  }

  async clickFooterLink(link) {
    await link.scrollIntoView({
      block: "center",
    });

    await expect(link).toBeDisplayed();

    await link.click();
  }

  async clickOurNetwork() {
    await this.clickFooterLink(this.ourNetworkLink);
  }

  async clickGlobalCoverage() {
    await this.clickFooterLink(this.globalCoverageLink);
  }

  async clickReleaseNotes() {
    await this.clickFooterLink(this.releaseNotesLink);
  }

  async clickCareers() {
    await this.clickFooterLink(this.careersLink);
  }

  async clickVoiceAI() {
    await this.clickFooterLink(this.voiceAILink);
  }

  async clickAIGlossary() {
    await this.clickFooterLink(this.aiGlossaryLink);
  }

  async clickShop() {
    await this.clickFooterLink(this.shopLink);
  }

  async clickDataPrivacy() {
    await this.clickFooterLink(this.dataPrivacyLink);
  }

  async clickReportAbuse() {
    await this.clickFooterLink(this.reportAbuseLink);
  }

  async clickPrivacyPolicy() {
    await this.clickFooterLink(this.privacyPolicyLink);
  }

  async clickCookiePolicy() {
    await this.clickFooterLink(this.cookiePolicyLink);
  }

  async clickLawEnforcement() {
    await this.clickFooterLink(this.lawEnforcementLink);
  }

  async clickAcceptableUse() {
    await this.clickFooterLink(this.acceptableUseLink);
  }

  async clickCountryRequirements() {
    await this.clickFooterLink(this.countryRequirementsLink);
  }

  async clickWebsiteTerms() {
    await this.clickFooterLink(this.websiteTermsLink);
  }

  async clickServiceTerms() {
    await this.clickFooterLink(this.serviceTermsLink);
  }

  async clickElevenLabs() {
    await this.clickFooterLink(this.elevenLabsLink);
  }

  async clickVapi() {
    await this.clickFooterLink(this.vapiLink);
  }

  async clickBaseten() {
    await this.clickFooterLink(this.basetenLink);
  }

  async clickTogetherAi() {
    await this.clickFooterLink(this.togetherAiLink);
  }

  async clickTwilio() {
    await this.clickFooterLink(this.twilioLink);
  }

  async clickBandwidth() {
    await this.clickFooterLink(this.bandwidthLink);
  }

  async clickVonage() {
    await this.clickFooterLink(this.vonageLink);
  }

  async clickAmazonConnect() {
    await this.clickFooterLink(this.amazonConnectLink);
  }
}

export default new MainPage();
