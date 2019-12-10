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
			<div className="splash">
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
					<button className="signup" onClick={this.handleSubmit}>Login</button>
				{/* </form> */}
				</div>
			</div>
		);
	}
}

export default LoginForm;
