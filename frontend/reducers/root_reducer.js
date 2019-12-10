import { combineReducers } from 'redux';
import postReducer from './post_reducer';
import sessionReducer from './session_reducer';

const rootReducer = combineReducers(
	{
		// TODO add reducers in here
		posts: postReducer,
		session: sessionReducer
	}
);

export default rootReducer;
