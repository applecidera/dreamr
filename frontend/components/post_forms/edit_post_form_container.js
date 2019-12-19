import { connect } from 'react-redux';
import React from 'react';
import { updatePost } from '../../actions/post_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { Link, withRouter } from 'react-router-dom';
import EditPostForm from './edit_post_form';

const msp = (state, ownProps) => {
	// debugger
	return {
		currentUser: state.session.currentUser,
		post: ownProps.post
	};
};

const mdp = (dispatch) => {
	return {
		updatePost: (post) => dispatch(updatePost(post)) };
};

export default withRouter(connect(msp, mdp)(EditPostForm));
