import React from 'react';

class SignupForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			email: '',
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
			.createUser(this.state)
			.then(() => this.props.history.push('/dashboard'));
		// redirects on successful creation
	}

	render() {
		return (
			<div>
        <h3>SignUpFormGoesHere</h3>
				<form>
					<label htmlFor="username">Username</label>
					<input
						type="text"
						id="username"
						value={this.state.username}
						onChange={this.handleInput('username')}
					/>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
						value={this.state.email}
						onChange={this.handleInput('email')}
					/>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						value={this.state.password}
						onChange={this.handleInput('password')}
					/>
					<button onClick={this.handleSubmit}>Sign Up</button>
				</form>
			</div>
		);
	}
}

export default SignupForm;
