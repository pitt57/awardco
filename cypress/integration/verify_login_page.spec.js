describe('Verify login link and page exist', () => {
  it('Gets, types and asserts', () => {
    cy.visit('https://www.award.co/')

    cy.get('.navigation-right').should('contain', 'Sign In')
	
	cy.request('https://app.awardco.com/start/login').its('status').should('eq', 200)
	
  })
})
