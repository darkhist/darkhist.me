---
title: Automated Accessibility Testing with Cypress (Part One)
date: 'September 7, 2020'
---

I'm in the middle of making this website, and figured that now would be a good time to add tests which automatically run accessibility audits

So, let's do that

## Getting Started

First, we need two plugins to do some magic for us 🔮  
I'll be using [Yarn](https://yarnpkg.com/) throughout this post 🧶

```bash
yarn add cypress cypress-axe -D
```

### What's Cypress?

[Cypress](https://www.cypress.io/) is an end to end testing library for the web

With Cypress, we can simulate how people use a site and make assertions about what their experience should be like

We can test for lots of scenarios, including:

1. Showing the right page when a link is clicked
2. Showing warnings when a form is invalid
3. Showing the correct stuff on mobile view
4. Etc

Today, we'll be using Cypress to visit some pages and check for accessibility issues

Follow along to set up automatic accessibility testing on your own site :~)

## Cypress Set Up

After installing Cypress, run

```bash
yarn run cypress open
```

to start Cypress for the first time

Cypress will generate a bunch of folders & files, but, we can ignore most of them for now

### Cypress + Visual Studio Code

If you're using Visual Studio Code like I am, add a `tsconfig.json`
to the root of your `cypress` directory to enable autocompletion for Cypress commands

```json
{
  "compilerOptions": {
    "allowJs": true,
    "baseUrl": "../node_modules",
    "types": ["cypress"],
    "outDir": "./dist"
  },
  "include": ["**/*.*"]
}
```

> You might need to restart Visual Studio Code for intellisense to start working correctly

### Cypress + ESLint

If you're using the fantastic (and only mildly annoying) ESLint package to lint your code, you'll need to do a couple things to prevent any undue warnings

First, run

```bash
yarn add eslint-plugin-cypress --D
```

to install the Cypress ESLint plugin

Then, update your `.eslintrc.json` to configure the plugin

```json
{
  "extends": ["plugin:cypress/recommended"]
}
```

## Cypress-Axe Setup

Remember that `cypress-axe` plugin we installed?
Well, that's the plugin that actually does the accessibility audits for us, so let's set that up

Update `cypress/support/index.js` to enable the use of `cypress-axe` commands in our tests

```js
import 'cypress-axe';
```

## Writing Tests

Okay, now that we have everything set up, let's delete the existing test files by running

```bash
rm -rf cypress/integration/examples
```

Great! We're ready to start writing some tests!

## Writing Tests

Let's start by creating a test file and writing our first test

```bash
touch cypress/integration/a11y.spec.js
```

Now we can write our first test!

```js
describe('a11y', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.injectAxe();
  });

  it('should not have a11y errors', () => {
    cy.checkA11y();
  });
});
```

## Running our Tests

Let's add a command to run our integration tests

In `package.json`, add the following

```json
  "scripts": {
    "int": "yarn cypress run --browser chrome --no-exit"
  }
```
