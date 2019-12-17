import {connect} from 'react-redux';
import EditPost from './edit_post';
import { fetchAllPosts, updatePost } from '../../actions/post_actions';

const msp = (state, ownProps) => {
	return {
        posts: Object.values(state.entities.posts),
        currentUser: state.session.currentUser
	}
};

const mdp = (dispatch) => ({
  fetchAllPosts: () => dispatch(fetchAllPosts()),
  updatePost: (post)=> dispatch(updatePost(post))
});

export default connect(msp, mdp)(EditPost);