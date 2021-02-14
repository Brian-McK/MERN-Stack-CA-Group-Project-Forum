import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faEdit,
  faTrash,
  faUserMinus,
} from "@fortawesome/free-solid-svg-icons";
import AddTopic from "./AddTopic";
import EditTopic from "./EditTopic";
import DeleteTopic from "./DeleteTopic";
import DeleteUser from "./DeleteUser";

const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    margin: "0 auto",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  gridItem: {
    backgroundColor: "#2B2D42",
  },
  flexItem: {
    "&:hover": {
      color: "#8D99AE",
    },
    margin: "6px",
  },
}));

export default function AdminDashboard() {
  const classes = useStyles();

  return (
    <div className="AdminDashboard">
      This is My Admin Dashboard Component
      <Grid container spacing={2} className={classes.grid}>
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.gridItem}>
          <Paper className={classes.paper} elevation={3}>
            <h3>Hello Admin Name, Welcome Back</h3>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} className={classes.gridItem}>
          <Paper className={classes.paper} elevation={3}>
            <FontAwesomeIcon
              icon={faPlusCircle}
              size="3x"
              className={classes.flexItem}
            />
            <span className={classes.flexItem}>ADD TOPIC</span>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} className={classes.gridItem}>
          <Paper className={classes.paper} elevation={3}>
            <FontAwesomeIcon
              icon={faEdit}
              size="3x"
              className={classes.flexItem}
            />
            <span className={classes.flexItem}>EDIT TOPIC</span>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} className={classes.gridItem}>
          <Paper className={classes.paper} elevation={3}>
            <FontAwesomeIcon
              icon={faTrash}
              size="3x"
              className={classes.flexItem}
            />
            <span className={classes.flexItem}>DELETE TOPIC</span>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} className={classes.gridItem}>
          <Paper className={classes.paper} elevation={3}>
            <FontAwesomeIcon
              icon={faUserMinus}
              size="3x"
              className={classes.flexItem}
            />
            <span className={classes.flexItem}>DELETE USER</span>
          </Paper>
        </Grid>
        {/* SELECTED OPTION DIV BELOW WHEN THEY CLICK */}
        {/* <AddTopic /> */}
        {/* <EditTopic /> */}
        {/* <DeleteTopic /> */}
        {/* <DeleteUser /> */}
      </Grid>
    </div>
  );
}
