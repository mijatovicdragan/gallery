import { registerPage } from "../page_objects/registerPage";
import {faker} from '@faker-js/faker';

describe("Register test", () => {
    let userData = {
        firstName: faker.name.firstName(),
        lastName: faker.nname.lastName(),
        email: faker.internet.email(),
        password: faker.lorem.word(8) + 1,
        shortPassword: "pass",
        invalidEmail: "testmail.com"
    };

    before("visit app and click on the register link", () => {
        cy.visit("/");
        registerPage.registerLink.click();
        cy.url().should("contain", "/register");
    });


    it("register with valid data",() => {    
        registerPage.registerWithValidData(
            userData.firstName,
            userData.lastName,
            userData.email,
            userData.password
        );
        cy.url().should("not.contain", "/register");
    });

} );