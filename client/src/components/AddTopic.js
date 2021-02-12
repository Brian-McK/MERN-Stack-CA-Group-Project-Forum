import React, { useState } from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    margin: "0 auto",
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

export default function AddTopic() {
  const [topicId, setTopicId] = useState();
  const [topicName, setTopicName] = useState();
  const [topicDesc, setTopicDesc] = useState();
  const [topicCreator, setTopicCreator] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `topicId: ${topicId} , topicName: ${topicName} , topicDesc: ${topicDesc} , topicCreator: ${topicCreator}`
    );
  };

  const classes = useStyles();

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
            <form onSubmit={handleSubmit}>
              <Grid container spacing={0} className={classes.grid}>
                <Grid item xs={12} sm={12} md={4} lg={4} >
                  <label htmlFor="topicId" className="formLabelsAlt">
                    Topic Id
                  </label>
                </Grid>
                <Grid item xs={12} sm={12} md={8} lg={8} >
                  <input className="formInputAlt"
                    id="topicId"
                    type="text"
                    onChange={(e) => setTopicId(e.target.value)}
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={4} lg={4} >
                  <label htmlFor="topicId" className="formLabelsAlt">
                    Topic Name
                  </label>
                </Grid>
                <Grid item xs={12} sm={12} md={8} lg={8} >
                  <input className="formInputAlt"
                    id="topicName"
                    type="text"
                    onChange={(e) => setTopicName(e.target.value)}
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={4} lg={4} >
                  <label htmlFor="topicDesc" className="formLabelsAlt">
                    Topic Description
                  </label>
                </Grid>
                <Grid item xs={12} sm={12} md={8} lg={8} >
                  <input className="formInputAlt"
                    id="topicDesc"
                    type="text"
                    onChange={(e) => setTopicDesc(e.target.value)}
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={4} lg={4} >
                  <label htmlFor="topicCreator" className="formLabelsAlt">
                    Topic Creator
                  </label>
                </Grid>
                <Grid item xs={12} sm={12} md={8} lg={8} >
                  <input className="formInputAlt"
                    id="topicCreator"
                    type="text"
                    onChange={(e) => setTopicCreator(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} >
                  <button type="submit">Add</button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
