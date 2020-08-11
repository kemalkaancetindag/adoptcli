import React, { Component, Fragment } from "react";
import {
  Grid,
  CircularProgress,
  Box,
  Typography,
  withStyles,
  Button,
  TextField,
  FormGroup,
} from "@material-ui/core";

const styles = {
  progressBox: {
    marginTop: 85,

    color: "#5D9C47",
    justify: "center",
  },
  header: {
    marginTop: 50,
    color: "textSecondary",
  },
  donationButton: {
    color: "white",
    backgroundColor: "#5D9C47",
    marginRight: 10,
    marginTop: 20,
  },
  textField: {
    marginLeft: 10,
    marginTop: 20,
  },
  formGroup: {
    marginTop: 20,
  },
  paymentHeader: {
    marginTop: 20,
    marginBottom: 20,
  },
  differenceButton: {
    backgroundColor: "#5D9C47",
    marginTop: 20,
    color: "white",
  },
};

class Feed extends Component {
  state = {
    login: true,
  };

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Grid container>
          <Grid item md={3} align="center">
            <Box
              position="relative"
              display="inline-flex"
              className={classes.progressBox}
            >
              <CircularProgress
                variant="static"
                value="50"
                size={300}
                color="#5D9C47"
              />
              <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Typography
                  variant="body2"
                  component="div"
                  color="textSecondary"
                >
                  100/1000 packs
                </Typography>
              </Box>
            </Box>
            <Typography
              variant="body1"
              className={classes.header}
              color="textSecondary"
            >
              Monthly Feed Goal
            </Typography>
          </Grid>

          <Grid item md={8} align="center">
            <img src="http://via.placeholder.com/720x480" />
            <Typography
              variant="h3"
              className={classes.header}
              color="textSecondary"
            >
              FEED AND MAKE A DIFFERENCE!
            </Typography>

            <Button
              size="large"
              variant="contained"
              color="#5D9C47"
              className={classes.donationButton}
            >
              1 Pack Food
            </Button>
            <Button
              size="large"
              variant="contained"
              className={classes.donationButton}
            >
              2 Pack Food
            </Button>
            <Button
              size="large"
              variant="contained"
              className={classes.donationButton}
            >
              3 Pack Food
            </Button>
            <Button
              size="large"
              variant="contained"
              className={classes.donationButton}
            >
              4 Pack Food
            </Button>
            <Button
              size="large"
              variant="contained"
              className={classes.donationButton}
            >
              5 Pack Food
            </Button>
            <TextField
              label="Packs Of Food"
              variant="outlined"
              className={classes.textField}
              size="small"
            />

            <FormGroup className={classes.formGroup}>
              <TextField
                label="Name"
                variant="outlined"
                className={classes.textField}
                fullWidth
              />
              <TextField
                label="Surname"
                variant="outlined"
                className={classes.textField}
                fullWidth
              />
              <TextField
                label="Email"
                variant="outlined"
                className={classes.textField}
                fullWidth
              />
              <Typography
                variant="h2"
                color="textSecondary"
                className={classes.paymentHeader}
              >
                Payment
              </Typography>
              <TextField
                label="Card Number"
                variant="outlined"
                className={classes.textField}
                fullWidth
              />
              <TextField
                label="CVC Code"
                variant="outlined"
                className={classes.textField}
                fullWidth
              />
              <TextField
                label="Expire Date (MM/YY)"
                variant="outlined"
                className={classes.textField}
                fullWidth
              />
              {this.state.login ? (
                <Button className={classes.differenceButton} fullWidth>
                  MAKE DIFFERENCE
                </Button>
              ) : (
                <Button
                  className={classes.differenceButton}
                  fullWidth
                  href="/login"
                >
                  Login
                </Button>
              )}
            </FormGroup>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Feed);
