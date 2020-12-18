describe('Onboarding app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  const fullName = () => cy.get('[for="name"] > input')
  const emailInput = () => cy.get('[for="email"] > input')
  const submitButton = () => cy.get('button')

  describe('Onboarding App', () => {
    it('Allows to submit after full', () => {
      fullName().type('Claudiu Sarb')
      emailInput().type('sarb_claudiu@yahoo.com')
      submitButton().should('not.be.disabled')
      submitButton().click()
    })
  })
})