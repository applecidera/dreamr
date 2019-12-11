import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { createUser, createSession } from '../../actions/session_actions';

// const msp = (state)=>{
//   return {}
// }

const mdp = (dispatch) => {
	return {
		createUser: (user) => dispatch(createUser(user)),
		createSession: (user) => dispatch(createSession(user))
	};
};

export default connect(null, mdp)(SignupForm);
