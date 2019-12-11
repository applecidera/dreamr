import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			errors: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.demoLogin = this.demoLogin.bind(this);
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
			.createSession(this.state)
			.then(() => this.props.history.push('/dashboard'));
		// redirects on successful creation
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

	render() {
		const errors =
			this.state.errors != '' ? (
				<p className="errors">Username or password was incorrect</p>
			) : (
				<div />
			);
		return (
			<div className="splash">
				<Link to="/signup"><button className="redirect-button">Signup</button></Link>
				<div className="content">
					<p className="logo">dreamr</p>
					{/* <form> */}
					{/* <label htmlFor="username">Username</label> */}
					<input
						type="text"
						id="username"
						value={this.state.username}
						onChange={this.handleInput('username')}
						placeholder="Username"
					/>
					{/* <label htmlFor="password">Password</label> */}
					<input
						type="password"
						id="password"
						value={this.state.password}
						onChange={this.handleInput('password')}
						placeholder="Password"
					/>
					{errors}
					<button className="signup" onClick={this.handleSubmit}>
						Login
					</button>
					<button className="login" onClick={this.demoLogin}>Demo-User</button>
					{/* </form> */}
				</div>
			</div>
		);
	}
}

export default LoginForm;
