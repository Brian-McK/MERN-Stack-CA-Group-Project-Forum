import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
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

// Edit topic
// topic name
// topic description
// topic creator (auto when admin) - (READ-ONLY)

class EditTopic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchForTopic: "",
      topicName: "",
      topicDescription: "",
      topic: {},
      foundTopic: false,
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });

    console.log(this.state.topicName + " " + this.state.topicDescription);
  }

  handleSearch = (e) => {
    e.preventDefault();

    axios
      .get(`${SERVER_HOST}/topics/topic/${this.state.searchForTopic}`)
      .then((res) => {
        if (res.data) {
          if (res.data.errorMessage) {
            console.log(res.data.errorMessage);
          } else {
            console.log("Records read");
            this.setState({ topic: res.data });
            this.setState({ foundTopic: true });
            console.log(this.state.topic);
          }
        } else {
          console.log("Record not found");
          this.setState({ foundTopic: false });
        }
      });

    // reset state
    this.setState({ searchForTopic: "" });
  };

  handleEdit = (e) => {
    e.preventDefault();

    const updatedTopic = {
      topicName: this.state.topicName,
      topicDescription: this.state.topicDescription,
    };

    axios
      .put(`${SERVER_HOST}/topics/topic/${this.state.topic._id}`, updatedTopic)
      .then((res) => {
        if (res.data) {
          if (res.data.errorMessage) {
            console.log(res.data.errorMessage);
          } else {
            console.log("Records updated");
            this.setState({ topic: res.data });
            alert("EDIT SUCCESSFULL");
          }
        } else {
          console.log("Record not updated");
          this.setState({ foundTopic: false });
        }
      });

    this.setState({ topicName: "", topicDescription: "" });
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
            <h3>Edit Topic</h3>
            <FontAwesomeIcon icon={faEdit} size="4x" />
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
              <form onSubmit={this.handleSearch}>
                <Grid container spacing={0} className={classes.grid}>
                  <Grid item xs={12} sm={12} md={4} lg={4}>
                    <label htmlFor="searchForTopic" className="formLabelsAlt">
                      Search For Topic by id:
                    </label>
                  </Grid>
                  <Grid item xs={12} sm={12} md={8} lg={8}>
                    <input
                      className="formInputAlt"
                      id="searchForTopic"
                      name="searchForTopic"
                      type="text"
                      value={this.state.searchForTopic}
                      onChange={(e) => this.handleChange(e)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <button type="submit">Search</button>
                  </Grid>
                </Grid>
              </form>

              {this.state.foundTopic ? (
                <div>
                  <h4>Record found</h4>
                  <form onSubmit={this.handleEdit}>
                    <Grid container spacing={0} className={classes.grid}>
                      <Grid item xs={12} sm={12} md={4} lg={4}>
                        <label htmlFor="topicName" className="formLabelsAlt">
                          Edit Topic Name
                        </label>
                      </Grid>
                      <Grid item xs={12} sm={12} md={8} lg={8}>
                        <input
                          className="formInputAlt"
                          id="topicName"
                          name="topicName"
                          type="text"
                          placeholder={this.state.topic.topicName}
                          value={this.state.topicName}
                          onChange={(e) => this.handleChange(e)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={12} md={4} lg={4}>
                        <label htmlFor="topicDesc" className="formLabelsAlt">
                          Edit Topic Description
                        </label>
                      </Grid>
                      <Grid item xs={12} sm={12} md={8} lg={8}>
                        <input
                          className="formInputAlt"
                          id="topicDescription"
                          name="topicDescription"
                          type="text"
                          placeholder={this.state.topic.topicDescription}
                          value={this.state.topicDescription}
                          onChange={(e) => this.handleChange(e)}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <button type="submit">Edit</button>
                      </Grid>
                    </Grid>
                  </form>
                </div>
              ) : (
                <h4>Search valid topic id</h4>
              )}
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(useStyles)(EditTopic);
