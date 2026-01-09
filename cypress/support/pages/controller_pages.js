import { LoginPage} from '../../pages/login_page';

export class ControllerPages {
   
    loginPage;

    constructor() {
        this.loginPage = new LoginPage();
    }

    LoginPage() {
        return this.loginPage;
    }
}