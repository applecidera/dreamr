import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { deletePost } from '../../actions/post_actions';

class DeleteModal extends React.Component {
	constructor(props) {
		super(props);
    this.deletePost = this.deletePost.bind(this);
	}

	deletePost(){
		this.props.deletePost(this.props.postId);
		this.props.closeModal();
	}

	render() {
		const { modal, closeModal, postId} = this.props;
		if (!modal) {
			return null;
		}
		console.log(postId);
		return (
			<>
				<label className="logout-message">Are you sure you want to delete this post?</label>
				<button className="cancel" onClick={closeModal}>
					Cancel
				</button>
				<button className="OK" onClick={()=>this.deletePost({postId})}>
					OK
				</button>
			</>
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
		deletePost: (postId)=> dispatch(deletePost(postId))
	};
};

export default connect(msp, mdp)(DeleteModal);
