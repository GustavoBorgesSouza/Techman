describe ("Integração OCR", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
    })

    it("Deve logar e inserir a imagem OCR retornando o valor correto da mesma", () =>{
        
        cy.get(".cabecalhoPrincipal-nav-login").should("exist")
        cy.get(".cabecalhoPrincipal-nav-login").click()

        cy.get(".input__login").first().type("tsuka@email.com")
        cy.get(".input__login").last().type("123456789")

        cy.get("#btn__login").click();

        cy.get("input[type=file]").first().selectFile("src/assets/tests/codigoF3Dell.png")

        cy.wait(3000)

        cy.get("#codigoPatrimonio").should("have.value", "1202558")

        cy.get("#nomePatrimonio").type("Revista")
        
        cy.get("#nomePatrimonio").should("have.value", "Revista")
        
        cy.get("input[type=checkbox]").check()

        cy.get("input[type=file]").last().selectFile("src/assets/tests/Texto.jpg")

        cy.wait(3000)

        cy.get(".btn__cadastro").click()

        cy.wait(3000)

        cy.get(".card div h4").last().should("have.text", "Revista").get(".card .excluir").last().click()
    })

})