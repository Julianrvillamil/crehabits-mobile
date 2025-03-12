"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, StyledEngineProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF9800",
      light: "#FFB74D",
      dark: "#F57C00",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FFD700",
      light: "#FFECB3",
      dark: "#FFA000",
      contrastText: "#333333",
    },
    background: {
      default: "#FAFAFA",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#212121",
      secondary: "#757575",
    },
    error: { main: "#D32F2F", light: "#FFCDD2", dark: "#B71C1C" },
    success: { main: "#4CAF50", light: "#81C784", dark: "#388E3C" },
    warning: { main: "#FFA726", light: "#FFCC80", dark: "#F57C00" },
    info: { main: "#29B6F6", light: "#4FC3F7", dark: "#0288D1" },
  },
  typography: {
    fontFamily: `"Roboto", "Inter", "Helvetica", "Arial", sans-serif`,
    h1: { fontSize: "2.5rem", fontWeight: 700, color: "#FF9800" },
    h2: { fontSize: "2rem", fontWeight: 600, color: "#FF9800" },
    h3: { fontSize: "1.5rem", fontWeight: 500, color: "#212121" },
    body1: { fontSize: "1rem", color: "#333333" },
    body2: { fontSize: "0.875rem", color: "#666666" },
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "30px",
          padding: "12px 24px",
          fontWeight: 600,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#FF9800",
          color: "#FFFFFF",
        },
      },
    },
  },
});

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <StyledEngineProvider injectFirst> {/* Fixes style order */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
