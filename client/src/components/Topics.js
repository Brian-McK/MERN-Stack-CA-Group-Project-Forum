import React from 'react';
import Topic from "./Topic"
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    grid: {
        width: '100%',
        margin: '0px'
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
    }
}))

export default function Topics() {

    const classes = useStyles();

    return (
        <div className="Topics">
            This is my Topics Component
                <Grid container spacing={5} className={classes.grid}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Paper className={classes.paper} elevation={3}>
                            <Topic/>
                        </Paper>
                    </Grid>
                </Grid>
        </div>  
    );
  }

// responsive grid
// grid works in a 12 column layout
// xs = small screen
// md = medium screen etc...
// breakpoints https://material-ui.com/customization/breakpoints/

// learned from https://www.youtube.com/watch?v=jE6fWdBhbso
// material ui grid api https://material-ui.com/api/grid/
// paper https://material-ui.com/components/paper/
