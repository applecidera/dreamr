import * as SessionApiUtils from '../utils/session_api_utils';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

export const receiveCurrentUser = (user) => ({
	type: RECEIVE_CURRENT_USER,
	user
});

export const logoutCurrentUser = () => ({
	type: LOGOUT_CURRENT_USER
});

export const createUser = (newUser) => (dispatch) =>
	SessionApiUtils.createUser(newUser).then((user) =>
		dispatch(receiveCurrentUser(user))
	);

export const createSession = (user) => (dispatch) =>
	SessionApiUtils.createSession(user).then((user) =>
		dispatch(receiveCurrentUser(user))
	);

export const deleteSession = () => (dispatch) =>
	SessionApiUtils.deleteSession().then(() => dispatch(logoutCurrentUser()));
