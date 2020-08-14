import React, { Component, Fragment } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";

import { withStyles } from "@material-ui/core";

const styles = {
  mainGrid: {
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 50,
  },
};

class Dogs extends Component {
  state = {
    dogs: [],
    login: false,
    open: false,
    editPetId:null
  };

  editPetIdHandler = (e,petId) => {
    this.setState({
      editPetId:petId
    })
  }

  modalHandler = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault()
    axios
      .post(
        `http://localhost:5000/adopt-f1505/europe-west3/api/updatepet/${this.state.editPetId}`
      ).then(() => {
        alert("Pet updated successfully!");
        window.location.reload();
      });

  }

  deletePet = (petId) => {
    axios
      .delete(
        `http://localhost:5000/adopt-f1505/europe-west3/api/deletepet/${petId}`
      )
      .then(() => {
        alert("Pet deleted successfully!");
        window.location.reload();
      });
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/adopt-f1505/europe-west3/api/dogs")
      .then((res) => {
        this.setState({ dogs: res.data, login: true });
      })
      .catch((err) => {
        throw new Error("Internal server error");
      });
  }

  render() {
    console.log(this.state);
    const { classes } = this.props;
    return (
      <Grid containe direction="column" justify="center" alignItems="center">
        <Grid item xs={4}>
          <div></div>
        </Grid>
        <Grid item align="center" className={classes.mainGrid} xs={4}>
          {this.state.dogs.map((dog) => (
            <Card>
              <CardMedia></CardMedia>
              <CardContent>
                <Typography>Age: {dog.age}</Typography>
                <Typography>Breed: {dog.breed}</Typography>
                <Typography>Sex: {dog.sex}</Typography>
                <Typography>Weight: {dog.weight}</Typography>
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
                        onClick={() => this.deletePet(dog.petId)}
                      >
                        Delete
                      </Button>
                      <Button
                        size="small"
                        color="primary"
                        onClick={(e) => {
                          this.modalHandler()
                          this.editPetIdHandler(e,dog.petId)
                        }}
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
        <Grid item xs={4}>
          <div></div>
        </Grid>
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
      </Grid>
    );
  }
}

export default withStyles(styles)(Dogs);
