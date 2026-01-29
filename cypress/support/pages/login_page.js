import { loadYamlElements } from "../helper/yaml_elements_helper.js";

export class LoginPage {
    element_login;

    ensureElements() {
        if (this.element_login) {
            return cy.wrap(this.element_login, { log: false });
        }

        return loadYamlElements("login_el.yaml", "login").then((elements) => {
            this.element_login = elements;
            return elements;
        });
    }

    visit() {
        return this.ensureElements().then(() => {
            cy.visit(Cypress.env("BASE_URL") || "https://www.saucedemo.com/");
        });
    }

    fillUsername(username = Cypress.env("USUARIO") || "standard_user") {
        return this.ensureElements().then(() => {
            cy.get(this.element_login.iptLogin).type(username);
            cy.get(this.element_login.iptLogin).should("have.value", username);
        });
    }

    fillPassword(password = Cypress.env("SENHA") || "secret_sauce") {
        return this.ensureElements().then(() => {
            cy.get(this.element_login.iptSenha).type(password);
        });
    }

    clickLoginButton() {
        return this.ensureElements().then(() => {
            cy.get(this.element_login.btnLogin).click();
        });
    }

    validarTituloLogin(expectedTitle) {
        return this.ensureElements().then(() => {
            cy.get(this.element_login.titLogin).should("have.text", expectedTitle);
        });
    }
}