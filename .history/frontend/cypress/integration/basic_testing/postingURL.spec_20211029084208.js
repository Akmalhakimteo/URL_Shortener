describe("Testing posting functions", function () {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });

  

  it("When posting, the phrase `Try our URL Shortener now!` should dissapear", function () {
    
    cy.get('input').type('https://www.tech.gov.sg/careers/overview/') 
    cy.get('.btn').click()
    cy.contains('Try our URL Shortener now!').should('not.exist');

  });

  it("When posting, the phrase `Try our URL Shortener now!` should dissapear", function () {
    
    cy.get('input').type('https://www.tech.gov.sg/careers/overview/') 
    cy.get('.btn').click()
    
    

  });




});
