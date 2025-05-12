/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: login', () => {

    beforeEach(() => {
        cy.visit ('minha-conta')
    });

    /// afterEach(() => {
        /// cy.screenshot ()
    /// });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('tiolucas.teste@email.com')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()      
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, tiolucas.teste')
        
    })

    it('Deve Exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('tiolucas.testtest@email.com')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido.')
        
    });
    
    it('Deve Exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('tiolucas.teste@email.com')
        cy.get('#password').type('teste@124')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail tiolucas.teste@email.com está incorreta.')
    });
    it('Deve fazer login com sucesso - Usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()      
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, tiolucas.teste')
    });

    it('Deve fazer login com sucesso - Usando Fixture', () => {
        cy.fixture('perfil').then( dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha, {log: false})
            cy.get('.woocommerce-form > .button').click()      
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, tiolucas.teste')
        })
    });
    
    it('Deve fazer login com sucesso - Usando Comandos customizados', () => {
        cy.login('tiolucas.teste@email.com', 'teste@123')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, tiolucas.teste')
    });

});