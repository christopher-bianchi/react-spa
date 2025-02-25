import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Box } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import CustomTheme from "./assets/theme.json";
import PageHeader from "./components/page-header";
import OrderIntake from "./pages/order/invoke";

const theme = createMuiTheme(CustomTheme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box display="flex" flexDirection="column" height="100%">
        <PageHeader />
        <Box flexGrow={1} flexShrink={0}>
          <Switch>
            <Redirect exact from="/" to="/order" />
            <Route path="/order">
              <OrderIntake />
            </Route>
          </Switch>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
