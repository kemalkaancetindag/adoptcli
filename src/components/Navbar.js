import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  withStyles,
  Box,
} from "@material-ui/core";

import HomeIcon from "@material-ui/icons/HomeOutlined";

const styles = {};

class Navbar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="static" color="light" display="flex">
          <Toolbar>
            <Button color="inherit" justify="center">
              Donate
            </Button>
            <Button color="inherit">Feed</Button>

            <IconButton>
              <HomeIcon />
            </IconButton>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Register</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default withStyles(styles)(Navbar);
