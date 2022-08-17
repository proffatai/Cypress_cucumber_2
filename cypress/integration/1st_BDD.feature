Feature: Login functionality test

    As a user, I should be able to use all the functions in the practice page
 
    Scenario: I should be able to see the title of the page
  Given User must be able to successfully land on the homepage
   When User enters correct username
    And  User enters correct password
    And User clicks the login button
   Then User should be taken to the dashboard
    
    
    Scenario: I should not be able to access the homepage
   When User must be able to successfully land on the homepage
   When User enters incorrect username
    And  User enters incorrect password
    And User clicks the login button
   Then User should not be taken to the dashboard