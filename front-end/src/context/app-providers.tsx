import * as React from "react";
import { AppInsightsContext } from "@microsoft/applicationinsights-react-js";
import { ThemeProvider } from "@mui/material/styles";
import { HelmetProvider } from "react-helmet-async";
import { SnackbarProvider } from "notistack";
import dayjs from "dayjs";
import "dayjs/locale/en-gb";
import { reactPlugin } from "../app-insights";
import { createCustomTheme } from "../themes/theme-factory";

export interface AppProvidersProps {
  children: React.ReactNode;
}

const theme = createCustomTheme();
dayjs.locale("en-gb");

const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <AppInsightsContext.Provider value={reactPlugin}>
          <SnackbarProvider maxSnack={3}>{children}</SnackbarProvider>
        </AppInsightsContext.Provider>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default AppProviders;
