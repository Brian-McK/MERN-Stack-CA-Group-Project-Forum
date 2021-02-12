import React, { Component } from 'react';

// import {BrowserRouter, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './css/App.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';

export default class App extends Component {
	render () {
		return (
			<div className="App">
				<Header />
				{/* <Signup />
				<Login />
				<Home /> */}
				<Dashboard />
				<Footer />
			</div>
		);
	}
}
