import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SettingsIcon from "@material-ui/icons/Settings";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import {ACCESS_LEVEL_ADMIN} from "../config/global_constants"
import {ACCESS_LEVEL_NORMAL_USER} from "../config/global_constants"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">
            <Link to="/Home">
              <HomeIcon />
            </Link>
          </Button>
          <Typography variant="h6" className={classes.title}></Typography>
          
          <p>{sessionStorage.accessLevel}</p>
          
          {sessionStorage.accessLevel >= ACCESS_LEVEL_NORMAL_USER ?
          null
          :
          <Link to="/Signup">
            <Button color="inherit">Signup</Button>
          </Link>}
          
          {sessionStorage.accessLevel >= ACCESS_LEVEL_NORMAL_USER ?
          <Link to="/Logout">
            <Button color="inherit">Logout</Button>
          </Link>
          :
          <Link to="/Login">
            <Button color="inherit">Login</Button>
          </Link>}

          <Link to="/Dashboard">
              <SettingsIcon />
          </Link>
          
          {/* {sessionStorage.accessLevel >= ACCESS_LEVEL_ADMIN ?
          <Button color="inherit">
            <Link to="/Dashboard">
              <SettingsIcon />
            </Link>
          </Button>
          :null} */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
