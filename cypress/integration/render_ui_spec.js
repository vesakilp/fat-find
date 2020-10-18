describe("UI components are rendered", () => {
    it("Search field is rendered", () => {
      cy.visit("");
      cy.get("#food-search-field").should("exist");
    })
  })