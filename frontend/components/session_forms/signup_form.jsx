import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			email: '',
			password: '',
			errors: null
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.demoLogin = this.demoLogin.bind(this);
	}

	demoLogin() {
		const demoUser = {
			username: 'demo-user',
			password: 'demo-user-ftw'
		};

		this.props.createSession(demoUser).then(() => this.props.history.push('/dashboard'));
	}

	componentDidMount() {
		this.props.clearSessionErrors();
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
		const that=this;

		// TODO conditional errors

		if (this.state.email === '') {
			this.setState({ errors: "Don't forget your email address!" });
		} else if (this.state.password === '') {
			this.setState({ errors: 'You forgot to enter your password!' });
		} else {
			this.props.createUser(this.state).then(() => this.props.history.push('/dashboard'));
		}
		
	}

	render() {
		// let errors = (<></>);
		// if (this.state.errors) {
		// 	errors = (
		// 		<div className="errors">{this.state.errors}</div>
		// 	)
		// };

		let errors = null;
		if (this.props.errors.length > 0) {
			errors = (
				// single error message
				// <div className="errors">{this.props.errors[0]}</div>
				// multiple error messages

				<ul className="errors">{this.props.errors.map((error, i) => <li key={`error-${i}`}>{error}</li>)}</ul>
			);
		}
		if (this.state.errors) {
			errors = <span className="errors">{this.state.errors}</span>;
		}
		
		return (
			<div className="splash">
				{/* <Link to="/login"><button className="redirect-button">Login</button></Link> */}
				<form className="content">
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
						required
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
				</form>
			</div>
		);
	}
}

export default SignupForm;
