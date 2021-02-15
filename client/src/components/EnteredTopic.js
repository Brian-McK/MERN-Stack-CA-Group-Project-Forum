import TopicAvatar from './TopicAvatar';
import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TopicComment from './TopicComment';
import AddComment from './AddComment';

const useStyles = makeStyles((theme) => ({
	grid: {
		width: '60%',
		margin: '0px',
		backgroundColor: 'red'
	},
	paper: {
		padding: theme.spacing(1),
		textAlign: 'center'
	}
}));

export default function EnteredTopic () {
	const classes = useStyles();

	return (
		<div className="EnteredTopic">
            This is my Entered Topic Component
			<Grid container spacing={2} justify="center" alignItems="center" className={classes.grid}>
				<Grid item xs={2} sm={2} md={3} lg={3}>
					<Paper className={classes.paper} elevation={3}>
						<TopicAvatar />
					</Paper>
				</Grid>

				<Grid item xs={10} sm={10} md={9} lg={9}>
					<Paper className={classes.paper} elevation={3}>
						Topic Name
					</Paper>
				</Grid>

				<Grid item xs={12} sm={12} md={12} lg={12}>
					<Paper className={classes.paper} elevation={3}>
						Topic Description
					</Paper>
				</Grid>

				<Grid item xs={6} sm={6} md={6} lg={6}>
					<Paper className={classes.paper} elevation={3}>
						Topic Creator
					</Paper>
				</Grid>

				<Grid item xs={6} sm={6} md={6} lg={6}>
					<Paper className={classes.paper} elevation={3}>
						Number of posts
					</Paper>
				</Grid>
			</Grid>

			{/* Topic Comments */}

			<TopicComment/>

			{/* Add Comments */}

			<AddComment/>
			
		</div>
	);
}

// TODO - NEED TO FIX THIS COMPONENT
