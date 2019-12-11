import { combineReducers } from 'redux';
import postReducer from './post_reducer';
import sessionReducer from './session_reducer';
import errorReducer from './error_reducer';

const rootReducer = combineReducers(
	{
		// TODO add reducers in here
		posts: postReducer,
		session: sessionReducer,
		errors: errorReducer
	}
);

export default rootReducer;
