import {
	OPEN_MODAL2,
	CLOSE_MODAL2
} from '../actions/modal_actions';

const modal2Reducer = (state = null, action) => {
	switch (action.type) {
		case OPEN_MODAL2:
			return action.modal;
		case CLOSE_MODAL2:
			return null;
		default:
			return state;
	}
};

export default modal2Reducer;
