import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchAllPosts } from '../../actions/post_actions';
import { fetchAllLikes } from '../../actions/like_actions';
import { fetchAllFollows } from '../../actions/follow_actions';

const msp = (state) => {
	return {
		posts: Object.values(state.entities.posts)
	}
};

const mdp = (dispatch) => ({
	fetchAllPosts: () => dispatch(fetchAllPosts()),
	fetchAllLikes: () => dispatch(fetchAllLikes()),
	fetchAllFollows: () => dispatch(fetchAllFollows()),
});

export default connect(msp, mdp)(Dashboard);
