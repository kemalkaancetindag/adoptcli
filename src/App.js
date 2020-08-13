//Imports
import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
//Components
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";
import Main from "./components/Main";
import Feed from "./components/Feed";
import Cats from "./components/Cats";
import Dogs from "./components/Dogs";


import "./App.css";

import { Grid } from "@material-ui/core";
import Donation from "./components/Donation";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/cats" component={Cats} />
        <Route exact path="/dogs" component={Dogs} />
        <Route exact path="/feed" component={Feed} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Main} />
        <Route exact path="/donation" component={Donation} />
      </div>
    </BrowserRouter>
  );
}

export default App;
