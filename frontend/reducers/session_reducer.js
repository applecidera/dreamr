import {
	RECEIVE_CURRENT_USER,
	LOGOUT_CURRENT_USER
} from '../actions/session_actions';

// default state for session, ie. not logged in
const _nullSession = {
	currentUser: null
};

const sessionReducer = (prevState=_nullSession, action) => {
	Object.freeze(prevState);
	let newState = {};
	switch (action.type) {
		default:
			return prevState;
		case RECEIVE_CURRENT_USER:
			newState = {
				currentUser: action.user
			};
			return newState;
		case LOGOUT_CURRENT_USER:
			return _nullSession;
	}
};

export default sessionReducer;
