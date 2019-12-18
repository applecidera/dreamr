import React from 'react';
import { connect } from 'react-redux';
import { closeModal2 } from '../../actions/modal_actions';

class PopOutPicture extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { modal2, imageUrl } = this.props;

		if (!modal2) {
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
		modal2: state.ui.modal2
	};
};

const mdp = (dispatch) => {
	return {
		closeModal2: () => dispatch(closeModal2()),
		openModal: (modal)=>dispatch(openModal(modal))
	};
};

export default connect(msp, mdp)(PopOutPicture);
