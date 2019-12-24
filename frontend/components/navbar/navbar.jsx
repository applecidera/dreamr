import React from 'react';
import { Link } from 'react-router-dom';
import NavDropdown from './nav_dropdown';

class Navbar extends React.Component {
	constructor(props){
		super(props);

		this.state={
			open: false,
			searchText: "",
			searchbarFilled: null,
			searchResult: null
		}

		this.searchForContent = this.searchForContent.bind(this);
		this.handleInput = this.handleInput.bind(this);
		this.reset = this.reset.bind(this);
		this.setState = this.setState.bind(this);
	}

	componentDidUpdate(prevState){
		if (prevState.searchResult.length != this.props.searchResult.length){
			this.setState({
				searchResult: this.props.searchResult
			})
		}
	}

	handleInput(event){	
		this.setState({
			searchText: event.currentTarget.value,
			searchbarFilled: true
		});
		if (this.state.searchText != ""){
			console.log(this.state.searchText);
			const queryString = this.state.searchText;
			this.props.searchForContent(queryString);
		}
	}

	reset(){
		this.props.clearSearchList();
		return e=>{
			this.setState({
				searchbarFilled: false,
				searchResult: null
			})
		}
	}

	searchForContent(){
		if (this.state.searchText != ""){
			console.log(this.state.searchText);
			const queryString = this.state.searchText;
			this.props.searchForContent(queryString);
		}
	}

	render() {
		const that = this;
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

		let searchResult = (this.state.searchResult && this.state.searchResult.length > 0) ? 
		(<ul className="search-result-list">
			{this.state.searchResult.map((result)=>(
				<li 
				id={result.id} 
				key = {result.id}
				className="search-result-individual"
				onMouseDown={()=>this.props.openModal("user-peek")}>
					<img src={result.avatar}/>{result.username}
				</li>
			))}
			</ul>
		) : 
		(<></>) ;
		
		return (
			<div className="navbar">
				{navbarBorder}
				<div className="left-side">
					<Link style={{ textDecoration: 'none' }} to='/dashboard'><span className="nav-logo">d</span></Link>
						<div className="mag-glass" id={searchbarFilled}>
							<span className="fas fa-search" id={searchbarFilled}></span>
						</div>
						<input 
						className="searchbar"
						type="text" 
						placeholder="Search Dreamr"
						id={searchbarFilled}
						onChange={this.handleInput}
						onFocus={this.handleInput}
						onBlur={()=>this.reset()}
						></input>
						{searchResult}
				</div>
				{redirectButton}
				{loginNav}
			</div>
		);
	}
}


export default Navbar;