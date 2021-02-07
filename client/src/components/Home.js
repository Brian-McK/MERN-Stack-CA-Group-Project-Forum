import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Topics from "./Topics"
import Bulletin from "./Bulletin"

const useStyles = makeStyles((theme) => ({

    grid: {
        width: '90%',
        margin: '0 auto'
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
    }
}))

export default function Home() {

    // add in state later

    const classes = useStyles();

    return (
        <div className="Home">
            This is My Home Component
                <Grid container spacing={2} className={classes.grid} >
                    <Grid item xs={12} sm={12} md={9} lg={9}>
                        <Paper className={classes.paper} elevation={3}>
                            <Topics/>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <Paper className={classes.paper} elevation={3}>
                            <Bulletin/>
                            {/* data table leaderboards? */}
                        </Paper>
                    </Grid>
                </Grid>
        </div>  
    );
}