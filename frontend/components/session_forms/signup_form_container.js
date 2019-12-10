import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { createUser } from '../../actions/session_actions';

// const msp = (state)=>{
//   return {}
// }

const mdp = (dispatch) => {
	return {
		createUser: (user) => dispatch(createUser(user))
	};
};

export default connect(null, mdp)(SignupForm);
