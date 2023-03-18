import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      dark: "#0C1222",
      main: "#0f172a",
    },
    grey: {
      300: "#FFF",
      400: "#F9F9FA",
      500: "#dddde3",
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});

export default theme;
