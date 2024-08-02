/// <references types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });
    
    afterEach(() => {
        cy.screenshot()
    })
    
    it('Deve selecionar um produto da lista', () => {
     produtosPage.buscarProdutoLista('Argus All-Weather Tank')
        cy.get('.product_title').should('exist')

        
    });

    it.only('Deve buscar um produto com sucesso', () => {
        produtosPage.buscarProduto('Pierce Gym Short')
        cy.get('.product_title').should('exist')

        
    });
});