import {connect} from 'react-redux';
import EditPost from './edit_post';
import { fetchAllPosts, updatePost } from '../../actions/post_actions';

const msp = (state, ownProps) => {
	return {
    posts: Object.values(state.entities.posts),
    postId: ownProps.match.params.post_id,
    currentUser: state.session.currentUser,
    post: state.entities.posts[ownProps.match.params.post_id],
	}
};

const mdp = (dispatch) => ({
  fetchAllPosts: () => dispatch(fetchAllPosts()),
  updatePost: (post)=> dispatch(updatePost(post))
});

export default connect(msp, mdp)(EditPost);