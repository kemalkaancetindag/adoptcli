//Imports
import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
//Components
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";
import Main from "./components/Main";

import "./App.css";

import { Grid } from "@material-ui/core";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Grid container justify="center">
        <Grid item>
         <Route exact path = "/login" component = {Login}/>
         <Route exact path = "/register" component = {Register}/>
         <Route exact path = "/" component = {Main}/>
        </Grid>
      </Grid>
    </div>
    </BrowserRouter>
  );
}

export default App;
