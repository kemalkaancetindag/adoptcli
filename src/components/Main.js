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
  Paper,
} from "@material-ui/core";

const styles = {
  cardHeader:{
    color: "#5D9C47",
  },
  cardText : {
    color : "textSecondary",
    marginTop:20
  }
};

class Main extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
       <Grid container align = "center">
       
         <Grid item md = {6} style={{marginTop:20}}>
            <Paper>
              <img src = "http://via.placeholder.com/1000x600"/>
              <Typography variant = "h3" className = {classes.cardHeader}>Dog</Typography>
              <Typography variant = "body1" className = {classes.cardText} color = "textSecondary">
              This UI guidance includes a flexible grid that ensures consistency across layouts. ... values and don't need to be equal within the Material Design grid system.
              This UI guidance includes a flexible grid that ensures consistency across layouts. ... values and don't need to be equal within the Material Design grid system.
              This UI guidance includes a flexible grid that ensures consistency across layouts. ... values and don't need to be equal within the Material Design grid system.

              </Typography>

            </Paper>
         </Grid>
         <Grid item md = {6} style={{marginTop:20}}>
            <Paper>
             <img src = "http://via.placeholder.com/1000x600"/>
             <Typography variant = "h3" className = {classes.cardHeader}>Cat</Typography>
             <Typography variant = "body1" className = {classes.cardText} color = "textSecondary">
             This UI guidance includes a flexible grid that ensures consistency across layouts. ... values and don't need to be equal within the Material Design grid system.
             This UI guidance includes a flexible grid that ensures consistency across layouts. ... values and don't need to be equal within the Material Design grid system.
             This UI guidance includes a flexible grid that ensures consistency across layouts. ... values and don't need to be equal within the Material Design grid system.

             </Typography>
            </Paper>
         </Grid>
         

       </Grid>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Main);
