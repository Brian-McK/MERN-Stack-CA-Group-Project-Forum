import TopicAvatar from "./TopicAvatar";
import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";
import TopicComment from "./TopicComment";
import AddComment from "./AddComment";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import { SERVER_HOST } from "../config/global_constants";

const useStyles = (theme) => ({
  grid: {
    width: "60%",
    margin: "0px",
    backgroundColor: "red",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
  },
});

class EnteredTopic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topic: {},
      comments: [],
    };
  }

  componentDidMount() {
    Promise.all([
      axios.get(`${SERVER_HOST}/topics/topic/${this.props.match.params.id}`),
      axios.get(`${SERVER_HOST}/topics/topic/${this.props.match.params.id}/comments`) 
    ])
    .then(([topicRes, commentsRes]) => {
      this.setState({topic : topicRes.data, comments : commentsRes.data});
      console.log(this.state.topic);
      console.log(this.state.comments);
  });
  }

  render() {
    const { classes } = this.props;

    console.log(this.props)

    const comments = this.state.comments.map((comment) => {
      return (
        <TopicComment
          key={comment._id}
          topicCommentAuthor={comment.topicCommentAuthor}
          topicComment={comment.topicComment}
          topicCommentDate={comment.topicCommentDate}
        />
      );
    });

    return (
      <div className="EnteredTopic">
        This is my Entered Topic Component
        <Grid
          container
          spacing={2}
          justify="center"
          alignItems="center"
          className={classes.grid}
        >
          <Grid item xs={2} sm={2} md={3} lg={3}>
            <Paper className={classes.paper} elevation={3}>
              <TopicAvatar topicAvatar={"hi"}/>
            </Paper>
          </Grid>

          <Grid item xs={10} sm={10} md={9} lg={9}>
            <Paper className={classes.paper} elevation={3}>
              Topic Name: {this.state.topic.topicName}
            </Paper>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Paper className={classes.paper} elevation={3}>
              Topic Description: {this.state.topic.topicDescription}
            </Paper>
          </Grid>

          <Grid item xs={6} sm={6} md={6} lg={6}>
            <Paper className={classes.paper} elevation={3}>
              Topic Author: {this.state.topic.topicAuthor}
            </Paper>
          </Grid>

          <Grid item xs={6} sm={6} md={6} lg={6}>
            <Paper className={classes.paper} elevation={3}>
              Number of Posts: {"N/A"}
            </Paper>
          </Grid>
        </Grid>
        {comments}
        <AddComment topicRef={this.state.topic._id}/>
      </div>
    );
  }
}

export default withStyles(useStyles)(EnteredTopic);

// TODO - NEED TO FIX THIS COMPONENT
