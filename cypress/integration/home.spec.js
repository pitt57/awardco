describe('Open Home Page', () => {
  it('Gets, types and asserts', () => {
    cy.visit('https://www.award.co/')

    //cy.contains('type').click()

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', 'award.co')

    // Get an input, type into it and verify that the value has been updated
    //cy.get('.action-email')
      //.type('fake@email.com')
      //.should('have.value', 'fake@email.com')
  })
})