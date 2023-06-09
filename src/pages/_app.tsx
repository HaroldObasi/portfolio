import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/layout/Header";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import theme from "@/theme/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Box
        maxWidth={"lg"}
        // marginX={"auto"}
        mx={{
          xs: 1,
          md: 10,
          lg: "auto",
        }}
      >
        <Header />
        <Component {...pageProps} />
      </Box>
    </ThemeProvider>
  );
}
