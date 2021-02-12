import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AdminDashboard from './AdminDashboard';

const useStyles = makeStyles((theme) => ({
	grid: {
		width: '75%',
		margin: '0 auto'
	},
	paper: {
		padding: theme.spacing(1),
		textAlign: 'center'
	}
}));

export default function Dashboard () {
	const classes = useStyles();

	return (
		<div className="Dashboard">
			This is My Dashboard Component
			<Grid container spacing={0} className={classes.grid}>
				<Grid item xs={12} sm={12} md={12} lg={12}>
					<AdminDashboard />
				</Grid>
			</Grid>
		</div>
	);
}
