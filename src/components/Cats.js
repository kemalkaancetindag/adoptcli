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

class Cats extends Component {
  state = {
    cats: [],
    login: false,
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/adopt-f1505/europe-west3/api/cats")
      .then((res) => {
        this.setState({ cats: res.data });
      })
      .catch((err) => {
        throw new Error("Internal server error");
      });
  }
  showCats = (classes) => (
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
      <Grid item xs={4}></Grid>
    </Grid>
  );
  render() {
    const { classes } = this.props;
    return this.state.cats.length > 0 ? (
      this.showCats(classes)
    ) : (
      <Typography>
        We are sorry we have no cats for adoption if you wish you could maybe
        adopt dog ?
      </Typography>
    );
  }
}

export default withStyles(styles)(Cats);
