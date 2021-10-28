describe("Testing posting functions", function () {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });

  

  it("When posting, the phrase `Try our URL Shortener now!` should dissapear", function () {
    cy.contains('log in').click()
    cy.get('input').type('mluukkai')
    cy.get('input:last').type('salainen')

  });
});
