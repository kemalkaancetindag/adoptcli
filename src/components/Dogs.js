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
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/adopt-f1505/europe-west3/api/dogs")
      .then((res) => {
        this.setState({ dogs: res.data });
      })
      .catch((err) => {
        throw new Error("Internal server error");
      });
  }

  render() {
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
                      <Button size="small" color="primary">
                        Delete
                      </Button>
                      <Button size="small" color="primary">
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
      </Grid>
    );
  }
}

export default withStyles(styles)(Dogs);
