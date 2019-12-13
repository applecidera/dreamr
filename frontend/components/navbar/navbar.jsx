import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './dropdown_container';

class Navbar extends React.Component {
	// constructor(props){
	// 	super(props);

	// 	this.state={
	// 		open: false
	// 	}

		// this.openDropdown = this.openDropdown.bind(this);
		// this.closeDropdown = this.closeDropdown.bind(this);
	// }

	// openDropdown(){
	// 	this.setState=({
	// 		open: true
	// 	})
	// 	console.log("open the door");
	// }

	// closeDropdown(){
		
	// 	this.setState=({
	// 		open: false
	// 	})
	// 	console.log("close the door");
	// }



	render() {
		let redirectButton = (<></>);
		let loginNav = (<></>);
		// let dropDownButton = (<></>);
		let navbarBorder = (<></>);
		
		if (this.props.location.pathname === '/signup'){
			redirectButton = (
				<Link to="/login" className="redirect"><button>Login</button></Link>
			)
		}
		if (this.props.location.pathname === '/login') {
			redirectButton = (
				<Link to="/" className="redirect"><button>Signup</button></Link>
			)
		}
		if ((this.props.location.pathname != '/login') && 
		(this.props.location.pathname != '/signup') && 
		(this.props.location.pathname != '/')){
			navbarBorder = (<div className="grey-line"></div>);
		}
		if (this.props.currentUser){
			loginNav = (
				// <Link 
				// 	to="/"
				// 	className="logged-in-nav">
				// 	<button 
				// 	onClick={this.props.deleteSession} 
				// 	>Logout</button></Link>

				<div className="logged-in-nav">
					<Dropdown />
					<button className="fas fa-pencil-alt nav-post-box"></button>
				</div>
			)
			// dropDownButton = (
			// 	<button 
			// 		className="dropdown-button" 
			// 		onBlur={this.closeDropdown} 
			// 		onFocus={this.openDropdown}><i 
			// 		className="fas fa-user-alt"></i>
			// 		</button>)
		}
		
		// debugger
			
		return (
			<div className="navbar">
				{navbarBorder}
				<div className="left-side">
					<Link to='/dashboard'><p className="nav-logo">d</p></Link>
					{/* <i className="mag-glass">&#x1F50D;</i> */}
					<i className="mag-glass"><i className="fas fa-search"></i></i>
					{/* <i class="fas fa-search"></i> */}
					<input className="searchbar" type="text" placeholder="Search Dreamr"></input>
				</div>
				{redirectButton}
				{loginNav}
			</div>
		);
	}
}


export default Navbar;