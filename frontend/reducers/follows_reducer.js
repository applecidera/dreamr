import {
	RECEIVE_ALL_FOLLOWS,
	RECEIVE_FOLLOW,
	REMOVE_FOLLOW
} from '../actions/follow_actions';
import { merge } from 'lodash';

const followsReducer = (prevState = {}, action) => {
	Object.freeze(prevState);
	let newState = {};
	switch (action.type) {
		default:
			return prevState;
		case RECEIVE_ALL_FOLLOWS:
			newState = merge({}, prevState, action.follows);
			return newState;
		case RECEIVE_FOLLOW:
			newState = merge({}, prevState);
			newState[action.post.id] = action.follow;
			return newState;
		case REMOVE_FOLLOW:
			newState = merge({}, prevState);
			delete newState[action.followId];
			return newState;
	}
};

export default followsReducer;
