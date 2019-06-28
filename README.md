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

**NOTE:** Running `test:bdd` only loads tests where the Cucumber definition includes the tags `@focus` to let you focus on a single integration/unit test.

TODO: expand definition

## Development

`yarn start` or `yarn watch`

Runs the app in the development mode at
[http://localhost:3000](http://localhost:3000)

## Deploy TODO:

- `yarn run build` for production
- [Deployment](https://facebook.github.io/create-react-app/docs/deployment)

### Reference

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).