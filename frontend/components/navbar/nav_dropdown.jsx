import React from 'react';
import { connect } from 'react-redux';
import { deleteSession } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

class NavDropdown extends React.Component {
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
							<div className="logout-button" onClick={()=>this.props.openModal("logout")}><span>Logout</span></div>
						</div>
					<div className="nav-profile-box">
						<img className ="nav-avatar-image"src={window.avatar} />
						<span className="nav-username">{this.props.currentUser.username}</span>
					</div>
					</div>
				)}
			</button>
		);
	}
}

const msp = (state) => ({
	currentUser: state.session.currentUser
});

const mdp = (dispatch) => ({
	logout: () => dispatch(deleteSession()),
	openModal: (modal) => dispatch(openModal(modal))
});

export default connect(msp, mdp)(NavDropdown);
