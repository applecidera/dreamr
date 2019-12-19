import React from 'react';
import { Link } from 'react-router-dom';
import NavDropdown from './nav_dropdown';

class Navbar extends React.Component {
	constructor(props){
		super(props);

		this.state={
			open: false,
			searchText: "",
			searchbarFilled: null
		}
		this.checkSearchbarFilled=this.checkSearchbarFilled.bind(this);
		// this.openDropdown = this.openDropdown.bind(this);
		// this.closeDropdown = this.closeDropdown.bind(this);
	}

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
	checkSearchbarFilled(){
		(this.state.searchText != "") ? 
		this.setState({searchbarFilled: true}) : 
		this.setState({searchbarFilled: null}) ;
	}

	handleInput(){

		return e=>
			this.setState({searchText: e.currentTarget.value})
	}


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

				<div className="logged-in-nav">
					<NavDropdown />
					<button 
					className="fas fa-pencil-alt nav-post-box" 
					onClick={()=>this.props.openModal3("choose-a-form")}
					/>
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
		
		
		let searchbarFilled = this.props.searchbarFilled ?
			"searchbar-filled" :
			(null) ;
		
		return (
			<div className="navbar">
				{navbarBorder}
				<div className="left-side">
					<Link style={{ textDecoration: 'none' }} to='/dashboard'><span className="nav-logo">d</span></Link>
					<i className="mag-glass"><i className="fas fa-search"></i></i>
					<input 
					className="searchbar"
					id={searchbarFilled}
					type="text" 
					placeholder="Search Dreamr"
					// onChange={this.checkSearchbarFilled()}
					></input>
				</div>
				{redirectButton}
				{loginNav}
			</div>
		);
	}
}


export default Navbar;