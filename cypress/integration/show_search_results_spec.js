describe("Search results are shown", () => {
    it("Omena is found with search term omen", () => {
      cy.visit("");
    })
    it("'Omena' is found with search term 'omen' (with leading whitespace)", () => {
        cy.visit("");
        cy.get("#fasdf").should("exist");
      })
      it("'Rasvaton maito' is found search term 'mait' (with leading whitespace)", () => {
        cy.visit("");
        cy.get("#fasdf").should("exist");
      })
      it("'Kevytmaito' is found search term 'mait' (with leading whitespace)", () => {
        cy.visit("");
        cy.get("#fasdf").should("exist");
      })
      it("Omena is shown with green traffic light", () => {
        cy.visit("");
        cy.get("#fasdf").should("exist");
      })
      it("Kevytmaito is shown with yellow traffic light", () => {
        cy.visit("");
        cy.get("#fasdf").should("exist");
      })
      it("Pekoni is shown with red traffic light", () => {
        cy.visit("");
        cy.get("#fasdf").should("exist");
      })
  })