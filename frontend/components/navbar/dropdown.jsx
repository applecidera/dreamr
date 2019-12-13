import React from 'react';

class Dropdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
	}

	toggleDropdown() {
		this.setState({ open: !this.state.open });
	}

	render() {
		return (
			<button
				onBlur={() => this.toggleDropdown()}
				onFocus={() => this.toggleDropdown()}
				tabIndex="0"
				className="dropdown-button"
			>
				<i className="fas fa-user-alt" />
				{this.state.open && (
					<div className="dropdown-container">
						<div className="dropdown-top">
							<div className="account">ACCOUNT</div>
							{/* <div className="logout-button" onClick={this.props.logout}><span>Logout</span></div> */}
							<div className="logout-button" onClick={()=>this.props.openModal("logout")}><span>Logout</span></div>
						</div>
						
					</div>
				)}
			</button>
		);
	}
}

export default Dropdown;
