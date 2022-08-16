import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps'
/// <reference types ="cypress">

Given('User must be able to successfully land on the homepage', ()=>{

    cy.visit('/')
    cy.url().should('equal','https://opensource-demo.orangehrmlive.com/index.php/auth/login/')
})


When('User enters correct username', ()=>{

    cy.get('#txtUsername').type('Admin')
})

And('User enters correct password', ()=>{

    cy.get('#txtPassword').type('admin123')
})
And('User clicks the login button', ()=>{

    cy.get('#btnLogin').click()
})

Then("User should be taken to the dashboard", ()=>{
   
    cy.get('h1').should('contain','Dashboard')
})


Given('User must be able to successfully land on the homepage', ()=>{

    cy.visit('/')
    cy.url().should('equal','https://opensource-demo.orangehrmlive.com/index.php/auth/login/')
})


When('User enters incorrect username', ()=>{

    cy.get('#txtUsername').type('Addmin')
})

And('User enters incorrect password', ()=>{

    cy.get('#txtPassword').type('admind123')
})
And('User clicks the login button', ()=>{

    cy.get('#btnLogin').click()
})
Then("User should not be taken to the dashboard", ()=>{

    cy.get('#spanMessage').should('contain','Invalid credentials')
})