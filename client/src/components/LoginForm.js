import React, { useState } from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	grid: {
		width: '100%',
		margin: '0 auto'
	},
	paper: {
		padding: theme.spacing(1),
		textAlign: 'center'
	}
}));

export default function LoginForm () {
	const [ username, setUserName ] = useState();
	const [ password, setPassword ] = useState();
	// add in state later

	const handleSubmit = (e) => {
		e.preventDefault();
		alert(password);
	};

	const classes = useStyles();

	return (
		<div className="LoginForm">
			This is My Login Form Component
			<Grid container spacing={2} className={classes.grid}>
				<Grid item xs={12} sm={12} md={4} lg={4} className="LoginFormInfoWrapper">
					<h3>Hello & Welcome</h3>
				</Grid>
				<Grid item xs={12} sm={12} md={8} lg={8} className="LoginFormWrapper">
					<Paper square className={classes.paper} elevation={5}>
						<h1>Please Log In</h1>
						<form onSubmit={handleSubmit}>
							<label>
								<p>Username</p>
								<input type="text" onChange={(e) => setUserName(e.target.value)} />
							</label>
							<label>
								<p>Password</p>
								<input type="password" onChange={(e) => setPassword(e.target.value)} />
							</label>
							<div>
								<button type="submit">Submit</button>
							</div>
						</form>
					</Paper>
					<p>Username: {username}</p>
					<p>Password: {password}</p>
				</Grid>
			</Grid>
		</div>
	);
}

// just testing the login form state
