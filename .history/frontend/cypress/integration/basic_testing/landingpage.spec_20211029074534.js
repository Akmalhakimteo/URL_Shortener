describe('Front End Page', function() {
    it('front page can be opened', function() {
      cy.visit('http://localhost:8080')
      cy.contains('shorter,cleaner,better')
      cy.contains('Shorten URL')
      cy.contains('Shorten URL')
    })
  })