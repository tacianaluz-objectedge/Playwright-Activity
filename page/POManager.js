const { LoginPage } = require('./LoginPage');
const { EstoquePage } = require('./EstoquePage');

exports.POManager = class POManager {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.estoquePage = new EstoquePage(this.page);
    }

    getLoginPage() {
        return this.loginPage;
    }

    getEstoquePage() {
        return this.estoquePage;
    }
}