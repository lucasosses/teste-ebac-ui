/// <reference  types="cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });
    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block')
            .first()
            .click()
        cy.get('.widget-title > span').should('exist')
    })
    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block')
            .last()
            .click()
        cy.get('.widget-title > span').should('exist')
    })
    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block')
            .eq(2)
            .click()
        cy.get('.widget-title > span').should('exist')
    })
    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block')
            .contains('Aero Daily Fitness Tee')
            .click()
        cy.get('.widget-title > span').should('exist')
    });
    
});