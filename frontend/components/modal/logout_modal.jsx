import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { deleteSession } from '../../actions/session_actions';

class LogoutModal extends React.Component {
	constructor(props) {
		super(props);
		this.logout = this.logout.bind(this);
	}

	logout() {
		this.props.closeModal();
		this.props.logout();
	}

	render() {
		const { modal, closeModal } = this.props;

		if (!modal) {
			return null;
		}

		return (
			<>
				<label className="logout-message">Are you sure you want to log out?</label>
				<button className="cancel" onClick={closeModal}>
					Cancel
				</button>
				<button className="OK" onClick={this.logout}>
					OK
				</button>
			</>
		);
	}
}

const msp = (state) => {
	return {
		modal: state.ui.modal
	};
};

const mdp = (dispatch) => {
	return {
		closeModal: () => dispatch(closeModal()),
		logout: ()=> dispatch(deleteSession())
	};
};

export default connect(msp, mdp)(LogoutModal);
