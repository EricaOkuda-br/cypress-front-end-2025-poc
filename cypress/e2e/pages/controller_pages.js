import { LoginPage} from './login_page.js';

export class ControllerPages {
   
    loginPage;

    constructor() {
        this.loginPage = new LoginPage();
    }

    LoginPage() {
        return this.loginPage;
    }
}