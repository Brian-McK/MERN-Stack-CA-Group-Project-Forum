import TopicAvatar from './TopicAvatar';
import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	grid: {
		width: '100%',
		margin: '0px'
	},
	paper: {
		padding: theme.spacing(1),
		textAlign: 'center'
	}
}));

export default function Topic () {
	const classes = useStyles();

	return (
		<div className="Topic">
			<Grid container spacing={2} justify="center" alignItems="center" className={classes.grid}>
				<Grid item xs={2} sm={2} md={2} lg={1}>
					<Paper className={classes.paper} elevation={3}>
						<TopicAvatar />
					</Paper>
				</Grid>

				<Grid item xs={10} sm={10} md={3} lg={3}>
					<Paper className={classes.paper} elevation={3}>
						Topic Name
					</Paper>
				</Grid>

				<Grid item xs={12} sm={12} md={12} lg={12}>
					<Paper className={classes.paper} elevation={3}>
						Topic Description
					</Paper>
				</Grid>

				<Grid item xs={4} sm={4} md={4} lg={4}>
					<Paper className={classes.paper} elevation={3}>
						Topic Creator
					</Paper>
				</Grid>

				<Grid item xs={4} sm={4} md={4} lg={4}>
					<Paper className={classes.paper} elevation={3}>
						Number of posts
					</Paper>
				</Grid>

				<Grid item xs={4} sm={4} md={4} lg={4}>
					<Paper className={classes.paper} elevation={3}>
						Enter Topic
						{/* here we will link using the topic id to a page that contains that specific topic */}
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
}
