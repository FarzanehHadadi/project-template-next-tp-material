import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next//head";
import { Button } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../styles/theme";
import CssBaseline from "@material-ui/core/CssBaseline";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default MyApp;
