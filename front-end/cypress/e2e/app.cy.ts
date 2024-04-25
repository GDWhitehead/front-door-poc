/// <reference types="cypress" />

describe("Home Page Tests", () => {
  it("Should show the correct data on the home page", () => {
    const apiUrl = Cypress.env("API_URL");
    cy.intercept("GET", `${apiUrl}/articles`, { fixture: "articles.json" });

    cy.visit("/");

    cy.contains("Keoghs React Sample");
    cy.contains("Typescript");
    cy.contains("ESLint");
    cy.contains("Material UI");
    cy.contains("React Router");
  });
});

describe("Articles Page Tests", () => {
  it("Should create an article", () => {
    cy.visit("/articles");

    cy.contains("React Sample Content");

    cy.contains("Create").click();

    cy.findByRole("textbox", { name: /title/i }).type("Test Article");
    cy.findByRole("textbox", { name: /text/i }).type("123");
    cy.findByRole("textbox", { name: /link/i }).type("https://www.google.com");

    cy.findByRole("button", { name: /save/i }).click();

    cy.contains("Test Article");
  });
});
