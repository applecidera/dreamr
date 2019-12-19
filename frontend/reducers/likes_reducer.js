import {
	RECEIVE_ALL_LIKES,
	RECEIVE_LIKE,
	REMOVE_LIKE
} from '../actions/like_actions';
import { merge } from 'lodash';

const likesReducer = (prevState = {}, action) => {
	Object.freeze(prevState);
	let newState = {};
	switch (action.type) {
		default:
			return prevState;
		case RECEIVE_ALL_LIKES:
			newState = merge({}, prevState, action.likes);
			return newState;
		case RECEIVE_LIKE:
			newState = merge({}, prevState);
			newState[action.like.id] = action.like;
			return newState;
		case REMOVE_LIKE:
			newState = merge({}, prevState);
			delete newState[action.likeId];
			return newState;
	}
};

export default likesReducer;
