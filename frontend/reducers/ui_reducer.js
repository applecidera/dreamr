import { combineReducers } from 'redux';
// import filtersReducer from './filters_reducer';
import modalReducer from './modal_reducer';
import modal2Reducer from './modal2_reducer';

const uiReducer = combineReducers({
	// filters: filtersReducer,
	modal: modalReducer,
	modal2: modal2Reducer
});

export default uiReducer;
