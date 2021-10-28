describe("Testing posting functions", function () {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });

  

  it("When posting, the phrase `Try our URL Shortener now!` should dissapear", function () {
    
    cy.get('input').type('https://www.tech.gov.sg/careers/overview/') 
    cy.get('.btn').click()
    cy.contains('Try our URL Shortener now!').should('not.exist');

  });

  it("After posting, input box is empty", function () {
    
    cy.get('input').type('https://www.tech.gov.sg/careers/overview/') 
    cy.get('.btn').click()
    cy.get('input').should('have.value', '');
    


  });

  it("has anchor tags", () => {
    cy.visit("2020/develop-preview-test");
    cy.contains("a", "#");
  });




});
