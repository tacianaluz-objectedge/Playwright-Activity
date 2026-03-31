const { expect } = require('@playwright/test');

exports.EstoquePage = class EstoquePage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.tituloPagina = page.locator('.title');
        this.btnAddMochila = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.iconeCarrinhoBadge = page.locator('.shopping_cart_badge');
    }

    async validarLoginComSucesso() {
        await expect(this.tituloPagina).toHaveText('Products');
    }

    async adicionarMochilaAoCarrinho() {
        await this.btnAddMochila.click();
    }

    async validarProdutoNoCarrinho(quantidadeDesejada) {
        await expect(this.iconeCarrinhoBadge).toHaveText(quantidadeDesejada);
    }
}