import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
	render() {
		let redirectButton = (<></>);
		let loginNav = (<></>);
		let navbarBorder = (<></>);
		if (this.props.location.pathname === '/signup'){
			redirectButton = (
				<Link to="/login" className="redirect"><button>Login</button></Link>
			)
		}
		if (this.props.location.pathname === '/login') {
			redirectButton = (
				<Link to="/signup" className="redirect"><button>Signup</button></Link>
			)
		}
		if ((this.props.location.pathname != '/login') && 
		(this.props.location.pathname != '/signup') && 
		(this.props.location.pathname != '/')){
			navbarBorder = (<div className="grey-line"></div>);
		}
		if (this.props.currentUser){
			loginNav = (
				<Link 
					to="/"
					className="logged-in-nav">
					<button 
					onClick={this.props.deleteSession} 
					>Logout</button></Link>
			)
		}
		
		// debugger
			
		return (
			<div className="navbar">
				{navbarBorder}
				<div className="left-side">
					<Link to='/'><p className="nav-logo">d</p></Link>
					<i className="mag-glass">&#x1F50D;</i>
					<input className="searchbar" type="text" placeholder="Search Dreamr"></input>
				</div>
				{redirectButton}
				{loginNav}
			</div>
		);
	}
}


export default Navbar;