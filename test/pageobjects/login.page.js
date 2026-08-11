import { $ } from "@wdio/globals";

class LogInPage {
  get signInWithPasswordBtn() {
    return $('//button[normalize-space()="Sign in with password"]');
  }

  get emailFld() {
    return $('input[name="email"]');
  }

  get passwordFld() {
    return $('input[name="password"]');
  }

  get loginBtn() {
    return $('//button[@type="submit" and normalize-space()="Log in"]');
  }

  async clickSignInWithPasswordBtn() {
    await this.signInWithPasswordBtn.click();
  }

  async populateForm(user) {
    await this.emailFld.setValue(user.email);
    await this.passwordFld.setValue(user.password);
  }
}

export default new LogInPage();
