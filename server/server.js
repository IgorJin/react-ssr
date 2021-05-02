import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

import { SheetsRegistry } from "react-jss/lib/jss";
import JssProvider from "react-jss/lib/JssProvider";
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName,
} from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";

import App from "&/app";
import template from "./template";

export default function render(url) {
  const reactRouterContext = {};

  const sheetRegistry = new SheetsRegistry();
  const sheetsManager = new Map();
  const theme = createMuiTheme({
    palette: {
      primary: purple,
      secondary: {
        main: "#f44336",
      },
    },
  });

  const generateClassName = createGenerateClassName();

  let content = renderToString(
    <StaticRouter location={url} context={reactRouterContext}>
      <JssProvider
        registry={sheetRegistry}
        generateClassName={generateClassName}
      >
        <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
          <App />
        </MuiThemeProvider>
      </JssProvider>
    </StaticRouter>
  );

  const helmet = Helmet.renderStatic();

  return template(helmet, content, sheetRegistry);
}
