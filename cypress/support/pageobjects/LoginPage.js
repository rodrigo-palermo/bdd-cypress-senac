/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements
const url = Cypress.config("baseUrl")

class LoginPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    // Clica no botão de realizar login
    clicarBotaoRealizarLogin() {
        cy.get(loginElements.botaoRealizarLogin()).pause().click()
    }

    // Informa usuário no input do login
    informarUsuario(usuario) {
        cy.get(loginElements.inputUsuario()).type(usuario, {delay: 300})
    }

    // Informa senha no input da senha
    informarSenha(senha) {
        cy.get(loginElements.inputSenha()).type(senha, {delay: 100})
    }

    // Verifica se tem opção com texto "Lembrar meu login"
    visualizarLabelLembrarLogin() {
        cy.get(loginElements.labelLembrarLogin()).should('contain', 'Lembrar meu login').pause()
    }

    // Marca a opção de Lembrar meu login
    marcarCheckboxLembrarLogin() {
        cy.get(loginElements.checkboxLembrarLogin()).check().pause()
    }

    // Visualizar mensagem de erro "Usuário ou senha inválidos."
    visualizarErroLogin() {
        cy.get(loginElements.mensagemErro()).should('contain', 'Usuário inválido ou senha incorreta.').pause()
    }
    
}

export default LoginPage;
