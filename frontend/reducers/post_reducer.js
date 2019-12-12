import {
	RECEIVE_ALL_POSTS,
	RECEIVE_POST,
	REMOVE_POST
} from '../actions/post_actions';
import {merge} from 'lodash';

const postReducer = (prevState = {}, action) => {
	Object.freeze(prevState);
	let newState = {};
	switch (action.type) {
		default:
			return prevState;
		case RECEIVE_ALL_POSTS:
			// debugger
			newState = merge({}, prevState, action.posts);
			// debugger
			return newState;
		case RECEIVE_POST:
			newState = merge({}, prevState);
			newState[action.post.id] = action.post;
			return newState;
		case REMOVE_POST:
			newState = merge({}, prevState);
			delete newState[action.postId];
			return newState;
	}
};

export default postReducer;
