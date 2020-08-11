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

class Donation extends Component {
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
                  100/1000$
                </Typography>
              </Box>
            </Box>
            <Typography
              variant="body1"
              className={classes.header}
              color="textSecondary"
            >
              Monthly Donation Goal
            </Typography>
          </Grid>

          <Grid item md={8} align="center">
            <img src="http://via.placeholder.com/720x480" />
            <Typography
              variant="h3"
              className={classes.header}
              color="textSecondary"
            >
              DONATE AND MAKE A DIFFERENCE!
            </Typography>

            <Button
              size="large"
              variant="contained"
              color="#5D9C47"
              className={classes.donationButton}
            >
              50$
            </Button>
            <Button
              size="large"
              variant="contained"
              className={classes.donationButton}
            >
              100$
            </Button>
            <Button
              size="large"
              variant="contained"
              className={classes.donationButton}
            >
              150$
            </Button>
            <Button
              size="large"
              variant="contained"
              className={classes.donationButton}
            >
              200$
            </Button>
            <Button
              size="large"
              variant="contained"
              className={classes.donationButton}
            >
              250$
            </Button>
            <TextField
              label="Special Donation"
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

export default withStyles(styles)(Donation);
