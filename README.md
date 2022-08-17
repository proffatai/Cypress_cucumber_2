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

## How to execute a specific scenario in a feature file

Type the keyword, @focus just above that scenario in the feature file that you want to run.

Say we have over 5 scenarios in a feature file and we just want to run 3 of them, the we can include the @focus keyword just above those scenarios too

## Setting up cucumber reports 

1. First proceed to package.json and update the value of `"cypress-cucumber-preprocessor":` to what we have below and then run the feature file, `npx cypress open` and proceed to run the feature, so that a .json file is created equivalent to the feature file.

Note: A new folder will be created containing a .json file equivalent to the feature file the moment you run the feature file
"cypress-cucumber-preprocessor": {
    "nonGlobalStepDefinitions": true,
    "cucumberJson": {
      "generate": true,
      "outputFolder": "cypress/cucumber_reports", 
      "filePrefix": "",
      "fileSuffix": ".cucumber"
    }
Note: the "outputFolder" part, we are specifying the location where the cucumner.json file should be created in. So a new folder called cucumber_reports inside cypress root folder will be created and it will contain a .json file of the feature

2. Now proceed to install the library via: `npm install cucumber-html-reporter --save-dev`
Do the following configurations

3. Create a file in the root of the folder and name it index.js and then paste the command below into it and do some necessary changes such as, 
a. provide the path / folder where the already generated cucumber.json report lies. As discussed in step 1, the folder containing the json file is 'cypress/cucumber_report' so this passed as a value to jsonFile key
b. We need to pass a folder name and the name we want to store the generated html report to the "output". From the code below, output: 'cypress/report/cucumber_report.html' <= we want to store the final report as cucumber_report.html and it should be created inside cypress/report. Where report is a new folder that will be created

var reporter = require('cucumber-html-reporter');

var options = {
        theme: 'bootstrap',
        jsonFile: 'cypress/cucumber_report',
        output: 'cypress/report/cucumber_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };

    reporter.generate(options);



Lastly: run the code:  `node cypress/index.js` to generate the report. Since the index.js we created is directly inside root folder of cypress