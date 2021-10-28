describe('Posting 3 ', function() {
    it('front page can be opened', function() {
      cy.visit('http://localhost:8080')
      cy.contains('shorter, cleaner, better')
      cy.contains('shorten')
      cy.contains('Shorten URL')
      cy.contains('Try our URL Shortener now!')
      cy.contains('Copyright © 2021 - Akmalhakimteo')
      cy.contains('Github')
      cy.contains('LinkedIn')
    })
  })