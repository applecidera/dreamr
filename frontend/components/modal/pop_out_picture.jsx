import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';

class PopOutPicture extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { modal, imageUrl } = this.props;

		if (!modal) {
			return null;
		}

		return (
      <img 
        src={imageUrl} 
        alt={window.avatar}
        className="image-modal-center"
        />
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
		openModal: (modal)=>dispatch(openModal(modal))
	};
};

export default connect(msp, mdp)(PopOutPicture);
