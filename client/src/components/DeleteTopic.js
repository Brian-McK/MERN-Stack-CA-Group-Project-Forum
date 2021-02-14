import React, { useState } from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMinus } from "@fortawesome/free-solid-svg-icons";
import Topics from "./Topics";

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

// Edit topic
// topic id (auto increment) (READ-ONLY)
// topic name
// topic description
// topic creator (auto when admin) - (READ-ONLY)

export default function DeleteTopic() {
  const [search, setSearch] = useState();
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

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`search: ${search}`);
  };

  const classes = useStyles();

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
            <form onSubmit={handleSearch}>
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
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <button type="submit">Search</button>
                </Grid>
              </Grid>
            </form>
            {/* topics */}
            <Topics/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
