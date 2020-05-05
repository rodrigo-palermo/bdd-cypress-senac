/* global Given, Then, When */

import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage

And("informo o usuário {} incorreto", (usuario) => {
    loginPage.informarUsuario(usuario);
})

And("informo a senha {} incorreta", (senha) => {
    loginPage.informarSenha(senha);
})

Given("acesso o site Portal do Aluno SENAC", () => {
    loginPage.acessarSite();
})

When("acesso a pagina de login", () => {
    loginPage.clicarBotaoPaginaLogin();
})

When("clico no botão de realizar login", () => {
    loginPage.clicarBotaoRealizarLogin();
})

Then("devo visualizar a opção de lembrar meu login", () => {
    loginPage.visualizarLabelLembrarLogin();
})

Then("marco a opção de lembrar meu login", () => {
    loginPage.marcarCheckboxLembrarLogin();
})

Then("devo visualizar mensagem de erro", () => {
    loginPage.visualizarErroLogin();
})