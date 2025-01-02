import preLogin from '../helpers/pre-login';

describe('cypress queries', () => {
  before(() => {
    // runs once before all tests
  });
  beforeEach(() => {
    // runs before every it() test block
    preLogin();
  });
  afterEach(() => {
    // runs after every it() test block
  });
  after(() => {
    // runs once after all tests
  });
  context('find and check elements', () => {
    // -- Start: Cypress Tests --
    it('header elements check', () => {
      // Write your test case one here
      cy.get('header a')
        .should('be.visible')
        .should('have.class', 'header_logo');

      cy.get('header nav')
        .should('be.visible')
        .children()
        .should('have.length', 3)
        .then(($el) => {
          cy.wrap($el)
            .first()
            .should('have.attr', 'routerlinkactive', '-active');
          cy.wrap($el).eq(1).should('have.attr', 'appscrollto', 'aboutSection');
          cy.wrap($el)
            .last()
            .should('have.attr', 'appscrollto', 'contactsSection');
        });

      cy.get('button')
        .parent('div')
        .first()
        .should('have.class', 'header_right')
        .then(($el) => {
          cy.wrap($el).children().first().contains('Guest log in');
          cy.wrap($el).children().last().should('have.text', 'Sign In');
        });
    });
    it('footer elements check', () => {
      // Write your test case two here
      cy.get('header nav').then(($el) => {
        cy.wrap($el).last().click();
      });

      //left footer container check
      cy.get(`div [id='contactsSection'] h2`)
        .should('be.visible')
        .should('have.text', 'Contacts');

      cy.get(`div [id='contactsSection'] a`)
        .parent('div')
        .then(($el) => {
          cy.wrap($el)
            .first()
            .children()
            .then(($el) => {
              for (let i = 0; i <= $el.length; i++) {
                cy.wrap($el)
                  .should('be.visible')
                  .should('have.attr', 'target', '_blank')
                  .should('have.attr', 'class', 'socials_link');
              }
            });

          // right footer container check
          cy.wrap($el)
            .last()
            .children()
            .first()
            .should('be.visible')
            .should('have.attr', 'href', 'https://ithillel.ua')
            .contains('ithillel.ua');
          cy.wrap($el)
            .last()
            .children()
            .last()
            .should('be.visible')
            .should('have.attr', 'href', 'mailto:developer@ithillel.ua')
            .contains('support@ithillel.ua');
        });
    });
  });
});
