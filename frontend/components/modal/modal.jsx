import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import PostFormContainer from '../post_forms/post_form_container';
import LogoutModal from './logout_modal';
import DeleteModal from '../modal/delete_modal';
import ChoosePostModalTransition from './choose_post_modal_transition';
import ChoosePostModal from './choose_post_modal';
import PopOutPicture from './pop_out_picture';
import UserPeek from './user_peek';
import {deleteSession} from '../../actions/session_actions';

class Modal extends React.Component {

	

	render() {
		const { modal, openModal, closeModal, postId } = this.props;

		if (!modal) { //! checks if UI state is null
			return null;
		}

		let component;
		let background;
		let container;
		let clickEffect;

		const doNothing = ()=>{};

		const transitionModals = (transitionType)=>{
			closeModal();
			openModal(transitionType);
			setTimeout(closeModal, 500);
		}
		
		switch (modal) {
			case 'textForm':
				component = <PostFormContainer postType={modal} />;
				background = 'post-form-background';
				container = 'post-form-container';
				clickEffect = doNothing;
				break;
			case 'imageForm':
				component = <PostFormContainer postType={modal} />;
				background = 'post-form-background';
				container = 'post-form-container';
				clickEffect = doNothing;
				break;
			case 'quoteForm':
				component = <PostFormContainer postType={modal} />;
				background = 'post-form-background';
				container = 'post-form-container';
				clickEffect = doNothing;
				break;
			case 'audioForm':
				component = <PostFormContainer postType={modal} />;
				background = 'post-form-background';
				container = 'post-form-container';
				clickEffect = doNothing;
				break;
			case 'videoForm':
				component = <PostFormContainer postType={modal} />;
				background = 'post-form-background';
				container = 'post-form-container';
				clickEffect = doNothing;
				break;
			case 'logout':
				component = <LogoutModal postType={modal} />;
				background = 'logout-background';
				container = 'logout-modal';
				clickEffect = doNothing;
				break;
			case 'delete-confirmation':
				component = <DeleteModal postId={event.target.id} />;
				background = 'logout-background';
				container = 'logout-modal';
				clickEffect = doNothing;
				break;
			case 'zoom-off-screen':
				component = <ChoosePostModalTransition postType={modal} />;
				background = 'choose-a-form-background-transition';
				container = 'choose-a-form-container';
				clickEffect = doNothing;
				break;
			case 'choose-a-form':
				component = <ChoosePostModal postType={modal} />;
				background = 'choose-a-form-background';
				container = 'choose-a-form-container';
				clickEffect = function(){transitionModals('zoom-off-screen')};
				break;
			case 'pop-out':
				const imageUrl = event.target.src;
				component = <PopOutPicture imageUrl = {imageUrl}/>;
				background = 'pop-out-picture-background';
				container = 'pop-out-picture-container';
				clickEffect = closeModal;
				break;
			case 'user-peek':
				component = <UserPeek authorId={event.target.id}/>;
				background = 'user-peek-background';
				container = 'user-peek-container';
				clickEffect = closeModal;
				break;
			default:
				return null;
		}

		return (
				<div className={background} onClick={clickEffect}>
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
		openModal: (modal) => dispatch(openModal(modal)),
		closeModal: () => dispatch(closeModal())
	}
};

export default connect(msp, mdp)(Modal);
