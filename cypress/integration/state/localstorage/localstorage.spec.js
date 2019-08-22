import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const ID = 29874;
const LOCAL_STORAGE_KEY = 'indiefilm_local_storage_key';

// Feature: Global State
// Scenario: Reload page maintains results
Given(/I visit the homepage$/, () => (
  cy.visit('/')
));

When(/^I reload the homepage$/, () => {

  cy.get(`[data-testid=WatchlistButton--add__${ID}]`)
    .click()
    .should(() => expect(localStorage.getItem(LOCAL_STORAGE_KEY)).contains(ID));

  cy.reload();
});

Then(/^The state persists$/, () => 

   expect(localStorage.getItem(LOCAL_STORAGE_KEY)).contains(ID)
);

Then(/^I clear the homepage and state is empty$/, () => {

  expect(localStorage.getItem(LOCAL_STORAGE_KEY))
    .contains(ID);

  cy.log('Clear localStorage and it will be empty');

  return cy.clearLocalStorage().should((ls) => {
    expect(ls.getItem(LOCAL_STORAGE_KEY)).to.be.null;
  });
});
