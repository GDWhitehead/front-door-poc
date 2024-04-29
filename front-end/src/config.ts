import { getEnvironment } from "./utils/environment";

interface BasicConfig {
  appInsightsConnectionString: string;
  api: string;
  uiIdentity: string;
}

export interface Config extends BasicConfig {
  environment: string;
}

// To develop against another environment, set the following in .env.local
// REACT_APP_APP_USE_ENVIRONMENT=[smoke|uat|production]
// eg. REACT_APP_APP_USE_ENVIRONMENT=smoke
const environment = process.env.REACT_APP_USE_ENVIRONMENT ?? getEnvironment();

// Set your own personal app insights connection string in .env.local
// The connection string is not considered a secret:
// https://learn.microsoft.com/en-us/azure/azure-monitor/app/sdk-connection-string?tabs=dotnet5#is-the-connection-string-a-secret
const localAppInsightsConnection =
  process.env.REACT_APP_APP_INSIGHTS_CONNECTION_STRING ??
  "InstrumentationKey=415e91cf-ed37-4151-aa96-6c87f1672113;IngestionEndpoint=https://uksouth-0.in.applicationinsights.azure.com/;LiveEndpoint=https://uksouth.livediagnostics.monitor.azure.com/";

const configDefaults: BasicConfig = {
  appInsightsConnectionString: localAppInsightsConnection,
  api: "https://frontdoor-degag9afb8d4ggf0.a03.azurefd.net/api",
  uiIdentity: process.env.UI_NAME ?? "local",
};

// Replace these values with the appropriate ones for your application
// You can add other environment specific config to this object.
const configOverrides: { [key: string]: BasicConfig } = {};

const populatedConfig: Config = {
  ...configDefaults,
  ...configOverrides[environment],
  environment,
};

export default populatedConfig;
