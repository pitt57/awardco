describe('Check first blog article', () => {
  it('Gets, types and asserts', () => {
    cy.visit('https://www.award.co/blog')

	cy.get('.blog-heading').should('be.visible')
	cy.get('.w-dyn-list').eq(0).should('contain.text', 'The 12 Best Employee Gift Ideas')
	cy.get('a[href*="/blog/best-gifts-for-employees"]').click()
	cy.get('.blog-heading').should('contain.text', 'The 12 Best Employee Gift Ideas')
	cy.get('.container-tight').find('p').should('contain.text', 'They say it’s better to give than to receive')
	
  })
})
