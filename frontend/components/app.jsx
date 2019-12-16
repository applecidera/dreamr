import React from 'react';
import { Route } from 'react-router-dom';
import Splash from './splash/splash';
import SignupForm from './session_forms/signup_form_container';
import LoginForm from './session_forms/login_form_container';
import Navbar from './navbar/navbar_container';
import Dashboard from './dashboard/dashboard_container';
import Modal from './modal/modal';
import Modal2 from './modal/modal2';
import { AuthRoute, ProtectedRoute, SplashRoute } from '../utils/route_utils';


const App = () => (
	<div className="app-main">
		
		<Modal />
		<Modal2 />
		<Route path="/" component={Navbar} />
		<SplashRoute  path="/" component={Splash} />
		<SplashRoute  path="/register" component={Splash} />
		<AuthRoute exact path="/signup" component={SignupForm} />
		<AuthRoute exact path="/login" component={LoginForm} />
		<ProtectedRoute path="/dashboard" component={Dashboard} />

	</div>
);

export default App;
