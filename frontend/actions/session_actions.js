import * as SessionApiUtils from '../utils/session_api_utils';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

export const receiveCurrentUser = (user) => ({
	type: RECEIVE_CURRENT_USER,
	user: user
});

export const logoutCurrentUser = () => ({
	type: LOGOUT_CURRENT_USER
});

export const receiveSessionErrors = (errors) => ({
	type: RECEIVE_SESSION_ERRORS,
	errors
});

export const clearSessionErrors = () => ({
	type: CLEAR_SESSION_ERRORS
});

export const createUser = (user) => (dispatch) =>
	SessionApiUtils.createUser(user).then(
		(user) => dispatch(receiveCurrentUser(user)),
		(err) => dispatch(receiveSessionErrors(err.responseJSON))
	);

export const createSession = (user) => (dispatch) =>
	SessionApiUtils.createSession(user).then(
		(user) => dispatch(receiveCurrentUser(user)),
		(err) => dispatch(receiveSessionErrors(err.responseJSON))
	);

export const deleteSession = () => (dispatch) =>
	SessionApiUtils.deleteSession().then(() => dispatch(logoutCurrentUser()));
