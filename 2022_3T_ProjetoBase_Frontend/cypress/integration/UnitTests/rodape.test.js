//Metodo de teste - describe("descricao, funcao a ser executada")

describe("Componente - Rodape", () => {

    //Mega pre condição para testes de front
    //Antes de tudo, abrir o navegador 
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
    })

    //Descricao
    it("Deve Existir Uma Tag Footer No Corpo Do documento", () => {
        //Pré condição
        
        //Procedimento
        
        cy.get("footer").should("exist")

        //Resultado esperado
    })

    it("Deve conter o texto escola senai de informatica", () =>{
        
        cy.get(".rodapePrincipal section div p").should("have.text", "Escola SENAI de Informática - 2021")
    })

    it("Deve verificar se footer está visivel e se possue uma classe chamada rodapePrincipal", () => {
        cy.get("footer").should("be.visible").and("have.class", "rodapePrincipal")
    })
})