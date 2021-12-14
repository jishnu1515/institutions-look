const results = ['Kashmir University', 'Jammu University'];
const searchTerm = 'Kashmir';

beforeEach(() => {
    cy.intercept('GET', `${Cypress.env('NEXT_PUBLIC_API_URL')}**`, {
        statusCode: 200,
        body: results,
    }).as('fetchInstitutions');
});

describe('Index', () => {
    it('Loads', () => {
        cy.visit('/');
    });

    it('Fetches Data', () => {
        cy.get('[id="name"]').focus().clear().type(searchTerm);
        cy.wait('@fetchInstitutions');
        cy.get('li').should('have.length', results.length);
        cy.get('li').each((element, index) => {
            cy.wrap(element).should('have.text', results[index]);
        });
    });
});

export {};
