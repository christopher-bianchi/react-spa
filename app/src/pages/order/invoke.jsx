import React from "react";
import { Box, Button, Container, Paper, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: 25,
    padding: `0px 0px ${theme.spacing(2)}px 0px`,
  },
}));

function OrderIntake(props) {
  const classes = useStyles(props);
  document.title = "LRO | Invoke";

  return (
    <Container maxWidth="sm">
      <Paper className={classes.paper}>
        <Container>
          <TextField
            variant="outlined"
            label="Order Title"
            margin="normal"
            fullWidth
          />
          <TextField
            variant="outlined"
            label="Order Description"
            margin="dense"
            fullWidth
            multiline
            rows={10}
          />
          <Box display="flex" justifyContent="flex-end">
            <Button type="submit" color="primary" variant="contained">
              Source
            </Button>
          </Box>
        </Container>
      </Paper>
    </Container>
  );
}

export default OrderIntake;
