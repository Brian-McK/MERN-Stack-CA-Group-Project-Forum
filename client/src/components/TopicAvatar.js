import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(0),
    },
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="BR" 
      src="/static/images/avatar/1.jpg" 
      className={classes.small}
      />
    </div>
  );
}