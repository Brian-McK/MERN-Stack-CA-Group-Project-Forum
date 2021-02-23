import React, { Component} from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignInAlt, faKey, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {SERVER_HOST} from "../config/global_constants"
import axios from "axios"
import {Redirect} from "react-router-dom"


export default class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      surname: "",
      email: "",
      password: "",
      isRegistered:false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
    handleSubmit(e){
        e.preventDefault();
        axios.post(`${SERVER_HOST}/users/register/${this.state.firstName}/${this.state.surname}/${this.state.email}/${this.state.password}`,{
            users: {
                firstName:this.state.firstName,
                surname:this.state.surname,
                email:this.state.email,
                password:this.state.password
            }
        }, {withCredentials: true})
        .then(res => 
        {     
            if(res.data)
            {
                if (res.data.errorMessage)
                {
                    console.log(res.data.errorMessage)    
                }
                else // user successfully logged in
                { 
                    console.log("User Registered")  
                    this.setState({isRegistered:true})
                }        
            }
            else
            {
                console.log("Registration failed")
            }
        })   
    }
    
    handleChange(e) 
    {
        this.setState({[e.target.name]: e.target.value})
    }

    render(){
      return (
        <div className="SignupForm">
                This is My Signup Form Component
                <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={4} lg={4} className="SignupFormInfoWrapper LoginFormInfoWrapper">
                                <h3>Hello & Welcome</h3>
                                <FontAwesomeIcon icon={faSignInAlt} size="4x" />
                        </Grid>
                        <Grid item xs={12} sm={12} md={8} lg={8} className="SignupFormWrapper LoginFormWrapper">
                                <Paper square elevation={5}>
                                        <h3>Please Signup</h3>
                                        <form onSubmit={this.handleSubmit}>
                                        {this.state.isRegistered ? <Redirect to="/Home"/> : null} 
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
                                                        <button type="submit">Submit</button>
                                                </div>
                                        </form>
                                </Paper>
                        </Grid>
                </Grid>
        </div>
    );
  }
}
