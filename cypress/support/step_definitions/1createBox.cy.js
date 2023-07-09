const boxPage = require("../../fixtures/pages/boxPage.json");
const generalElements = require("../../fixtures/pages/general.json");
const dashboardPage = require("../../fixtures/pages/dashboardPage.json");

let newBoxName = faker.word.noun({ length: { min: 5, max: 10 } });
let boxId = faker.word.noun({ length: { min: 7, max: 8 } });

let maxAmount = 50;
let currency = "Евро";

import { faker } from "@faker-js/faker";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("user is on secret santa login page", function () {
  cy.visit("/login");
});

When(
  "user logs in as {string} and {string} and creates a box",
  function (string, string2) {
    cy.login(string, string2);
  }
);

Then("a box is created", function () {
  cy.contains("Создать коробку").click();
  cy.get(boxPage.boxNameField).type(newBoxName);
  cy.get(":nth-child(3) > .frm").clear().type(boxId);
  cy.get(generalElements.arrowRight).click();
  cy.get(boxPage.sixthIcon).click();
  cy.get(generalElements.arrowRight).click();
  cy.get(boxPage.giftPriceToggle).check({ force: true });
  cy.get(boxPage.maxAnount).type(maxAmount);
  cy.get(boxPage.currency).select(currency);
  cy.get(generalElements.arrowRight).click({ force: true });
  cy.get(generalElements.arrowRight).click({ force: true });
  cy.get(generalElements.arrowRight).click({ force: true });
  cy.get(dashboardPage.createdBoxName).should("have.text", newBoxName);
  cy.get(".layout-1__header-wrapper-fixed .toggle-menu-item span")
    .invoke("text")
    .then((text) => {
      expect(text).to.include("Участники");
      expect(text).to.include("Моя карточка");
      expect(text).to.include("Подопечный");
    });
});
