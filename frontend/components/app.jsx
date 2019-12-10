import React from 'react';
import { Route } from 'react-router-dom';
import Splash from './splash/splash';
import SignupForm from './session_forms/signup_form_container';
import LoginForm from './session_forms/login_form_container';
import Navbar from './navbar/navbar_container';
import Dashboard from './dashboard/dashboard';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';

//TODO make spash auth route (unable to see if already logged in)
// Protected Route, only for those who are logged in
//TODO make signup/login a modal
const App = () => (
	<div>
		<Route path="/" component={Navbar} />

		<AuthRoute exact path="/" component={Splash} />

		<AuthRoute exact path="/signup" component={SignupForm} />
		<AuthRoute exact path="/login" component={LoginForm} />

		<ProtectedRoute exact path="/dashboard" component={Dashboard} />
	</div>
);

export default App;
