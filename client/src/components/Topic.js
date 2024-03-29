import TopicAvatar from "./TopicAvatar";
import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    margin: "0px",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
  },
}));

export default function Topic(props) {
  const classes = useStyles();

  return (
    <div className="Topic">
      <Grid
        container
        spacing={2}
        justify="center"
        alignItems="center"
        className={classes.grid}
      >
        <Grid item xs={2} sm={2} md={2} lg={1}>
          <Paper className={classes.paper} elevation={3}>
            <TopicAvatar topicAvatar={props.topicAvatar}/>
          </Paper>
        </Grid>

        <Grid item xs={10} sm={10} md={3} lg={3}>
          <Paper className={classes.paper} elevation={3}>
            Topic Name: {props.topicName}
          </Paper>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Paper className={classes.paper} elevation={3}>
          Topic Description: {props.topicDescription}
          </Paper>
        </Grid>

        <Grid item xs={4} sm={4} md={4} lg={4}>
          <Paper className={classes.paper} elevation={3}>
          Topic Author: {props.topicAuthor}
          </Paper>
        </Grid>

        <Grid item xs={4} sm={4} md={4} lg={4}>
          <Paper className={classes.paper} elevation={3}>
          Number of Posts: {props.numberOfPosts}
          </Paper>
        </Grid>

        <Grid item xs={4} sm={4} md={4} lg={4}>
          <Paper className={classes.paper} elevation={3}>
            <Link to={"/EnteredTopic/" + props.topicId} >
              Enter Topic
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
