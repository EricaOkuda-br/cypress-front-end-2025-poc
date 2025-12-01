import { loadYamlElements } from "../../support/helper/yaml_elements_helper.js";

export class LoginPage {  

    async initElements() {
        this.element_login = await loadYamlElements('login_el.yaml');
    }

    
    visit() {
        cy.visit('https://www.saucedemo.com/');
    }

    async fillUsername(username) {

        cy.get(this.element_login.iptLogin).type(username);
    }
}