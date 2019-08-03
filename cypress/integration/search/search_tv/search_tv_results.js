// / <reference types="cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { isNumeric, isTitleCase } from '../../../../src/utils';

// Scenario: Search TV details
Given(/I get search Results$/, () => {

  cy.fixture('getSearch.json').as('getSearch');

  // Setup a stubbed REST api for The Movie DB:
  cy.server();
  cy.visit('/');
  // Catch all requests to search for TV shows:
  cy.route('GET', '/3/search/tv*', '@getSearch').as('useFetchSearch');
});

When(/^I search for a TV show$/, () => {
cy.wait('@useFetchSearch')
  .should((xhr) => {
    expect(xhr.responseBody).to.have.property('page', 1);
    expect(xhr.responseBody.results[0]).to.have.property('name', 'Rick and Morty');
  });
});

Then(/^I get a Title$/, () =>
  cy.get('[data-testid=SearchResults__item--title]')
    .should('have.class', 'SearchResults__item--title')
);

Then(/^I get a Year$/, () => {
  cy.log('There should be 20 elements');
  cy.get('[data-testid=SearchResults__item--year]')
    .should($el => expect($el).to.have.length(20))
    .each(($el) => {
      if ($el.text()) {                           // 'If a year is provided'
        (isNumeric($el.text()))                   // It should be a number
          ? expect($el.text()).to.have.length(4)  // We should get a 4 digit year
          : expect($el.text()).to.have.length(0)  // If no year exists
      }
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
    // expect 20 results
    .should('have.length', 20) 
    // LATER: Update to less specific test:
    .and($el => expect($el.text()).to.include('English'))
    // Check for 'English', not 'en'
    .and($el => isTitleCase($el.text()))
);
