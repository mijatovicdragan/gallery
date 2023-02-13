class RegisterPage {
  get registerLink() {
    return cy.get("a[href='/register']");
  }

  get firstNameInput() {
    return cy.get("#first-name");
  }

  get lastNameInput() {
    return cy.get("#last-name");
  }

  get emailInput() {
    return cy.get("#email");
  }

  get passwordInput() {
    return cy.get ("#password");
  }

  get passwordConfirmationInput() {
    return cy.get ("#password-confirmation");
  }

  get tosCheckbox() {
    return cy.get(":checkbox");
  }

  get submitButton() {
    return cy.get("button");
  }

  registerWithValidData(firstName, lastName, email, password) {
    this.firstNameInput.type(firstName);
    this.lastNameInput.type(lastName);
    this.emailInput.type(email);
    this.passwordInput.type(password);
    this.passwordConfirmationInput.type(password);
    this.tosCheckbox.check();
    this.submitButton.click();
  
 }
}

export const registerPage = new RegisterPage();
