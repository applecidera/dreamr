import { connect } from 'react-redux';
import React from 'react';
import { createPost } from '../../actions/post_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import PostForm from './post_form';

const msp = (state) => {
	return {
    postType: state.ui.modal,
    currentUser: state.session.currentUser
	};
};

const mdp = (dispatch) => {
	return {
		createPost: (post) => dispatch(createPost(post)),
		closeModal: () => dispatch(closeModal())
	};
};

export default connect(msp, mdp)(PostForm);
