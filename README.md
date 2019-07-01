# Indie Films

## Getting started

## Install

```js
git clone https://github.com/tgrrr/indiefilms indiefilms
cd indiefilms
yarn
```

## Tests

- `yarn run test` or `yarn run test:run` - run Cypress in CLI
- `yarn run test:open` - open Cypress browser for visual tests

[See example recipes](https://github.com/cypress-io/cypress-example-recipes)

- `yarn run test:bdd` - behaviour driven development (BDD) with [Cucumber](https://cucumber.io)

### NOTE

Running `test:bdd` only loads tests where the Cucumber definition includes the tags `@focus` to let you focus on a single integration/unit test.

You can see the product definitions located in our [./cypress/integration](./cypress/integration) file. If you want to do he same, checkout this simple explanation by [Cucumber](https://cucumber.io/docs/bdd/who-does-what/)

```Gherkin
# Cucumber example
@focus
Feature: A user can search for TV shows
  In order to keep a list of TV shows I want to watch
  As a user
  I want to be able to search the moviedb for TV shows
  It search for a TV show

  Scenario Outline:
    When I search for the TV show <searchTerm>
    Then I get the <searchResult> for that TV show
    And I get the <year>

     Examples:
       | searchTerm | searchResult | year |
       | Stranger | Stranger Things  | 2016 |
       | Rick | Rick and Morty | 2013 |

```

## Development

`yarn start` or `yarn watch`

Runs the app in the development mode at
[http://localhost:3000](http://localhost:3000)

## Deploy TODO:

- `yarn run build` for production
- [Deployment](https://facebook.github.io/create-react-app/docs/deployment)

## Reference

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### API

https://www.themoviedb.org/documentation/api/discover