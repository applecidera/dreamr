import { combineReducers } from 'redux';
import PostReducer from './post_reducer';

const RootReducer = combineReducers(
	{
		// TODO add reducers in here
		posts: PostReducer
	}
);

export default RootReducer;
