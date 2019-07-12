// / <reference types="cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const isNumeric = number => (
  !Number.isNaN(parseFloat(number)) && Number.isFinite(number)
);

const isTitleCase = word => word[0] === word[0].toUpperCase()[0]
    && word.substr(1) === word.substr(1).toLowerCase();

// Scenario: Search TV details
Given(/I get search Results$/, () => {
  cy.visit('http://localhost:3000/')
});
// cy.mount(<SearchPageContainer />)

// TODO:
// When(/^I search for a TV show$/, () => {
//   cy.log('TODO: stub api call');
// });

Then(/^I get a Title$/, () =>
  cy.get('[data-testid=SearchResults__item--title]')
    .should('have.class', 'SearchResults__item--title')
);

Then(/^I get a Year$/, () => {
  cy.log('There should be 20 elements');
  cy.get('[data-testid=SearchResults__item--year]')
    .should($el => expect($el).to.have.length(20))
    .each(($el) => {
      $el && isNumeric($el.text())                // 'If a year is provided'
          ? expect($el.text()).to.have.length(4)  // We should get a 4 digit year
          : expect($el.text()).to.have.length(0)  // if no year exists
    });
});

Then(/^I get a Rating$/, () =>
  cy.get('[data-testid=SearchResults__item--rating]')
    .each(($el) => {
      if($el.text().length) {
        expect(isNumeric($el.text()));
      }
    })
);

Then(/^I get a Language$/, () =>
  cy.get('[data-testid=SearchResults__item--language]')
    .should('have.length', 20) // 20 results
    .and($el => expect($el.text()).to.include('English')) // more fragile test
    .and($el => isTitleCase($el.text())) // Check for 'English', not 'en'
);
