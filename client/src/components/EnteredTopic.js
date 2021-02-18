import TopicAvatar from './TopicAvatar';
import React, { Component } from "react";
import { Grid, Paper } from '@material-ui/core';
import TopicComment from './TopicComment';
import AddComment from './AddComment';
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import { SERVER_HOST } from "../config/global_constants";

const useStyles = (theme) => ({
	grid: {
		width: '60%',
		margin: '0px',
		backgroundColor: 'red'
	},
	paper: {
		padding: theme.spacing(1),
		textAlign: 'center'
	}
  });

class EnteredTopic extends Component {

	constructor(props) 
    {
        super(props)

        this.state = {
            model: ``,
            colour: ``,
            year: ``,
            price: ``,
            redirectToDisplayAllCars:false
        }
    }

	componentDidMount() 
    {      
        // this.inputToFocus.focus()
  
        axios.get(`${SERVER_HOST}/topics/get_topic/${this.props.match.params.id}`)
        .then(res => 
        {     
            if(res.data)
            {
                if (res.data.errorMessage)
                {
                    console.log(res.data.errorMessage)    
                }
                else
                { 
                    // this.setState({
                    //     model: res.data.model,
                    //     colour: res.data.colour,
                    //     year: res.data.year,
                    //     price: res.data.price
                    // })

					console.log(res.data);
                }
            }
            else
            {
                console.log(`Record not found`)
            }
        })
    }

	render()
	{
		const { classes } = this.props;

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
	
}

export default withStyles(useStyles)(EnteredTopic);

// TODO - NEED TO FIX THIS COMPONENT
