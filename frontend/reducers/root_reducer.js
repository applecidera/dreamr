import { combineReducers } from 'redux';
import postReducer from './post_reducer';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import uiReducer from './ui_reducer';

const rootReducer = combineReducers(
	{
		// TODO add reducers in here
		posts: postReducer,
		session: sessionReducer,
		errors: errorsReducer,
		ui: uiReducer
	}
);

export default rootReducer;
