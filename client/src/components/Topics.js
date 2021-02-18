import React, { Component } from "react";
import Topic from "./Topic";
import { Grid, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import { SERVER_HOST } from "../config/global_constants";

const useStyles = (theme) => ({
  grid: {
    width: "100%",
    margin: "0px",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
  },
});

class Topics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topics: [],
    };
  }

  componentDidMount() {
    axios.get(`${SERVER_HOST}/topics/`).then((res) => {
      if (res.data) {
        if (res.data.errorMessage) {
          console.log(res.data.errorMessage);
        } else {
          console.log("Records read");
          this.setState({ topics: res.data });
          console.log(res.data);
        }
      } else {
        console.log("Record not found");
      }
    });
  }

  render() {
    const { classes } = this.props;

    const topicGrids = this.state.topics.map((topic) => {
      return (
        <Grid container spacing={5} className={classes.grid} key={topic._id}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Paper className={classes.paper} elevation={3}>
              <Topic
                topicId={topic._id}
                topicAvatar={topic.topicName.charAt(0)}
                topicName={topic.topicName}
                topicDescription={topic.topicDescription}
                topicAuthor={topic.topicAuthor}
                numberOfPosts="N/A"
              />
            </Paper>
          </Grid>
        </Grid>
      );
    });

    return (
      <div className="Topics">
        This is my Topics Component
        {topicGrids}
      </div>
    );
  }
}

export default withStyles(useStyles)(Topics);

// responsive grid
// grid works in a 12 column layout
// xs = small screen
// md = medium screen etc...
// breakpoints https://material-ui.com/customization/breakpoints/

// learned from https://www.youtube.com/watch?v=jE6fWdBhbso
// material ui grid api https://material-ui.com/api/grid/
// paper https://material-ui.com/components/paper/
