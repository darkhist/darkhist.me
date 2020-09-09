---
title: Automated Accessibility Testing with Cypress Part I
date: '09 / 07 / 2020'
---

I'm in the middle of making this website, and figured that now would be a good time to add tests which automatically run accessibility audits

So, let's do that!

## Getting Started

First, we need two plugins to do some magic for us 🔮

```bash
yarn add cypress cypress-axe -D
```

## What is Cypress?

With [Cypress](https://www.cypress.io/) is an end to end testing library

With Cypress, we can simulate how people use a site and make assertions about what their experience should be like

Today, we'll be using it to check for accessibility issues

Follow along to set up automatic accessibility testing on your own site :~)

## Setting up Cypress

After installing Cypress, run

```bash
yarn run cypress open
```

to start Cypress for the first time

Cypress will generate some files, but let's ignore those for now

Afterwards, feel free to close Cypress while we set up some other stuff

### Cypress & Visual Studio Code

If you're using Visual Studio Code like me, add a `tsconfig.json`
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

### Cypress & ESLint

If you're using ESLint, you'll need to do a couple things to prevent any undue warnings

First, run

```bash
yarn add eslint-plugin-cypress --D
```

to install the Cypress ESLint plugin

Then, update your `.eslintrc.json` to configure it

```json
{
  "extends": ["plugin:cypress/recommended"]
}
```

## Cypress-Axe Setup

Remember that `cypress-axe` plugin we installed?
Well, that's the plugin that actually does the accessibility audits for us, so let's set that up

Update `cypress/support/index.js` to enable using `cypress-axe` commands like

```js
import 'cypress-axe';
```

## Writing Tests

Okay, now that we have everything set up, let's delete the existing test files by running

```bash
rm -rf cypress/integration/examples
```

Great! We're _officially_ ready to start writing some tests!

Let's create a test file called `cypress/integration/a11y.spec.js` and write our first test

```js
describe('/', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.injectAxe();
  });

  it('should not have a11y errors', () => {
    cy.checkA11y();
  });
});
```

This test will visit our site at `localhost:3000`, add `axe` to the page, and then run `cy.checka11y()` to check for accessibility issues

Tests for routes like `/about` and `/blog` will be almost identical  
We just need to change the route in `cy.visit(...)`

## Running Tests

If you're using [Next.js](https://nextjs.org/) like me, you'll want to run the tests against the production version of your app

To do so, run `yarn build && yarn start`

Okay, now that our server is running, let's add a nifty command to run our integration tests

In `package.json`, add the following

```json
  "scripts": {
    "int": "yarn cypress run --browser electron --headed --no-exit"
  }
```

Now, we can run our test with `yarn int`

If your test passed, congrats! 🎉

If a test should fail, errors will be display in the command log

You can find more details and (hopefully) fix your issue by clicking the log entry and opening up the Chrome DevTools console

> `cypress-axe` is really awesome, but it isn't a silver bullet! There's no replacement for manual accessibility auditing!

## Thanks for Reading!

Stay tuned for Part II where I'll cover running these tests automatically with Github Actions!
