
import { authLogin } from "../page_objects/loginPage";
import { allGalleries } from "../page_objects/allGalleries";

const credentials = {
    email: "vivify77@test.com",
    password: "vivify77",
};

describe("all galleries page test", () => {
    beforeEach("visit app and login",() => {
        cy.visit("/login");
        authLogin.login(credentials.email, credentials.password);
    });

    it("loads page successfully", () => {
        allGalleries.allGalleriesHeading.should("be.visible")
            .should("be.visible")
            .and("exist")
            .and("have.text", "All Galleries");

        allGalleries.allGalleries
            .should("be.visible")
            .should("have.length", 10);

        allGalleries.singleGallery
            .find("img")
            .should("be.visible")
    });
});