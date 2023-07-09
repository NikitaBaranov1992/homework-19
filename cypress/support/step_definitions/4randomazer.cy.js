const generalElements = require("../../fixtures/pages/general.json");

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
//const users = require("../../fixtures/users.json");

Given("User1 logs in as {string} and {string} and go to box page", function () {
  cy.visit("/login");
});

When("User1 starts randomazer", function (string, string2) {
  cy.login(string, string2);
  cy.contains("Коробки").click({ force: true });
  cy.get(generalElements.random).last().click({ force: true });
  cy.get(".txt-secondary").click({ force: true });
  //cy.contains("Перейти к жеребьевке").click();
  cy.contains("Провести жеребьевку").click({ force: true });
  cy.contains("Да, провести жеребьевку").click({ force: true });
  cy.contains("Жеребьевка проведена").should("exist");
});

Then("randomazer completed sucessfully", function () {
  cy.clearCookies();
});
