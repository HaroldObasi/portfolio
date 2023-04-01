import { createTheme } from "@mui/material/styles";

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    neutral: true;
    lightBlue: true;
  }
}

declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
    lightBlue: Palette["primary"];
  }

  interface PaletteOptions {
    neutral: PaletteOptions["primary"];
    lightBlue: PaletteOptions["primary"];
  }
}

const theme = createTheme({
  palette: {
    primary: {
      dark: "#0C1222",
      main: "#0f172a",
      light: "#1C2C50",
    },
    neutral: {
      main: "#4B5563",
      contrastText: "#fff",
    },
    lightBlue: {
      main: "#1C2C50",
    },

    grey: {
      300: "#FFF",
      400: "#F9F9FA",
      500: "#dddde3",
    },
    text: {
      primary: "#5B78E5",
      secondary: "#501C2C",
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});

export default theme;
