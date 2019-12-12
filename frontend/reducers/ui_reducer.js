import { combineReducers } from 'redux';

// import filtersReducer from './filters_reducer';
import modalReducer from './modal_reducer';

const uiReducer = combineReducers({
	// filters: filtersReducer,
	modal: modalReducer
});

export default uiReducer;
