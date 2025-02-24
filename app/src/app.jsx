import React from "react";
import { Route, Switch } from "react-router-dom";
import { Box } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import CustomTheme from "./assets/theme.json";
import PageHeader from "./components/page-header";
import ContactPage from "./pages/contact/contact-us";

const theme = createMuiTheme(CustomTheme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box display="flex" flexDirection="column" height="100%">
        <PageHeader />
        <Box flexGrow={1} flexShrink={0}>
          <Switch>
            <Route path="/" exact>
              <ContactPage />
            </Route>
          </Switch>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
