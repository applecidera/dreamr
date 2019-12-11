import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { createUser, createSession, clearSessionErrors } from '../../actions/session_actions';

const msp = (state)=>{
	// debugger
	let errors = state.errors.session;
  return {
		errors: errors
	}
}

const mdp = (dispatch) => {
	return {
		createUser: (user) => dispatch(createUser(user)),
		createSession: (user) => dispatch(createSession(user)),
		clearSessionErrors: ()=> dispatch(clearSessionErrors())
	};
};

export default connect(msp, mdp)(SignupForm);
