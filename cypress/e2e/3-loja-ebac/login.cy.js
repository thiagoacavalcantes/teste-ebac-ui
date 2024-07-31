/// <references types="cypress"/>

describe ('Funcionalidade: Login', () => {
    
    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('thiago.teste001@ebac.com.br')
        cy.get('#password').type('senha@123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, thiago.teste001 (não é thiago.teste001? Sair)')
})
 
    })