import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import uiReducer from './ui_reducer';

const rootReducer = combineReducers(
	{
		// TODO add reducers in here
		// posts: postReducer,
		entities: entitiesReducer,
		session: sessionReducer,
		errors: errorsReducer,
		ui: uiReducer
	}
);

export default rootReducer;
