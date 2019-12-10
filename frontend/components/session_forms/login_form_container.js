import { connect } from 'react-redux';
import LoginForm from './login_form';
import { createSession } from '../../actions/session_actions';

// const msp = (state)=>{
//   return {}
// }

const mdp = (dispatch) => {
	return {
		createSession: (user) => dispatch(createSession(user))
	};
};

export default connect(null, mdp)(LoginForm);
