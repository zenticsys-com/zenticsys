"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import {
  CssBaseline,
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from "@mui/material";
import { ReactNode } from "react";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#ef3d23",
      dark: "#d62c14",
      light: "#f25a42",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#f5f5f5",
      dark: "#e0e0e0",
      light: "#fafafa",
      contrastText: "#2c2c2c",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    text: {
      primary: "#2c2c2c",
      secondary: "#757575",
    },
    error: {
      main: "#d32f2f",
    },
    warning: {
      main: "#ff9800",
    },
    info: {
      main: "#2196f3",
    },
    success: {
      main: "#4caf50",
    },
    grey: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
  },
  typography: {
    fontFamily: "Inter, system-ui, -apple-system, sans-serif",
    h1: {
      fontWeight: 600,
      fontSize: "2.5rem",
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 600,
      fontSize: "2rem",
      lineHeight: 1.3,
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.5rem",
      lineHeight: 1.4,
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.25rem",
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.125rem",
      lineHeight: 1.4,
    },
    h6: {
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: 1.4,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.6,
    },
    button: {
      fontWeight: 500,
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    "none",
    "0 1px 3px rgba(0,0,0,0.12)",
    "0 1px 5px rgba(0,0,0,0.2)",
    "0 1px 8px rgba(0,0,0,0.3)",
    "0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12)",
    "0 3px 5px -1px rgba(0,0,0,0.2), 0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12)",
    "0 3px 5px -1px rgba(0,0,0,0.2), 0 9px 12px 1px rgba(0,0,0,0.14), 0 3px 16px 2px rgba(0,0,0,0.12)",
    "0 5px 5px -3px rgba(0,0,0,0.2), 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12)",
    "0 5px 6px -3px rgba(0,0,0,0.2), 0 9px 12px 1px rgba(0,0,0,0.14), 0 3px 16px 2px rgba(0,0,0,0.12)",
    "0 6px 6px -3px rgba(0,0,0,0.2), 0 10px 14px 1px rgba(0,0,0,0.14), 0 4px 18px 3px rgba(0,0,0,0.12)",
    "0 6px 7px -4px rgba(0,0,0,0.2), 0 11px 15px 1px rgba(0,0,0,0.14), 0 4px 20px 3px rgba(0,0,0,0.12)",
    "0 7px 8px -4px rgba(0,0,0,0.2), 0 12px 17px 2px rgba(0,0,0,0.14), 0 5px 22px 4px rgba(0,0,0,0.12)",
    "0 7px 8px -4px rgba(0,0,0,0.2), 0 13px 19px 2px rgba(0,0,0,0.14), 0 5px 24px 4px rgba(0,0,0,0.12)",
    "0 7px 9px -4px rgba(0,0,0,0.2), 0 14px 21px 2px rgba(0,0,0,0.14), 0 5px 26px 4px rgba(0,0,0,0.12)",
    "0 8px 9px -5px rgba(0,0,0,0.2), 0 15px 22px 2px rgba(0,0,0,0.14), 0 6px 28px 5px rgba(0,0,0,0.12)",
    "0 8px 10px -5px rgba(0,0,0,0.2), 0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12)",
    "0 8px 11px -5px rgba(0,0,0,0.2), 0 17px 26px 2px rgba(0,0,0,0.14), 0 6px 32px 5px rgba(0,0,0,0.12)",
    "0 9px 11px -5px rgba(0,0,0,0.2), 0 18px 28px 2px rgba(0,0,0,0.14), 0 7px 34px 6px rgba(0,0,0,0.12)",
    "0 9px 12px -6px rgba(0,0,0,0.2), 0 19px 29px 2px rgba(0,0,0,0.14), 0 7px 36px 6px rgba(0,0,0,0.12)",
    "0 10px 13px -6px rgba(0,0,0,0.2), 0 20px 31px 3px rgba(0,0,0,0.14), 0 8px 38px 7px rgba(0,0,0,0.12)",
    "0 10px 13px -6px rgba(0,0,0,0.2), 0 21px 33px 3px rgba(0,0,0,0.14), 0 8px 40px 7px rgba(0,0,0,0.12)",
    "0 10px 14px -6px rgba(0,0,0,0.2), 0 22px 35px 3px rgba(0,0,0,0.14), 0 8px 42px 7px rgba(0,0,0,0.12)",
    "0 11px 14px -7px rgba(0,0,0,0.2), 0 23px 36px 3px rgba(0,0,0,0.14), 0 9px 44px 8px rgba(0,0,0,0.12)",
    "0 11px 15px -7px rgba(0,0,0,0.2), 0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12)",
    "0 12px 16px -8px rgba(0,0,0,0.2), 0 26px 42px 4px rgba(0,0,0,0.14), 0 10px 50px 8px rgba(0,0,0,0.12)",
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 500,
          padding: "8px 24px",
        },
        contained: {
          boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
          "&:hover": {
            boxShadow: "0 1px 5px rgba(0,0,0,0.2)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 8,
            backgroundColor: "#f8f8f8",
            "& fieldset": {
              borderColor: "rgba(0, 0, 0, 0.12)",
            },
            "&:hover fieldset": {
              borderColor: "rgba(0, 0, 0, 0.23)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#ef3d23",
            },
          },
        },
      },
    },
  },
});

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </AppRouterCacheProvider>
  );
}
