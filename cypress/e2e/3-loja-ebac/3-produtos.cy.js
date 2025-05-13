/// <reference  types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });
    
    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista ('Arcadio Gym Short')
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
        
    })

    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Ajax Full-Zip Sweatshirt'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
        
    });

    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('Aero Daily Fitness Tee')
        cy.get('.product_title').should('contain', 'Aero Daily Fitness Tee')
    });

    it('Deve adicionar produto ao carrinho', () => {
        let qtd = 2
        produtosPage.buscarProduto('Aether Gym Pant')
        produtosPage.addProdutoCarrinho('33', 'Blue', qtd)
                
    });

    it.only('Deve adicionar produto ao carrinho - Buscando da lista de dados', () => {
        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProduto(dados[0].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[0].tamanho, 
                dados[0].cor, 
                dados[0].quantidade)
            cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto)
        })
        
                
    });
});