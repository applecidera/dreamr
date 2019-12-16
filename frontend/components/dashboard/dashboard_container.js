import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchAllPosts } from '../../actions/post_actions';

const msp = (state) => {
	return {
		posts: Object.values(state.posts)
	}
};

const mdp = (dispatch) => ({
	fetchAllPosts: () => dispatch(fetchAllPosts())
});

export default connect(msp, mdp)(Dashboard);
