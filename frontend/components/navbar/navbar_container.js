import { connect } from 'react-redux';
import { deleteSession } from '../../actions/session_actions';
import Navbar from './navbar';
import { openModal2 } from '../../actions/modal_actions';

const msp = (state) => {
  const currentUser = state.session.currentUser;
	return {
		currentUser: currentUser
	};
};

const mdp = (dispatch) => {
	return {
		deleteSession: () => dispatch(deleteSession()),
		openModal2: (modal)=> dispatch(openModal2(modal))
	};
};

export default connect(msp, mdp)(Navbar);