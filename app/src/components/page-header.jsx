import React from "react";
import { Link as RouterLink, withRouter } from "react-router-dom";
import { AppBar, Box, Button, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({}));

function PageHeader(props) {
  const classes = useStyles(props);

  return (
    <AppBar position="static" color="primary" className={classes.appBar}>
      <Toolbar>
        <Box display="flex" justifyContent="center" width={1}>
          <Box m={1}>
            <Button component={RouterLink} to="/order" px={3}>
              Order Intake
            </Button>
          </Box>
          <Box m={1}>
            <Button component={RouterLink} to="/executions" px={3}>
              Executions
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default withRouter(PageHeader);
