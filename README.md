# Indie Films - WIP

**Current state:** Alpha

A Chrome plugin to simplify streaming services

<details>
  <summary>
Show <strong>setup instructions</strong>...
  </summary>
<br>

### 1. Install

```js
git clone https://github.com/tgrrr/indiefilms indiefilms
cd indiefilms
yarn
```

### 2. Generate an API key

- [ ] Create an account at [The Movie DB](https://www.themoviedb.org/account/signup)
- [ ] Generate an api key on the [settings/api](https://www.themoviedb.org/settings/api) page

### 3. Setup an `.env` file

- [ ] Duplicate the `.env` file:

```bash
mv .env.template .env
```

- [ ] Edit the following lines:
```shell
REACT_APP_MOVIEDB_API_KEY=<MOVIEDB_API_KEY>
# Optionally edit the read access token:
REACT_APP_MOVIEDB_API_READ_ACCESS_TOKEN=<MOVIEDB_API_READ_ACCESS_TOKEN>
```

### 4. Setup an `cypress.json` file

- [ ] Create a copy of the `cypress.json` file:
```bash
mv cypress.json.template cypress.json
```

- [ ] Edit the following lines:
```shell
"REACT_APP_MOVIEDB_API_KEY": "<MOVIEDB_API_KEY>",
# Optionally edit the read access token:
"REACT_APP_MOVIEDB_API_READ_ACCESS_TOKEN": "<MOVIEDB_API_READ_ACCESS_TOKEN>",
```
*(hint: it's the same key as the `.env` file)*

### 5. Run the app in Development mode

`yarn start` or `yarn watch`

Runs the app in the development mode at [http://localhost:3000](http://localhost:3000)

</details>

## Development

`yarn start` or `yarn watch`

Runs the app in the development mode at [http://localhost:3000](http://localhost:3000)

## Tests

- `yarn run test` or `yarn run test:run` - run Cypress in CLI
- `yarn run test:open` - open Cypress browser for visual tests
- `yarn run test:bdd` - behaviour driven development (BDD) with [Cucumber](https://cucumber.io)

<details><summary>Learn more about testing...</summary><br>

### Behavior Driven Development

Running `test:bdd` loads tests where the Cucumber definition includes the tags `@focus` to let you focus on a single integration/unit test.

You can see the product definitions located in our [./cypress/integration](./cypress/integration) files. If you want to do the same, checkout this simple explanation by [Cucumber](https://cucumber.io/docs/bdd/who-does-what/)

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

### Learn more about BDD testing:

- [Get started here](https://docs.cypress.io/guides/getting-started/testing-your-app)
- [See example recipes](https://github.com/cypress-io/cypress-example-recipes)
- [Assertions](https://on.cypress.io/assertions)

#### Stubbing API requests:

- [Network Requests](https://docs.cypress.io/guides/guides/network-requests)
- [Server](https://docs.cypress.io/api/commands/server)

</details>

## Deploy 

- `yarn run build` for production
- TODO: [Deployment](https://facebook.github.io/create-react-app/docs/deployment) options

<details><summary>How to contribute...</summary><br>

- TODO: [Roadmap]('./ROADMAP.md')
- TODO: Contributor guidelines

</details>

<details>
  <summary>
    Reference material...
  </summary>
<br>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### API

https://www.themoviedb.org/documentation/api/discover

</details>
