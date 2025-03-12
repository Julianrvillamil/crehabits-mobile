import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#FF7A00" },
    secondary: { main: "#FFCC80" },
    background: { default: "#FFFFFF" },
  },
  typography: {
    fontFamily: `"Inter", "Roboto", "Arial", sans-serif`,
  },
});

export default theme;
