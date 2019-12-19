import {
	OPEN_MODAL3,
	CLOSE_MODAL3
} from '../actions/modal_actions';

const modal3Reducer = (state = null, action) => {
	switch (action.type) {
		case OPEN_MODAL3:
			return action.modal;
		case CLOSE_MODAL3:
			return null;
		default:
			return state;
	}
};

export default modal3Reducer;
