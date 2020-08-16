import React, { Component, Fragment } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";

import axios from "axios";
import { withStyles } from "@material-ui/core";

const styles = {
  mainGrid: {
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 50,
  },
};

class Cats extends Component {
  state = {
    cats: [],
    login: false,
    open: false,
    age: "",
    breed: "",
    weight: "",
    sex: "",
    kind: "",
  };

  modalHandler = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onFormSubmit = (e,petId) => {
    e.preventDefault()
    axios
      .post(
        `https://europe-west3-adopt-f1505.cloudfunctions.net/api/updatepet/${petId}`
      ).then(() => {
        alert("Pet updated successfully!");
        window.location.reload();
      });

  }

  deletePet = (petId) => {
    axios
      .delete(
        `https://europe-west3-adopt-f1505.cloudfunctions.net/api/deletepet/${petId}`
      )
      .then(() => {
        alert("Pet deleted successfully!");
        window.location.reload();
      });
  };

  componentDidMount() {
    axios
      .get("https://europe-west3-adopt-f1505.cloudfunctions.net/api/cats")
      .then((res) => {
        this.setState({ cats: res.data, login: true });
      })
      .catch((err) => {
        throw new Error("Internal server error");
      });
  }
  showCats = (classes) => (
    <Fragment>
      <Grid containe direction="column" justify="center" alignItems="center">
        <Grid item xs={4}></Grid>
        <Grid item align="center" className={classes.mainGrid} xs={4}>
          {this.state.cat.map((cat) => (
            <Card>
              <CardMedia></CardMedia>
              <CardContent>
                <Typography>Age: {cat.age}</Typography>
                <Typography>Breed: {cat.breed}</Typography>
                <Typography>Sex: {cat.sex}</Typography>
                <Typography>Weight: {cat.weight}</Typography>
              </CardContent>
              <CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Adopt
                  </Button>
                  {this.state.login ? (
                    <Fragment>
                      <Button
                        size="small"
                        color="primary"
                        onClick={() => {
                          this.deletePet(cat.petId);
                        }}
                      >
                        Delete
                      </Button>
                      <Button
                        size="small"
                        color="primary"
                        onClick={this.modalHandler}
                      >
                        Edit
                      </Button>
                    </Fragment>
                  ) : null}
                </CardActions>
              </CardActionArea>
            </Card>
          ))}
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </Fragment>
  );
  render() {
    const { classes } = this.props;
    return this.state.cats.length > 0 ? (
      this.showCats(classes)
    ) : (
      <Fragment>
        <Typography>
          We are sorry we have no cats for adoption if you wish you could maybe
          adopt dog ?
        </Typography>
        <Dialog open={this.state.open}>
          <DialogTitle>Add Pet For Adopt</DialogTitle>
          <DialogContent>
            <form onSubmit={this.onFormSubmit}>
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
              <Button type="submit">Edit Pet</Button>
              <Button onClick={this.modalHandler}>Cancel</Button>
            </form>
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Cats);
