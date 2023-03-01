describe('1st Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    console.log("Page works")
  })
})


describe('2nd test', () => {
  it('visits the Category Page', () => {
    cy.visit('/categories')
  })
})

describe('3rd test', () => {
  it('visits the Artist Page', () => {
    cy.visit('/artists')
  })
})

describe('4th test', () => {
  it('visits the All Art Page', () => {
    cy.visit('/all-arts')
  })
})

describe('5th test', () => {
  it('visits the Sign up Page', () => {
    cy.visit('/sign-up')
  })
})

describe('6th test', () => {
  it('visits the Sign in Page', () => {
    cy.visit('/sign-in')
  })
})

describe('7th test', () => {
  it('visits the Warning Page', () => {
    cy.visit('/warning')
  })
})


describe('8th test | URL Navigations', () => {
  it('Visit the Clicked URLs', () => {
    cy.visit('/about')
  })
})

