import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchAllPosts } from '../../actions/post_actions';
import { fetchAllLikes } from '../../actions/like_actions';

const msp = (state) => {
	return {
		posts: Object.values(state.entities.posts)
	}
};

const mdp = (dispatch) => ({
	fetchAllPosts: () => dispatch(fetchAllPosts()),
	fetchAllLikes: () => dispatch(fetchAllLikes())
});

export default connect(msp, mdp)(Dashboard);
