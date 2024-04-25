import React from "react";
import type { Preview } from "@storybook/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import lightTheme from "../src/themes/theme-factory";

export const withMuiTheme = (Story) => (
  <ThemeProvider theme={lightTheme}>
    <CssBaseline />
    <Story />
  </ThemeProvider>
);

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [withMuiTheme],
};

export default preview;
