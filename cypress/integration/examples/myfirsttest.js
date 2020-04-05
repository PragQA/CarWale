describe('Trial 1', () => {
    it('Navigate to Carwale link', () => {
    cy.visit('https://www.carwale.com/marutisuzuki-cars/dzire/');


    cy.contains('Enter your location').click();

    cy.get('#placesQuery').type('Navi Mumbai');

    cy.get('a#gb-close.gb-close').should('be.visible').trigger('change',{force:true}).click();
    //cy.get('a').eq(1).focus();
   // cy.get('a').should('have.value','cityname');

      
      //cy.get('div#gb-window > a#gb-close.gb-close').should('be.visible').click();
      //cy.get('div#gb-window').should('be.visible').click();
      
      // cy.get('div#gb-window').click({force:true});
     // cy.get('input[class = ui-menu-item]').contains('li','navimumbai').click({force:true});

   //cy.get('select').select('Navi Mumbai');

   //   cy.get('a#gb-close.gb-close').trigger('mousemove').click();
   
   
   //cy.get('input[class="ui-menu-item"]').should('be.visible').first().click();


   //cy.get('a').should('have.attr', cityname).should('be.visible').contains("navi").first().click();
})

})

