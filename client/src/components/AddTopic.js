import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
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

class AddTopic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topicName: "",
      topicDescription: "",
      topicCreator: "",
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    // e.preventDefault();

    const topicObject = {
      topicName: this.state.topicName,
      topicDescription: this.state.topicDescription,
      topicCreator: this.state.topicCreator,
    };

    axios
      .post(
        `${SERVER_HOST}/topics/`,
        topicObject
      )
      .then((res) => {
        if (res.data) {
          if (res.data.errorMessage) {
            console.log(res.data.errorMessage);
          } else {
            console.log("Record added");
          }
        } else {
          console.log("Record not added");
        }
      });

    // reset state
    this.setState({ topicName: "", topicDescription: "", topicCreator: "" });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="AddTopic">
        <Grid container spacing={2} className={classes.grid}>
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            lg={3}
            className="AddTopicWrapper LoginFormInfoWrapper"
          >
            <h3>Add Topic</h3>
            <FontAwesomeIcon icon={faPlusCircle} size="4x" />
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
              <form onSubmit={this.handleSubmit}>
                <Grid container spacing={0} className={classes.grid}>
                  <Grid item xs={12} sm={12} md={4} lg={4}>
                    <label htmlFor="topicId" className="formLabelsAlt">
                      Topic Name
                    </label>
                  </Grid>
                  <Grid item xs={12} sm={12} md={8} lg={8}>
                    <input
                      className="formInputAlt"
                      id="topicName"
                      name="topicName"
                      type="text"
                      value={this.state.topicName}
                      onChange={(e) => this.handleChange(e)}
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} md={4} lg={4}>
                    <label htmlFor="topicDesc" className="formLabelsAlt">
                      Topic Description
                    </label>
                  </Grid>
                  <Grid item xs={12} sm={12} md={8} lg={8}>
                    <input
                      className="formInputAlt"
                      id="topicDesc"
                      name="topicDescription"
                      type="text"
                      value={this.state.topicDesc}
                      onChange={(e) => this.handleChange(e)}
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} md={4} lg={4}>
                    <label htmlFor="topicCreator" className="formLabelsAlt">
                      Topic Creator
                    </label>
                  </Grid>
                  <Grid item xs={12} sm={12} md={8} lg={8}>
                    <input
                      className="formInputAlt"
                      id="topicCreator"
                      type="text"
                      name="topicCreator"
                      value={this.state.topicCreator}
                      onChange={(e) => this.handleChange(e)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <button type="submit" onSubmit={this.handleSubmit}>
                      Add
                    </button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(useStyles)(AddTopic);
