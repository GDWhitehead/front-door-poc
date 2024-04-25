/// <reference types="cypress" />
import { OktaAuth } from "@okta/okta-auth-js";
// eslint-disable-next-line import/no-extraneous-dependencies
import "@testing-library/cypress/add-commands";

// https://docs.cypress.io/guides/end-to-end-testing/okta-authentication#Custom-Command-for-Okta-Authentication

declare global {
  namespace Cypress {
    interface Chainable {
      loginByOktaApi(): Chainable<void>;
    }
  }
}

// Okta
Cypress.Commands.add("loginByOktaApi", () => {
  const username = Cypress.env("AUTH_USERNAME");
  const password = Cypress.env("AUTH_PASSWORD");
  const oktaDomain = Cypress.env("OKTA_DOMAIN");
  const oktaClientId = Cypress.env("OKTA_CLIENTID");
  const { baseUrl } = Cypress.config();

  const log = Cypress.log({
    displayName: "OKTA LOGIN",
    message: [
      `🔐 Authenticating at ${oktaDomain} | ${username} for ${baseUrl}`,
    ],
    autoEnd: false,
  });

  log.snapshot("before");

  cy.request({
    method: "POST",
    url: `https://${oktaDomain}/api/v1/authn`,
    body: {
      username,
      password,
    },
  }).then({ timeout: 10000 }, ({ body }) => {
    // eslint-disable-next-line no-underscore-dangle, prefer-destructuring
    const user = body._embedded.user;
    const config = {
      issuer: `https://${oktaDomain}/oauth2/default`,
      clientId: oktaClientId,
      redirectUri: `${baseUrl}/implicit/callback`,
      scope: ["openid", "email", "profile"],
    };

    const authClient = new OktaAuth(config);

    return authClient.token
      .getWithoutPrompt({
        sessionToken: body.sessionToken,
      })
      .then(({ tokens }) => {
        const userItem = {
          // eslint-disable-next-line dot-notation
          token: tokens.accessToken["value"],
          user: {
            sub: user.id,
            email: user.profile.login,
            given_name: user.profile.firstName,
            family_name: user.profile.lastName,
            preferred_username: user.profile.login,
          },
        };

        window.localStorage.setItem("oktaCypress", JSON.stringify(userItem));

        log.snapshot("after");
        log.end();
      });
  });
});

export {};
