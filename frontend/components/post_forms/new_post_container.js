import {connect} from 'react-redux';
import NewPost from './new_post';
import { fetchAllPosts } from '../../actions/post_actions';

const msp = (state, ownProps) => {
	return {
        posts: Object.values(state.entities.posts),
        currentUser: state.session.currentUser
	}
};

const mdp = (dispatch) => ({
	fetchAllPosts: () => dispatch(fetchAllPosts())
});

export default connect(msp, mdp)(NewPost);