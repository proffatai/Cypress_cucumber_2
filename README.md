## Setting up Cypress 9+cucumber 

install cypress version 9.x.x
run `npm install --save-dev cypress-cucumber-preprocessor`

Add the below scripts to: cypress/plugins/index.js
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}


Add the below code inside cypress.json
 "testFiles": "**/*.feature"

 Go to package.json and add the below code at any position

 "cypress-cucumber-preprocessor": {
  "nonGlobalStepDefinitions": true
}

## Understading Cypress+cucumber
Create a feature / Gharkin file inside the root of the integration folder with extension .feature. E.g Sample.feature
Write all your Gharkin test scripts in plain English using Given, When, {And,} Then

Now create a folder inside the root of the integration file and name the folder the exact same name of the feature file, i.e Sample.
Create a stepdefination file / actual cypress scripts inside the Sample folder with anyname of your choice, e.g myspec.js

Inside this new file, write the following statement: `import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps'`

Now proceed to write your cypress code by referencing the Given,When,And, Then that we created in the feature file as shown below
Given ('exact same description as it was in the feature file', ()=>{cypress script that will perform the expected statement mentioned in the `Given` keyword})

Repeat same procedure for other Gharkin keywords such as And, Then, When

## Pretty useful VScode extensions for cucumber+cypress
Gherkin Indent
Cucumber(Gherkin) Full Support
Snippets and Syntax Highlight for Gherkin (Cucumber)