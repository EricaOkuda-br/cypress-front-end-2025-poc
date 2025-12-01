import { getElement } from "../../support/helper/yaml_elements_helper.js";

export class LoginPage {

    visit() {
        const url = Cypress.env('BASE_URL');
        cy.visit(url);
    }
    async fillUsername() {
        const usuario = Cypress.env('USUARIO');
        getElement('login_el.yaml', 'iptLogin').type(usuario);
    }

    async fillPassword() {
        const senha = Cypress.env('SENHA');
        getElement('login_el.yaml', 'iptSenha').type(senha);
    }

    async clickLoginButton() {
        getElement('login_el.yaml', 'btnLogin').click();
    }

    async validarTituloLogin(expectedTitle) {
        getElement('login_el.yaml', 'titLogin').should('have.text', expectedTitle);
    }

}
