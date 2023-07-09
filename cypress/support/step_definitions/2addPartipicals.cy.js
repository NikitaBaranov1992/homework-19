const generalElements = require("../../fixtures/pages/general.json");

const invitePage = require("../../fixtures/pages/invitePage.json");

let inviteLink;

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
//const users = require("../../fixtures/users.json");

Given("user1 is on box", function () {
  cy.get(generalElements.submitButton).click();
});

When("user1 inite new users", function () {
  cy.get(invitePage.inviteLink)
    .invoke("text")
    .then((link) => {
      inviteLink = link;
    });
});

Then("users get invite link", function () {
  cy.clearCookies();
});
