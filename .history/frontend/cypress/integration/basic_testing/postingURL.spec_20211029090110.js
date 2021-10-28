describe("Testing posting functions", function () {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });

  it("When posting, the phrase `Try our URL Shortener now!` should dissapear", function () {
    cy.get("input").type("https://www.tech.gov.sg/careers/overview/");
    cy.get(".btn").click();
    cy.contains("Try our URL Shortener now!").should("not.exist");
  });

  it("After posting, input box is empty", function () {
    cy.get("input").type("https://www.tech.gov.sg/careers/overview/");
    cy.get(".btn").click();
    cy.get("input").should("have.value", "");
  });

  it("Copy button should generate an alert", function () {
    cy.get("input").type("https://www.tech.gov.sg/careers/overview/");
    cy.get(".btn").click();
    cy.contains("copy").click(); //copied to clipboard
    cy.on('window:alert', (text) => {
        expect(text).to.contains('This is an alert!');
      });
  });
});
