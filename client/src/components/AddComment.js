import React, { Component } from "react";
import axios from "axios";
import { Grid, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { SERVER_HOST } from "../config/global_constants";

const useStyles = (theme) => ({
  grid: {
    width: "100%",
    margin: "0 auto",
    justifyContent: "center",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
  },
});

class AddComment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topicComment: "",
      refreshAfterSubmit: false,
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    // e.preventDefault();
    // alert(`topicComment: ${this.state.topicComment}`);

    // create commentObject to push through to db
    // could add more stuff in here in future
    const commentObject = {
      topicComment: this.state.topicComment,
    };

    axios
      .post(
        `${SERVER_HOST}/topics/topic/${this.props.topicRef}/comments`,
        commentObject
      )
      .then((res) => {
        if (res.data) {
          if (res.data.errorMessage) {
            console.log(res.data.errorMessage);
          } else {
            console.log("Record added");
            this.setState({ refreshAfterSubmit: true });
          }
        } else {
          console.log("Record not added");
        }
      });

    // reset state
    this.setState({ topicComment: "" });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="AddComment">
        <Grid container spacing={2} className={classes.grid}>
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
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <label htmlFor="topicId" className="formLabelsAlt">
                      Topic Comment:
                    </label>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <input
                      className="formInputAlt"
                      id="topicComment"
                      type="text"
                      placeholder="Enter comment..."
                      name="topicComment"
                      value={this.state.topicComment}
                      onChange={(e) => this.handleChange(e)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <button type="submit" onSubmit={this.handleSubmit}>
                      Add Comment
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

export default withStyles(useStyles)(AddComment);
