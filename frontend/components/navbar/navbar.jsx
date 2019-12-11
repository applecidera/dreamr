import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
	render() {
		const renderMe = this.props.currentUser ? (
			// user is logged in
			<div>
        <Link to="/dashboard">Back to Main Page</Link>
        <h3>{`Logged in as ${this.props.currentUser.username}`} </h3>
        <Link to="/"><button onClick={this.props.deleteSession}>Logout</button></Link>
      </div>
		) : (
			// user is logged out
			<div>
        {/* <Link to="/signup"><button>Sign Up</button></Link>
        <Link to="/login"><button>Login</button></Link> */}
      </div>
		);
		return (
			<div className="navbar">
				<p className="nav-logo">d</
				p>
				<input className="searchbar" type="text" placeholder="Search dreamr"></input>
				{renderMe}
			</div>
		);
	}
}


export default Navbar;