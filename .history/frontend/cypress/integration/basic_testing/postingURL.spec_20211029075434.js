describe("Testing posting functions", function () {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });

  it("When posting, the phrase `Try our URL Shortener now!` should dissapear", function () {
    cy.get('input').invoke('attr', 'placeholder').should('contain', 'username')

  });
});
