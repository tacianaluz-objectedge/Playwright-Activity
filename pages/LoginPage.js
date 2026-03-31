exports.LoginPage = class LoginPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.inputUsuario = page.locator('[data-test="username"]');
        this.inputSenha = page.locator('[data-test="password"]');
        this.btnLogin = page.locator('[data-test="login-button"]');
    }

    async acessarSite() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async fazerLogin(usuario, senha) {
        await this.inputUsuario.fill(usuario);
        await this.inputSenha.fill(senha);
        await this.btnLogin.click();
    }
}