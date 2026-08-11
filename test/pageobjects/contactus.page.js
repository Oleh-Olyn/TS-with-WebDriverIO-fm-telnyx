import { $ } from "@wdio/globals";

class ContactUsPage {
  get telnyxIcon() {
    return $('img[alt="Telnyx - Global Communications Platform Provider"]');
  }

  get firstNameFld() {
    return $("#FirstName");
  }

  get lastNameFld() {
    return $("#LastName");
  }

  get emailFld() {
    return $("#Email");
  }

  get phoneNumberFld() {
    return $("#Phone_Number_Base__c");
  }

  get websiteFld() {
    return $("#Website");
  }

  get telnyxAboutFld() {
    return $("#How_did_you_hear_about_Telnyx_Open__c");
  }

  get reasonContactLkp() {
    return $("#Reason_for_Contact__c");
  }

  get countryLkp() {
    return $("#Phone_Number_Extension__c");
  }

  get subscriptionChckbx() {
    return $("#mktoCheckbox_16475_0");
  }

  get submitBtn() {
    return $(".mktoButton");
  }
  async clickTelnyxIcon() {
    await this.telnyxIcon.click();
  }
}

export default new ContactUsPage();
