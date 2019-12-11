import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
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
		const errors=()=>(this.setState({
			errors: "Incorrect username or password."
		}))
		this.props
			.createSession(this.state)
			.then(() => this.props.history.push('/dashboard'));
			// .fail(() => errors());
		// redirects on successful login
		// renders error message on failure
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

	componentDidMount(){
		// debugger
		this.props.clearSessionErrors();
	}

	render() {
		let errors = null;
		if (this.props.errors.length > 0) {
			errors = (
				// single error message
				// <div className="errors">{this.props.errors[0]}</div>
				// multiple error messages
				<ul className="errors">
					{this.props.errors.map((error, i) => (
						<li key={`error-${i}`}>{error}</li>
					))}
				</ul>
			);
		}

		return (
			<div className="splash">
			{/* <Link to="/signup"><button className="redirect-button">Signup</button></Link> */}
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
				</div>
			</div>
		);
	}
}

export default LoginForm;
