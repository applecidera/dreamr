import React from 'react';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: this.props.state.username,
			email: this.props.state.email,
			password: this.props.state.password
		};
  }

  handleSubmit(){
    // TODO handle submit
  }

  render() {
    return (
      <form action={this.handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={this.state.username}/>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={this.state.email}/>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={this.state.password}/>
        <button>Sign Up</button>
      </form>
    )
  }
}

export default SessionForm;
