import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import modal2Reducer from './modal2_reducer';
import modal3Reducer from './modal3_reducer';

const uiReducer = combineReducers({
	modal: modalReducer,
	modal2: modal2Reducer,
	modal3: modal3Reducer
});

export default uiReducer;
