/* eslint-disable unicorn/filename-case */
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
// setupTests.ts file name is required by convention for react
import "@testing-library/jest-dom";
import { server } from "./mocks/server";
import articlesData from "./mocks/data/articles-data.json";
import { mockOktaReact } from "./mocks/mock-okta-react";

// Don't log test errors to app insights
jest.mock("./utils/logger", () => ({
  information: (message: string) => console.log(message),
  warning: (message: string) => console.log(message),
  error: (err: Error) => console.log(err),
}));

jest.mock("@okta/okta-react", () => {
  return mockOktaReact;
});

// Fail tests when console errors occur
global.console.error = (...args) => {
  const ignoreErrors = [/self signed certificate/];
  if (ignoreErrors.some((x) => x.test(args[0]))) {
    return;
  }

  const errorMessage = args.reduce((p, c) => p.replace(/%s/, c));
  throw new Error(errorMessage);
};

// Establish API mocking before all tests.
beforeAll(() => server.listen());

beforeEach(() =>
  localStorage.setItem("articles", JSON.stringify(articlesData)),
);

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());
