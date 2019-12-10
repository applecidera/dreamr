import React from 'react';
import { Link } from 'react-router-dom';
import SignupForm from '../session_forms/signup_form_container';
import LoginForm from '../session_forms/login_form_container';

class Splash extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: 'admin',
			password: 'password'
		};
	}

	render() {
		return (
			<div className="splash">
				<div className="content">
				<p className="logo">dreamr</p>
				<p className="motto">
					Show off your dreams.
					<br />
					Experience the dreams of others.
				</p>
				<Link to="/signup">
					<button className="signup">Get Started</button>
				</Link>
				<Link to="/login">
					<button className="login">Login</button>
				</Link>
				<button className="demo-user">Demo-User</button>
				</div>
			</div>
		);
	}
}

export default Splash;
