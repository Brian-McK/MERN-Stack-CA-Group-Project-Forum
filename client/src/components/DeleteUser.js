import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMinus } from "@fortawesome/free-solid-svg-icons";
import { withStyles } from "@material-ui/core/styles";
import { SERVER_HOST } from "../config/global_constants";
import axios from "axios";

const useStyles = (theme) => ({
  grid: {
    width: "100%",
    margin: "0 auto",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
  },
});

class DeleteUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchForUser: "",
      users: {},
    };
  }

  componentDidMount() {
    axios.get(`${SERVER_HOST}/users/`).then((res) => {
      if (res.data) {
        if (res.data.errorMessage) {
          console.log(res.data.errorMessage);
        } else {
          console.log("Records read");
          this.setState({ users: res.data });
          console.log(this.state.users);
        }
      } else {
        console.log("Record not found");
      }
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleDelete = (e) => {
    e.preventDefault();

    const foundUser = this.state.users.find(
      (user) => user.email === this.state.searchForUser
    );

    if (foundUser) {
      // axios delete
      axios.delete(`${SERVER_HOST}/users/delete_user/${foundUser._id}`).then((res) => {
        if (res.data) {
          if (res.data.errorMessage) {
            console.log(res.data.errorMessage);
            alert("ERROR");
          } // success
          else {
            console.log("Record deleted");
            alert("USER DELETED");
          }
        } else {
          console.log("USER not deleted");
        }
      });
    } else {
      // didnt delete
      console.log("no");
    }

    // reset state / reset topic to be deleted
    this.setState({ searchForUser: "" });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="AddTopic EditTopic">
        <Grid container spacing={2} className={classes.grid}>
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            lg={3}
            className="AddTopicWrapper LoginFormInfoWrapper"
          >
            <h3>Delete User</h3>
            <FontAwesomeIcon icon={faUserMinus} size="4x" />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={9}
            lg={9}
            className="AddTopicWrapper LoginFormWrapper"
          >
            <Paper square className={classes.paper} elevation={5}>
              <form onSubmit={this.handleDelete}>
                <Grid container spacing={0} className={classes.grid}>
                  <Grid item xs={12} sm={12} md={4} lg={4}>
                    <label htmlFor="topicId" className="formLabelsAlt">
                      Search For User
                    </label>
                  </Grid>
                  <Grid item xs={12} sm={12} md={8} lg={8}>
                    <input
                      className="formInputAlt"
                      id="search"
                      type="text"
                      name="searchForUser"
                      value={this.state.searchForUser}
                      onChange={(e) => this.handleChange(e)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <button type="submit">Delete</button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
            {this.state.searchForUser}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(useStyles)(DeleteUser);
