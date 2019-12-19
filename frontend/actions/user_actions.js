import * as UserApiUtils from '../utils/user_api_utils';

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = (user) => ({
	type: RECEIVE_USER,
	user: user
});

export const fetchUser = (userId) => (dispatch) =>
  UserApiUtils.fetchSingleUser(userId)
  .then((user) =>{ 
    return dispatch(receiveUser(user))});
