import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";
import { ThemeProvider, createTheme } from "@mui/material";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <ChakraProvider>
          <Toaster />

          <Component {...pageProps} />
        </ChakraProvider>
      </ThemeProvider>
    </div>
  );
}

const theme = createTheme();
