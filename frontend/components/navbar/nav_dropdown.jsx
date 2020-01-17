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
		const { currentUser } = this.props;
		let avatar =
			currentUser.avatar === 'cloud' ? window.avatar : currentUser.avatar;
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
							<div
								className="logout-button"
								onClick={() => this.props.openModal('logout')}
							>
								<span>Logout</span>
							</div>
						</div>
						<div className="nav-profile-box">
							<img className="nav-avatar-image" src={avatar} />
							<span className="nav-username">
								{this.props.currentUser.username}
							</span>
						</div>
						<div className="about-me">
							{/* <a target="_blank" href="https://github.com/applecidera/dreamr"> */}
								<div className="github" onClick={()=>window.location.href="https://github.com/applecidera/dreamr"}>
									<img className="aboutme-img" src="https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/github_logo.png" />
									<span>GitHub</span>
								</div>
							{/* </a> */}
							{/* <a target="_blank" href="https://angel.co/andrew-lee-184?public_profile=1"> */}
								<div className="angel-list" onClick={()=>window.location.href="https://angel.co/andrew-lee-184?public_profile=1"}>
									<img className="aboutme-img" src="https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/angellist_logo.png" />
								<span>AngelList</span>
							</div>
							{/* </a> */}
							{/* <a target="_blank" href="https://www.linkedin.com/in/andrew-lee-1301a619b/"> */}
							<div className="linked-in" onClick={()=>window.location.href="https://www.linkedin.com/in/andrew-lee-1301a619b/"}>
								<img className="aboutme-img" src="https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/LI-In-Bug.png" />
								<span>Linked-In</span></div>
							{/* </a> */}
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
