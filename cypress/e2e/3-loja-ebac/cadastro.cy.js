/// <references types="cypress"/>
import { faker } from '@faker-js/faker';

describe ('Funcionalidade: cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    
    afterEach(() => {
        cy.screenshot()
    });

    it('Realizar cadastro com sucesso', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('teste@123')
        cy.get(':nth-child(4) > .button').click()       

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
    });

    it('Realizar cadastro com sucesso e preencher campos do menu Detalhes da conta', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('teste@123')
        cy.get(':nth-child(4) > .button').click()       
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.person.firstName())
        cy.get('#account_last_name').type(faker.person.lastName())
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('exist')     
    });

    it('Deve realizar cadastro com sucesso - usando variavéis', () => {
        var email = faker.internet.email()
        var nome = faker.person.firstName()
        var sobrenome = faker.person.lastName()


        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type('teste@123')
        cy.get(':nth-child(4) > .button').click()       
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nome)
        cy.get('#account_last_name').type(sobrenome)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('exist')      
    });
})
