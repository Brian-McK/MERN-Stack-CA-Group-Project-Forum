import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BulletinModal from "./BulletinModal"

const useStyles = makeStyles((theme) => ({

    grid: {
        width: '100%',
        margin: '0px',
    },
}))

export default function Bulletin() {

    const classes = useStyles();

    return (
        <div className="Bulletin">
            This is my Bulletin / Rules Component
                <Grid container spacing={2} className={classes.grid}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                            <BulletinModal bulletinModalName="Bulletin" bulletinModalHeader="Bulletin Header" bulletinModalDescription="Bulletin Modal Description"/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                            <BulletinModal bulletinModalName="Bulletin" bulletinModalHeader="Bulletin Header" bulletinModalDescription="Bulletin Modal Description"/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                            <BulletinModal bulletinModalName="Bulletin" bulletinModalHeader="Bulletin Header" bulletinModalDescription="Bulletin Modal Description"/>
                    </Grid>
                </Grid>
        </div>  
    );
  }