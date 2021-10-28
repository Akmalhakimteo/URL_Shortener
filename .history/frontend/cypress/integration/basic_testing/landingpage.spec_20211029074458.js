describe('Note app', function() {
    beforeEach(() => {

        cy.visit('http://localhost:8080/')
    it('front page can be opened', function() {
      cy.visit('http://localhost:3000')
      cy.contains('Notes')
      cy.contains('Note app, Department of Computer Science, University of Helsinki 2021')
    })
  })