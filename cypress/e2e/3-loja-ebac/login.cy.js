/// <reference types="cypress"/>

describe('Funcionalidade: login', () => {

    beforeEach(() => {
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot ()
    });

    it ('Deve fazer login com sucesso', () => {
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

});
