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

    it('Deve buscar um produto com sucesso', () => {
        produtosPage.buscarProduto('Pierce Gym Short')
        cy.get('.product_title').should('exist')

        
    });

    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('Pierce-Gym-Short')
        cy.get('.product_title').should('exist')
        
    });

    it('Deve visitar a página do produto usando a constante de substituição', () => {
        produtosPage.visitarProduto('Pierce Gym Short')
        cy.get('.product_title').should('exist')
        
    });

    it('Deve adicionar produto ao carrinho', () => {
        let qtd = 7
        produtosPage.buscarProduto('Abominable Hoodie')
        produtosPage.addProdutoCarrinho('XS', 'Red', qtd)
        
        cy.get('.woocommerce-message').should('contain', qtd + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')
        
    });

    it.only('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
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