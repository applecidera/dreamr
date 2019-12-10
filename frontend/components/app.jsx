import React from 'react';
import { Route } from 'react-router-dom';
import Splash from './splash/splash'
import SignupForm from './session_forms/signup_form_container';
import LoginForm from './session_forms/login_form_container';
import Navbar from './navbar/navbar_container';
import Dashboard from './dashboard/dashboard';

//TODO make spash auth route
//TODO make signup/login a modal
const App = () => (
	<div>
		
		<Route path='/' component={Navbar} />

		<Route exact path='/' component={Splash} />
		
		<Route exact path='/signup' component={SignupForm} />
		<Route exact path='/login' component={LoginForm} />

		<Route exact path='/dashboard' component={Dashboard} />
	</div>
);

export default App;
