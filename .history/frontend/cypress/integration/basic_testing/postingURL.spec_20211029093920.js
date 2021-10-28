describe("Testing posting functions", function () {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });

  it("When posting, the phrase `Try our URL Shortener now!` should dissappear", function () {
    cy.get("input").type("https://www.tech.gov.sg/careers/overview/");
    cy.get(".btn").click();
    cy.contains("Try our URL Shortener now!").should("not.exist");
  });

  it("After posting, input box is empty", function () {
    cy.get("input").type("https://www.tech.gov.sg/careers/overview/");
    cy.get(".btn").click();
    cy.get("input").should("have.value", "");
  });

  it("Copy button should generate an alert `copied to clipboard` ", function () {
    cy.get("input").type("https://www.tech.gov.sg/careers/overview/");
    cy.get(".btn").click();
    cy.contains("copy").click(); //copied to clipboard
    cy.on("window:alert", (text) => {
      expect(text).to.contains("copied to clipboard");
    });
  });

  it("Two responses should be rendered", function () {
    cy.get("input").type("https://www.tech.gov.sg/careers/overview/");
    cy.get(".btn").click();
    cy.get("input").type("https://www.youtube.com/watch?v=2egPYqZmMws");
    cy.get(".btn").first().click();
    cy.get(".container > div:nth-child(3)").children().should('have.length', 2)
  });
});