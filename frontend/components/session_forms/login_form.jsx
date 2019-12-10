import React from 'react';

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
    };
    this.handleSubmit=this.handleSubmit.bind(this);
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

	render() {
		return (
			<div>
        <h3>LoginFormGoesHere</h3>
				<form>
					<label htmlFor="username">Username</label>
					<input
						type="text"
						id="username"
						value={this.state.username}
						onChange={this.handleInput('username')}
					/>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						value={this.state.password}
						onChange={this.handleInput('password')}
					/>
					<button onClick={this.handleSubmit}>Login</button>
				</form>
			</div>
		);
	}
}

export default LoginForm;
