describe('Attempt to sign in with fake account', () => {
  it('Gets, types and asserts', () => {
    cy.visit('https://app.awardco.com/start/login')

    cy.get('.form-control')
      .type('fakeit')
      .should('have.value', 'fakeit')	// try to sign in as user(domain) "fakeit"
	
	cy.get('.button').click()
	
	cy.on('window:alert',(txt)=>{
         expect(txt).to.contains('Domain not found.')	// Should fail to sign in. Expect error "Domain not found"
	})
  })
})

