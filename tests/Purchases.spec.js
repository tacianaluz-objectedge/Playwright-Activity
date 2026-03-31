const { test } = require('@playwright/test');
const { POManager } = require('../pages/POManager');

test.describe('Jornada de Compra no E-commerce', () => {

    test('Deve fazer login e adicionar uma mochila ao carrinho', async ({ page }) => {
        const poManager = new POManager(page);
        
        const loginPage = poManager.getLoginPage();
        const estoquePage = poManager.getEstoquePage();

        await test.step('Acessar o sistema', async () => {
            await loginPage.acessarSite();
        });

        await test.step('Realizar autenticação', async () => {
            await loginPage.fazerLogin('standard_user', 'secret_sauce');
            await estoquePage.validarLoginComSucesso();
        });

        await test.step('Adicionar produto ao carrinho', async () => {
            await estoquePage.adicionarMochilaAoCarrinho();
            await estoquePage.validarProdutoNoCarrinho('1');
        });
    });

});