/// <reference types="cypress" />
import $ from 'jquery'

context('Actions', () => {
  it('.type() - type into a DOM element', () => {
    cy.visit('https://example.cypress.io/commands/actions')
    $('.x').append('1234')
  })
})
