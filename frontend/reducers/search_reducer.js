import {RECEIVE_ALL_USERS} from '../actions/user_actions';
import {merge} from 'lodash';

const searchReducer = (prevState = {}, action) => {
	let newState;
	
	switch(action.type){
		case RECEIVE_ALL_USERS:
			if (action.users != null){
				newState = merge({}, action.users)
				return newState;
			}
            return {};
        case "CLEAR_SEARCH_LIST":
            return {};
		default:
			return prevState;
	}
};

export default searchReducer;
