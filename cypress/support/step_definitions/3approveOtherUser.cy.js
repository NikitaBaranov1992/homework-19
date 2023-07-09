const generalElements = require("../../fixtures/pages/general.json");

const inviteeBoxPage = require("../../fixtures/pages/inviteeBoxPage.json");
const inviteeDashboardPage = require("../../fixtures/pages/inviteeDashboardPage.json");

const inviteLinkList = require("../../support/step_definitions/2addPartipicals.cy");

let wishes = faker.word.noun() + faker.word.adverb() + faker.word.adjective();

let inviteLink = inviteLinkList.inviteLink;

import { faker } from "@faker-js/faker";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
//const users = require("../../fixtures/users.json");

Given("another user is on secret santa login page", function () {
  cy.visit(inviteLink);
});

When(
  "another user logs in as {string} and {string} and create a card",
  function (string, string2) {
    cy.get(generalElements.submitButton).click();
    cy.contains("войдите").click();
    cy.login(string, string2);
    cy.contains("Создать карточку участника").should("exist");
    cy.get(generalElements.submitButton).click();
    cy.get(generalElements.arrowRight).click();
    cy.get(generalElements.arrowRight).click();
    cy.get(inviteeBoxPage.wishesInput).type(wishes);
    cy.get(generalElements.arrowRight).click();
    cy.get(inviteeDashboardPage.noticeForInvitee)
      .invoke("text")
      .then((text) => {
        expect(text).to.contain("Это — анонимный чат с вашим Тайным Сантой");
      });
  }
);

Then("another user added as partipical", function () {
  cy.clearCookies();
});
