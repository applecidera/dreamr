import { connect } from 'react-redux';
import { deleteSession } from '../../actions/session_actions';
import Navbar from './navbar';
import { openModal } from '../../actions/modal_actions';
import { fetchAllUsers} from '../../actions/user_actions';

const clearSearchList = () => ({
	type: "CLEAR_SEARCH_LIST"
});

const msp = (state) => {
  const currentUser = state.session.currentUser;
	return {
		currentUser: currentUser,
		searchResult: Object.values(state.entities.search)
	};
};

const mdp = (dispatch) => {
	return {
		deleteSession: () => dispatch(deleteSession()),
		openModal: (modal)=> dispatch(openModal(modal)),
		searchForContent: (queryString)=> dispatch(fetchAllUsers(queryString)),
		clearSearchList: ()=>dispatch(clearSearchList())
	};
};

export default connect(msp, mdp)(Navbar);