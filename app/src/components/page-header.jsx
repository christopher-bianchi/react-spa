import React, { useState } from "react";
import { Link as RouterLink, withRouter } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Link,
  Menu,
  MenuItem,
  Toolbar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

import ModeHeaders from "./game-modes";

const useStyles = makeStyles((theme) => ({}));

function PageHeader(props) {
  const classes = useStyles(props);
  const [anchorEl, setAnchorEl] = useState(null);

  let buildMenuItems = [];
  const { history, location } = props;
  const open = Boolean(anchorEl);

  const handleMenuClick = (path) => {
    setAnchorEl(null);
    history.push(path);
  };

  Object.entries(ModeHeaders).forEach(([mode, modeData]) => {
    if (mode !== "default") {
      const path = `/builder/${mode}`;

      buildMenuItems.push(
        <MenuItem
          dense
          key={`builder-${mode}`}
          onClick={() => handleMenuClick(path)}
          selected={path === location.pathname}
        >
          {modeData.alt}
        </MenuItem>
      );
    }
  });

  return (
    <AppBar position="static" color="primary" className={classes.appBar}>
      <Box
        fontFamily="'Black Ops One', cursive"
        fontSize="h4.fontSize"
        textAlign="center"
        pt={1}
      >
        <Link component={RouterLink} to="/" px={3} color="inherit">
          AFK Arena Toolkit
        </Link>
      </Box>
      <Toolbar>
        <Box display="flex" justifyContent="center" width={1}>
          <Box m={1}>
            <Button component={RouterLink} to="/planner" px={3}>
              Sigil Event Planner
            </Button>
          </Box>
          <Box m={1}>
            <Button
              aria-controls="builders"
              aria-haspopup="true"
              endIcon={<KeyboardArrowDownIcon />}
              onClick={(event) => setAnchorEl(event.currentTarget)}
            >
              Builders
            </Button>
            <Menu
              id="builders"
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              getContentAnchorEl={null}
              keepMounted
              open={open}
              onClose={() => setAnchorEl(null)}
              PaperProps={{
                style: {
                  width: "19ch",
                },
              }}
              transformOrigin={{ vertical: "top", horizontal: "center" }}
            >
              {buildMenuItems}
            </Menu>
          </Box>
          <Box m={1}>
            <Button component={RouterLink} to="/contact" px={3}>
              Contact
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default withRouter(PageHeader);
