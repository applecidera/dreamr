import { connect } from 'react-redux';
import { deleteSession } from '../../actions/session_actions';
import Dropdown from './dropdown';

const msp = (state) => ({
	user: state.session.currentUser
});

const mdp = (dispatch) => ({
	logout: () => dispatch(deleteSession())
});

export default connect(msp, mdp)(Dropdown);
