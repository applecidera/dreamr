import { connect } from 'react-redux';
import React from 'react';
import { updatePost } from '../../actions/post_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { Link, withRouter } from 'react-router-dom';
import EditPostForm from './edit_post_form';
import { deleteAttachment } from '../../utils/post_api_utils';

const msp = (state, ownProps) => {
	return {
		currentUser: state.session.currentUser,
		post: ownProps.post
	};
};

const mdp = (dispatch) => {
	return {
		updatePost: (post) => dispatch(updatePost(post)),
		deleteAttachment: (blobId)=> dispatch(deleteAttachment(blobId))
	}
};

export default withRouter(connect(msp, mdp)(EditPostForm));
