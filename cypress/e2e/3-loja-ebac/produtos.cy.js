/// <references types="cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });
    
    afterEach(() => {
        cy.screenshot()
    })
    
    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block')
        //.first()
        //.last()
        //.eq(2)
        .contains('Argus All-Weather Tank')
        .click()
        .wait(3000)

        cy.get('.product_title').should('exist')

        
    });
});