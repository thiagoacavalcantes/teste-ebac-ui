/// <references types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe ('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });
    
    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        
        cy.get('#username').type('thiago.teste001@ebac.com.br')
        cy.get('#password').type('senha@123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, thiago.teste001 (não é thiago.teste001? Sair)')
    })

        it('Deve exibir uma mensagem de erro ao inserir um usuário inválido', () => {

        cy.get('#username').type('thiago.teste002@ebac.com.br')
        cy.get('#password').type('senha@123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    });

        it('Deve exibir mensagem de erro ao inserir senha inválida', () => {

        cy.get('#username').type('thiago.teste001@ebac.com.br')
        cy.get('#password').type('senha@1234')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail thiago.teste001@ebac.com.br está incorreta. Perdeu a senha?')
    });

    it('Deve fazer login com sucesso utilizando a massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, thiago.teste001 (não é thiago.teste001? Sair)')
        
    });

    it('Deve fazer login com sucesso utilizando fixture', () => {
        cy.fixture('perfil').then( dados => {
            cy.get('#username').type(dados.usuario , {log:false})
            cy.get('#password').type(dados.senha , { log:false})
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, thiago.teste001 (não é thiago.teste001? Sair)')
        })
    });


      it('Deve fazer login com sucesso - usando comandos customizados', () => {
        cy.login('thiago.teste001@ebac.com.br' , 'senha@123')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, thiago.teste001 (não é thiago.teste001? Sair)')
        
      });
        
        
   
 
    })