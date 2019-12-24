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
	}

	handleInput(e){
		return e=>{
			this.setState({
				searchText: e.currentTarget.value,
				searchbarFilled: true
			});
		}
	}

	reset(e){
		return e=>{
			this.setState({
				searchbarFilled: false
			})
		}
	}


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
					onClick={()=>this.props.openModal("choose-a-form")}
					/>
				</div>
			)
		}
		
		
		let searchbarFilled = this.state.searchbarFilled ?
			"searchbar-filled" :
			(null) ;
		
		return (
			<div className="navbar">
				{navbarBorder}
				<div className="left-side">
					<Link style={{ textDecoration: 'none' }} to='/dashboard'><span className="nav-logo">d</span></Link>
					{/* <div className="entire-search-bar" > */}
						<div className="mag-glass" id={searchbarFilled}>
							<span className="fas fa-search" id={searchbarFilled}></span>
						</div>
						<input 
						className="searchbar"
						type="text" 
						placeholder="Search Dreamr"
						id={searchbarFilled}
						onChange={this.handleInput()}
						onClick={this.handleInput()}
						onBlur={this.reset()}
						></input>
					{/* </div> */}
				</div>
				{redirectButton}
				{loginNav}
			</div>
		);
	}
}


export default Navbar;