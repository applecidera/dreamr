import { connect } from 'react-redux';
import { deleteSession } from '../../actions/session_actions';
import Navbar from './navbar';

const msp = (state) => {
  const currentUser = state.session.currentUser;
	return {
		currentUser: currentUser
	};
};

const mdp = (dispatch) => {
	return {
		deleteSession: () => dispatch(deleteSession())
	};
};

export default connect(msp, mdp)(Navbar);