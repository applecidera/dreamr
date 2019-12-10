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
			<div className="splash">
				<div className="content">
					<p className="logo">dreamr</p>
					{/* <label htmlFor="username">Username</label> */}
					<input
						type="text"
						id="username"
						value={this.state.username}
						onChange={this.handleInput('username')}
						placeholder="Username"
					/>
					{/* <label htmlFor="email">Email</label> */}
					<input
						type="email"
						id="email"
						value={this.state.email}
						onChange={this.handleInput('email')}
						placeholder="Email"
					/>
					{/* <label htmlFor="password">Password</label> */}
					<input
						type="password"
						id="password"
						value={this.state.password}
						onChange={this.handleInput('password')}
						placeholder="Password"
					/>
					<p className="errors">Username or password was incorrect</p>
					<button className="signup" onClick={this.handleSubmit}>Sign Up</button>
				</div>
			</div>
		);
	}
}

export default SignupForm;
