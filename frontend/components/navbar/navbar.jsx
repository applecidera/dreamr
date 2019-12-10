import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
	render() {
		const renderMe = this.props.currentUser ? (
			// user is logged in
			<div>
        <Link to="/">Back to Main Page</Link>
        <h3>{`Logged in as ${this.props.currentUser.username}`} </h3>
        <button onClick={this.props.deleteSession}>Logout</button>
      </div>
		) : (
			// user is logged out
			<div>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Login</Link>
      </div>
		);
		return (
			<div>
				{/* <h3>Navbar Goes Here</h3> */}
				{renderMe}
			</div>
		);
	}
}


export default Navbar;