import React, { useState } from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

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

export default function EditTopic() {
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
          <h3>Edit Topic</h3>
          <FontAwesomeIcon icon={faEdit} size="4x" />
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

            <form onSubmit={handleSubmit}>
              <Grid container spacing={0} className={classes.grid}>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <label htmlFor="topicId" className="formLabelsAlt">
                    Topic Id (Read Only)
                  </label>
                </Grid>
                <Grid item xs={12} sm={12} md={8} lg={8}>
                  <input
                    className="formInputAlt"
                    id="topicId"
                    type="text"
                    onChange={(e) => setTopicId(e.target.value)}
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <label htmlFor="topicId" className="formLabelsAlt">
                    Edit Topic Name
                  </label>
                </Grid>
                <Grid item xs={12} sm={12} md={8} lg={8}>
                  <input
                    className="formInputAlt"
                    id="topicName"
                    type="text"
                    onChange={(e) => setTopicName(e.target.value)}
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <label htmlFor="topicDesc" className="formLabelsAlt">
                    Edit Topic Description
                  </label>
                </Grid>
                <Grid item xs={12} sm={12} md={8} lg={8}>
                  <input
                    className="formInputAlt"
                    id="topicDesc"
                    type="text"
                    onChange={(e) => setTopicDesc(e.target.value)}
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <label htmlFor="topicCreator" className="formLabelsAlt">
                    Topic Creator (Read Only)
                  </label>
                </Grid>
                <Grid item xs={12} sm={12} md={8} lg={8}>
                  <input
                    className="formInputAlt"
                    id="topicCreator"
                    type="text"
                    onChange={(e) => setTopicCreator(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <button type="submit">Edit</button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
