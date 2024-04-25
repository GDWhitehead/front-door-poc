import { createTheme, Theme, ThemeOptions } from "@mui/material/styles";
import { PaletteColorOptions } from "@mui/material/styles/createPalette";

const lightThemeDef: ThemeOptions = {
  palette: {
    background: {
      default: "#FFF",
    },
    primary: {
      main: "#00838F",
      dark: "#006064",
      contrastText: "#FFF",
    },
    secondary: {
      main: "#9C27B0",
      dark: "#7B1FA2",
      contrastText: "#FFF",
    },
    error: {
      main: "#D32F2F",
      dark: "#C62828",
      contrastText: "#FFF",
    },
    warning: {
      main: "#F57C00",
      dark: "#EF6C00",
      contrastText: "#FFF",
    },
    success: {
      main: "#2E7D32",
      dark: "#1B5E20",
      contrastText: "#FFF",
    },
    info: {
      main: "#0288D1",
      dark: "#01579B",
      contrastText: "#FFF",
    },
    inherit: {
      main: "#CFD8DC",
      light: "#ECEFF1",
      contrastText: "#455A64",
    },
    gray: "#455A64",
  },
  typography: {
    fontFamily: ["Inter", "Arial", "sans-serif"].join(", "),
  },
};

const getPaletteByName = (theme: Theme, name: string): PaletteColorOptions => {
  switch (name.toUpperCase()) {
    case "PRIMARY":
      return theme.palette.primary;
    case "SECONDARY":
      return theme.palette.secondary;
    case "ERROR":
      return theme.palette.error;
    case "WARNING":
      return theme.palette.warning;
    case "INFO":
      return theme.palette.info;
    case "INHERIT":
      return theme.palette.inherit;
    case "DEFAULT":
      return {
        main: theme.palette.gray,
      };
    default:
      return theme.palette.primary;
  }
};

// Expand this array of colours for some variety once Stefan has defined them.
export const AvatarColors: string[] = ["#B0BEC5"];

const addAlpha = (color: string, opacity: number): string => {
  // coerce values so ti is between 0 and 1.
  const opacityValue = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
  return color + opacityValue.toString(16).toUpperCase();
};

export const createCustomTheme = (): Theme => {
  const lightTheme = createTheme({ ...lightThemeDef });
  return createTheme(lightTheme, {
    components: {
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: ({ ownerState, theme }) => ({
            borderRadius: "6px",
            gap: "0px",
            color: addAlpha(
              getPaletteByName(theme, ownerState.color).main,
              ownerState.color === "default" ? 0.56 : 1,
            ),
            "&:hover": {
              background: addAlpha(
                getPaletteByName(theme, ownerState.color).main,
                0.04,
              ),
            },
            "&:focus": {
              background: addAlpha(
                getPaletteByName(theme, ownerState.color).main,
                ownerState.color === "default" ? 0.12 : 0.3,
              ),
            },
            "&:disabled": {
              color: addAlpha(theme.palette.gray, 0.38),
            },
            "&.MuiIconButton-sizeSmall": {
              padding: "5px",
            },
            "&.MuiIconButton-sizeMedium": {
              padding: "8px",
            },
            "&.MuiIconButton-sizeLarge": {
              padding: "12px",
            },
          }),
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: ({ ownerState, theme }) => ({
            color: getPaletteByName(theme, ownerState.color).contrastText,
          }),
        },
      },
      MuiButton: {
        styleOverrides: {
          root: ({ ownerState, theme }) => ({
            marginRight: "10px",
            boxShadow: "0px 1px 2px 0px rgba(27, 36, 44, 0.12)",
            ...(ownerState.variant === "text" && {
              boxShadow: "0px",
            }),
            borderRadius: "6px",
            gap: "6px",
            textTransform: "unset",
            fontWeight: 500,
            fontStyle: "normal",
            ...(ownerState.color === "inherit" && {
              backgroundColor: getPaletteByName(theme, ownerState.color).main,
              color: getPaletteByName(theme, ownerState.color).contrastText,
            }),
            "&:focus": {
              boxShadow: "0px 0px 0px 3px #1E88E5, 0px 0px 0px 1px #FFF",
            },
            "&:hover": {
              boxShadow: "0px 1px 2px 0px rgba(27, 36, 44, 0.12);",
              ...(ownerState.variant === "outlined" && {
                background: theme.palette.background.default,
                borderColor: getPaletteByName(theme, ownerState.color).dark,
                color: getPaletteByName(theme, ownerState.color).dark,
              }),
              ...(ownerState.variant === "text" && {
                boxShadow: "0px",
                background: addAlpha(
                  getPaletteByName(theme, ownerState.color).main,
                  0.04,
                ),
              }),
              ...(ownerState.color === "inherit" && {
                backgroundColor: getPaletteByName(theme, ownerState.color)
                  .light,
              }),
            },
            "&:disabled": {
              ...(ownerState.variant === "contained" && {
                opacity: 0.5,
                backgroundColor: getPaletteByName(theme, ownerState.color).main,
                color: getPaletteByName(theme, ownerState.color).contrastText,
              }),
              ...(ownerState.variant === "outlined" && {
                borderColor: addAlpha(theme.palette.gray, 0.12),
                color: addAlpha(theme.palette.gray, 0.38),
              }),
              ...(ownerState.variant === "text" && {
                color: addAlpha(theme.palette.gray, 0.38),
              }),
            },
            "&.MuiButton-sizeSmall": {
              padding: "4px 12px",
              height: "30px",
              fontSize: "13px",
            },
            "&.MuiButton-sizeMedium": {
              padding: "8px 16px",
              height: "36px",
              fontSize: "14px",
            },
            "&.MuiButton-sizeLarge": {
              padding: "10px 16px",
              height: "42px",
              fontSize: "15px",
            },
          }),
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: "6px",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: addAlpha(theme.palette.gray, 0.23),
            },
            "&:Mui-focused": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.primary.main,
              },
            },
            "&:hover:not(:Mui-focused)": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: addAlpha(theme.palette.gray, 0.6),
              },
            },
          }),
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          underline: {
            "&&:hover::before": {
              borderWidth: "2px",
            },
          },
          root: () => ({
            borderRadius: "6px 6px 0px 0px",
          }),
        },
      },
    },
  });
};

export default createCustomTheme;
