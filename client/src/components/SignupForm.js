import React, { Component} from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignInAlt, faKey, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {SERVER_HOST} from "../config/global_constants"
import axios from "axios"
import {Redirect, Link} from "react-router-dom"
import LinkInClass from "../components/LinkInClass"
import { withStyles } from "@material-ui/core/styles";

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


class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      surname: "",
      email: "",
      password: "",
      isRegistered:false
    }
  }
  
    handleChange = (e) => 
    {
        this.setState({[e.target.name]: e.target.value})
    }
    
    handleSubmit = (e) =>
    {
        axios.post(`${SERVER_HOST}/users/register/${this.state.firstName}/${this.state.surname}/${this.state.email}/${this.state.password}/`)
            .then(res => 
            {     
                if(res.data)
                {
                    if (res.data.errorMessage)
                    {
                        console.log(this.state.firstName)
                        console.log(res.data.errorMessage)    
                    }
                    else 
                    { 
                        this.setState({isRegistered:true})
                        console.log("User Registered")                          
                    }        
                }
                else
                {
                    console.log("Registration failed")
                }
            }) 
 
        axios.get(`${SERVER_HOST}/users/`).then((res) => {
        if (res.data) {
        if (res.data.errorMessage) {
          console.log(res.data.errorMessage);
        } else {
          console.log("Records read");
          this.setState({ users: res.data });
          console.log(res.data);
        }
      } else {
        console.log("Record not found");
      }
    });
    }
    

    

    render(){
      const { classes } = this.props;
      return (
        <div className="SignupForm">
                This is My Signup Form Component
                <Grid container spacing={2} className={classes.grid}>
                        <Grid item xs={12} sm={12} md={4} lg={4} className="SignupFormInfoWrapper LoginFormInfoWrapper">
                                <h3>Hello & Welcome</h3>
                                <FontAwesomeIcon icon={faSignInAlt} size="4x" />
                        </Grid>
                        <Grid item xs={12} sm={12} md={8} lg={8} className="SignupFormWrapper LoginFormWrapper">
                                <Paper square elevation={5} className={classes.paper}>
                                        <h3>Please Signup</h3>
                                        <form onSubmit={this.handleSubmit}>
                                                <label className="FormLabels">
                                                        <FontAwesomeIcon icon={faUser} size="2x" />
                                                        <p>First Name</p>
                                                        <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
                                                </label>
                                                <label className="FormLabels">
                                                        <FontAwesomeIcon icon={faUser} size="2x" />
                                                        <p>Surname</p>
                                                        <input type="text" name="surname" value={this.state.surname} onChange={this.handleChange} />
                                                </label>
                                                <label className="FormLabels">
                                                        <FontAwesomeIcon icon={faEnvelope} size="2x" />
                                                        <p>Email</p>
                                                        <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                                                </label>
                                                <label className="FormLabels">
                                                        <FontAwesomeIcon icon={faKey} size="2x" />
                                                        <p>Password</p>
                                                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                                                </label>
                                                <div>
                                                        <LinkInClass value="Register New User" className="green-button" onClick={this.handleSubmit} />
                                                        {this.state.isRegistered ? <Redirect to="/Login"/> : null} 
                                                        <Link className="red-button" to={"/"}>Cancel</Link>  
                                                </div>
                                        </form>
                                </Paper>
                        </Grid>
                </Grid>
        </div>
    );
  }
}
export default withStyles(useStyles)(SignupForm);
