export class POM {
    
    navigate(url){
        cy.visit (url)
        cy.url().should('equal','https://opensource-demo.orangehrmlive.com/index.php/auth/login/')
    }
    Enterusername (name){
        cy.get('#txtUsername').type(name)
    }
    Enterpassword (pass){
        cy.get('#txtPassword').type(pass)
    }
    subMit(){
        cy.get('#btnLogin').click()
    }
   verification(){
    cy.get('h1').should('contain','Dashboard')
   }
    }
