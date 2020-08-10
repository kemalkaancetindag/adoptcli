import React from "react";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import "./App.css";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Grid container justify="center">
        <Grid item>
          <Register />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
