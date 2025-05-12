class produtosPage {

visitarUrl() {
    cy.visit('produtos')
}

buscarProduto(nomeProduto) {
   cy.get('[name="s"]').eq(1).type(nomeProduto)
   cy.get('.button-search').eq(1).click()
}

buscarProdutoLista(nomeProduto) {
 cy.get('.products > .row')
    .contains(nomeProduto)
    .click()
}

visitarProduto() {

}

addProdutoCarrinho() {

}

}

export default new produtosPage()