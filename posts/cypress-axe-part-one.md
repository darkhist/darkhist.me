---
title: Automated Accessibility Testing with Cypress
date: '2020-09-07'
---

I'm in the middle of making this website, and figured that now would be a good time to add tests which automatically run accessibility audits

So, let's do that!

## Getting Started

First, we need two plugins to do some magic for us 🔮

```bash
yarn add cypress cypress-axe -D
```

## Setting up Cypress

After installing Cypress, run

```bash
yarn run cypress open
```

Cypress will generate some files, but let's ignore those for now  
Afterwards, feel free to close Cypress while we set up some other stuff

### Cypress & Visual Studio Code

If you're using Visual Studio Code, add the following `tsconfig.json` file to the root of your `cypress` directory to enable autocompletion for Cypress commands

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

> You might need to restart Visual Studio Code after!

### Cypress & ESLint

If you're using ESLint, you'll need to do a couple things to prevent some annoying warnings

Install the Cypress ESLint plugin

```bash
yarn add eslint-plugin-cypress --D
```

Then, update your `.eslintrc.json` to configure it

```json
{
  "extends": ["plugin:cypress/recommended"]
}
```

## Cypress-Axe Setup

Remember that `cypress-axe` plugin we installed?
Well, that's what actually does the accessibility audits for us so let's set that up by adding the following to `cypress/support/index.js`

```js
import 'cypress-axe';
```

## Writing Tests

Okay, now that we have everything set up, let's delete the existing test files by running

```bash
rm -rf cypress/integration/examples
```

Great! 🎉
We're _officially_ ready to start writing some tests!

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

> To test other pages, just change the URL in the `cy.visit()` command

## Running Tests

If you're using [Next.js](https://nextjs.org/), you'll want to run tests against the production version of your app

Let's add some scripts to our `package.json` so we can do that

```json
{
  "scripts": {
    "prod": "yarn build; yarn start;",
    "int": "yarn cypress open --browser electron"
  }
}
```

Next, we'll run `yarn prod`, then `yarn int` in a different tab

Finally, we can run our tests by clicking the "Run all specs" button

If your test passed, congrats! 🎉

## Fixing Errors

If a test should fail, you'll see the errors in the Cypress command log

Click the log and open the Chrome DevTools console to see the error details and helpful info on possible fixes

> `cypress-axe` is really awesome, but it isn't a silver bullet! There's no replacement for manual accessibility testing!

## Running Tests with Github Actions

Awesome, we've covered running integration tests with Cypress locally – now let's run them automically using a GitHub Action!

Create a `.github/workflows/int.yaml` file from the root of your project

Luckily, the [Cypress Blog](https://www.cypress.io/blog/2019/11/20/drastically-simplify-your-testing-with-cypress-github-action/) has exactly what we need for our Action

Update your `int.yaml` file

```yaml
name: Integration

on: [push]

jobs:
  cypress-run:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v1

      - name: Cypress Run
        uses: cypress-io/github-action@v1
        with:
          build: yarn build
          start: yarn start
          wait-on: http://localhost:3000
```

> I'm using `wait-on: http://localhost:3000`, but you can modifiy it to wait for whatever URL your server runs on

Now Cypress runs every time we push code!

We could even prevent merges to master if any tests fail by [enabling branch protection](https://docs.github.com/en/github/administering-a-repository/configuring-protected-branches)

Never worry about deploying inaccessible code again!

## Cheers 🎉

Thanks for reading! Share this post, follow me on [Twitter](https://twitter.com/quinnsalas), or [say hello](mailto:qmsalas321@gmail.com) :~)
