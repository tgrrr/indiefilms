// / <reference types="cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

// Scenario: Search TV details Generate Stubbed API
Given(/I get search Results$/, () => {
  cy.visit('/');
});

When(/^I search for a TV show$/, () => cy.log('I search for a TV show'));

Then(/^It generates a fixture file stubbed API$/, () => {
  /* eslint-disable camelcase */
  const searchTerm = 'Rick';
  const params = {
    api_key: `${Cypress.env('REACT_APP_MOVIEDB_API_KEY')}`,
    query: searchTerm,
    // language: 'en-US',
    // page: 1,
  };
  /* eslint-enable camelcase */

  // https://api.themoviedb.org/3/search/tv/?api_key=8f0894d928339b353ebc54642b9ae065&query=Rick
  // NOTE: Duplicate the api request to be stubbed for testing
  cy.request({
    method: 'GET',
    url: `${Cypress.env('REACT_APP_MOVIEDB_ROOT_URL')}tv/`,
    qs: params,
  })
    .then((response) => {
      cy.writeFile(
        'cypress/fixtures/getSearch.json',
        response.body
      );
    });

  cy.fixture('getSearch').should((getSearch) => {
    expect(getSearch.page).to.exist;
    expect(getSearch.results[0].name).to.contain('Rick and Morty');
  });
});
