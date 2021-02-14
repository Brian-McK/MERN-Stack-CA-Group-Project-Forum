import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SettingsIcon from "@material-ui/icons/Settings";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";

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
          <Link to="/Signup">
            <Button color="inherit">Signup</Button>
          </Link>
          <Link to="/Login">
            <Button color="inherit">Login</Button>
          </Link>
          <Button color="inherit">
            <Link to="/Dashboard">
              <SettingsIcon />
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
