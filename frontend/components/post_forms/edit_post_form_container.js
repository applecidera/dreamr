import { connect } from 'react-redux';
import React from 'react';
import { updatePost } from '../../actions/post_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import EditPostForm from './edit_post_form';

const msp = (state, ownProps) => {
	debugger // check ownProps for postId
	return {
		postId: ownProps.post.id,
		currentUser: state.session.currentUser,
		post: state.posts[ownProps.post.id]
	};
};

const mdp = (dispatch) => {
	return {
		updatePost: (post) => dispatch(updatePost(post)),
		fetchPost: (postId) => dispatch(fetchSinglePost(postId)),
		fetchAllPosts: () => dispatch(fetchAllPosts())
	};
};

export default connect(msp, mdp)(EditPostForm);
