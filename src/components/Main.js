import React, { Component, Fragment } from "react";
import {
  Typography,
  withStyles,
  Grid,
  Paper,
  Link,
} from "@material-ui/core";

const styles = {
  cardHeader: {
    color: "#5D9C47",
  },
  cardText: {
    color: "textSecondary",
    marginTop: 20,
  },
};

class Main extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Grid container align="center">
          <Grid item md={6} style={{ marginTop: 20 }}>
            <Paper>
              <img src="http://via.placeholder.com/1000x600" />
              <Link href="/dogs" underline = "none">
                <Typography variant="h3" className={classes.cardHeader}>
                  Dog
                </Typography>
              </Link>
              <Typography
                variant="body1"
                className={classes.cardText}
                color="textSecondary"
              >
                
              </Typography>
            </Paper>
          </Grid>
          <Grid item md={6} style={{ marginTop: 20 }}>
            <Paper>
              <img src="http://via.placeholder.com/1000x600" />
              <Link href = "/cats" underline = "none">
              <Typography variant="h3" className={classes.cardHeader}>
                Cat
              </Typography>
              </Link>
              <Typography
                variant="body1"
                className={classes.cardText}
                color="textSecondary"
              >
               
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Main);
