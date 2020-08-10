import React, { Component, Fragment } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  withStyles,
  Button,
  Box,
  Grid,
} from "@material-ui/core";

const styles = {
  conatinerBox: {
    alignItems: "center",
    display: "flex",
  },
  card: {
    marginRight: 70,
    marginTop: 100,
  },
  header: {
    color: "#5D9C47",
    marginTop: 20,
  },
  cardHeaders: {
    color: "#5D9C47",
  },
  cardtext: {
    color: "#949893",
  },
  infoHeader: {
    color: "#5D9C47",
    marginTop:50
  },
  infoText: {
    color: "#949893",
    marginTop:20
  },
};

class Main extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h2" className={classes.header}>
              Adopt
            </Typography>
          </Grid>
          <Grid item>
            <Box className={classes.conatinerBox}>
              <Card className={classes.card}>
                <CardMedia>
                  <img src="http://via.placeholder.com/300x300" />
                </CardMedia>
                <CardContent>
                  <Typography variant="h4" className={classes.cardHeaders}>
                    Köpek
                  </Typography>
                  <Typography varian="body2" className={classes.cardtext}>
                    Sahiplen Beni Spyadi
                  </Typography>
                </CardContent>
              </Card>
              <Card className={classes.card}>
                <CardMedia>
                  <img src="http://via.placeholder.com/300x300" />
                </CardMedia>
                <CardContent>
                  <Typography variant="h4" className={classes.cardHeaders}>
                    Kedi
                  </Typography>
                  <Typography varian="body2" className={classes.cardtext}>
                    Sahiplen Beni Spyadi
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item>
            <Typography variant="h4" className ={ classes.infoHeader} >Info Text About Adoption</Typography>
            <Typography varian="body2" className ={ classes.infoText}>Sahiplen Beni Spyadi</Typography>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Main);
