import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMinus } from "@fortawesome/free-solid-svg-icons";
import Topics from "./Topics";
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

class DeleteTopic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchForTopic: "",
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    // axios
    //   .post(
    //     `${SERVER_HOST}/topics/`,
    //     topicObject
    //   )
    //   .then((res) => {
    //     if (res.data) {
    //       if (res.data.errorMessage) {
    //         console.log(res.data.errorMessage);
    //       } else {
    //         console.log("Record added");
    //       }
    //     } else {
    //       console.log("Record not added");
    //     }
    //   });

    // reset state
    this.setState({ searchForTopic: "" });
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
            <h3>Delete Topic</h3>
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
              <form onSubmit={this.handleSubmit}>
                <Grid container spacing={0} className={classes.grid}>
                  <Grid item xs={12} sm={12} md={4} lg={4}>
                    <label htmlFor="topicId" className="formLabelsAlt">
                      Search For Topic
                    </label>
                  </Grid>
                  <Grid item xs={12} sm={12} md={8} lg={8}>
                    <input
                      className="formInputAlt"
                      id="search"
                      type="text"
                      name="searchForTopic"
                      value={this.state.searchForTopic}
                      onChange={(e) => this.handleChange(e)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <button type="submit">Search</button>
                  </Grid>
                </Grid>
              </form> 

              {/* get back topic that we search for */}
              {/* <Topics /> */}
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(useStyles)(DeleteTopic);
