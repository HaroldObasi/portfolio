import { Palette, PaletteOptions } from "@mui/material";
// import type {} from "@mui/lab/themeAugmentation";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      dark: "#0C1222",
      main: "#0f172a",
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});

export default theme;
