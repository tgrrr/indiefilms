// / <reference types="cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given(/I visit the homepage$/, () =>
  cy.visit('/')
);

When(/^I search for a TV show$/, () =>
  cy.get('[data-testid=SearchPage]').should('have.class', 'SearchPage')
);

// LATER: add titles
Then(/^I get the results for that TV show {string}$/, () => (
  cy.get('[data-testid=SearchResults__items]')
    .should('have.class', 'SearchResults__items')
  )
);
