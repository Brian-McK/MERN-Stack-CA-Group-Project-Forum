import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./css/App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import EnteredTopic from "./components/EnteredTopic";

import {ACCESS_LEVEL_GUEST} from "./config/global_constants"


if (typeof sessionStorage.accessLevel === "undefined")
{
    sessionStorage.name = "GUEST"
    sessionStorage.accessLevel = ACCESS_LEVEL_GUEST
}

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/Dashboard" component={Dashboard} />
            <Route exact path="/Signup" component={Signup} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/EnteredTopic/:id" component={EnteredTopic} />
            <Route path="*" component={Home} />
          </Switch>
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    );
  }
}
