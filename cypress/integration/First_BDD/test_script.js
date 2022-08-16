import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps'
/// <reference types ="cypress">

import {POM} from './POM'

let website = '/'
let username ="Admin"
let password = "admin123"
let wrong_username ="Adminds"
let wrong_password = "admisdn123"

const object = new POM ();

Given('User must be able to successfully land on the homepage', ()=>{

    object.navigate(website) 
})


When('User enters correct username', ()=>{

    object.Enterusername(username)
})

And('User enters correct password', ()=>{

    object.Enterpassword(password)
})
And('User clicks the login button', ()=>{

    object.subMit()
})

Then("User should be taken to the dashboard", ()=>{
   
    object.verification()
})


Given('User must be able to successfully land on the homepage', ()=>{

    object.navigate(website) 
})


When('User enters incorrect username', ()=>{

    cy.get('#txtUsername').type(wrong_username)
})

And('User enters incorrect password', ()=>{

    cy.get('#txtPassword').type(wrong_password)
})
And('User clicks the login button', ()=>{

    cy.get('#btnLogin').click()
})
Then("User should not be taken to the dashboard", ()=>{

    cy.get('#spanMessage').should('contain','Invalid credentials')
})