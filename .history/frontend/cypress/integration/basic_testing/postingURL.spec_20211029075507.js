describe("Testing posting functions", function () {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });

  it("C", function () {
    cy.get('input').invoke('attr', 'placeholder').should('contain', 'Insert your URL here')

  });

  it("When posting, the phrase `Try our URL Shortener now!` should dissapear", function () {
    cy.get('input').invoke('attr', 'placeholder').should('contain', 'Insert your URL here')

  });
});
