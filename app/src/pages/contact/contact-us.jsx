import React from "react";
import { Container, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: 25,
    padding: `1px ${theme.spacing(2)}px`,
  },
}));

function ContactPage(props) {
  const classes = useStyles(props);
  document.title = "AFK Arena Toolkit - Contact Us";

  return (
    <Container maxWidth="sm">
      <Paper className={classes.paper}>
        <p>
          Thank you for visiting <strong>AFK Arena Toolkit</strong> where we
          strive to provide useful player tools for the community.
        </p>
        <ul>
          <li>Thoughts on new tools you'd like to see here?</li>
          <li>Any problems/issues using the current tools?</li>
        </ul>
        <p>
          Let us know how we can make your experience better!
          <br />
          Send an email to:{" "}
          <a href="mailto:afk.tools.blackops@gmail.com">
            afk.tools.blackops@gmail.com
          </a>
        </p>
      </Paper>
    </Container>
  );
}

export default ContactPage;
