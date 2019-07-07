/// <reference types="cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import 'cypress-react-unit-test';
import React from 'react';
import SearchPage from '../../../../src/pages/SearchPage/SearchPage.js';


Given(/I visit the homepage$/, () => {
  cy.mount(<SearchPage />)
});

When(/^I search for a TV show$/, () => {
  cy.get('[data-testid=SearchPage]').should('have.class', 'SearchPage')
  // cy input should include title
});

Then(/^I get the results for that TV show {string}$/, (title) => {
  cy.get('[data-testid=Search__Results--item]').should('have.class', 'Search__Results--item')
  cy.get('[data-testid=Search__Results--item]').should('include', title)
  // TODO: Test case with no results returned
});

// it('should render posts after loading', () => {
//   const posts = [
//     { id: 1, title: 'title1', body: 'body1' },
//     { id: 2, title: 'title2', body: 'body2' },
//   ];
//   cy.server();
//   cy.route({
//     url: 'https://jsonplaceholder.typicode.com/posts',
//     method: 'GET',
//     response: posts,
//   }).as('loadPosts');
//   cy.visit('http://localhost:8081/dashboard');
//   posts.forEach(post => {
//     cy.contains(post.title);
//     cy.contains(post.body);
//   });
// });