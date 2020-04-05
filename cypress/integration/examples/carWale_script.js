describe('My first test Cypress', () => {
    it('Testing CarWale website using Cypress', () => {

    //Navigate to URL 
    cy.visit('https://www.carwale.com/marutisuzuki-cars/dzire/');
    
    //Click on "Enter your location"
    cy.get('#global-place').click()
     
    //Type input 'Navi Mumbai'
    cy.get('#placesQuery').type('Navi Mumbai')

    cy.wait(2000)

    //Choosing valid option from dropdown list of values
    cy.get('.ui-menu-item').click()

    //Scroll down to “Maruti Suzuki Dzire Price in cities near Navi Mumbai” section
    cy.get('#divPriceInOtherCities').trigger('mouseup')

    //Click on Panvel
    cy.get('tbody > :nth-child(3) > :nth-child(1) > a').click();

    cy.wait(2000)

    //Check whether URL has the following string - “/price-in-panvel/”
    cy.url().should('contain','/price-in-panvel/')

    //Extra line to declare that the previous line of code is PASS
    cy.log("URL contains expected text")
    
    })
})