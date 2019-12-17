import {RECEIVE_USER} from '../actions/user_actions';
import {merge} from 'lodash';

const usersReducer = (prevState = {}, action) => {
	let newState;
	
	switch(action.type){
		case RECEIVE_USER:
			newState = merge({}, prevState);
			newState[action.user.id] = action.user;
			return newState;
		default:
			return prevState;
	}
};

export default usersReducer;
