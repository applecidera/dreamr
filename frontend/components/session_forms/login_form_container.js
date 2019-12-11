import { connect } from 'react-redux';
import LoginForm from './login_form';
import { createSession, clearSessionErrors } from '../../actions/session_actions';

const msp = (state)=>{
	// debugger
	let errors = state.errors.session;
  return {
		errors: errors
	}
}

const mdp = (dispatch) => {
	return {
		createSession: (user) => dispatch(createSession(user)),
		clearSessionErrors: () => dispatch(clearSessionErrors())
	};
};

export default connect(msp, mdp)(LoginForm);
