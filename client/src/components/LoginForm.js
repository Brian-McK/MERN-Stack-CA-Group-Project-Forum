import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faKey,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { SERVER_HOST } from "../config/global_constants";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import LinkInClass from "../components/LinkInClass";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      isLoggedIn: false,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    axios
      .post(
        `${SERVER_HOST}/users/login/${this.state.email}/${this.state.password}`
      )
      .then((res) => {
        if (res.data) {
          if (res.data.errorMessage) {
            console.log(res.data.errorMessage);
          } // user successfully logged in
          else {
            console.log("User logged in");
            this.setState({ isLoggedIn: true });
          }
        } else {
          console.log("Login failed");
        }
      });
  };

  render() {
    return (
      <div className="LoginForm">
        This is My Login Form Component
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            className="LoginFormInfoWrapper"
          >
            <h3>Hello & Welcome</h3>
            <FontAwesomeIcon icon={faSignInAlt} size="4x" />
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8} className="LoginFormWrapper">
            <Paper square elevation={5}>
              <h3>Please Log In</h3>
              <form onSubmit={this.handleSubmit}>
                <label className="FormLabels">
                  <FontAwesomeIcon icon={faEnvelope} size="2x" />
                  <p>Email</p>
                  <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </label>
                <label className="FormLabels">
                  <FontAwesomeIcon icon={faKey} size="2x" />
                  <p>Password</p>
                  <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </label>
                <div>
                  <LinkInClass
                    value="User Login"
                    className="green-button"
                    onClick={this.handleSubmit}
                  />
                  {this.state.isLoggedIn ? <Redirect to="/" /> : null}
                  <Link className="red-button" to={"/"}>
                    Cancel
                  </Link>
                </div>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
