import React, { Component, Fragment } from "react";
import {
  TextField,
  Grid,
  FormGroup,
  Button,
  withStyles,
  Typography,
} from "@material-ui/core";

const styles = {
  textfield: {
    marginTop: 40,
    width: "100%",
    borderColor: "#5D9C47",
  },
  button: {
    marginTop: 30,
    color: "#5D9C47",
    fontSize: 25,
  },
  headerText: {
    color: "#5D9C47",
    marginTop: 20,
  },
};

class Login extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Typography variant="h2" className={classes.headerText}>
          Login
        </Typography>
        <FormGroup>
          <TextField
            label="Email"
            className={classes.textfield}
            variant="outlined"
          />
          <TextField
            label="Password"
            className={classes.textfield}
            variant="outlined"
            type = "password"
          />

          <Button className={classes.button}>Login</Button>
        </FormGroup>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Login);
