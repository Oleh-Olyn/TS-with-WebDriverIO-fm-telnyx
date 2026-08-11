import { $ } from "@wdio/globals";

class SignUpPage {
  get inputCompanyEmail() {
    return $("#sign-up-email");
  }

  get companyEmailLabel() {
    return $('label[for="sign-up-email"]');
  }

  get inputFirstName() {
    return $("#sign-up-first-name");
  }

  get firstNameLabel() {
    return $('label[for="sign-up-first-name"]');
  }

  get inputLastName() {
    return $("#sign-up-last-name");
  }

  get lastNameLabel() {
    return $('label[for="sign-up-last-name"]');
  }

  get inputPassword() {
    return $("#sign-up-password");
  }

  get passwordLabel() {
    return $('label[for="sign-up-password"]');
  }

  get checkboxSignUpTerms() {
    return $("#sign-up-terms");
  }

  get signUpTermsLabel() {
    return $('label[for="sign-up-terms"]');
  }

  get checkboxSignUpMarketing() {
    return $("#sign-up-marketing");
  }

  get signUpMarketingLabel() {
    return $('label[for="sign-up-marketing"]');
  }

  get btnSubmit() {
    return $('button[type="submit"]');
  }

  get signUpEmailMessage() {
    return $("#sign-up-email_message");
  }

  async populateForm(user) {
    await this.inputCompanyEmail.setValue(user.email);
    await this.inputFirstName.setValue(user.firstName);
    await this.inputLastName.setValue(user.lastName);
    await this.inputPassword.setValue(user.password);
    await this.checkboxSignUpTerms.click();
    await this.checkboxSignUpMarketing.click();
  }

  async populateInvalidEmail(email) {
    await this.inputCompanyEmail.click();
    await browser.keys(["Control", "a", "Backspace"]);
    await this.inputCompanyEmail.setValue(email);
    await browser.keys("Tab");
  }
}

export default new SignUpPage();
