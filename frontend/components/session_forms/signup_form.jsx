import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			email: '',
			password: '',
			errors: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.demoLogin = this.demoLogin.bind(this);
	}

	demoLogin() {
		const demoUser = {
			username: 'demo-user',
			password: 'demo-user-ftw'
		};

		this.props
			.createSession(demoUser)
			.then(() => this.props.history.push('/dashboard'));
	}

	handleInput(type) {
		return (e) => {
			this.setState({
				[type]: e.target.value
			});
		};
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props
			.createUser(this.state)
			.then(() => this.props.history.push('/dashboard'));
		// redirects on successful creation
	}

	render() {
		const errors =
			this.state.errors != '' ? (
				<p className="errors">Invalid entry</p>
			) : (
				<div />
			);
		return (
			<div className="splash">
				{/* <Link to="/login"><button className="redirect-button">Login</button></Link> */}
				<div className="content">
					<p className="logo">dreamr</p>
					<input
						type="text"
						id="username"
						value={this.state.username}
						onChange={this.handleInput('username')}
						placeholder="Username"
					/>
					<input
						type="email"
						id="email"
						value={this.state.email}
						onChange={this.handleInput('email')}
						placeholder="Email"
					/>
					<input
						type="password"
						id="password"
						value={this.state.password}
						onChange={this.handleInput('password')}
						placeholder="Password"
					/>
					{errors}
					<button className="signup" onClick={this.handleSubmit}>
						Sign Up
					</button>
					<button className="login" onClick={this.demoLogin}>
						Demo-User
					</button>
				</div>
			</div>
		);
	}
}

export default SignupForm;
