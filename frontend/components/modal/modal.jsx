import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import PostFormContainer from '../post_forms/post_form_container';
import LogoutModal from './logout_modal'
import {deleteSession} from '../../actions/session_actions';

class PostModal extends React.Component {
	render() {
		const { modal, closeModal } = this.props;

		if (!modal) { //! checks if state is null
			return null;
		}

		let component;
		let background;
		let container;
		// debugger
		switch (modal) {
			case 'textForm':
				component = <PostFormContainer postType={modal} />;
				background = 'post-form-from-bar-background';
				container = 'post-form-container';
				break;
			case 'photoForm':
				component = <PostFormContainer postType={modal} />;
				background = 'post-form-from-bar-background';
				container = 'post-form-container';
				break;
			case 'quoteForm':
				component = <PostFormContainer postType={modal} />;
				background = 'post-form-from-bar-background';
				container = 'post-form-container';
				break;
			case 'audioForm':
				component = <PostFormContainer postType={modal} />;
				background = 'post-form-from-bar-background';
				container = 'post-form-container';
				break;
			case 'videoForm':
				component = <PostFormContainer postType={modal} />;
				background = 'post-form-from-bar-background';
				container = 'post-form-container';
				break;
			case 'logout':
				component = <LogoutModal postType={modal} />;
				background = 'logout-background';
				container = 'logout-modal';
				break;
			default:
				return null;
		}

		return (
				<div className={background} {clickable}>
					<div className={container} onClick={(e) => e.stopPropagation()}>
						{component}
					</div>
				</div>

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
		closeModal: () => dispatch(closeModal())
	};
};

export default connect(msp, mdp)(PostModal);
