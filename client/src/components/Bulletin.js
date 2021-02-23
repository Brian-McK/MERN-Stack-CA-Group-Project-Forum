import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import BulletinModal from "./BulletinModal";
import axios from "axios";
import { SERVER_HOST } from "../config/global_constants";

const useStyles = (theme) => ({
  grid: {
    width: "100%",
    margin: "0px",
  },
});

class Bulletin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bulletins: [],
    };
  }

  componentDidMount() {
    axios.get(`${SERVER_HOST}/bulletins/`).then((res) => {
      if (res.data) {
        if (res.data.errorMessage) {
          console.log(res.data.errorMessage);
        } else {
          console.log("Records read");
          this.setState({ bulletins: res.data });
        }
      } else {
        console.log("Record not found");
      }
    });
  }

  render() {
    const { classes } = this.props;

    const bulletinGrids = this.state.bulletins.map((bulletin) => {
      return (
        <Grid container spacing={2} className={classes.grid}  key={bulletin._id}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            className="classes.gridItem"
          >
            <BulletinModal
              bulletinModalName={bulletin.bulletinName}
              bulletinModalHeader={bulletin.bulletinAuthor}
              bulletinModalDescription={bulletin.bulletinDescription}
            />
          </Grid>
        </Grid>
      );
    });

    return (
      <div className="Bulletin">
        This is my Bulletin / Rules Component
          {bulletinGrids}
      </div>
    );
  }
}

export default withStyles(useStyles)(Bulletin);
