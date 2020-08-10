import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  withStyles,
  Link,
} from "@material-ui/core";

import HomeIcon from "@material-ui/icons/HomeOutlined";

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
  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="static" color="light" className={classes.appbar}>
          <Toolbar>
            <Link underline="none">
              <Button className={classes.button}>Donate</Button>
            </Link>
            <Link underline="none">
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
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default withStyles(styles)(Navbar);
