import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import PostFormContainer from '../post_forms/post_form_container';
import LogoutModal from './logout_modal';
import DeleteModal from '../modal/delete_modal';
import {deleteSession} from '../../actions/session_actions';

class Modal extends React.Component {
	render() {
		const { modal, closeModal, postId } = this.props;

		if (!modal) { //! checks if UI state is null
			return null;
		}

		let component;
		let background;
		let container;
		
		switch (modal) {
			case 'textForm':
				component = <PostFormContainer postType={modal} />;
				background = 'post-form-background';
				container = 'post-form-container';
				break;
			case 'imageForm':
				component = <PostFormContainer postType={modal} />;
				background = 'post-form-background';
				container = 'post-form-container';
				break;
			case 'quoteForm':
				component = <PostFormContainer postType={modal} />;
				background = 'post-form-background';
				container = 'post-form-container';
				break;
			case 'audioForm':
				component = <PostFormContainer postType={modal} />;
				background = 'post-form-background';
				container = 'post-form-container';
				break;
			case 'videoForm':
				component = <PostFormContainer postType={modal} />;
				background = 'post-form-background';
				container = 'post-form-container';
				break;
			case 'logout':
				component = <LogoutModal postType={modal} />;
				background = 'logout-background';
				container = 'logout-modal';
				break;
			case 'delete-confirmation':
				component = <DeleteModal postId={event.target.id} />;
				background = 'logout-background';
				container = 'logout-modal';
				break;
			default:
				return null;
		}

		return (
				<div className={background}>
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

export default connect(msp, mdp)(Modal);
