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
    marginTop: 20,
    width:"100%"
  },
  button:{
      marginTop:20
  },
  headerText:{
    color:"#5D9C47",
    marginTop:20

  }
};

class Register extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
          <Typography variant = "h2" className = {classes.headerText}>Register</Typography>
        <FormGroup>
          <TextField
            label="Name"
            className={classes.textfield}
            variant="outlined"
          />
          <TextField
            label="Surname"
            className={classes.textfield}
            variant="outlined"
          />
          <TextField
            label="Username"
            className={classes.textfield}
            variant="outlined"
          />
          <TextField
            label="Email"
            className={classes.textfield}
            variant="outlined"
          />
          <TextField
            label="Password"
            className={classes.textfield}
            variant="outlined"
          />
          <TextField
            label="Password Confirm"
            className={classes.textfield}
            variant="outlined"
          />
          <Button className = {classes.button}>Register</Button>
        </FormGroup>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Register);
