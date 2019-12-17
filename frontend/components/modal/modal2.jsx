import React from 'react';
import { connect } from 'react-redux';
import { closeModal2 } from '../../actions/modal_actions';
import PostFormContainer from '../post_forms/post_form_container';
import ChoosePostModal from './choose_post_modal';

class Modal2 extends React.Component {
	render() {
		const { modal2, closeModal2 } = this.props;
		
		if (!modal2) { //! checks if UI state is null
			return null;
		}

		let component;
		let background;
		let container;
		
		switch (modal2) {
			case 'choose-a-form':
				component = <ChoosePostModal postType={modal2} />;
				background = 'choose-a-form-background';
				container = 'choose-a-form-container';
				break;
			default:
				return null;
		}
		
		return (		// REVIEW this is the clickable backround modal
				<div className={background} onClick={this.props.closeModal2}>
					<div className={container} onClick={(e) => e.stopPropagation()}>
						{component}
					</div>
				</div>

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
		closeModal2: () => dispatch(closeModal2())
	};
};

export default connect(msp, mdp)(Modal2);
