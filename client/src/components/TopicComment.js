import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    margin: "0px",
  },
  gridItemLeft: {
    backgroundColor: "red",
    color: "white",
  },
  gridItemRight: {
    border: "2px solid lightgray",
  },
}));

export default function TopicComment(props) {
  const classes = useStyles();

  return (
    <div className="TopicComment">
      <Grid container spacing={2} justify="center" className={classes.grid}>
        <Grid item xs={3} sm={3} md={3} lg={3} className={classes.gridItemLeft}>
          Posted By:
          {props.topicCommentAuthor}
        </Grid>

        <Grid
          item
          xs={9}
          sm={9}
          md={9}
          lg={9}
          className={classes.gridItemRight}
        >
          {props.topicComment}
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          className={classes.gridItemRight}
        >
          {props.topicCommentDate}
        </Grid>
      </Grid>
    </div>
  );
}
