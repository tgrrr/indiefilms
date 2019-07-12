/// <reference types="cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import 'cypress-react-unit-test';

Given(/I visit the homepage$/, () => {
  cy.visit('http://localhost:3000/')
});

When(/^I search for a TV show$/, () => {
  cy.get('[data-testid=SearchPage]').should('have.class', 'SearchPage')
});

// TODO: fix title
Then(/^I get the results for that TV show {string}$/, (
  // title
  ) => {
  cy.get('[data-testid=SearchResults__items]').should('have.class', 'SearchResults__items')
});