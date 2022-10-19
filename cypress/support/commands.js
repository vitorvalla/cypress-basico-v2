    Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {

        cy.get('#firstName').type('Vitor');
        cy.get('#lastName').type('Valladão');
        cy.get('#email').type('vitorvalladaoms');
        cy.get('#open-text-area').type('Testando', {delay: 0});
        cy.contains('.button', 'Enviar').click();
        
    
    })
