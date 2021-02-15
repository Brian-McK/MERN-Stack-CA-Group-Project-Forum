import React, { useState } from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    margin: "0 auto",
    justifyContent: "center"
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
  },
}));

// topic id (auto increment)
// topic name
// topic description
// topic creator (auto when admin)

export default function AddComment() {
  const [topicComment, setTopicComment] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `topicComment: ${topicComment}`
    );
  };

  const classes = useStyles();

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
            <form onSubmit={handleSubmit}>
              <Grid container spacing={0} className={classes.grid}>
                <Grid item xs={12} sm={12} md={12} lg={12} >
                  <label htmlFor="topicId" className="formLabelsAlt">
                    Topic Comment:
                  </label>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} >
                  <input className="formInputAlt"
                    id="topicComment"
                    type="text"
                    onChange={(e) => setTopicComment(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} >
                  <button type="submit">Add Comment</button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}