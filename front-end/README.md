# Keoghs React Sample

This project is a template for new react applications at Keoghs. If you are creating a new single page application with react, you should take a copy of this template to use as the starting point for your app.

This project has been configured to use webpack and babel. This is to allow for more control over the build process and to allow for more advanced configuration. It should work out of the box with no additional configuration required. However, if you need to make changes to the build process, you can do so by editing the webpack config files in the `webpack` folder.

## Prerequisites

- NodeJS LTS (currently v16)
- Chocolatey
- Visual Studio Code
- Visual Studio Code extensions:
  - eslint (dbaeumer.vscode-eslint)
  - prettier (esbenp.prettier-vscode)

## Quick Start

- Clone the repository
- Run `npm install`
- Follow the steps set out below to configure local HTTPS
- Run `npm start`
- Log in with your Keoghs Okta preview credentials

## What's Included

### Typescript

Typescript adds static type checking to JavaScript. This is preferred over writing plain JS, as the type checker can eliminate many potential bugs at build time.

### ESLint

ESLint provides static analysis for typescript code. A comprehensive ruleset is included in this project which covers typescript, react and the associated testing libraries.

### Prettier

Prettier is a code formatter which is used to enforce our style guidelines. It's a good idea to configure prettier as your default formatter and to set VS Code to format on save:

- Go to File -> Preferences -> Settings
  - In the search type 'format on save' and make sure the checkbox is ticked.
  - In the search type 'default formatter' and make sure the entry in the box is 'esbenp.prettier-vscode'

### Jest

This project uses Jest and [testing-library/react](https://testing-library.com/docs/react-testing-library/intro/).

For convenience (and to reduce boilerplate) a custom test wrapper is included in `test-utils.ts` that allows tests to be run using all the app providers and router.

### Cypress

This project uses cypress for end to end testing. A simple example is provided which demonstrates the use of stub responses rather than relying on a real server response. In practice, your application should use a mixture of the 2 strategies. See the cypress docs [here](https://docs.cypress.io/guides/guides/network-requests#Testing-Strategies) for more info.

To run the tests you should create a cypress.env.json file in the root of the project and add the following properties:

`{ "USERNAME": "<An automated test username>", "USER_PASSWORD": "<the password>" }`

### Continuous Integration

An azure devops CI yaml file is included. At a high level, the CI script will:

- Install and cache package dependencies
- Run the lint rules
- Run a production build
- Run Jest & Cypress
- Publish test results and coverage

### Mock Service Worker

MSW allows us to mock by intercepting requests on the network level. We can reuse the same mock definition for testing, development, and debugging. This flexibility is preferred over the traditional approach of mocking axios or fetch.

In this sample MSW is configured to intercept network requests while running jest tests and running the development server. You can see this example in the `/mocks` folder.

### React Router

An example router is configured with 2 routes: a home page, and a 404 page. The sample uses [code splitting](https://reactjs.org/docs/code-splitting.html) and lazy loading to improve the performance and bundle size of the application.

### Axios

Axios is configured as the HTTP Client. This sample includes 2 interceptors:

- An error logging interceptor to handle failed requests
- A bearer token interceptor, which you can customise to add your own bearer token to all outgoing requests.

### Material UI

Material UI is a set of react UI components which are optimized for accesibility and responsive design. In this example, the Keoghs color palette is applied as a theme.

### Application Insights

The sample includes Microsoft Application Insights. This integration provides a logging and performance tracking solution. _You will need to provide your own instrumentation key._

### Environment Config

An example of how to provide environment specific config settings is in `config.ts`. This example can be extended with any additional properties you require.

### Error Boundaries

A page level [error boundary](https://reactjs.org/docs/error-boundaries.html) is added to the application to trap errors and avoid white screens of death. You may choose to extend this with a whole app error boundary, or lower level component error boundaries.

### Helmet

React helmet allows meta tags to be applied to the application on a page by page basis which is useful for setting favourites and SEO.

### SWR

SWR is included as a solution to manage API interactions and reduce the amount of boilerplate code required for HTTP requests. It handles caching, background updates and stale data out of the box with zero-configuration.

### Husky

Husky adds git hooks to the project. An example pre-commit hook is included to ensure the code passes the lint rules before it is committed.

### Authentication

Authentication is provided through Azure AD. This is wrapped by the MSAL react npm package. This sample provides a simple log in screen which redirects to the Keoghs SSO when the user is not authenticated.

### Yup & React Hook form

React Hook Form provides performant, flexible and extensible forms with easy-to-use validation. It reduces the amount of code you need to write while removing unnecessary re-renders. Yup is a schema builder for runtime value parsing and validation. It integrates well with React Hook Form.

### Dayjs

Day.js is a minimalist JavaScript library that parses, validates, manipulates, and displays dates and times for modern browsers with a largely Moment.js-compatible API.

## What's Not Included

### State Management

In addition to the built in context API, there are many ways to manage state in react. It's not a case of "one size fits all" and so a state management package is not included in this template.

Depending on the complexity of your application, you may wish to add a library such as Recoil or Jotai to manage client state. Discuss the options with an application architect before creating your app.

## Running HTTPS in Development

The application will run locally at local.keoghs-react-sample.co.uk.

First add an entry to your windows hosts file. Open C:\Windows\System32\drivers\etc\hosts and add a new line:

```
127.0.0.1	local.keoghs-react-sample.co.uk
```

If not already installed, install mkcert and set up a local CA.

```
choco install mkcert
```

```
mkcert -install
```

Genarate a SSL certificate from the local CA. First, create a folder named `.cert` at the root of the react application. Next, run the following command from the root of the react application.

```
mkcert -key-file ./.cert/key.pem -cert-file ./.cert/cert.pem localhost local.keoghs-react-sample.co.uk
```

## Customising This Template

This template contains some example values which you will need to change when you create an application from it.

### `utils/environment.ts`

You should change the website URLs to whatever URLs you wish to use.

### `config.ts`

Provide the correct Application Insights keys, authentication settings, and API urls for your application.

### `webpack/webpack.dev.config.ts`

Provide the correct host name (URL) for your application for the dev server.

### `.env.development`

Provide the correct host name (URL) for your application.

### `cypress.config.ts`

Provide the correct baseUrl for your application.

### `sonar-project.properties`

Provide the correct sonarcloud key for your application.

### `.vscode/settings.json`

Provide the correct sonarcloud key for your application.

### CI Pipelines

Provide the correct sonarcloud key, project name, and library variable group.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [https://local.keoghs-react-sample.co.uk](https://local.keoghs-react-sample.co.uk) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm test:coverage`

Launches the test runner and generates a coverage report.

### `npm run cy:open`

Launches cypress in interactive mode. You should run `npm start` before executing the tests.\
_Note that occasionally this can timeout on startup (after 30000 milliseconds) - try the command again consecutively!_

### `npm run cy:run`

Launches cypress in console mode. You should run `npm start` before executing the tests.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run lint`

Runs the linter against all files in the src folder. The output will be displayed in the console.

### `npm run analyze`

Runs the bundle size analyzer against the build folder. You must `npm run build` before running the analysis.
