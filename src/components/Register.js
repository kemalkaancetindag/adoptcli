import React, { Component, Fragment } from "react";
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
    marginTop: 20,
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

class Register extends Component {
  state = {
    name: "",
    surname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onFormSubmit = (e) => {
    e.preventDefault();
    const {
      name,
      surname,
      username,
      email,
      password,
      confirmPassword,
    } = this.state;
    const registerInfo = {
      name,
      username,
      surname,
      email,
      password,
      confirmPassword,
    };
    axios
      .post(
        "http://localhost:5000/adopt-f1505/europe-west3/api/register",
        registerInfo
      )
      .then((res) => {
        const FBIdToken = `Bearer ${res.data.token}`;
        localStorage.setItem("AuthToken", FBIdToken);
        axios.defaults.headers.common["Authorization"] = FBIdToken;
        window.history.pushState("", "", "/");
        window.location.reload();
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
              Register
            </Typography>
            <form onSubmit={this.onFormSubmit}>
              <TextField
                label="Name"
                className={classes.textfield}
                variant="outlined"
                name="name"
                onChange={this.onChangeHandler}
              />
              <TextField
                label="Surname"
                className={classes.textfield}
                variant="outlined"
                name="surname"
                onChange={this.onChangeHandler}
              />
              <TextField
                label="Username"
                className={classes.textfield}
                variant="outlined"
                name="username"
                onChange={this.onChangeHandler}
              />
              <TextField
                label="Email"
                className={classes.textfield}
                variant="outlined"
                name="email"
                onChange={this.onChangeHandler}
              />
              <TextField
                label="Password"
                className={classes.textfield}
                variant="outlined"
                name="password"
                onChange={this.onChangeHandler}
              />
              <TextField
                label="Password Confirm"
                className={classes.textfield}
                variant="outlined"
                name="confirmPassword"
                onChange={this.onChangeHandler}
              />
              <Button className={classes.button} type="submit">
                Register
              </Button>
              <br></br>
              <span>
                <Typography>
                  You already have an account? lets <a href="/login">login</a>{" "}
                  and make a difference.
                </Typography>
              </span>
            </form>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Register);
