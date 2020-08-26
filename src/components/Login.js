import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import {
  TextField,
  Grid,
  FormGroup,
  Button,
  withStyles,
  Typography,
} from "@material-ui/core";

import axios from "axios";

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
  state = {
    email: "",
    password: "",
  };

  emailOnChange = (e) => {
    this.setState({ email: e.target.value });
  };

  passwordOnChange = (e) => {
    this.setState({ password: e.target.value });
  };

  submitForm = (e) => {
    e.preventDefault();
    const loginInfo = {
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post(
        "https://europe-west3-adopt-f1505.cloudfunctions.net/api/login",
        loginInfo
      )
      .then((res) => {
        const FBIdToken = `Bearer ${res.data.token}`;
        localStorage.setItem("AuthToken", FBIdToken);
        const token = window.localStorage.getItem("AuthToken");

        axios.defaults.headers.common["Authorization"] = token;

        this.props.history.push("/");
      });
  };

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Grid container>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <Typography variant="h2" className={classes.headerText}>
              Login
            </Typography>
            <form onSubmit={this.submitForm}>
              <TextField
                label="Email"
                className={classes.textfield}
                variant="outlined"
                value={this.state.email}
                onChange={this.emailOnChange}
              />
              <TextField
                label="Password"
                className={classes.textfield}
                variant="outlined"
                type="password"
                value={this.state.password}
                onChange={this.passwordOnChange}
              ></TextField>

              <Button className={classes.button} type="submit">
                Login
              </Button>
              <br></br>
              <span>
                <Typography>
                  You dont have an account? lets{" "}
                  <a href="/register">register</a> and make a difference.
                </Typography>
              </span>
            </form>
          </Grid>
        </Grid>
        <Grid item xs={4}></Grid>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Login);
