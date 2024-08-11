describe('Search Bar', () => {
  beforeEach(() => {
    cy.intercept('GET', '/products.json', { fixture: 'products.json' }).as('getProducts')
    cy.visit('http://localhost:3000')
    cy.wait('@getProducts')
  })

  it('should display the search input and button', () => {
    cy.get('[data-testid="search-input"]').should('be.visible')
    cy.get('[data-testid="search-button"]').should('be.visible')
  })

  it('should allow typing into the search input', () => {
    const searchTerm = 'Růžové koťátko'
    cy.get('[data-testid="search-input"]').type(searchTerm).should('have.value', searchTerm)
  })

  it('should show suggestions when typing', () => {
    cy.get('[data-testid="search-input"]').type('Růžové')
    cy.get('[data-testid="suggestions-container"]').should('be.visible')
    cy.get('[data-testid="suggestion-item"]').should('have.length.at.least', 1)
  })

  it('should perform search when clicking the confirm button', () => {
    cy.get('[data-testid="search-input"]').type('Růžové koťátko')
    cy.get('[data-testid="search-button"]').click()
    cy.get('[data-testid="product-list"]').should('be.visible')
  })

  it('should select a product when clicking on a suggestion', () => {
    cy.get('[data-testid="search-input"]').type('Růžové')
    cy.get('[data-testid="suggestion-item"]').first().click()
    
    cy.get('[data-testid="selected-product"]').should('be.visible')
  })
})