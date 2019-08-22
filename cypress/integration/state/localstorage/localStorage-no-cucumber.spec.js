// Feature: Global State
// Scenario: Reload page maintains results

describe('Global State persists in localStorage', () => {
  beforeEach(() => cy.visit('/'));

  const LOCAL_STORAGE_KEY = 'indiefilm_local_storage_key';
  const ID = 29874;

  it('I reload the homepage and state persists', () => {
    cy.get(`[data-testid=WatchlistButton--add__${ID}]`)
      .click().should(() => {
        expect(localStorage.getItem(LOCAL_STORAGE_KEY))
          .contains(ID);

        cy.log('Reload the page, and the storage persists');
        cy.reload();

        expect(localStorage.getItem(LOCAL_STORAGE_KEY))
          .contains(ID);
      });
  });

  it('I clear the homepage and state is empty', () => {
    cy.get(`[data-testid=WatchlistButton--add__${ID}]`)
      .click().should(() => {
        expect(localStorage.getItem(LOCAL_STORAGE_KEY))
          .contains(ID);
      });

    cy.log('Clear localStorage and it will be empty');
    cy.clearLocalStorage().should((ls) => {
      expect(ls.getItem(LOCAL_STORAGE_KEY)).to.be.null;
    });
  });
});
