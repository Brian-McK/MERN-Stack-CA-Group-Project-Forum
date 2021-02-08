import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LoginForm from './LoginForm';

const useStyles = makeStyles((theme) => ({
	grid: {
		width: '60%',
		margin: '0 auto'
	},
	paper: {
		padding: theme.spacing(1),
		textAlign: 'center'
	}
}));

export default function Login () {
	// add in state later

	const classes = useStyles();

	return (
		<div className="Login">
			This is My Login Component
			<Grid container spacing={0} className={classes.grid}>
				<Grid item xs={12} sm={12} md={12} lg={12}>
					<LoginForm />
				</Grid>
			</Grid>
		</div>
	);
}
