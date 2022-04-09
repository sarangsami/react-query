import Layout from "../layout";
import { ChildrenProps, PaletteColor } from "types";
import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import { BrowserRouter } from "react-router-dom";

declare module "@mui/material/styles" {
  interface Theme {
    palette: {
      primary: PaletteColor
    };
    status: {
      danger: string;
    };
  }
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const Providers: React.FC<ChildrenProps> = ({ children }) => {
  const theme = createTheme({
    palette: {
      mode:"dark",
      primary: {
        main: orange[500],
      },
    },
    status: {
      danger: orange[500],
    },
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Layout>{children}</Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
};
export default Providers;
