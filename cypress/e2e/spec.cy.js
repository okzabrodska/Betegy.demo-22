/// <reference types="cypress" />

const randomNumber = Math.floor(Math.random(1000) * 1000);
const userName = `user_name${randomNumber}`;
const email = `${userName}@gmail.com`; 

describe('Login test', () => {
  it('Successfull login', () => {
    cy.visit('https://22bet-demo.impact-betegy.com');

    cy.get('#inputEmail')
      .type('demo-22bet@betegy.com');

    cy.get('#inputPassword')
      .type('Nfi3dL3oijId5');

    cy.get('.btn')
      .click();

    cy.get('.man-user')
      .should('contain', '');
  })

  it('Empty fields', () => {
    cy.visit('https://22bet-demo.impact-betegy.com');

    cy.get('.btn')
      .click();

    cy.get('img')
      .should('contain', '');
  })

  it('Incorrect email', () => {
    cy.visit('https://22bet-demo.impact-betegy.com');

    cy.get('#inputEmail')
      .type(email);

    cy.get('#inputPassword')
      .type('Nfi3dL3oijId5');

    cy.get('.btn')
      .click();

    cy.get('img')
        .should('contain', '');

  })

  it('Incorrect password', () => {
    cy.visit('https://22bet-demo.impact-betegy.com');

    cy.get('#inputEmail')
      .type('demo-22bet@betegy.com');

    cy.get('#inputPassword')
      .type('123QwErTy');

    cy.get('.btn')
      .click();

    cy.get('img')
        .should('contain', '');

  })

  it('Not existing user', () => {
    cy.visit('https://22bet-demo.impact-betegy.com');

    cy.get('#inputEmail')
      .type(email);

    cy.get('#inputPassword')
      .type('123QWErty');

    cy.get('.btn')
      .click();

    cy.get('img')
      .should('contain', '');
  })
})
