import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  withStyles,
  Link,
  FormGroup,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";

import axios from "axios";

import HomeIcon from "@material-ui/icons/HomeOutlined";
import AddIcon from "@material-ui/icons/Add";

const styles = {
  appbar: {
    alignItems: "center",
  },
  button: {
    color: "#5D9C47",
    marginRight: 30,
    fontSize: 20,
  },
};

class Navbar extends Component {
  state = {
    open: false,
    kind: "",
    breed: "",
    age: "",
    weight: "",
    sex: "",
    login: null,
  };

  modalHandler = () => {
    this.setState({ open: !this.state.open });
  };

  submitAddPet = (e) => {
    const { kind, breed, age, weight, sex } = this.state;

    const petInfo = {
      kind,
      breed,
      age,
      weight,
      sex,
    };

    axios
      .post(
        "http://localhost:5000/adopt-f1505/europe-west3/api/addpet",
        petInfo
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { classes } = this.props;
    console.log(this.state.login);
    return (
      <div>
        <AppBar position="static" color="light" className={classes.appbar}>
          <Toolbar>
            <Link underline="none" href="/donation">
              <Button className={classes.button}>Donate</Button>
            </Link>
            <Link underline="none" href="/feed">
              <Button className={classes.button}>Feed</Button>
            </Link>
            <Link href="/" underline="none">
              <IconButton className={classes.button} to="/">
                <HomeIcon />
              </IconButton>
            </Link>
            <Link href="/login" underline="none">
              <Button className={classes.button} to="/login">
                Login
              </Button>
            </Link>
            <Link href="/register" underline="none">
              <Button className={classes.button}>Register</Button>
            </Link>
            {window.location.pathname === "/cats" ? (
              <IconButton
                className={classes.button}
                onClick={this.modalHandler}
              >
                <AddIcon />
              </IconButton>
            ) : null}
            {window.location.pathname === "/dogs" ? (
              <IconButton
                className={classes.button}
                onClick={this.modalHandler}
              >
                <AddIcon />
              </IconButton>
            ) : null}
          </Toolbar>
        </AppBar>
        <Dialog open={this.state.open}>
          <DialogTitle>Add Pet For Adopt</DialogTitle>
          <DialogContent>
            <form onSubmit={this.submitAddPet}>
              <TextField
                autoFocus
                margin="dense"
                label="Photo"
                type="file"
                fullWidth
                onChange={this.onChangeHandler}
              />
              <TextField
                autoFocus
                margin="dense"
                name="age"
                label="Age"
                type="text"
                fullWidth
                onChange={this.onChangeHandler}
              />
              <TextField
                autoFocus
                margin="dense"
                name="breed"
                label="Breed"
                type="text"
                fullWidth
                onChange={this.onChangeHandler}
              />
              <TextField
                autoFocus
                margin="dense"
                name="weight"
                label="Weight"
                type="text"
                fullWidth
                onChange={this.onChangeHandler}
              />
              <TextField
                autoFocus
                margin="dense"
                name="sex"
                label="Sex"
                type="text"
                fullWidth
                onChange={this.onChangeHandler}
              />
              <TextField
                autoFocus
                margin="dense"
                name="kind"
                label="Kind"
                type="text"
                fullWidth
                onChange={this.onChangeHandler}
              />
              <Button type="submit">Add Pet</Button>
              <Button onClick={this.modalHandler}>Cancel</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}
export default withStyles(styles)(Navbar);
