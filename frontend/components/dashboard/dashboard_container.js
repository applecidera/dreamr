import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchAllPosts } from '../../actions/post_actions';

const msp = (state) => ({});

const mdp = (dispatch) => ({
	fetchAllPosts: () => dispatch(fetchAllPosts())
});

export default connect(null, mdp)(Dashboard);
