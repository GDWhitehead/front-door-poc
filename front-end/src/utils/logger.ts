import { SeverityLevel } from "@microsoft/applicationinsights-web";
import { appInsights } from "../app-insights";

const information = (message: string): void => {
  appInsights.trackTrace({ message, severityLevel: SeverityLevel.Information });
};

const warning = (message: string): void => {
  appInsights.trackTrace({ message, severityLevel: SeverityLevel.Warning });
};

const error = (err: Error): void => {
  appInsights.trackException({
    error: err,
    severityLevel: SeverityLevel.Error,
  });
};

export default { information, warning, error };
